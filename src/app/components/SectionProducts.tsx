'use client';

/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

// Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Importações dos estilos do Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function SectionProducts() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const productImages = [
    { name: "Gansai Prime Set", src: "/assets/section-products.png" },
    { name: "Creative Blend Kit", src: "/assets/section-products2.png" },
    { name: "Studio Collection", src: "/assets/main-home.png" },
    { name: "Portrait Palette", src: "/assets/section-about.png" },
    { name: "Landscape Essentials", src: "/assets/section-about2.png" },
    { name: "Monochrome Series", src: "/assets/footer.png" },
  ];

  return (
    <div
      ref={ref}
      id='products'
      className="w-full flex justify-center bg-transparent py-16 px-4 overflow-hidden"
    >
      <section className="w-full max-w-7xl flex flex-col items-center gap-16 md:gap-24">

        <h1
          className={`text-c5 text-6xl md:text-8xl lg:text-[110px] font-garamond italic font-medium leading-tight text-left self-start transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          PRODUCTS
        </h1>

        {/* Bloco 1: Layout Texto-Imagem Harmonizado */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">
          <div className={`w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start space-y-8 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <h2 className="text-c5 text-4xl xl:text-5xl font-semibold text-center lg:text-left">Vibrant Colors</h2>
            <p className="text-c4 text-lg xl:text-xl max-w-lg text-center lg:text-left">
              Gansai watercolor pencils are renowned for their vibrant and
              intense colors. Each pencil is carefully crafted using
              high-quality pigments that ensure brilliant hues and exceptional
              lightfastness.
            </p>
            <ul className="space-y-4 max-w-lg text-left">
              {/* Esta é a versão com 'items-center' que você preferia */}
              <li className="flex items-center gap-3">
                <Image src="/assets/decoration.svg" alt="Decoration" width={16} height={16} />
                <span className="text-c4 text-lg">High-Pigment Density for Rich Saturation.</span>
              </li>
              <li className="flex items-center gap-3">
                <Image src="/assets/decoration.svg" alt="Decoration" width={16} height={16} />
                <span className="text-c4 text-lg">Archival Quality & Superior Lightfastness.</span>
              </li>
              <li className="flex items-center gap-3">
                <Image src="/assets/decoration.svg" alt="Decoration" width={16} height={16} />
                <span className="text-c4 text-lg">Available in 120 Individual Shades.</span>
              </li>
            </ul>
          </div>
          <div className={`w-full lg:w-3/5 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Image src="/assets/section-products.png" alt="Close-up of Gansai watercolor pencils" width={580} height={680} className="w-full h-auto max-w-md lg:max-w-full object-contain"/>
          </div>
        </div>

        {/* Carrossel com Efeito Slide Minimalista */}
        <div className={`w-full transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <Swiper
            modules={[Pagination, Navigation]}
            loop={true}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={false}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="w-full py-8"
          >
            {productImages.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="bg-c0/20 border border-white/10 rounded-lg overflow-hidden shadow-lg aspect-[4/5] flex flex-col group">
                  <div className="w-full h-4/5 overflow-hidden">
                    <Image
                      src={product.src} alt={product.name} width={400} height={500}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="w-full h-1/5 flex items-center justify-center p-4">
                    <h3 className="text-c4 text-xl font-semibold truncate">{product.name}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bloco 2: Layout Imagem-Texto Harmonizado */}
        <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-center gap-12 lg:gap-8">
          <div className={`w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-end space-y-8 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <h2 className="text-c5 text-4xl xl:text-5xl font-semibold text-center lg:text-right">Effortless Blending</h2>
            <p className="text-c4 text-lg xl:text-xl max-w-lg text-center lg:text-right">
              With Gansai, blending and layering become effortless. The pencils feature a soft, smooth core that glides seamlessly across paper.
            </p>
            <ul className="space-y-4 max-w-lg w-full text-center lg:text-right">
                <li className="flex items-center gap-3 justify-center lg:justify-end">
                    <span className="text-c4 text-lg">Smooth Core for Seamless Transitions.</span>
                    <Image src="/assets/decoration.svg" alt="Decoration" width={16} height={16} />
                </li>
                <li className="flex items-center gap-3 justify-center lg:justify-end">
                    <span className="text-c4 text-lg">Reacts Beautifully to Wet Brush Techniques.</span>
                    <Image src="/assets/decoration.svg" alt="Decoration" width={16} height={16} />
                </li>
                <li className="flex items-center gap-3 justify-center lg:justify-end">
                    <span className="text-c4 text-lg">Break-Resistant and Durable Construction.</span>
                    <Image src="/assets/decoration.svg" alt="Decoration" width={16} height={16} />
                </li>
            </ul>
            <Link href="#products" className='inline-block cursor-pointer bg-c5 text-xl lg:text-[28px] text-c0 px-8 py-3 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105'>
              EXPLORE THE COLLECTION
            </Link>
          </div>
          <div className={`w-full lg:w-3/5 flex justify-center lg:justify-start transition-all duration-1000 delay-300 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Image src="/assets/section-products2.png" alt="Artist using Gansai watercolor pencils" width={580} height={680} className="w-full h-auto max-w-md lg:max-w-full object-contain"/>
          </div>
        </div>
      </section>
    </div>
  );
}