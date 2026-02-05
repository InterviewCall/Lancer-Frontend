import HeroSectionForm from './HeroSectionForm';
import HeroSectionHighlightOptions from './HeroSectionHighlightOptions';

const heroSectionHighlightOptionsList = [
  {
    id: 1,
    header: '88%',
    content: 'Placed within 9 months of graduation',
  },
  {
    id: 2,
    header: '10 LPA',
    content: 'Average dream job CTC',
  },
  {
    id: 3,
    header: '21 LPA',
    content: 'Average super-dream job CTC',
  },
  {
    id: 4,
    header: '1000+',
    content: 'Hiring Partners',
  },
  {
    id: 5,
    header: '77%',
    content: 'Average Salery Hike',
  },
];

export default function HeroSection() {
  return (
    <div className="component-landingPage-HeroSection grid grid-cols-1 sm:grid-cols-[10fr_9fr] items-start justify-center p-1 sm:p-10">
      <div className="component-landingPage-HeroSection basis-1 sm:basis-[60%] sm:px-5 ">
        <div className="component-landingPage-HeroSection text-center sm:text-start text-3xl sm:text-6xl my-5 font-semibold sm:leading-18 tracking-tight">
          {'Full-Stack Web Development (MERN)'}
        </div>
        <div className="component-landingPage-HeroSection mb-5 text-sm text-center sm:text-start sm:text-xl sm:leading-8 tracking-wide ">
          <div className='hidden sm:block'>
          Companies in Kolkata are actively hiring <br/> skilled <b>Full-Stack Developers</b>. Master <br/> modern MERN stack + real-world backend <br/> systems, and build <b>production-ready <br/> projects</b> to start your tech career with <br/> confidence.

          </div>
          <div className='sm:hidden px-5'>
          Companies in Kolkata are actively hiring skilled <b>Full-Stack Developers</b>. Master modern MERN stack + real-world backend systems, and build <b>production-ready projects</b> to start your tech career with confidence.

          </div>
        </div>

        <div className="component-landingPage-HeroSection flex sm:hidden items-center my-10 sm:my-0 justify-center  sm:basis-40/100 ">
        <HeroSectionForm />
      </div>
       
        <div className=" w-full h-fit grid grid-cols-1 sm:grid-cols-[5fr_2fr] items-center sm:items-stretch justify-center rounded-lg gap-2">
          <div className="w-full sm:basis-2/3 border rounded-xl border-gray-100 bg-gray-200 h-full  ">
            <div className="w-full flex items-center justify-center text-center h-1/2">
              <div className='font-semibold text-xl sm:text-xl my-5'>100% Placement Guarantee</div>
            </div>
            <div className="w-full flex justify-center">
              <div className="h-0.5 bg-gray-400 w-[90%]"></div>
            </div>
            <div className="flex items-stretch justify-center  gap-x-2 h-1/2">
              <div className="w-full  my-3">
                <div className="w-full text-center font-bold text-xs text-[#33a79d]">Dream Job</div>
                <div className="w-full text-center font-semibold text-lg sm:text-xl">15K-20K</div>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-0.5 bg-gray-400 h-1/2"></div>
              </div>

              <div className="w-full mt-3">
                <div className="w-full text-center text-[#33a79d] font-bold text-xs">Super Dream Job</div>
                <div className="w-full text-center font-semibold text-lg sm:text-xl">20k-40K</div>
              </div>
            </div>
          </div>
          <div className=' w-full flex sm:block justify-center '>
            <div className="w-1/2 sm:w-full sm:basis-1/3 border py-3 flex flex-col justify-center sm:justify-around border-gray-100 bg-gray-200 rounded-xl">
            <div className="w-full text-center my-3 ">
              <div className="w-full text-center font-bold text-xs text-[#33a79d]">Online</div>
                <div className="w-full text-center font-semibold text-lg sm:text-xl">6 months</div>
            </div>
            <div className="w-full flex justify-center">
              <div className="h-0.5 bg-gray-400 w-[60%]"></div>
            </div>
            <div className="w-full text-center ">
              <div className="w-full text-center mt-3 font-bold text-xs text-[#33a79d]">Demo Session</div>
                <div className="w-full text-center font-semibold text-lg sm:text-xl">Free</div>
            </div>
          </div>
          </div>
        </div>
        <div className="hidden component-landingPage-HeroSection  items-stretch justify-center rounded-lg my-4  overflow-hidden">
          {heroSectionHighlightOptionsList.map((option) => {
            return (
              <HeroSectionHighlightOptions
                key={option.id}
                header={option.header}
                content={option.content}
              />
            );
          })}
        </div>
      </div>
      <div className="component-landingPage-HeroSection hidden sm:flex items-center mt-10 sm:mt-0 justify-center  sm:basis-40/100 ">
        <HeroSectionForm />
      </div>
    </div>
  );
}
