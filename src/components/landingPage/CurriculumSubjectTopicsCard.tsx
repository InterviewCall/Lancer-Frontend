export default function CurriculumSubjectTopicsCard({
  topic,
  description,
  subTopicsArray,
}: {
  topic: string;
  description: string;
  subTopicsArray: string[];
}) {
  return (
    <div className="component-landingPage-CurriculumSubjectTopicsCard p-2 rounded-lg border border-gray-300 bg-gray-100 ">
      <div className="component-landingPage-CurriculumSubjectTopicsCard font-bold">{topic}</div>
      <div className="component-landingPage-CurriculumSubjectTopicsCard my-2">{description} </div>
      <div className="component-landingPage-CurriculumSubjectTopicsCard flex flex-wrap justify-center gap-2 mt-2">
        {subTopicsArray.map((option, index) => {
          return (
            <div
              className="component-landingPage-CurriculumSubjectTopicsCard text-sm font-bold border border-gray-300 rounded-md py-1 px-2"
              key={index}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
}