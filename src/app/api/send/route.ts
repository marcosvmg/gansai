// app/api/send/route.ts

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Interface para definir os tipos de dados que esperamos receber do formulário
interface RequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// 1. Verificação da Chave de API (fora da função principal)
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set. Please add it to your .env.local file");
  // Se a chave não estiver configurada, não podemos nem inicializar o Resend.
  // Em um caso real, isso impediria a função de funcionar corretamente.
}

const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  // 2. Tipagem explícita dos dados recebidos
  const { name, email, subject, message } = await request.json() as RequestBody;

  // Verificação extra para garantir que a chave de API foi carregada no ambiente
  if (!resendApiKey) {
    return NextResponse.json(
      { error: 'API key not configured. Cannot send email.' },
      { status: 500 }
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Gansai Website <onboarding@resend.dev>',
      to: ['devmarcosvmg@gmail.com'], // << SUBSTITUA PELO SEU E-MAIL
      subject: `New Message from ${name}: ${subject}`,
      replyTo: email, // Adiciona o e-mail do usuário no campo "Responder Para"
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (exception) {
    // Captura qualquer outro erro inesperado
    console.error("Unexpected Error:", exception);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}