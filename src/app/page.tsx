

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
import NavbarButton from '@/components/landingPage/NavbarButton';
import SkillCards from '@/components/landingPage/SkillCards';
import TryOurFreeDemoClassButton from '@/components/landingPage/TryOurFreeDemoClassButton';
import UICourseSection from '@/components/landingPage/UICourseSection';

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
      <div className="app-page w-full bg-[#2DF8C5] flex  items-center justify-center p-2 text-lg ">
        <span className="app-page ">
          {'Lancers\'s'} Hiring Wave Scholarship |
        </span>
        <span className="app-page ">Grab benefits worth ₹1,80,000 </span>
        <span className="app-page  font-semibold">| 60 Seats Left |</span>
        <span className="app-page font-semibold"> Apply Now |</span>
        <span>
          <Timer />
        </span>
      </div>
      <div className="app-page w-full h-fit flex items-center justify-between px-10">
        <div className="app-page ">
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
        <div className="w-4/5 bg-gray-100 rounded-2xl p-15">
          <div className="w-full flex items-center justify-center text-center font-bold text-3xl">
            <div className="w-1/2 mb-5">
              Build a career in IT sector in Kolkata, sarting salary of 2-3 LPA
            </div>
          </div>
          <UICourseSection />
        </div>
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
        <div className="app-page w-[60%] font-bold text-4xl text-center my-10">
          Gain the competitive edge with mastery of essential development skills
        </div>
        <div className="app-page w-[60%] font-light text-sm my-10">
          <SkillCards />
        </div>
        <div className="w-[30%] font-semibold text-4xl text-center my-10 ">
          Learn real life UI/UX experience
        </div>
        <div className="w-[70%] font-light text-2xl text-center p-5">
          Learn and grow like you would on a real job. Start from the
          fundamentals, get support from our mentors and community, and build
          your way to the top - through professional work-like Full-stack and
          Backend web development projects.
        </div>
        <div className="w-full flex items-center justify-center">
          <CourseCarousel />
        </div>
        <div className="space-y-2 w-3/5 text-5xl font-bold text-center my-10">
          <div>Personalised Placement Assistance</div>
          <span className="text-[#0b6b53]">সরাসরি সাক্ষাৎকার কল</span>
        </div>
        <div className="w-4/5 font-light text-xl text-center my-10">
          আমরা আপনাকে বেঙ্গলের শীর্ষ কোম্পানির সাথে সাক্ষাৎকারের সুযোগে সরাসরি
          প্রবেশাধিকার প্রদান করি, যাতে আপনি আপনার আদর্শ UI/UX ভূমিকার জন্য
          প্রস্তুত থাকতে পারেন
        </div>
        <div className="flex flex-wrap gap-10 justify-center items-center w-4/5">
          {featureList.map((src, index) => (
            <div key={index}>
              <Image alt="" src={src} width={400} height={400} />
            </div>
          ))}
        </div>
        <button className="rounded-lg bg-amber-300 hover:bg-amber-400 font-bold text-xl py-5 px-10 hover:cursor-pointer mt-10">
          Try our free demo class
        </button>

        <div className="w-1/2 font-semibold text-4xl text-center my-20">
          Program Fee and Scholarship
        </div>

        <div className="w-6/10  flex items-center justify-center px-10 py-5 rounded-4xl bg-[#2DF8C5] ">
          <div className="bg-gray-50 basis-1/3 flex flex-col gap-3 items-start justify-center  rounded-3xl p-16">
            <div className="bg-amber-200 py-1 px-2 rounded-lg font-semibold">
              Only for
            </div>
            <div className="">
              <span className="font-bold text-3xl">639</span>
              <span className="text-[#24b490] font-semibold">/month</span>
              <div className="text-sm text-[#24b490]">(for 6 months)</div>
            </div>
            <div>*before scholarship</div>
          </div>
          <div className="px-10 py-5 basis-2/3">
            <div className="p-2">
              <div className="font-bold">Absolutely Free Demo Class</div>
              <div className="">No fees required</div>
            </div>
            <div className="p-2">
              <div className="font-bold">Guaranteed Scholarship</div>
              <div>After the demo class</div>
            </div>
            <div className="p-2">
              <div className="font-bold">
                Placement Jogyotar Tarikhe placement pele
              </div>
              <div>Sudhumatro sofolotar fee porisodh korun </div>
            </div>
            <div className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              incidunt consequuntur impedit dolor hic officia mollitia quae
              eligendi perferendis sequi, illum ducimus magnam obcaecati vero
              facere, iusto odit quisquam voluptates.
            </div>
          </div>
        </div>

        <button className="w- rounded-lg bg-amber-300 hover:bg-amber-400 font-bold text-xl py-5 px-10 hover:cursor-pointer mt-10">
          Try our free demo class
        </button>

        <div className="font-bold text-3xl text-center my-10">
          ১০,০০০+ ডিজাইন উৎসাহীদের সম্প্রদায়ে যোগ দিন
        </div>
        <div className="w-6/10 text-center text-lg">
          <span className="font-bold">সংযোগ করুন, শিখুন এবং বিকশিত হন</span>{' '}
          একটি প্রাণবন্ত সম্প্রদায়ের সঙ্গে, যেখানে UI/UX ডিজাইনার ও শিল্প
          পেশাদাররা আমাদের বিস্তৃত প্রশিক্ষণের মাধ্যমে তাদের ক্যারিয়ার
          রূপান্তরিত করেছেন।
        </div>
        <div className="rounded-3xl w-6/10 mt-10 bg-[#2DF8C5] p-10 text-4xl text-center font-bold">
          Gain the privilage of top UI/UX design experise and achieve creative
          convinience
          <div className="space-x-5 mt-5 ">
            <button className="border-4 font-semibold text-xl px-15 py-3 rounded-lg bg-[#2DF8C5] hover:bg-[#105544] text-[#105544] hover:text-[#2DF8C5] hover:cursor-pointer ">
              Lorem ipsum dolor sit.
            </button>
            <button className="border-4 font-semibold text-xl px-15 py-3 rounded-lg  hover:bg-[#105544] text-[#105544] hover:text-[#2DF8C5] hover:cursor-pointer ">
              Lorem ipsum dolor sit.
            </button>
          </div>
        </div>

        <AlumniVideoSection />

        {/* <button className="w- rounded-lg bg-amber-300 hover:bg-amber-400 font-bold text-xl py-5 px-10 hover:cursor-pointer mt-10">
          Try our free demo class
        </button> */}

        <TryOurFreeDemoClassButton />

        <div className="w-9/10 flex flex-col items-center justify-center my-20">
          <div className="w-5/10 text-center text-5xl font-bold">
            প্রায়োগিক ডিজাইন-ভিত্তিক শিক্ষার পদ্ধতি চাহিদাসম্পন্ন UI/UX দক্ষতা
            আয়ত্ত করতে
          </div>
          <div className="w-9/10 flex flex-wrap gap-5 justify-center items-center mt-10">
            {bottomFeatureList.map((src, index) => (
              <div key={index}>
                {/* {src} */}
                <Image alt="" src={src} height={400} width={400} />
              </div>
            ))}
          </div>
        </div>

        <TryOurFreeDemoClassButton />

        <div className="w-8/10 text-center my-20 space-y-10 flex flex-col items-center justify-center">
          <div className="w-7/10  space-y-10">
            <div className="font-bold text-4xl">
              বাস্তব অভিজ্ঞতা, বাস্তব ডিজাইন-ভিত্তিক শিক্ষা ল্যান্সার্স
              অ্যাকাডেমিতে
            </div>
            <div>
              UI/UX ডিজাইন আয়ত্ত করার সেরা উপায় হলো আপনার দক্ষতাগুলো বাস্তব
              সমস্যাগুলো সমাধানে প্রয়োগ করা। ল্যান্সার্স অ্যাকাডেমিতে, আমরা
              প্রথাগত শিক্ষার সীমা অতিক্রম করে হাতে-কলমে অভিজ্ঞতা প্রদান করি
              যেখানে প্রকৃত ডিজাইন প্রকল্পগুলি পেশাদার কর্মপরিবেশের অনুরূপ
            </div>
            <div>
              তত্ত্ব শেখা বা টিউটোরিয়াল নয়, বাস্তব পণ্য ডিজাইন করবেন একজন
              পেশাদার ডিজাইনারের মতো
            </div>
          </div>
          <div className="w-full">
            <ComparisonTable />
            <div className="font-light text-sm">
              শীর্ষ রিক্রুটাররা ডিজাইনার নিয়োগের সময় বাস্তব প্রকল্প অভিজ্ঞতাকে
              অগ্রাধিকার দেন, আর সেটাই আমরা প্রদান করি। আমাদের প্রোগ্রাম
              শিক্ষার্থীদের ব্যবহারিক ও বাস্তবভিত্তিক শিক্ষার সুযোগ দেয় এবং
              প্রতিযোগিতামূলক UI/UX ডিজাইনের জগতে ক্যারিয়ার বৃদ্ধি ও সাফল্যের
              জন্য প্রয়োজনীয় দক্ষতা প্রদান করে
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
  );
}
