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
        'flex items-center rounded-lg p-2 gap-2' +
        (isActive ? ' bg-[#2DF8C5]' : ' bg-[#FFF]')
      }
    >
      <div>{icon}</div>
      <div className="">
        <div className="font-bold">{heading}</div>
        <div>{subHeading} </div>
      </div>
    </div>
  );
}