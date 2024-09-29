// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkRt9c6jq6ELX3vPcoMnyilSe8NBd6Ccg",
  authDomain: "fairbase-react-todo-app.firebaseapp.com",
  projectId: "fairbase-react-todo-app",
  storageBucket: "fairbase-react-todo-app.appspot.com",
  messagingSenderId: "465940159734",
  appId: "1:465940159734:web:7a6a7b9e460cfd36c660d7",
  measurementId: "G-HMJYBDRK6B"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export  const auth = getAuth(app)
export const db = getFirestore(app);











