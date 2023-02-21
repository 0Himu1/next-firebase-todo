/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { doc, setDoc, deleteField } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '@/pages/api/AuthContext';
import TodoCard from './TodoCard';
import useFetchTodos from './fetchTodos';

export default function UserDashBord() {
  const { userInfo, currentUser } = useAuth();
  const [todo, setTodo] = useState('');
  const [addTodo, setAddTodo] = useState(false);
  const {
    todos, loading, setTodos,
  } = useFetchTodos();
  const [edit, setEdit] = useState(null);
  const [editedValue, setEditedValue] = useState();

  useEffect(() => {
    if (!userInfo || Object.keys(userInfo).length === 0) {
      setAddTodo(true);
    }
  }, [userInfo]);

  function handeleAddEdit(key) {
    setEdit(key);
    setEditedValue(todos[key]);
  }

  async function handelAddTodo() {
    if (!todo) { return; }
    const newKey = Object.keys(todos).length === 0 ? 1 : Math.max(...Object.keys(todos)) + 1;
    setTodos({ ...todos, [newKey]: todo });
    const userRef = doc(db, 'user', currentUser.uid);
    await setDoc(userRef, { todos: { [newKey]: todo } }, { merge: true });
    setTodo('');
  }

  async function handelEditTodo() {
    if (!editedValue) {
      return;
    }
    const newKey = edit;
    setTodos({ ...todos, [newKey]: editedValue });
    const userRef = doc(db, 'user', currentUser.uid);
    await setDoc(userRef, { todos: { [newKey]: editedValue } }, { merge: true });
    setEdit(null);
    setEditedValue('');
  }

  async function handelDelete(key) {
    const tempObj = { ...todos };
    delete tempObj[key];
    setTodos(tempObj);
    const userRef = doc(db, 'user', currentUser.uid);
    await setDoc(
      userRef,
      { todos: { [key]: deleteField() } },
      { merge: true },
    );
  }

  return (
    <div className="h-screen w-full  flex flex-col justify-center items-center gap-3 sm:gap-5 px-5">
      {addTodo && (
      <div className="flex items-stretch w-full max-w-sm">
        <input
          type="text"
          name="todo"
          placeholder="Enter Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="outline-none p-2 w-80 text-lg text-slate-700"
        />
        <button
          className="w-fit px-4 bg-green-300 text-slate-800 font-medium"
          type="submit"
          onClick={handelAddTodo}
        >
          ADD
        </button>
      </div>
      )}

      {userInfo && !loading && (
      <>
        {Object.keys(todos).map((t) => (
          <TodoCard
            todo={todos[t]}
            key={t}
            handeleAddEdit={handeleAddEdit}
            index={t}
            edit={edit}
            setEditedValue={setEditedValue}
            editedValue={editedValue}
            handelEditTodo={handelEditTodo}
            handelDelete={handelDelete}
          />
        ))}
      </>
      )}
      {!addTodo && (
      <button
        className="border-green-300 border text-green-300 py-2 text-center uppercase font-medium text-lg w-full max-w-sm"
        type="submit"
        onClick={() => setAddTodo(true)}
      >
        Add todo
      </button>
      )}
    </div>
  );
}
