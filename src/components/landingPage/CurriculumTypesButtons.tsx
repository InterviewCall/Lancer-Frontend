'use client' ;

import { useState } from 'react';

import CurriculumDetails from './CurriculumDetails';

export default function CurriculumTypesButtons() {
  const [curriculumOption, setCurriculumOption] = useState(0);
  return (
    <div className="component-landingPage-CurriculumTypesButton w-full justify-center ">
      <div className="component-landingPage-CurriculumTypesButton w-full flex items-center justify-center">
        <div className="component-landingPage-CurriculumTypesButton bg-white rounded-lg w-fit flex gap-2 items-center justify-center p-2 font-semibold ">
          <div
            className={
              'component-landingPage-CurriculumTypesButton rounded-md py-2 px-10 hover:cursor-pointer w-fit ' +
              (!curriculumOption ? '' : ' bg-[#2DF8C5]')
            }
          >
            Premium
          </div>
          <div
            className={
              'component-landingPage-CurriculumTypesButton rounded-md py-2 px-10 hover:cursor-pointer w-fit  ' +
              (curriculumOption ? '' : ' bg-[#2DF8C5]')
            }
          >
            Advanced
          </div>
        </div>
      </div>
      <CurriculumDetails />
    </div>
  );
}