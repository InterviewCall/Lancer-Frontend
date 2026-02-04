import { Check } from 'lucide-react';

export default function ProgramFeeAndScholarships() {
    return (
        <div className="w-full sm:w-8/10 sm:flex items-center justify-center px-4 sm:px-10 py-8 rounded-4xl bg-[#2DF8C5]">

            {/* Left pricing card */}
            <div className="bg-gray-50 basis-1/3 mx-2 sm:mx-0 flex flex-col gap-3 items-start justify-center rounded-3xl p-10">
                <div className="bg-amber-200 py-1 px-3 rounded-lg text-lg sm:text-base font-semibold">
                    EMI Starting From
                </div>

                <div>
                    <span className="font-bold text-4xl sm:text-3xl tracking-wider">₹1500</span>
                    <span className="text-[#24b490] font-semibold text-lg sm:text-base">
                        /Month
                    </span>
                    <div className="text-base sm:text-sm text-[#24b490]">
                        (No-Cost EMI available)
                    </div>
                </div>

                <div className=''>
                    <div className="text-sm text-gray-600">
                        <b>Program Fee</b> : ₹25,000
                    </div>
                    <div className="text-sm text-gray-600">
                        <b>Scholarship</b>: Up to ₹5,000
                    </div>
                </div>
            </div>

            {/* Right details */}
            <div className="sm:px-10 my-2 sm:my-0 py-1.5 sm:py-5 basis-2/3">

                <div className="sm:px-2">
                    <div className="font-bold flex items-center gap-2">
                        <Check strokeWidth={3} />
                        Free 1:1 Counselling + Psychometric Analysis
                    </div>
                    <div className="text-sm text-gray-700 ml-8">
                        No charge for the counselling session
                    </div>
                </div>

                <div className="sm:p-2">
                    <div className="font-bold flex items-center gap-2 ">
                        <Check strokeWidth={3} />
                        Scholarship After 1:1 Assessment (Student + Parents)
                    </div>
                    <div className="text-sm text-gray-700 ml-8">
                        Get up to ₹5,000 scholarship based on a detailed psychometric analysis session
                    </div>
                </div>

                <div className="p-2 text-sm text-gray-700">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>If your fee becomes ₹20,000 after scholarship</li>
                        <li>Down Payment: ₹2,000</li>
                        <li>Remaining ₹18,000 via No-Cost EMI (Bajaj Finance)</li>
                        <li>EMI Options: 6 months / 12 months No-Cost EMI</li>
                        <li>18 months EMI may include interest (as per Bajaj Finance terms)</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
