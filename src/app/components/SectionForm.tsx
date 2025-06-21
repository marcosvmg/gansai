'use client';

import { useState, useEffect } from 'react';

// --- Ícones para os estados do botão e painel de sucesso ---
const SpinnerIcon = () => (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-c0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const SuccessPanelIcon = () => (
    <svg className="h-16 w-16 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export default function SectionForm() {
  // Estado para a animação de entrada
  const [isMounted, setIsMounted] = useState(false);

  // Estados para gerenciar a lógica do formulário
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ email: '' });

  useEffect(() => {
    // Gatilho para a animação de entrada do componente
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  // Handler para atualizar os dados do formulário a cada digitação
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handler para validação do e-mail quando o usuário sai do campo
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        setErrors(prev => ({ ...prev, email: 'Please enter a valid email format.' }));
      } else {
        setErrors(prev => ({ ...prev, email: '' }));
      }
    }
  };

  // Handler para o envio do formulário, agora conectado à API
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (errors.email) {
      alert('Please fix the errors before submitting.');
      return;
    }
    setStatus('submitting');

    try {
      // Faz a chamada para a nossa API Route
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Se a API responder com sucesso (status 200-299)
        setStatus('success');
      } else {
        // Se a API responder com um erro
        throw new Error('API request failed');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div
    id='contact'
      className="w-full flex justify-center bg-transparent py-16 px-4 overflow-hidden"
    >
      <section className="w-full max-w-4xl flex flex-col items-center gap-12">

        <h1 className={`text-c5 text-6xl md:text-8xl lg:text-[110px] font-garamond italic font-medium leading-tight text-center transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          GET IN TOUCH
        </h1>

        <div className={`w-full min-h-[620px] transition-opacity duration-700 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          {status === 'success' ? (
            // 1. Painel de Sucesso (mostrado após o envio)
            <div className="w-full text-center flex flex-col items-center justify-center h-full min-h-[500px]">
              <SuccessPanelIcon />
              <h2 className="text-c5 text-4xl font-semibold mt-6">Message Sent!</h2>
              <p className="text-c4 text-xl mt-2 max-w-md">Thank you for reaching out. We will get back to you shortly.</p>
            </div>
          ) : (
            // 2. Formulário (estado padrão)
            <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
              {/* Campo: Nome */}
              <div className="lg:col-span-1">
                <label htmlFor="name" className="block mb-2 text-2xl font-merriweather text-c4 lowercase">name</label>
                <input type="text" id="name" name="name" value={formData.name} placeholder="e.g., John Doe" required onChange={handleChange} className="w-full p-4 bg-transparent border border-c2 rounded-md text-c4 placeholder:text-c4/50 focus:border-c3 focus:outline-none transition-colors" />
              </div>

              {/* Campo: Email */}
              <div className="lg:col-span-1">
                <label htmlFor="email" className="block mb-2 text-2xl font-merriweather text-c4 lowercase">email</label>
                <input type="email" id="email" name="email" value={formData.email} placeholder="e.g., john.doe@example.com" required onChange={handleChange} onBlur={handleBlur} className={`w-full p-4 bg-transparent border rounded-md text-c4 placeholder:text-c4/50 focus:outline-none transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-c2 focus:border-c3'}`} />
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
              </div>

              {/* Campo: Assunto */}
              <div className="lg:col-span-2">
                <label htmlFor="subject" className="block mb-2 text-2xl font-merriweather text-c4 lowercase">subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} placeholder="e.g., Project Inquiry" required onChange={handleChange} className="w-full p-4 bg-transparent border border-c2 rounded-md text-c4 placeholder:text-c4/50 focus:border-c3 focus:outline-none transition-colors" />
              </div>

              {/* Campo: Textarea */}
              <div className="lg:col-span-2">
                <label htmlFor="message" className="block mb-2 text-2xl font-merriweather text-c4 lowercase">message</label>
                <textarea id="message" name="message" value={formData.message} rows={8} placeholder="Your message here..." required onChange={handleChange} className="w-full p-4 bg-transparent border border-c2 rounded-md text-c4 placeholder:text-c4/50 focus:border-c3 focus:outline-none transition-colors resize-none"></textarea>
              </div>

              {/* Botão de Envio */}
              <div className="lg:col-span-2 flex items-center gap-6">
                <button type="submit" disabled={status === 'submitting'} className='inline-flex items-center justify-center min-w-[250px] cursor-pointer bg-c5 text-xl lg:text-[28px] text-c0 px-8 py-4 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:scale-100'>
                  {status === 'submitting' ? <SpinnerIcon /> : 'SEND MESSAGE'}
                </button>
                {status === 'error' && <p className="text-red-500">Something went wrong. Please try again.</p>}
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}