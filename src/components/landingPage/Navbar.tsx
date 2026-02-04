'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import NavbarButton from './NavbarButton';

const navbarButtonList = [
  {
    id: 1,
    name: 'Curriculum',
  },
  {
    id: 2,
    name: 'Alumni',
  },
  {
    id: 3,
    name: 'Job Portal',
  },
  {
    id: 4,
    name: 'Placement Statistics',
  },
  {
    id: 5,
    name: 'Free Resources',
  },
 ];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="app-page relative w-full h-fit flex items-center justify-between sm:px-10">
        <div className="app-page p-3">
          <Image
            alt="Lancers"
            src={'/lancersFullLogo.png'}
            width={0}
            height={0}
            className='h-16 w-auto'
          />
        </div>
        <div>
          {/* Desktop */}
          <div className="app-page hidden sm:flex items-center justify-center">
            {navbarButtonList.map((button) => {
              return <NavbarButton key={button.id} buttonName={button.name} />;
            })}
            
            
          </div>
          {/* Mobile */}
          <div className="app-page flex sm:hidden items-center justify-end hover:cursor-pointer">
            <button onClick={() => setIsOpen((prev) => !prev)} className="p-2 hover:cursor-pointer">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <button className='hidden sm:block rounded-2xl px-6 py-1.5 font-medium border '>
          Talk With counsellor
        </button>
        
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
          <button className='mx-6 sm:hidden rounded-md px-6 py-1.5 font-bold border '>
              Talk With counsellor
            </button>
        </div>
      </div>
    </div>
  );
}
