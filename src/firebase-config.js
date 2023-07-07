import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAqvm4jjyYR36pqkxP-_m1MfdgFcSTgLwo",
    authDomain: "https://openinapp-assignment-three.vercel.app/",
    projectId: "openinapp-d3d56",
    storageBucket: "openinapp-d3d56.appspot.com",
    messagingSenderId: "453353808955",
    appId: "1:453353808955:web:9e4325aa9e10a2f1c7a81e"
  };


const app = initializeApp(firebaseConfig);
export const provider= new GoogleAuthProvider();
export const auth=getAuth(app);
export const db = getFirestore(app) 
