'use client' ;

import Image from 'next/image';
import { useRef } from 'react';

const autoCarouselItems = [
  {
    id: 1,
    name: 'Rishav Barma',
    src: '/testimonials/cards/testimonial1.png',
  },
  {
    id: 2,
    name: 'Ishita Shrivastav',
    src: '/testimonials/cards/testimonial2.png',
  },
  {
    id: 3,
    name: 'Mridul Karan',
    src: '/testimonials/cards/testimonial3.png',
  },
  {
    id: 4,
    name: 'Deepak Mohan',
    src: '/testimonials/cards/testimonial4.png',
  },
  {
    id: 5,
    name: 'Dibya Rai',
    src: '/testimonials/cards/testimonial5.png',
  },
  {
    id: 6,
    name: 'Swikriti Panto',
    src: '/testimonials/cards/testimonial6.png',
  },
  {
    id: 7,
    name: 'Atindra Krishna',
    src: '/testimonials/cards/testimonial7.png',
  },
  {
    id: 8,
    name: 'Druva Dikshita',
    src: '/testimonials/cards/testimonial8.png',
  },
];

export default function AutoCarousel({direction}: {direction: 'left' | 'right'}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="component-landingPage-AutoCarousel w-full h-fit overflow-hidden "
      onMouseEnter={() => {
        if (containerRef.current)
          containerRef.current.style.animationPlayState = 'paused';
      }}
      onMouseLeave={() => {
        if (containerRef.current)
          containerRef.current.style.animationPlayState = 'running';
      }}
    >
      <div
        ref={containerRef}
        className={`component-landingPage-AutoCarousel flex gap-5 animate-scroll-${direction} w-max`}
      >
        {[...autoCarouselItems, ...autoCarouselItems].map((item, idx) => (
          <span key={idx} className="  bg-teal-50 component-landingPage-AutoCarousel rounded-2xl ">
            <Image
              alt="testimonial"
              src={item.src}
              height={300}
              width={300}
              className=''
            />
          </span>
        ))}
      </div>
    </div>
  );
}