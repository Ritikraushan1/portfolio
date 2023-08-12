
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"




const firebaseConfig = {
  apiKey: "AIzaSyDQlwwc4ldb1nRe23kkOllHGm-USY3HGng",
  authDomain: "personal-portfolio-109df.firebaseapp.com",
  projectId: "personal-portfolio-109df",
  storageBucket: "personal-portfolio-109df.appspot.com",
  messagingSenderId: "382955139826",
  appId: "1:382955139826:web:65b040b199c4442147166b"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore()