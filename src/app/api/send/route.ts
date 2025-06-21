

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Inicializa o Resend com a chave de API que está nas nossas variáveis de ambiente
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  // Extrai os dados do corpo da requisição
  const { name, email, subject, message } = await request.json();

  try {
    // Tenta enviar o e-mail usando o Resend
    const { data, error } = await resend.emails.send({
      from: 'Gansai Website <onboarding@resend.dev>', // O remetente. Para produção, use seu domínio verificado (ex: 'contato@seusite.com')
      to: ['devmarcosvmg@gmail.com'],      // << SUBSTITUA PELO SEU E-MAIL
      subject: `New Message from ${name}: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Se houver um erro no envio, lança uma exceção
    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    // Se for bem-sucedido, retorna os dados
    return NextResponse.json(data);
  } catch (error) {
    // Se ocorrer um erro no nosso bloco try, retorna um erro genérico
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}