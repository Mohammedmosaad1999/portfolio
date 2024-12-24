import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import Link from 'next/link';


export default function Footer() {
  return (
    <div className="w-full py-8 flex justify-center bg-[#171721]">
      <div className="w-full max-w-[1200px] flex flex-col gap-3 items-center p-4 text-[#F2F3F4]">
        <p className="font-semibold text-lg text-[#854CE6]">Mohamed Mosaad</p>
        <div className="w-full max-w-[800px] mt-2 flex flex-row gap-8 justify-center text-lg transition-colors duration-200 ease-in-out">
          <Link className="text-[#F2F3F4] hover:text-[#854CE6]"
           href="/about">About</Link>
          <Link className="text-[#F2F3F4] hover:text-[#854CE6]"
           href="/skills">Skills</Link>
          <Link className="text-[#F2F3F4] hover:text-[#854CE6]" 
          href='/projects'>Projects</Link>
          <Link className="text-[#F2F3F4] hover:text-[#854CE6]" 
          href='/contact'>Contact</Link>
        </div>
        <div className="flex mt-4">
          <Link className="inline-block mx-4 text-2xl text-[#F2F3F4] hover:text-[#854CE6]" 
          href="mailto:muhammedmosaad96@gmail.com?subject=Hiring"
           target="_blank"><SiGmail/></Link>
          <Link className="inline-block mx-4 text-2xl text-[#F2F3F4] hover:text-[#854CE6]" 
          href="https://github.com/Mohammedmosaad1999"  
          target="_blank"><FaGithub/></Link>
          <Link className="inline-block mx-4 text-2xl text-[#F2F3F4] hover:text-[#854CE6]"
           href="https://linkedin.com/in/muhammed-mosaad-73265b2a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"><CiLinkedin /></Link>
          
            <Link className="inline-block mx-4 text-2xl text-[#F2F3F4] hover:text-[#854CE6]"
      href="https://wa.me/2001065763737"
      target="_blank">
  <SiWhatsapp/>
</Link>
        </div>
      </div>
    </div>
  );
}