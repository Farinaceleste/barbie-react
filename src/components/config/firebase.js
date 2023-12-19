import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {GoogleAuthProvider, getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBEYnmCMN0L_Eko6hbJjehszKWD8pVpcMw",
  authDomain: "react-barbie-359c6.firebaseapp.com",
  projectId: "react-barbie-359c6",
  storageBucket: "react-barbie-359c6.appspot.com",
  messagingSenderId: "351231922742",
  appId: "1:351231922742:web:115e271d304a829da1be97"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);

export const auth = getAuth (app);

export const googleProvider = new GoogleAuthProvider ();

