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
    <div className="component-landingPage-HeroSection flex items-stretch justify-center p-10">
      <div className="component-landingPage-HeroSection basis-60/100 px-10">
        <div className="component-landingPage-HeroSection font-bold text-5xl my-5">
          Learn like you would at India’s Top tech companies.
        </div>
        <div className="component-landingPage-HeroSection mb-5 text-lg">
          Work-experience based learning programs to land your dream tech job
        </div>
        <div>
          <span className="component-landingPage-HeroSection font-bold">
            Build
          </span>{' '}
          professional projects like the top 1% tech professionals.
        </div>
        <div>
          <span className="component-landingPage-HeroSection font-bold">
            Master
          </span>{' '}
          the latest Fullstack/Backend/Automation tech with real work-ex.
        </div>
        <div>
          <span className="component-landingPage-HeroSection font-bold">
            Crack
          </span>{' '}
          your dream role at the best tech companies
        </div>
        <div className=" p-4  w-[80%] h-[200px] flex items-stretch justify-center rounded-lg gap-x-2">
          <div className="basis-2/3 border rounded-xl border-gray-100 bg-gray-200 h-full ">
            <div className="w-full flex items-center justify-center text-center h-1/2">
              <div className='font-semibold text-2xl'>100% assured referrals</div>
            </div>
            <div className="w-full flex justify-center">
              <div className="border w-[90%]"></div>
            </div>
            <div className="flex items-stretch justify-center  gap-x-2 h-1/2">
              <div className="w-full  mt-3">
                <div className="w-full text-center font-medium">Dream Job</div>
                <div className="w-full text-center font-semibold text-xl">6 - 15 LPA</div>
              </div>
              <div className="h-full flex justify-center items-center">
                <div className="border h-1/2"></div>
              </div>

              <div className="w-full mt-3">
                <div className="w-full text-center font-medium">Super Dream Job</div>
                <div className="w-full text-center font-semibold text-xl">16 - 25 LPA</div>
              </div>
            </div>
          </div>
          <div className="basis-1/3 border flex flex-col justify-around border-gray-100 bg-gray-200 rounded-xl">
            <div className="w-full text-center ">
              <div className="w-full text-center font-medium">Online</div>
                <div className="w-full text-center font-semibold text-xl">9 months</div>
            </div>
            <div className="w-full flex justify-center">
              <div className="border w-[90%]"></div>
            </div>
            <div className="w-full text-center ">
              <div className="w-full text-center font-medium">Demo Session</div>
                <div className="w-full text-center font-semibold text-xl">Free</div>
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
      <div className="component-landingPage-HeroSection basis-40/100 ">
        <HeroSectionForm />
      </div>
    </div>
  );
}
