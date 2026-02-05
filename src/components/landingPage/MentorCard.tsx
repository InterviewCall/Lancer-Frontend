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
    <div className="component-landingPage-MentorCard min-h-[400px] rounded-xl sm:rounded-3xl sm:min-h-[400px] grid grid-cols-1 sm:grid-cols-[2fr_3fr] gap-x-4 p-4 sm:p-4  overflow-hidden border w-9/10 border-gray-200 shadow-2xl">
      <div className="component-landingPage-MentorCard rounded2xl overflow-hidden h-auto sm:min-h-[280px]">
        <Image
          src={src}
          alt={'Mentor'}
          className="w-full h-full object-cover rounded-2xl"
          height={100}
          width={100}
        />
      </div>
      <div className="component-landingPage-MentorCard flex flex-col h-full min-h-[300px]">
        <div className="component-landingPage-MentorCard flex flex-col flex-1 justify-between h-full">
          <div className='flex-1 sm:pl-5 sm:pt-5'>
            <div className="component-landingPage-MentorCard font-semibold sm:font-bold text-3xl sm:text-5xl mt-3 tracking-tight text-gray-800 mb-3 sm:mb-5">{name}</div>
            <div className="space-y-0.5 sm:space-y-1 h-[170px] sm:h-auto tracking-tight sm:tracking-normal text-xl sm:text-4xl ">
              {description.slice(0,3).map((desc, index)=>(
                <div key={index} className="component-landingPage-MentorCard text-lg sm:text-xl text-gray-500 line-clamp-2">{desc}</div>
              ))}
            </div>
          </div>
          <div className="component-landingPage-MentorCard flex w-9/10 gap-3 sm:gap-5 items-center justify-center m-2 mb-3 sm:mb-5 min-h-[40px] sm:min-h-[60px]">
            {companySrcArray.slice(0, 4).map((company, index) => (
              <Image key={index} src={company} alt="" height={0} width={0} className='h-10 lg:h-12 w-auto flex-shrink-0' />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}