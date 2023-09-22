
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAufQfLBcd4XsYyxyGVKhJq__EbGKUuC3w",
    authDomain: "sit313-devlink.firebaseapp.com",
    projectId: "sit313-devlink",
    storageBucket: "sit313-devlink.appspot.com",
    messagingSenderId: "511250243314",
    appId: "1:511250243314:web:6b2d38bc8c8f440eccfa6b"
  };


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
prompt:"select_account"
});


export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInformation) => {
    if (!userAuth || !userAuth.email) {
      console.error('Invalid userAuth object:', userAuth);
      return null;
    }
  
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
    console.log(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        });
        console.log('User document created in Firestore');
      } catch (error) {
        console.log('Error creating user document:', error.message);
      }
    }
  
    return userDocRef;
  };
  

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Error creating user:', error.message);
      throw error;
    }
  };