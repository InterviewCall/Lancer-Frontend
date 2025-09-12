import Image from 'next/image';

export default function MentorCard({
  name,
  description,
  src,
  companySrcArray,
}: {
  name: string;
  description: string;
  src: string;
  companySrcArray: string[];
}) {
  return (
    <div className="component-landingPage-MentorCard h-full flex gap-x-4 p-2 rounded-lg overflow-hidden">
      <div className="component-landingPage-MentorCard basis-1/3 rounded-2xl overflow-hidden">
        <Image
          src={src}
          alt={'Mentor'}
          className="w-full h-64 object-cover"
          height={100}
          width={100}
        />
      </div>
      <div className="component-landingPage-MentorCard basis-2/3">
        <div className="component-landingPage-MentorCard flex flex-col justify-between h-full">
          <div>
            <div className="component-landingPage-MentorCard font-bold text-2xl">{name}</div>
            <div>{description}</div>
          </div>
          <div className="component-landingPage-MentorCard flex flex-wrap gap-2 items-stretch justify-center m-2">
            {companySrcArray.map((company, index) => (
              <Image key={index} src={company} alt="" height={50} width={50} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}