'use client';

import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { useAuth } from '@/pages/api/AuthContext';
import Modal from './Modal';

export default function Header() {
  const { currentUser } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className="fixed top-0 w-full left-0 flex justify-between items-center py-4 px-6 text-3xl border-b border-white">
        <h1>TODO LIST</h1>
        <CgProfile
          className="duration-300 hover:opacity-60"
          onClick={() => setOpenModal(currentUser)}
        />
      </div>
    </>
  );
}
