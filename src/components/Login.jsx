/* eslint-disable no-return-await */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import React, { useState } from 'react';
import { useAuth } from '@/pages/api/AuthContext';

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [islogingin, setIslogingin] = useState(true);

  const changeHandeler = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const { login, signup } = useAuth();
  async function sunmithandler() {
    const { email, password } = data;
    if (!email || !password) {
      setError('Please enter your email & password');
    } else if (islogingin) {
      try {
        await login(email, password);
      } catch (err) {
        setError('Incorrect email or Password');
      }
    } else {
      await signup(email, password);
    }
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-extrabold text-4xl mb-5">
        {islogingin ? 'LOGIN' : 'RESISTER'}
      </h1>
      <input
        type="text"
        className="outline-none p-2 px-4 w-80 mb-2 text-slate-600 border-b-2 focus:border-green-300 duration-300"
        name="email"
        placeholder="Email Address"
        value={data.email}
        onChange={changeHandeler}
      />
      <input
        type="password"
        className="outline-none p-2 px-4 w-80 mb-2 text-slate-600 border-b-2 focus:border-green-300 duration-300"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={changeHandeler}
      />
      <button
        className="p-2 px-4 border-green-300 border-2 w-80 text-white text-xl font-bold uppercase relative after:absolute after:top-0 after:right-full after:bg-green-300 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-800 mb-2"
        type="submit"
        onClick={sunmithandler}
      >
        <h2 className="relative z-20">submit</h2>
      </button>
      {error && (
      <div className="text-center text-sm border-2 border-rose-500 text-rose-500 w-80 p-2 px-4">
        {error}
      </div>
      )}
      <h2
        className="duration-300 hover:scale-110"
        onClick={() => setIslogingin(!islogingin)}
      >
        {!islogingin ? 'Login' : 'Resister'}
      </h2>
    </div>
  );
}
