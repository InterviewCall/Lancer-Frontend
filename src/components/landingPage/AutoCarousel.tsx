'use client';

import Image from 'next/image';
import { useRef } from 'react';



export default function AutoCarousel({ direction, autoCarouselItems }: {
  direction: 'left' | 'right',
  autoCarouselItems: {
    id: number;
    src: string;
  }[]
}) {
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