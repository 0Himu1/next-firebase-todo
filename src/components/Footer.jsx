import React from 'react';
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineFacebook } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full left-0 bg-transparent flex justify-center items-center text-2xl text-white gap-5 cursor-pointer">
      <AiOutlineInstagram />
      <AiOutlineGithub />
      <AiOutlineFacebook />
    </div>
  );
}
