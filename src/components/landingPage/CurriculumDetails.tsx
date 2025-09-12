import { User } from 'lucide-react';

import CurriculumSubject from './CurriculumSubject';
import CurriculumSubjectDetails from './CurriculumSubjectDetails';

export default function CurriculumDetails() {
  return (
    <div className="component-landingPage-Curriculum flex w-full ">
      <div className="component-landingPage-Curriculum basis-1/2 space-y-2 p-2">
        <CurriculumSubject
          isActive={true}
          icon={<User className="w-5 h-5 text-gray-400" />}
          heading="Programming"
          subHeading="4 to 8 weeks"
        />
        <CurriculumSubject
          icon={<User className="w-5 h-5 text-gray-400" />}
          heading="Programming"
          subHeading="4 to 8 weeks"
        />
        <CurriculumSubject
          icon={<User className="w-5 h-5 text-gray-400" />}
          heading="Programming"
          subHeading="4 to 8 weeks"
        />
      </div>
      <div className="component-landingPage-Curriculum basis-1/2  p-2">
        <CurriculumSubjectDetails
          description="Kickstart your Programmer journey by creating a solid foundation of programming and language skills. Start using standard industry developer technologies."
          heading="Programming"
          icon={<User className="w-5 h-5 text-gray-400" />}
          subHeading="3 to 4 weeks"
        />
      </div>
    </div>
  );
}
