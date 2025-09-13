'use client';

import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight, Timer } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect } from 'react';

import AutoCarousel from '@/components/landingPage/AutoCarousel';
import Carousel from '@/components/landingPage/Carousel';
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

const UIcourseContent = [
  {
    id: 1,
    heading: 'Get to Know UI/UX',
    time: '1 week',
    subHeading: 'Learn the fundamentals of UI/UX design and its importance.',
    modules: [
      {
        heading: 'Introduction to Design',
        content: [
          { topic: 'Understand the difference between UI and UX.' },
          { topic: 'Why UI/UX matters in digital products.' },
          { topic: 'The evolution of design practices.' },
        ],
      },
      {
        heading: 'The Role of a Designer',
        content: [
          { topic: 'Responsibilities of UI vs UX designers.' },
          { topic: 'Collaboration with developers and product managers.' },
          { topic: 'Essential skills every designer should have.' },
        ],
      },
      {
        heading: 'Design Thinking Basics',
        content: [
          { topic: 'Overview of the design thinking process.' },
          { topic: 'Empathize, Define, Ideate, Prototype, Test.' },
          { topic: 'Real-world applications of design thinking.' },
        ],
      },
    ],
  },
  {
    id: 2,
    heading: 'User Research & Analysis',
    time: '1 week',
    subHeading: 'Discover how to understand users and their needs.',
    modules: [
      {
        heading: 'User Personas',
        content: [
          { topic: 'Defining target user groups.' },
          { topic: 'Building fictional characters to represent users.' },
          { topic: 'Using personas to guide design decisions.' },
        ],
      },
      {
        heading: 'User Journey Mapping',
        content: [
          { topic: 'Steps users take to achieve goals.' },
          { topic: 'Identifying pain points and opportunities.' },
          { topic: 'Improving user flows through mapping.' },
        ],
      },
      {
        heading: 'Research Methods',
        content: [
          { topic: 'Conducting user interviews and focus groups.' },
          { topic: 'Designing surveys for quantitative feedback.' },
          { topic: 'Running usability testing sessions.' },
        ],
      },
    ],
  },
  {
    id: 3,
    heading: 'Wireframing & Prototyping',
    time: '1 week',
    subHeading: 'Turn ideas into visual structures and interactive flows.',
    modules: [
      {
        heading: 'Low-Fidelity Wireframes',
        content: [
          { topic: 'Sketching basic layouts and structures.' },
          { topic: 'Using pen and paper for fast iteration.' },
          { topic: 'Focusing on functionality over visuals.' },
        ],
      },
      {
        heading: 'High-Fidelity Mockups',
        content: [
          { topic: 'Adding colors, typography, and spacing.' },
          { topic: 'Working with design systems and components.' },
          { topic: 'Making designs developer-ready.' },
        ],
      },
      {
        heading: 'Prototyping Tools',
        content: [
          { topic: 'Creating interactive prototypes in Figma.' },
          { topic: 'Using Adobe XD for collaboration.' },
          { topic: 'Building advanced prototypes with Sketch and InVision.' },
        ],
      },
    ],
  },
  {
    id: 4,
    heading: 'Visual Design Principles',
    time: '1 week',
    subHeading: 'Understand aesthetics, colors, and typography for UI.',
    modules: [
      {
        heading: 'Color Theory',
        content: [
          { topic: 'Understanding color psychology in design.' },
          { topic: 'Applying contrast for readability.' },
          { topic: 'Building accessible color palettes.' },
        ],
      },
      {
        heading: 'Typography',
        content: [
          { topic: 'Choosing fonts for readability and style.' },
          { topic: 'Establishing hierarchy with font sizes.' },
          { topic: 'Best practices for web and mobile typography.' },
        ],
      },
      {
        heading: 'Layouts & Grids',
        content: [
          { topic: 'Using grids for structured design.' },
          { topic: 'Applying spacing and alignment principles.' },
          { topic: 'Maintaining balance with white space.' },
        ],
      },
    ],
  },
  {
    id: 5,
    heading: 'Interaction Design & Usability',
    time: '1 week',
    subHeading: 'Design experiences that are intuitive and user-friendly.',
    modules: [
      {
        heading: 'Microinteractions',
        content: [
          { topic: 'Adding subtle animations to enhance UX.' },
          { topic: 'Feedback loops like hover states and clicks.' },
          { topic: 'Improving user delight with small details.' },
        ],
      },
      {
        heading: 'Accessibility Basics',
        content: [
          { topic: 'Designing for screen readers and assistive tech.' },
          { topic: 'Ensuring proper color contrast.' },
          { topic: 'Keyboard-friendly navigation.' },
        ],
      },
      {
        heading: 'Usability Testing',
        content: [
          { topic: 'Planning and setting up usability tests.' },
          { topic: 'Analyzing user behavior and struggles.' },
          { topic: 'Iterating designs based on feedback.' },
        ],
      },
    ],
  },
  {
    id: 6,
    heading: 'UI/UX Project & Portfolio',
    time: '1 week',
    subHeading: 'Apply everything learned to create a real-world project.',
    modules: [
      {
        heading: 'Capstone Project',
        content: [
          { topic: 'Work on a real product case study.' },
          { topic: 'Apply all stages from research to prototype.' },
          { topic: 'Present findings and solutions.' },
        ],
      },
      {
        heading: 'Portfolio Building',
        content: [
          { topic: 'Showcasing your best design projects.' },
          { topic: 'Documenting your design process step by step.' },
          { topic: 'Creating a visually appealing online portfolio.' },
        ],
      },
      {
        heading: 'Career in UI/UX',
        content: [
          { topic: 'Preparing for design job interviews.' },
          { topic: 'Networking with other designers.' },
          {
            topic:
              'Building an online presence on Behance, Dribbble, LinkedIn.',
          },
        ],
      },
    ],
  },
];

const featureList = [
  '/features/feature1.png',
  '/features/feature2.png',
  '/features/feature3.png',
  '/features/feature4.png',
  '/features/feature5.png',
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
          <div className="w-full grid grid-cols-2 items-start gap-5 justify-center">
            {UIcourseContent.map((content) => (
              <div key={content.id} className="basis-1 bg-gray-50 rounded-2xl ">
                <div className=" rounded-t-2xl bg-[#2DF8C5] p-4 flex gap-x-2 items-center justify-start">
                  <div className="">Logo</div>
                  <div className="">
                    <div className="font-semibold text-lg">
                      {content.heading}
                    </div>
                    <div className="font-medium text-sm">{content.time}</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="rounded-3xl text-lg bg-gray-200 px-5 py-2 font-semibold">
                    {content.subHeading}
                  </div>
                  {content.modules.map((module, index) => (
                    <div
                      key={index}
                      className="rounded-2xl bg-gray-200 px-5 py-2 mt-2 "
                    >
                      <div className="font-semibold text-lg">
                        {module.heading}
                      </div>
                      <div className="font-regular text-sm">
                        <ul className="list-disc pl-5">
                          {module.content.map((topic, index) => (
                            <li key={index}> {topic.topic}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <div></div>
              </div>
            ))}
          </div>
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
      </div>
    </div>
  );
}

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

function CourseCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: { perView: 3 },
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
