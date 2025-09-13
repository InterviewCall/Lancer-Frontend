'use client' ;

import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

import MentorCard from './MentorCard';

const mentorCarouselContent = [
  {
    id: 1,
    name: 'Mohan Dasgupta',
    description: 'Senior software Engineer @Oracle, USA',
    src: '/mentors/mentor1/mentor1-profile.svg',
    companySrcArray: [
      '/mentors/companies/amazon.svg',
      '/mentors/companies/microsoft.svg',
      '/mentors/companies/oracle.svg',
      '/mentors/companies/tcs.svg',
    ],
  },
  {
    id: 2,
    name: 'Jyotirmoy Deb',
    description: 'Software Engineer @Apple, USA',
    src: '/mentors/mentor2/mentor2-profile.svg',
    companySrcArray: [
      '/mentors/companies/apple.svg',
      '/mentors/companies/at&t.svg',
    ],
  },
];


export default function Carousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: { perView: 1 },
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
    <div className="component-landingPage-Carousel relative w-[80%] rounded-2xl">
      {/* Slider */}
      <div ref={sliderRef} className="component-landingPage-Carousel flex keen-slider rounded-lg overflow-hidden">
        {mentorCarouselContent.map((content, idx) => (
          <div
            key={idx}
            className="component-landingPage-Carousel keen-slider__slide flex justify-center items-center"
          >
            <MentorCard
              description={content.description}
              name={content.name}
              companySrcArray={content.companySrcArray}
              src={content.src}
            />
          </div>
        ))}
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