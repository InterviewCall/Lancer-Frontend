import CurriculumTypesButtons from './CurriculumTypesButtons';

export default function CurriculumArea() {
  return (
    <div className="component-landingPage-CurriculumArea w-8/10  flex flex-col items-center rounded text-center p-10 bg-gray-100">
      <div className="component-landingPage-CurriculumArea w-6/10 text-4xl my-10 font-bold ">
        {
          'Curriculum to crack dream jobs (6 To 15 LPA) in top Product-Based companies'
        }
      </div>
      <div className="component-landingPage-CurriculumArea w-full">
        <CurriculumTypesButtons />
      </div>
    </div>
  );
}