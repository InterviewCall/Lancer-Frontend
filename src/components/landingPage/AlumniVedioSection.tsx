import Image from 'next/image';

export default function AlumniVideoSection() {
  const videoContent = [
    {
      id: 1,
      src: '/alumniThumbnail.png',
      heading: 'Meet out student',
      subHeading:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.',
    },
    {
      id: 2,
      src: '/alumniThumbnail.png',
      heading: 'Meet our alumni',
      subHeading:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.',
    },
    {
      id: 3,
      src: '/alumniThumbnail.png',
      heading: 'Meet our faculty',
      subHeading:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.',
    },
    {
      id: 4,
      src: '/alumniThumbnail.png',
      heading: 'Meet our staff',
      subHeading:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.',
    },
    {
      id: 5,
      src: '/alumniThumbnail.png',
      heading: 'Meet our community',
      subHeading:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quas.',
    },
  ];

  return (
    <div className="border w-9/10 border-gray-300 gap-5 my-15 flex flex-wrap items-center justify-center ">
      {videoContent.map((content) => (
        <div key={content.id} className="my-5 w-1/4  rounded-2xl bg-[#2DF8C5]">
          <div className="p-5">
            <div className="h-fit hover:cursor-pointer rounded-5xl ">
              <Image alt="" src={content.src} width={400} height={400} />
            </div>
            <div className="font-bold text-lg my-2">{content.heading}</div>
            <div className="text-sm ">{content.subHeading}</div>
          </div>
          <div className="border rounded-b-2xl h-16 text-center bg-gray-50">
            Career in :
          </div>
        </div>
      ))}
    </div>
  );
}
