'use client' ;

import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

export default function CourseCarousel({perView=3}: {perView?: number}) {
    
const courseCarousel = [
  {
    id: 1,
    src: '/courses/MyFitnessPalDemo.png',
  },
  { id: 2, src: '/courses/BehanceDemo.png' },
  { id: 3, src: '/courses/FlipboardDemo.png' },
  { id: 4, src: '/courses/AmazonDemo.png' },
  { id: 5, src: '/courses/AirbnbDemo.png' },
  { id: 5, src: '/courses/InstagramDemo.png' },
];

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: { perView: perView },
  });

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (instanceRef.current) {
      interval = setInterval(() => {
        instanceRef.current?.next();
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [instanceRef]);

  return (
    <div className="component-landingPage-Carousel relative w-[90%] flex justify-center rounded-2xl">
      {/* Slider */}
      <div className="w-full">
        <div
          ref={sliderRef}
          className="component-landingPage-Carousel flex keen-slider  rounded-lg overflow-hidden"
        >
          {courseCarousel.map((content, idx) => (
            <div
              key={idx}
              className="component-landingPage-Carousel keen-slider__slide flex justify-center items-center"
            >
              <div className="">
                <Image alt="" src={content.src} width={400} height={400} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="component-landingPage-Carousel absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="component-landingPage-Carousel absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  );
}