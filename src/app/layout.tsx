import type { Metadata } from 'next';
import { EB_Garamond, Merriweather } from 'next/font/google';
import './globals.css';

const ebGaramond = EB_Garamond({
  variable: '--font-eb-garamond',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'], // necessário para habilitar estilos itálicos
});

const merriweather = Merriweather({
  variable: '--font-merriweather',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Gansai',
  description: 'Descrição aqui',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${ebGaramond.variable} ${merriweather.variable} bg-[#FFFFEE] scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
