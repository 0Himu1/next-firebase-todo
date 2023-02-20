import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDMJsTWVi9hDLRG_ANMGoI4ZF5bz5mU8iE',
  authDomain: 'todo-cb2c0.firebaseapp.com',
  projectId: 'todo-cb2c0',
  storageBucket: 'todo-cb2c0.appspot.com',
  messagingSenderId: '928942414609',
  appId: '1:928942414609:web:cb0777f0784ef811c90ab0',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
