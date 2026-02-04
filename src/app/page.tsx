import { Timer } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import AlumniVideoSection from '@/components/landingPage/AlumniVedioSection';
import AutoCarousel from '@/components/landingPage/AutoCarousel';
import Carousel from '@/components/landingPage/Carousel';
import ComparisonTable from '@/components/landingPage/ComparisonTable';
import CourseCarousel from '@/components/landingPage/CourseCarousel';
import FAQSection from '@/components/landingPage/FAQSection';
import Footer from '@/components/landingPage/Footer';
import HeroSection from '@/components/landingPage/HeroSection';
import Navbar from '@/components/landingPage/Navbar';
import NavbarTimer from '@/components/landingPage/NavbarTimer';
import PlacementReport from '@/components/landingPage/PlacementReport';
import ProgramFeeAndScholarships from '@/components/landingPage/ProgramFeeAndScholarships';
import SkillCards from '@/components/landingPage/SkillCards';
import TryOurFreeDemoClassButton from '@/components/landingPage/TryOurFreeDemoClassButton';
import UICourseSection from '@/components/landingPage/UICourseSection';


const featureList = [
  '/features/feature1.png',
  '/features/feature2.png',
  '/features/feature3.png',
  '/features/feature4.png',
  '/features/feature5.png',
];

const bottomFeatureList = [
  '/bottomFeatures/bottomFeature1.png',
  '/bottomFeatures/bottomFeature2.png',
  '/bottomFeatures/bottomFeature3.png',
  '/bottomFeatures/bottomFeature4.png',
  '/bottomFeatures/bottomFeature5.png',
  '/bottomFeatures/bottomFeature6.png',
];

export default function Page() {
  return (
    <div className="app-page relative flex flex-col  h-full">
      <div className="app-page w-full bg-[#2DF8C5] block sm:flex flex-wrap items-center justify-center p-2 text-sm sm:text-lg ">
        <div className="text-center sm:flex items-center justify-center gap-2 ">
          <div className="app-page ">
            {'Lancers\'s'} Hiring Wave Scholarship | <span className="app-page sm:hidden">Grab benefits worth ₹1,80,000 |</span>
          </div>
          <div className="app-page hidden sm:block ">Grab benefits worth ₹1,80,000 |</div>
          <div className=' flex items-center text-center justify-center gap-2 '>
            <div className="app-page  font-semibold"> 60 Seats Left |</div>
          <div className="app-page font-semibold"> Apply Now |</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Timer />
          <NavbarTimer />
        </div>
      </div>
      {/* <div className="app-page w-full h-fit flex items-center justify-between px-10">
        <div className="app-page p-3">
          <Image
            alt="Lancers"
            src={'/lancersFullLogo.png'}
            width={100}
            height={100}
          />
        </div>
        <Navbar />        
      </div> */}
      <div className='hidden sm:block'>
        <Navbar/>
      </div>
      <div className='flex flex-col items-center overflow-y-scroll'>
      <div className="app-page  flex flex-col items-center w-[95%] sm:w-[85%] border ">
      <div className='w-full sm:hidden'>
        <Navbar/>
      </div>
        <HeroSection />
        <div className="w-full bg-gray-100 rounded-2xl sm:p-15">
          <div className="w-full flex items-center justify-center text-center font-bold text-3xl">
            <div className="w-full hidden sm:block mb-5">
              Industry-Ready Curriculum for <br />
              Kolkata Tech Jobs (Learn modern skills. <br />
              Build real projects, Get job-ready)
          </div>
          <div className="w-full block sm:hidden my-5 px-2">
              Industry-Ready Curriculum for 
              Kolkata Tech Jobs (Learn modern skills.
              Build real projects, Get job-ready)
          </div>
          </div>
          <UICourseSection />
        </div>
        <button className="app-page w-[200px] py-4 px-6 rounded-lg bg-yellow-400 mt-5 font-bold">
          Download Now 
        </button>
        <div className="app-page w-7/10 sm:w-[30%] mt-20 text-3xl text-center font-bold ">
          Meet our Mentors
        </div>
        <div className="app-page w-8/10 sm:w-[40%] my-8 text-md text-center leading-6 ">
          <div className='hidden sm:block'>
            <b>Industry experts</b> are guiding the next generation of <br/> professionals. Our team of <b>experienced mentors</b> brings years <br/> of real-world experience and provides practical advice, clarity,<br/> and support to help you succeed in your career.
          </div>
          <div className='sm:hidden'>
          <b>Industry experts</b> are guiding the next generation of  professionals. Our team of <b>experienced mentors</b> brings years of real-world experience and provides practical advice, clarity, and support to help you succeed in your career.

          </div>
        </div>
        <Carousel />
        <div className="app-page w-full text-center font-semibold text-2xl my-10">
          Lancers Students have Cracked their Dream Careers In
        </div>
        <div className="app-page w-full my-10 space-y-5">
          <AutoCarousel direction='left' />
          <AutoCarousel direction='right' />
        </div>
        <PlacementReport />
        <div className="app-page w-full font-bold text-4xl text-center my-20">
          <div>
            Build Modern Full-Stack Skills with Real- <br/>World Projects
          </div>
          <div className='text-lg font-light tracking-wide text-gray-400 mt-5'>
            From React and Node.js to databases and deployment—learn everything needed to ship complete applications like <br/> a professional developer.
          </div>
        </div>
        <div className="app-page w-8/10 sm:w-[80%] font-light text-sm sm:my-10">
          <SkillCards />
        </div>
        <div className="w-8/10 font-semibold text-3xl text-center my-10 ">
          <div className=' hidden sm:block'>
            Real-World <br/>
          Full-Stack Development Experience
          </div>
          <div className='sm:hidden'>
            Real-World 
          Full-Stack Development Experience
          </div>
        </div>
        <div className="w-full  text-center p-5">
          <div className='hidden sm:block'>
            Our Full-Stack course is designed to give you practical, <b>industry-ready</b> skills. From fundamentals to real <br/>
          projects, you’ll learn by building full applications end-to-end. With <b>expert guidance</b> and continuous support, <br/> 
          you’ll create a strong portfolio that prepares you for entry-level Full-Stack Developer roles.
          </div>
          <div className='sm:hidden'>
            Our Full-Stack course is designed to give you practical, <b>industry-ready</b> skills. From fundamentals to real 
          projects, you’ll learn by building full applications end-to-end. With <b>expert guidance</b> and continuous support,  
          you’ll create a strong portfolio that prepares you for entry-level Full-Stack Developer roles.
          </div>
        </div>
        <div className="hidden sm:flex w-full items-center justify-center">
          <CourseCarousel />
        </div>
        <div className=" sm:hidden w-full flex items-center justify-center">
          <CourseCarousel perView={1} />
        </div>
          <div className='mt-10 w-[300px] text-center rounded-lg bg-yellow-300 shadow-lg font-semibold px-6 py-4'>
            Book a free demo class
          </div>
        <div className="space-y-2 w-full text-3xl font-bold text-center mt-20 mb-8">
          <div className=''>Personalized Placement <br/> Support — <span className="text-[#378f79]">Direct Interview Calls</span>
          </div>
          
        </div>
        <div className="w-full font-light text-xl text-center mb-10">
          <div className='hidden sm:block'>
            We prepare you end-to-end for Full-Stack Developer interviews and connect you with hiring partners so you can <br/>
           confidently start your tech career.
          </div>
          <div className='sm:hidden'>
            We prepare you end-to-end for Full-Stack Developer interviews and connect you with hiring partners so you can 
           confidently start your tech career.
          </div>
        </div>
        <div className="sm:flex flex-wrap gap-5 justify-center items-center w-full space-y-5 sm:space-y-0 ">
          {featureList.map((src, index) => (
            <div key={index} className='sm:basis-1/4'>
              <Image alt="" src={src} width={400} height={400} />
            </div>
          ))}
        </div>
       <div className='mt-10 w-[300px] text-center rounded-lg bg-yellow-300 shadow-lg font-semibold px-6 py-4'>
            Book a free demo class
          </div>

        <div className=" font-semibold text-3xl text-center mt-20 mb-8">
          Program Fee and Scholarship
        </div>

        <ProgramFeeAndScholarships />

        <div className='mt-10 w-[300px] text-center rounded-lg bg-yellow-300 shadow-lg font-semibold px-6 py-4'>
            Book a free demo class
          </div>


        <div className="font-bold text-3xl text-center my-10">
          Join a Community of 10,000+ Aspiring Developers
        </div>
        <div className="w-full sm:w-8/10 text-center text-gray-400 text-lg">
          <b>Connect, learn, and grow </b>with a supportive community where learners are building real projects, getting mentorship, and starting their tech careers through structured training.
        </div>
        <div className="rounded-3xl sm:w-8/10 mt-10 bg-[#2DF8C5] p-8 px-4 sm:px-10 sm:p-10 text-3xl tracking-tight text-center font-bold">
          <div className='hidden sm:block '>
          See how lancrs academy can help you start your <br/>Full-Stack Career in Kolkata {'\''}s IT companies

          </div>
          <div className='sm:hidden text-2xl tracking-tighter'>
          See how lancrs academy can help you start your Full-Stack Career in Kolkata {'\''}s IT companies

          </div>
          <div className="space-y-4 sm:space-x-5 mt-5 ">
            <button className="border border-black font-semibold text-xl w-full sm:w-fit sm:px-15 py-3 rounded-lg bg-[#2DF8C5] hover:bg-[#105544] text-[#105544] hover:text-[#2DF8C5] hover:cursor-pointer ">
              View our Placement Report.
            </button>
            <button className="border border-black font-semibold text-xl w-full sm:w-fit sm:px-15 py-3 rounded-lg  hover:bg-[#105544] text-[#105544] hover:text-[#2DF8C5] hover:cursor-pointer ">
              Book a free demo class.
            </button>
          </div>
        </div>

        <AlumniVideoSection />

        {/* <button className="w- rounded-lg bg-amber-300 hover:bg-amber-400 font-bold text-xl py-5 px-10 hover:cursor-pointer mt-10">
          Try our free demo class
        </button> */}

        <TryOurFreeDemoClassButton />

        <div className="w-9/10 flex flex-col items-center justify-center my-20">
          <div className="w-full text-center text-xl sm:text-3xl font-bold">
            <div className='hidden sm:block'>
              A Practical, Project-Based Learning <br/>
             Approach to Build In-Demand Full-Stack <br/>
              Skills
            </div>
            <div className='block sm:hidden'>
              A Practical, Project-Based Learning 
             Approach to Build In-Demand Full-Stack 
              Skills
            </div>
            
          </div>
          <div className="w-9/10 sm:grid grid-cols-3 gap-5 justify-center items-center mt-10">
            {bottomFeatureList.map((src, index) => (
              <div key={index}>
                {/* {src} */}
                <Image alt="" src={src} height={400} width={400} />
              </div>
            ))}
          </div>
        </div>

        <TryOurFreeDemoClassButton />

        <div className=" sm:w-8/10 text-center my-20 space-y-10 flex flex-col items-center justify-center">
          <div className="w-full sm:w-7/10  space-y-8">
            <div className="font-bold text-3xl">
              Real Experience, Real Project-Based <br/>
              Learning at Lancrs Academy
            </div>
            <div>
              The best way to become job-ready in Full-Stack Development is to apply your skills to <br/>
               real problems. At Lancrs Academy, we go beyond theory and tutorials—our program is <br/>
                built around hands-on projects that simulate real company work.
            </div>
            <div>
              You won’t just watch videos—you’ll build complete applications end-to-end like a <br/> professional developer.
            </div>
          </div>
          <div className="w-full">
            <ComparisonTable />
            <div className="font-light tracking-wide text-gray-700">
              Top companies shortlist candidates who can prove real project experience—and that’s exactly what we help you build. Our <br/> program focuses on practical learning, strong portfolio projects, and interview readiness to help you start your Full-Stack <br/> career confidently.
            </div>
          </div>
        </div>

        <button className=" rounded-lg bg-amber-300 hover:bg-amber-400 font-bold text-xl py-5 px-10 hover:cursor-pointer">
          Try our free demo class
        </button>

        <FAQSection />
        <Footer />
      </div>
      </div>

    </div>
  );
}
