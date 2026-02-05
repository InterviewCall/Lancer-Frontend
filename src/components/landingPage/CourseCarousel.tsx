'use client' ;

import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { projectCarousel } from '../utils';


export default function CourseCarousel({ perView = 3 }: { perView?: number }) {
  const middleOffset = Math.floor(perView / 2);

  const [centerSlide, setCenterSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: { perView },
    slideChanged(slider) {
      const rel = slider.track.details.rel;
      setCenterSlide(rel + middleOffset);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (instanceRef.current) {
      interval = setInterval(() => {
        instanceRef.current?.next();
      }, 3000);
    }
    return () => interval && clearInterval(interval);
  }, [instanceRef]);

  const slideCount =
    instanceRef.current?.track.details.slides.length ?? 0;

  return (
    <div className="relative w-[90%] flex flex-col items-center rounded-2xl">
      {/* Slider */}
      <div className="w-full">
        <div
          ref={sliderRef}
          className="flex keen-slider rounded-lg overflow-hidden"
        >
          {projectCarousel.map((content, idx) => (
            <div
              key={idx}
              className="keen-slider__slide flex justify-center items-center"
            >
              <div className="mx-4">
                <Image alt="" src={content.src} width={400} height={400} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* Center-slide dots */}
      {loaded && instanceRef.current && (
        <div className="mt-6 flex gap-2">
          {Array.from({ length: slideCount }).map((_, idx) => (
            <button
              key={idx}
              onClick={() =>
                instanceRef.current?.moveToIdx(idx - middleOffset)
              }
              className={`h-2 rounded-full transition-all ${
                centerSlide === idx
                  ? 'w-6 bg-gray-200'
                  : 'w-2 bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
