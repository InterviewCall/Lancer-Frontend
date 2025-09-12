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
          <span className="component-landingPage-HeroSection font-bold">Build</span> professional projects like
          the top 1% tech professionals.
        </div>
        <div>
          <span className="component-landingPage-HeroSection font-bold">Master</span> the latest
          Fullstack/Backend/Automation tech with real work-ex.
        </div>
        <div>
          <span className="component-landingPage-HeroSection font-bold">Crack</span> your dream role at the best
          tech companies
        </div>
        <div className="component-landingPage-HeroSection flex items-stretch justify-center rounded-lg my-4  overflow-hidden">
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