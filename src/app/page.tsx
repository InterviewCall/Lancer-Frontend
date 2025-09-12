
import 'keen-slider/keen-slider.min.css';

import { Timer } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import AutoCarousel from '@/components/landingPage/AutoCarousel';
import Carousel from '@/components/landingPage/Carousel';
import CurriculumArea from '@/components/landingPage/CurriculumArea';
import HeroSection from '@/components/landingPage/HeroSection';
import NavbarButton from '@/components/landingPage/NavbarButton';
import SkillCards from '@/components/landingPage/SkillCards';

const navbarButtonList = [
  {
    id: 1,
    name: 'Products',
  },
  {
    id: 2,
    name: 'Hire',
  },
  {
    id: 3,
    name: 'MasterClass',
  },
  {
    id: 4,
    name: 'Projects',
  },
  {
    id: 5,
    name: 'Blog',
  },
  {
    id: 6,
    name: 'Placements',
  },
];





export default function Page() {
  return (
    <div className="app-page relative flex flex-col  h-full">
      <div className="app-page w-full bg-[#2DF8C5] flex  items-center justify-center p-2 text-lg ">
        <span className='app-page '>{'Lancers\'s'} Hiring Wave Scholarship |</span>
        <span className='app-page '>Grab benefits worth ₹1,80,000 </span>
        <span className="app-page  font-semibold">| 60 Seats Left |</span>
        <span className="app-page font-semibold"> Apply Now |</span>
        <span>
          <Timer />
        </span>
      </div>
      <div className="app-page w-full h-fit flex items-center justify-between px-10">
        <div className='app-page '>
          <Image
            alt="Lancers"
            src={'/lancersFullLogo.png'}
            width={100}
            height={100}
          />
        </div>
        <div className="app-page flex items-center justify-center">
          <NavbarButton buttonName="Products" />
          {navbarButtonList.map((button) => {
            return <NavbarButton key={button.id} buttonName={button.name} />;
          })}
          <button className="app-page  p-3 rounded-lg font-semibold text-sm ">
            Sign In
          </button>
        </div>
      </div>
      <div className="app-page overflow-y-scroll flex flex-col items-center ">
        <HeroSection />
        <CurriculumArea />
        <button className="app-page py-4 px-6 rounded-lg bg-yellow-400 mt-5 font-bold">
          Download Curriculum
        </button>
        <div className="app-page  w-[30%] mt-20 text-3xl text-center font-bold ">
          Meet our Mentors
        </div>
        <div className="app-page  w-[40%] my-12 text-sm text-center  ">
          Industry Experts guiding the next generation of innovators. Our team
          of seasoned professionals brings years of real-world experience,
          offering invaluable mentorship and insights to help you achieve
          success in your career.
        </div>
        <Carousel />
        <div className="app-page w-[50%] text-center font-semibold text-2xl my-10">
          Lancers Students have Cracked their Dream Careers In
        </div>
        <div className="app-page h-[400px] w-full my-10">
          <AutoCarousel />
        </div>
        <div className='app-page w-[60%] font-bold text-4xl text-center my-10'>
            Gain the competitive edge with mastery of essential development skills
        </div>
        <div className='app-page w-[60%] font-light text-sm my-10' >
          <SkillCards />
        </div>
      </div>
    </div>
  );
}