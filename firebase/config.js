import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-fFe3Ufs6csX4eDbhB3gm99ZRbCeTLH0",
  authDomain: "quiztest-bd5a7.firebaseapp.com",
  projectId: "quiztest-bd5a7",
  storageBucket: "quiztest-bd5a7.appspot.com",
  messagingSenderId: "1074246592364",
  appId: "1:1074246592364:web:935f9fb2bbf1523380f549",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
