import { Plus } from 'lucide-react';

export default function FAQSection() {
  const FAQList = [
    'ল্যান্সার্স একাডেমি UI/UX প্রোগ্রামের জন্য কারা যোগ্য?',
    'প্রোগ্রামের সময়সীমা কত?',
    'কোর্সটি কি সম্পূর্ণ অনলাইন?',
    'কোর্সটি সম্পূর্ণ করার জন্য আমার কি পূর্ব অভিজ্ঞতা থাকা দরকার?',
    'আমি কি কাজের সময়সূচী অনুযায়ী কোর্সটি করতে পারব?',
    'কোর্সটি সম্পূর্ণ করার পর কি আমি UI/UX ডিজাইনার হিসেবে কাজ করতে পারব?',
    'আমি কি কোর্সটি সম্পূর্ণ করার পর সার্টিফিকেট পাব?',
    'কোর্স ফি কি?',
    'আমি কি কোর্স ফি কিস্তিতে দিতে পারব?',
    'কোর্স ফি ফেরতযোগ্য কি না?',
    'আমি কি কোর্সের জন্য আর্থিক সহায়তা পেতে পারি?',
  ];

  return (
    <div className="w-7/10 my-10">
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
            <div>
              <Plus />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
