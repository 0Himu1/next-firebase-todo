import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '@/pages/api/AuthContext';

export default function useFetchTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    async function fetchDeta() {
      try {
        const docRef = doc(db, 'user', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setTodos(docSnap.data().todos);
        }
      } catch (err) { setError('Failed to load Todos'); } finally { setLoading(false); }
    }
    fetchDeta();
  }, []);

  return {
    todos, loading, error, setTodos,
  };
}
