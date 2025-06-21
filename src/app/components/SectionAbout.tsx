'use client';

/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function SectionAbout() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="w-full flex justify-center bg-transparent py-16 px-4 overflow-hidden">
      <section className="w-full max-w-7xl flex flex-col items-center gap-12">
        {/* Container para o conteúdo principal */}
        <div id='about' className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">

          {/* Coluna da Imagem 1 (Oculta em mobile, visível em desktop) */}
          <div className={`hidden lg:flex w-full lg:w-1/2 justify-center transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src="/assets/section-about.png"
              alt="Gansai watercolor pencils on a sketchbook"
              width={480}
              height={654}
              className="w-full h-auto max-w-sm lg:max-w-md object-contain"
            />
          </div>

          {/* Coluna de Texto */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end space-y-8">
            <h1
              className={`text-c5 text-6xl md:text-8xl lg:text-[110px] font-garamond italic font-medium leading-tight text-center lg:text-right transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} delay-100`}
            >
              ABOUT
            </h1>
            <p
              className={`text-c4 text-lg max-w-lg text-center lg:text-right transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} delay-200`}
            >
              Gansai watercolor pencils are renowned for their vibrant and intense
              colors. Each pencil is carefully crafted using high-quality pigments
              that ensure brilliant hues and exceptional lightfastness.
              <br /> <br />
              Whether you're an aspiring artist or an experienced professional,
              Gansai pencils allow you to explore a wide range of shades and
              achieve stunning color blends.
              <br /> <br />
              With Gansai watercolor pencils, blending and layering become
              effortless. The pencils feature a soft and smooth core that glides
              seamlessly across paper, allowing you to create beautiful gradients
              and transitions. Whether you prefer to work with a wet brush or

              prefer dry blending techniques, Gansai pencils respond effortlessly
              to your artistic touch.
            </p>
          </div>
        </div>

        {/* Imagem Decorativa 2 */}
        <div className={`w-full flex justify-center mt-12 lg:mt-16 transition-all duration-1000 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src="/assets/section-about2.png"
            alt="Artistic display of watercolor pencils"
            width={984}
            height={680}
            className="w-full h-auto object-contain object-top"
          />
        </div>
      </section>
    </div>
  );
}