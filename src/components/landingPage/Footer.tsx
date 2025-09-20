import { HelpCircle, Home, Phone } from 'lucide-react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full   bg-teal-400 text-black">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Address */}
        <div>
          <Image alt='' src={'/lancersFullLogo.png'} height={100} width={100} />
          <h2 className="text-lg font-bold">
            Lancrs Academy <span className="text-sm block">বাংলা</span>
          </h2>
          <p className="mt-3 flex items-start gap-2 text-sm">
            <Home className="w-5 h-5 shrink-0" />
            ৮৬ গোল্ডেন রোড, শ্রীভূমি, উত্তর ২৪ পরগনা, শ্রীভূমি, শঙ্করপুর, ভারত, ৭০০০৪৮
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <p className="flex items-center gap-2 font-semibold">
            <HelpCircle className="w-4 h-4" /> কাস্টমার কেয়ারি
          </p>
          <p className="text-sm mt-1">support@banglaacademy.lancrs.com</p>

          <p className="flex items-center gap-2 font-semibold mt-4">
            <HelpCircle className="w-4 h-4" /> সাধারণ জিজ্ঞাসা
          </p>
          <p className="text-sm mt-1">enquiry@banglaacademy.lancrs.com</p>
          <p className="flex items-center gap-2 text-sm mt-1">
            <Phone className="w-4 h-4" /> +91 6299 717 391
          </p>
        </div>

        {/* Community & Career */}
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-semibold">কমিউনিটি প্রোগ্রামস</h3>
            <ul className="mt-1 space-y-1">
              <li>#IBelieveInDoing চ্যালেঞ্জ</li>
              <li>ল্যানক্র্স ইউএক্সডিজাইন অফ লার্নিং</li>
              <li>ল্যানক্র্স প্রোজেক্ট হাব</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">ক্যারিয়ার প্রোগ্রামস</h3>
            <ul className="mt-1 space-y-1">
              <li>ফুল স্ট্যাক ডেভেলপমেন্ট ফেলোশিপ</li>
              <li>অ্যাপ ডেভেলপমেন্ট ফেলোশিপ</li>
              <li>ডেটা অ্যানালিটিক্স ফেলোশিপ</li>
              <li>ডেটা সায়েন্স ফেলোশিপ</li>
              <li>সব কোর্স দেখুন</li>
            </ul>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-2 text-sm">
          <h3 className="font-semibold">ল্যাডার্স একাডেমি</h3>
          <ul className="space-y-1">
            <li>প্রেসমেন্ট রিপোর্ট</li>
            <li>সাফল্যের গল্প</li>
            <li>সম্পর্কে</li>
            <li>ব্লগ</li>
            <li>ব্যবহারের শর্তাবলী</li>
            <li>গোপনীয়তা নীতি</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/20 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            Copyright © 2025 Lancrs Academy. All rights reserved.
          </p>
          <div className="flex gap-4 text-xl">
            <FaLinkedin className='aspect-square hover:cursor-pointer hover:aspect-[4/3] '/>
            <FaYoutube className='hover:cursor-pointer hover:aspect-[4/3]'/>
            <FaInstagram className='hover:cursor-pointer hover:aspect-[4/3]'/>
            <FaTwitter className='hover:cursor-pointer hover:aspect-[4/3] '/>
            <FaFacebook className='hover:cursor-pointer hover:aspect-[4/3] '/>
          </div>
        </div>
      </div>
    </footer>
  );
}