/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useAuth } from '@/pages/api/AuthContext';

export default function Modal({ setOpenModal }) {
  const { logout } = useAuth();
  return (
    <div className="fixed inset-0 bg-white text-slate-800 flex flex-col z-10 font-bold duration-300">
      <div className="flex items-center justify-between border-b border-slate-800 p-4">
        <h1 className="text-2xl">Menu</h1>
        <AiOutlineClose onClick={() => setOpenModal(false)} className="duration-300 hover:rotate-90 text-2xl" />
      </div>
      <div className="p-4 flex flex-col gap-3 text-xl font-normal">
        <h2
          className=""
          onClick={() => {
            logout();
            setOpenModal(false);
          }}
        >
          Logout

        </h2>
      </div>
    </div>
  );
}
