import { Plus } from 'lucide-react';

export default function FAQSection() {
  const FAQList = [
    'Who is eligible for the Lancrs Academy Full-Stack (MERN) Program?',
    'What is the duration of the program?',
    'Is this an online or offline program?',
    'How does the program work?',
    'Will there be live sessions?',
    'What if I miss a live session?',
    'Is the schedule flexible? How many hours per week do I need?',
    'Will I get a certificate after completion?',
    'Is scholarship available?',
    'Do you provide EMI options?',
    'What interview opportunities will I get after the program?',
    'What happens if I leave the program in the middle?',
    'Does every student get interview calls?',
  ];

  return (
    <div className=" sm:w-8/10 my-10">
      <div className="my-10 text-center font-semibold text-3xl">
        Frequently asked questions
      </div>

      <div className="space-y-2 my-5">
        {FAQList.map((faq, index) => (
          <div
            key={index}
            className="hover:cursor-pointer rounded-t-3xl bg-gray-100 py-5 px-7 flex justify-between items-center"
          >
            <div className="font-semibold text-lg">{faq}</div>
            <Plus />
          </div>
        ))}
      </div>
    </div>
  );
}
