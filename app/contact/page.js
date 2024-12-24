"use client";

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const message = useRef(" ");
  
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      message.current.style.display = "block";
    }
  }, [success]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ie99naq', 'template_xpmbvjm', form.current, 'wFrBqERY6bypH8-tK')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
      }, (error) => {
        console.log(error.text);
        setError(true);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center relative z-1">
      <div className="flex flex-col justify-between items-center w-full max-w-[1350px] p-0 pb-20 gap-3">
        <h2 className="text-4xl text-center font-semibold mt-5 text-[#18191a]">Contact Me</h2>
        <p className="text-lg text-center max-w-[600px] text-[#202020]">Feel free to reach out to me for any inquiries or collaborations.</p>
        <form ref={form} onSubmit={sendEmail} className="w-[95%] max-w-[600px] flex flex-col bg-[#171721] p-8 rounded-2xl shadow-lg mt-7 gap-3">
          <h3 className="text-2xl mb-1 font-semibold text-[#F2F3F4]">Send a Message</h3>
          <input type="text" name="user_name" placeholder="Your Name" className="flex-1 bg-transparent border border-[#b1b2b3] outline-none text-lg text-[#F2F3F4] rounded-xl p-3 focus:border-[#854CE6]" required />
          <input type="email" name="user_email" placeholder="Your Email" className="flex-1 bg-transparent border border-[#b1b2b3] outline-none text-lg text-[#F2F3F4] rounded-xl p-3 focus:border-[#854CE6]" required />
          <textarea name="message" placeholder="Your Message" className="flex-1 bg-transparent border border-[#b1b2b3] outline-none text-lg text-[#F2F3F4] rounded-xl p-3 focus:border-[#854CE6]" required />
          <button type="submit" className="w-full text-center bg-gradient-to-br from-purple-600 to-pink-600 p-3 mt-1 rounded-xl border-none text-[#F2F3F4] text-lg font-semibold cursor-pointer">Send</button>
        </form>
        <div ref={message} className="absolute hidden w-[250px] h-[50px] bg-gradient-to-br from-purple-600 to-pink-600 text-lg text-white text-center leading-[50px] ml-[80%] mt-[-30%] animate-message">Message Sent!</div>
      </div>
    </div>
  );
}