import Image from 'next/image';

import { skillBadgeList } from '../utils';



export default function SkillCards(){
    return (
        <div className='component-landingPage-skillCard w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-7 justify-center items-center'>
            {skillBadgeList.map((skill)=>(
                <Image key={skill.id} src={skill.src} alt='Skills' quality={100} height={1000} width={3000} className='w-full h-auto' />
            ))}
        </div>
    );
}