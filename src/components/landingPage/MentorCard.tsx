import Image from 'next/image';

export default function MentorCard({
  name,
  description,
  src,
  companySrcArray,
}: {
  name: string;
  description: string[];
  src: string;
  companySrcArray: string[];
}) {
  return (
    <div className="component-landingPage-MentorCard h-full grid  grid-cols-1 sm:grid-cols-[2fr_3fr] gap-x-4 p-6 sm:p-2 rounded-lg overflow-hidden border w-8/10 border-gray-100">
      <div className="component-landingPage-MentorCard  rounded-2xl overflow-hidden h-fit">
        <Image
          src={src}
          alt={'Mentor'}
          className="w-full h-auto sm:object-cover rounded-2xl"
          height={100}
          width={100}
        />
      </div>
      <div className="component-landingPage-MentorCard h-[400px]  ">
        <div className="component-landingPage-MentorCard flex flex-col justify-between h-full">
          <div className='sm:my-5'>
            <div className="component-landingPage-MentorCard font-bold text-3xl mb-5">{name}</div>
            <div>{description.map((desc, index)=>(
              <div key={index} className="component-landingPage-MentorCard text-base sm:text-xl m-1 text-gray-600">{desc}</div>
            ))}</div>
          </div>
          <div className="component-landingPage-MentorCard flex flex-wrap gap-5 items-stretch justify-center m-2 mb-5">
            {companySrcArray.map((company, index) => (
              <Image key={index} src={company} alt="" height={0} width={0} className='h-4 sm:h-12 w-auto' />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}