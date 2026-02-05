import Image from 'next/image';

export default function AlumniVideoSection() {
  const videoContent = [
  {
    id: 1,
    src: '/shivansh.png',
    heading: 'Meet Shivansh Yashasvi',
    subHeading:
      'With the right guidance, consistent practice, and mentorship, I was able to switch into a better role and build real confidence in Full-Stack development. The projects, mock interviews, and resume support helped me crack interviews and upgrade my career.',
    careerLogos: [
      '/alumni-careers/alumni-cisco.svg',
      '/alumni-careers/alumni-amazon.svg',
      '/alumni-careers/alumni-ion.svg',
    ]
  },
  {
    id: 2,
    src: '/rounak.png',
    heading: 'Meet Rounak Goswami',
    subHeading:
      'I followed the structured plan, worked on projects, and improved my problem-solving and interview skills step by step. With continuous guidance and mock interviews, I successfully switched to a better opportunity and moved into Morgan Stanley.',
    careerLogos: [
      '/alumni-careers/alumni-cisco.svg',
      '/alumni-careers/alumni-amazon.svg',
      '/alumni-careers/alumni-ion.svg',
    ]
  },
  {
    id: 3,
    src: '/abhinay.png',
    heading: 'Meet Abhinay Reddy',
    subHeading:
      'The Full-Stack curriculum was practical and project-heavy, which helped me become job-ready. From React to backend APIs and deployment, the hands-on learning and interview preparation helped me switch to Valuelabs with strong confidence.',
    careerLogos: [
      '/alumni-careers/alumni-cisco.svg',
      '/alumni-careers/alumni-amazon.svg',
      '/alumni-careers/alumni-ion.svg',
    ]
  },
];

  return (
    <div className="w-9/10 sm:w-8/10 border-gray-300 gap-7 my-15 sm:grid grid-cols-3 items-center justify-between ">
      {videoContent.map((content) => (
        <div key={content.id} className="my-5 w-full rounded-[50px] sm:rounded-4xl bg-[#2DF8C5]">
          <div className="p-5">
            <div className="h-fit flex items-center justify-center hover:cursor-pointer rounded-5xl ">
              <Image alt="" src={content.src} width={400} height={400} className='w-full sm:h-[150px]' />
            </div>
            <div className="font-bold text-xl my-2 text-gray-900">{content.heading}</div>
            <div className="text-sm tracking-wider text-gray-700 h-44 ">{content.subHeading}</div>
          </div>
          <div className=" rounded-b-2xl text-center font-semibold text-sm py-3 bg-[#ecf7f6] text-[#29615c]">
            Career in :
            <div className='flex items-center justify-center gap-2 pt-3 h-fit'>
                {content.careerLogos.map((logo, idx) => (
                  <Image key={idx} alt='' src={logo} height={50} width={50}/>
                ))}
                {/* <Image  alt='' src={'/alumni-careers/alumni-amazon.svg'} height={50} width={50}/>
                <Image  alt='' src={'/alumni-careers/alumni-ion.svg'} height={50} width={50}/> */}

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
