import Image from 'next/image';

const skillCardsList= [
    {
        id: 1,
        src: '/skillCards/adobexd.svg',
    },
    {
        id: 2,
        src: '/skillCards/axure.svg',
    },{
        id: 3,
        src: '/skillCards/figma.svg',
    },{
        id: 4,
        src: '/skillCards/framer.svg',
    },{
        id: 5,
        src: '/skillCards/marvel.svg',
    },
    {
        id: 6,
        src: '/skillCards/sketch.svg',
    },{
        id: 7,
        src: '/skillCards/uxpin.svg',
    },
];

export default function SkillCards(){
    return (
        <div className='component-landingPage-skillCard w-full flex flex-wrap gap-5 justify-center items-center'>
            {skillCardsList.map((skill)=>(
                <Image key={skill.id} src={skill.src} alt='Skills' height={150} width={150} />
            ))}
        </div>
    );
}