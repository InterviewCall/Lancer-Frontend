import { HelpCircle, Home, Phone } from 'lucide-react';
import Image from 'next/image';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#2DF8C5] text-black">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Address */}
        <div>
          <Image alt="" src="/lancersFullLogo.png" height={100} width={120} />
          <h2 className="text-lg font-bold mt-2">Lancrs Academy</h2>

          <p className="mt-3 flex items-start gap-2 text-sm">
            <Home className="w-5 h-5 shrink-0" />
            86 Golaghata Road, Shyamnagar, North 24 Parganas,
            Shyamnagar, West Bengal, India – 700058
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <p className="flex items-center gap-2 font-semibold">
            <HelpCircle className="w-4 h-4" /> Customer Support
          </p>
          <p className="text-sm mt-1">support@banglaacademy.lancrs.com</p>

          <p className="flex items-center gap-2 font-semibold mt-4">
            <HelpCircle className="w-4 h-4" /> General Enquiries
          </p>
          <p className="text-sm mt-1">enquiry@banglaacademy.lancrs.com</p>

          <p className="flex items-center gap-2 text-sm mt-1">
            <Phone className="w-4 h-4" /> +91 6296 797 309
          </p>
        </div>

        {/* Community & Career */}
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-semibold">Community Programs</h3>
            <ul className="mt-1 space-y-1">
              <li>#IBelieveInDoing Challenge</li>
              <li>Lancrs Intern Offer Drive</li>
              <li>Lancrs Project Hub</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Career Programs</h3>
            <ul className="mt-1 space-y-1">
              <li>Full Stack Development Program</li>
              <li>For Businesses</li>
              <li>Hire from Lancrs Academy</li>
              <li>Lancrs Academy Onboard</li>
            </ul>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-2 text-sm">
          <h3 className="font-semibold">Lancrs Academy</h3>
          <ul className="space-y-1">
            <li>Placement Report</li>
            <li>Success Stories</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Refund Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/20 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            Copyright © 2026 IvyLeague Catform Academy Private Limited.
            All rights reserved.
          </p>

          <div className="flex gap-4 text-xl">
            <FaLinkedin className="hover:cursor-pointer" />
            <FaYoutube className="hover:cursor-pointer" />
            <FaInstagram className="hover:cursor-pointer" />
            <FaTwitter className="hover:cursor-pointer" />
            <FaFacebook className="hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
