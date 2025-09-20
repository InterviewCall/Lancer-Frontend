'use client';

import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

import MentorCard from './MentorCard';

const mentorCarouselContent = [
  {
    id: 1,
    name: 'Mohan Dasgupta',
    description: [
      'Senior software Engineer @Oracle, USA',
      'Principal Software Engineer @Microsoft, USA',
      'Principal Software Engineer @Amazon USA',
      '9 years of experience ',
    ],
    src: '/mentors/profile/mentor1-profile.svg',
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
    description: ['Software Engineer @Apple, USA', 'Principal Software Engineer @AT&T', '15 years of experience '],
    src: '/mentors/profile/mentor2-profile.svg',
    companySrcArray: [
      '/mentors/companies/apple.svg',
      '/mentors/companies/at&t.svg',
    ],
  },
  {
    id: 3,
    name: 'Vishal Sharma',
    description: ['Senior Software Engineer @Microsoft, USA', 'Principle Software Engineer @Rippling, Directi', 'Principle Software Engineer @Goldman Sachs', '8+ years of enperience'],
    src: '/mentors/profile/mentor3-profile.svg',
    companySrcArray: [
      '/mentors/companies/goldmanSachs.svg',
      '/mentors/companies/directi.svg',
      '/mentors/companies/microsoft.svg',
      '/mentors/companies/rippling.svg',
    ],
  },
  {
    id: 4,
    name: 'Gurteej Singh Rehal',
    description: ['Senior Software Engineer @Google, USA', 'Senior Software Engineer @Meta, London', 'Principle Software Engineer @Microsoft', 'Principle Software Engineer @Amazon, TCS', '6+ years of experience'],
    src: '/mentors/profile/mentor4-profile.svg',
    companySrcArray: [
      '/mentors/companies/meta.svg',
      '/mentors/companies/microsoft.svg',
      '/mentors/companies/amazon.svg',
      '/mentors/companies/tcs.svg',
    ],
  },
  {
    id: 5,
    name: 'Sumit Rai',
    description: ['Software Engineer 2 @Atlassian', 'Principle Software Engineer @Unacademy','Principle Software Engineer @BigBasket','7+ years of experience'],
    src: '/mentors/profile/mentor5-profile.svg',
    companySrcArray: [
      '/mentors/companies/atlassian.svg',
      '/mentors/companies/unacademy.svg',
      '/mentors/companies/bigBasket.svg',
      '/mentors/companies/cyware.svg',
    ],
  },
  {
    id: 6,
    name: 'Sourav Singh',
    description: ['Software Engineer @Walmart India', 'Software Engineer @Infosys', '6+ years of experience'],
    src: '/mentors/profile/mentor6-profile.svg',
    companySrcArray: [
      '/mentors/companies/walmart.svg',
      '/mentors/companies/infosys.svg',
    ],
  },
  {
    id: 7,
    name: 'Maria Shah',
    description: ['Software Engineer @Walmart India'],
    src: '/mentors/profile/mentor7-profile.svg',
    companySrcArray: [
      '/mentors/companies/icici.svg',
      '/mentors/companies/hdfc.svg',
      '/mentors/companies/kotak.svg',
      '/mentors/companies/axis.svg',
    ],
  },
  {
    id: 8,
    name: 'Mostafizur Rehman',
    description: ['Software Engineer @D.E. Shaw', 'Software Engineer @Infosys', '4+ years of experience'],
    src: '/mentors/profile/mentor8-profile.svg',
    companySrcArray: [
      '/mentors/companies/deShaw.svg',
      '/mentors/companies/infosys.svg',
    ],
  },
  {
    id: 9,
    name: 'Sunyul Hossem',
    description: ['Software Engineer @User India', 'Software Engineer @Amazon', 'Software Engineer @Adobe', '6+ years of experience'],
    src: '/mentors/profile/mentor9-profile.svg',
    companySrcArray: [
      '/mentors/companies/uber.svg',
      '/mentors/companies/amazon.svg',
      '/mentors/companies/adobe.svg',
      '/mentors/companies/goldmanSachs.svg',
      '/mentors/companies/deShaw.svg',
    ],
  },
  {
    id: 10,
    name: 'Sayyad Abbas',
    description: ['Software Engineer @NEC Corp Singapore', 'Software Engineer @Ecera Systems', '3+ years of experience'],
    src: '/mentors/profile/mentor10-profile.svg',
    companySrcArray: [
      '/mentors/companies/nec.svg',
      '/mentors/companies/es.svg',
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
      <div
        ref={sliderRef}
        className="component-landingPage-Carousel flex keen-slider rounded-lg overflow-hidden"
      >
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
