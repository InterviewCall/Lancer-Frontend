import { Check, X } from 'lucide-react';

export default function ComparisonTable() {
  const data = [
    {
      feature: 'Real Full-Stack Project Experience',
      video: false,
      bootcamp: false,
      academy: true,
    },
    {
      feature: 'Practical, Industry-Ready Learning',
      video: false,
      bootcamp: false,
      academy: true,
    },
    {
      feature: 'Live Mentor-Led Sessions',
      video: false,
      bootcamp: true,
      academy: true,
    },
    {
      feature: 'Job-Ready Portfolio Projects',
      video: false,
      bootcamp: false,
      academy: true,
    },
    {
      feature: 'Interview Preparation Support',
      video: false,
      bootcamp: false,
      academy: true,
    },
    {
      feature: 'Career Support & Guidance',
      video: false,
      bootcamp: true,
      academy: true,
    },
    {
      feature: 'Premium Resources & Tools',
      video: false,
      bootcamp: false,
      academy: true,
    },
  ];

  return (
    <div className="w-full font-semibold text-center my-5">
      <table className="w-full border-collapse rounded-2xl sm:rounded-4xl overflow-hidden shadow text-sm sm:text-base">
        <thead>
          <tr className="bg-[#2DF8C5] text-black text-left">
            <th className="p-2 sm:p-5"></th>
            <th className="p-2 sm:p-5 text-center">Video Course</th>
            <th className="p-2 sm:p-5 text-center">Bootcamp</th>
            <th className="p-2 sm:p-5 text-center">Lancrs Academy</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}
            >
              <td className="p-5 text-left">{row.feature}</td>

              <td className="p-5 text-center">
                {row.video ? (
                  <Check strokeWidth={3} className="text-green-500 inline" />
                ) : (
                  <X strokeWidth={3} className="text-gray-400 inline" />
                )}
              </td>

              <td className="p-5 text-center">
                {row.bootcamp ? (
                  <Check strokeWidth={3} className="text-green-500 inline" />
                ) : (
                  <X strokeWidth={3} className="text-gray-400 inline" />
                )}
              </td>

              <td
                className={`p-5 text-center font-bold ${
                  idx % 2 === 0 ? 'bg-amber-100' : 'bg-amber-200'
                }`}
              >
                {row.academy ? (
                  <Check strokeWidth={3} className="text-green-500 inline" />
                ) : (
                  <X strokeWidth={3} className="text-gray-400 inline" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
