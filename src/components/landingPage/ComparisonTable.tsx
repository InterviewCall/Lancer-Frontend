import { Check, X } from 'lucide-react';

export default function ComparisonTable() {
  const data = [
    {
      feature: 'বস্তুনিষ্ঠ UI/UX অভিজ্ঞতা',
      video: false,
      bootcamp: false,
      academy: true,
    },
    {
      feature: 'ব্যবহারিক ডিজাইন-কেন্দ্রিক শিক্ষা',
      video: false,
      bootcamp: false,
      academy: true,
    },
    {
      feature: 'লাইভ বিশেষজ্ঞ-নেতৃত্বাধীন সেশন',
      video: false,
      bootcamp: true,
      academy: true,
    },
    {
      feature: 'চাকরি-প্রস্তুত পোর্টফোলিও',
      video: false,
      bootcamp: false,
      academy: true,
    },
    {
      feature: 'সরাসরি ইন্টারভিউয়ের সুযোগ',
      video: false,
      bootcamp: false,
      academy: true,
    },
    {
      feature: 'উৎসর্গীকৃত ক্যারিয়ার সহায়তা',
      video: false,
      bootcamp: true,
      academy: true,
    },
    {
      feature: 'প্রিমিয়াম রিসোর্স ও টুলস',
      video: false,
      bootcamp: false,
      academy: true,
    },
  ];

  return (
    <div className="w-full font-semibold text-center my-5">
      <table className="w-full border-collapse rounded-2xl overflow-hidden shadow">
        <thead>
          <tr className="bg-[#2DF8C5] text-black text-left">
            <th className="p-3"> </th>
            <th className="p-3 text-center">ভিডিও কোর্স</th>
            <th className="p-3 text-center">বুটক্যাম্প</th>
            <th className="p-3 text-center">ল্যাডার্স একাডেমি</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={` ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}
            >
              <td className="p-5">{row.feature}</td>
              <td className="p-5 text-center">
                {row.video ? (
                  <Check className="text-green-500 inline" />
                ) : (
                  <X className="text-gray-400 inline" />
                )}
              </td>
              <td className="p-5 text-center">
                {row.bootcamp ? (
                  <Check className="text-green-500 inline" />
                ) : (
                  <X className="text-gray-400 inline" />
                )}
              </td>
              <td
                className={`p-3 text-center font-bold ${
                  idx % 2 === 0 ? 'bg-amber-100' : 'bg-amber-200'
                }`}
              >
                {row.academy ? (
                  <Check className="text-green-500 inline" />
                ) : (
                  <X className="text-gray-400 inline" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
