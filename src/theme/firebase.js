import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import {GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const logout = (afterAction = () => {}) => {
  signOut(auth).then(r => afterAction(null));
};

export const signInAuthWithEmailAndPassword = async (password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, process.env.DEFAULT_USER_EMAIL, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
