import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import Link from 'next/link';
// import "./footer.css"

export default function Footer() {
  return (
    <div>  
      <div className="footer">
        <div className="footer-wrapper">
          <p className="footer-wrapper-title">Mohamed Mosaad</p>
          <div className="footer-nav">
            <Link className="footer-nav-items" href="/about">About</Link>
            <Link className="footer-nav-items" href="/skills">Skills</Link>
            <Link className="footer-nav-items" href='/projects'>Projects</Link>
            <Link className="footer-nav-items" href='/contact'>Contact</Link>
          </div>
          <div className="socialmedia">
            <Link className="socialmedia-icon" href="mailto:muhammedmosaad96@gmail.com?subject=Hiring" target="_blank"><SiGmail/></Link>
            <Link className="socialmedia-icon" href="https://github.com/Mohammedmosaad1999" target="_blank"><FaGithub/></Link>
            <Link className="socialmedia-icon" href="https://linkedin.com/in/muhammed-mosaad-73265b2a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><CiLinkedin /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}