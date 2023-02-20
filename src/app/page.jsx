'use client';

import Login from '@/components/Login';
import UserDashBord from '@/components/UserDashBord';
import { useAuth } from '@/pages/api/AuthContext';

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <>
      {!currentUser && <Login />}
      {currentUser && <UserDashBord />}
    </>
  );
}
