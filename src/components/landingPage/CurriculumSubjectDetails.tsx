import CurriculumSubjectTopicsCard from './CurriculumSubjectTopicsCard';

export default function CurriculumSubjectDetails({
  icon,
  heading,
  subHeading,
  description,
}: {
  icon: React.ReactNode;
  heading: string;
  subHeading: string;
  description: string;
}) {
  return (
    <div className="component-landingPage-CurriculumSubjectDetails p-4 space-y-2 rounded-xl bg-[#FFF]">
      <div className={'component-landingPage-CurriculumSubjectDetails flex items-center rounded-lg p-2 gap-2'}>
        <div>{icon}</div>
        <div className="component-landingPage-CurriculumSubjectDetails ">
          <div className="component-landingPage-CurriculumSubjectDetails font-bold">{heading}</div>
          <div>{subHeading} </div>
        </div>
      </div>
      <div className="component-landingPage-CurriculumSubjectDetails my-2">{description}</div>
      <CurriculumSubjectTopicsCard
        description="Start with Hello World and get familiar with the syntax and constructs of Java or JavaScript based on the specialization you choose"
        subTopicsArray={['Loops', 'Conditionals', 'Arrays']}
        topic="Language Fundamental"
      />
    </div>
  );
}