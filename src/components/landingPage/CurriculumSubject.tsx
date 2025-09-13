export default function CurriculumSubject({
  isActive = false,
  icon,
  heading,
  subHeading,
}: {
  isActive?: boolean;
  icon: React.ReactNode;
  heading: string;
  subHeading: string;
}) {
  return (
    <div
      className={
        'component-landingPage-CurriculumSubject flex items-center rounded-lg p-2 gap-2' +
        (isActive ? ' bg-[#2DF8C5]' : ' bg-[#FFF]')
      }
    >
      <div>{icon}</div>
      <div className="component-landingPage-CurriculumSubject ">
        <div className="component-landingPage-CurriculumSubject font-bold">{heading}</div>
        <div>{subHeading} </div>
      </div>
    </div>
  );
}