"use client";
import React from 'react';
import Link from 'next/link';

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <div className="bg-[#191924] h-20 flex items-center justify-center text-base sticky top-0 z-10">
      <div className="flex justify-between items-center h-16 w-full px-6 max-w-[1200px]">
        <div className="flex justify-start items-center w-4/5 px-1">
          <Link href="/" className="font-bold text-lg text-[#F2F3F4]">Logo</Link>
        </div>
        <div className="hidden md:flex items-center justify-center w-full gap-8 px-1">
          <Link className="text-[#F2F3F4] font-medium cursor-pointer transition-all duration-200 ease-in-out hover:text-[#854CE6]" href="/about">About</Link>
          <Link className="text-[#F2F3F4] font-medium cursor-pointer transition-all duration-200 ease-in-out hover:text-[#854CE6]" href="/skills">Skills</Link>
          <Link className="text-[#F2F3F4] font-medium cursor-pointer transition-all duration-200 ease-in-out hover:text-[#854CE6]" href='/projects'>Projects</Link>
          <Link className="text-[#F2F3F4] font-medium cursor-pointer transition-all duration-200 ease-in-out hover:text-[#854CE6]" href='/contact'>Contact</Link>
        </div>
        <div className="hidden md:flex items-center justify-end w-4/5 px-1">
          <Link className="bg-transparent border-[1.8px] border-[#be1adb] flex justify-center items-center h-3/4 rounded-2xl text-[#854CE6] cursor-pointer px-5 font-medium text-base transition-all duration-600 ease-in-out hover:bg-[#854CE6] hover:text-white" href="https://github.com/Mohammedmosaad1999">Github Profile</Link>
        </div>
        <div className="md:hidden flex items-center absolute top-0 right-0 transform translate-x-[-100%] translate-y-[60%] text-2xl cursor-pointer text-[#F2F3F4]" onClick={() => setIsOpen(!isOpen)}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
      {
        isOpen &&
        <div className="flex flex-col justify-center gap-4 absolute top-20 right-0 w-full px-10 py-6 bg-[#191924] transition-all duration-600 ease-in-out rounded-b-2xl shadow-md opacity-100">
          <Link className="text-[#F2F3F4] font-medium cursor-pointer transition-all duration-200 ease-in-out hover:text-[#854CE6]" href="/about" onClick={() => setIsOpen(!isOpen)}>About</Link>
          <Link className="text-[#F2F3F4] font-medium cursor-pointer transition-all duration-200 ease-in-out hover:text-[#854CE6]" href='/skills' onClick={() => setIsOpen(!isOpen)}>Skills</Link>
          <Link className="text-[#F2F3F4] font-medium cursor-pointer transition-all duration-200 ease-in-out hover:text-[#854CE6]" href='/projects' onClick={() => setIsOpen(!isOpen)}>Projects</Link>
          <Link className="text-[#F2F3F4] font-medium cursor-pointer transition-all duration-200 ease-in-out hover:text-[#854CE6]" href='/contact' onClick={() => setIsOpen(!isOpen)}>Contact</Link>
        </div>
      }
    </div>
  );
}