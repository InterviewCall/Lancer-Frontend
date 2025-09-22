'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import NavbarButton from './NavbarButton';

const navbarButtonList = [
  {
    id: 1,
    name: 'Products',
  },
  {
    id: 2,
    name: 'Hire',
  },
  {
    id: 3,
    name: 'MasterClass',
  },
  {
    id: 4,
    name: 'Projects',
  },
  {
    id: 5,
    name: 'Blog',
  },
  {
    id: 6,
    name: 'Placements',
  },
  {
    id: 7,
    name: 'Sign up',
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="app-page w-full h-fit flex items-center justify-between px-10">
        <div className="app-page p-3">
          <Image
            alt="Lancers"
            src={'/lancersFullLogo.png'}
            width={100}
            height={100}
          />
        </div>
        <div>
          <div className="app-page hidden sm:flex items-center justify-center">
            {navbarButtonList.map((button) => {
              return <NavbarButton key={button.id} buttonName={button.name} />;
            })}
            <button className="app-page  p-3 rounded-lg font-semibold text-sm ">
              Sign In
            </button>
          </div>
          <div className="app-page flex sm:hidden items-center justify-end hover:cursor-pointer">
            <button onClick={() => setIsOpen((prev) => !prev)} className="p-2 hover:cursor-pointer">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden border rounded-2xl border-gray-300 transition-all duration-300 overflow-hidden ${
          isOpen ? ' opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col bg-gray-50">
          {navbarButtonList.map((button) => (
            <NavbarButton key={button.id} buttonName={button.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
