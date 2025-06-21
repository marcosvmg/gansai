'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

// --- Ícones de Redes Sociais ---
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:stroke-c5 transition-colors">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:stroke-c5 transition-colors">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9s-5.2-.8-5.2-.8l-.5 2.2s-2.6-.8-2.6-.8l-2.2 4.9s-5.2-.8-5.2-.8l.5-2.2s2.6.8 2.6.8l2.2-4.9s-.8-5.2-.8-5.2l2.2-.5s.8 2.6.8 2.6l4.9-3.3s.8-2.1 2.1-3.4 3.4-2 3.4-2z"></path>
  </svg>
);
// --- Fim dos Ícones ---


export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentYear = new Date().getFullYear();

  return (
    // ALTERAÇÃO: Adicionadas classes para a imagem de fundo e posicionamento relativo.
    <footer
      ref={ref}
      className="relative w-full flex justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/footer.png')" }}
    >
      {/* NOVO: Overlay para garantir a legibilidade do texto sobre a imagem. */}
      <div className="absolute inset-0 bg-c0/80 backdrop-blur-sm"></div>

      {/* ALTERAÇÃO: Adicionada a classe 'relative' para colocar o conteúdo acima do overlay. */}
      <div className={`relative w-full max-w-7xl px-4 py-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-c4">

          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-4">
            <Link href="/">
              <Image src="/assets/logo.svg" alt="Gansai Logo" width={180} height={63} />
            </Link>
            <p className="text-c4/70 text-sm">
              Crafting artistic excellence with every pencil. Discover a world of vibrant colors and effortless blending.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-c5">Sitemap</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-c5 transition-colors">About</Link></li>
              <li><Link href="#products" className="hover:text-c5 transition-colors">Products</Link></li>
              <li><Link href="#contact" className="hover:text-c5 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-c5">Contact Us</h3>
            <ul className="space-y-2">
              <li><a href="mailto:contact@gansai.com" className="hover:text-c5 transition-colors">contact@gansai.com</a></li>
              <li><a href="tel:+123456789" className="hover:text-c5 transition-colors">+1 (23) 456-789</a></li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-c5">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <TwitterIcon />
              </a>
            </div>
          </div>

        </div>

        {/* Divisor e Barra de Copyright */}
        <div className="mt-16 pt-8 border-t border-c2/50 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-c4/60 text-sm">
            &copy; {currentYear} Gansai & Yoshitaka Amano. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-c4/60 hover:text-c5 text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-c4/60 hover:text-c5 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}