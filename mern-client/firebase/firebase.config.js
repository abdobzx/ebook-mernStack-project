// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKca78DnzTO25ypBjx4df_ohe1mBVlujQ",
  authDomain: "mern-book-inventory-abfe5.firebaseapp.com",
  projectId: "mern-book-inventory-abfe5",
  storageBucket: "mern-book-inventory-abfe5.appspot.com",
  messagingSenderId: "674353356273",
  appId: "1:674353356273:web:8e84e57082b65b52c53850"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);      

export default app; 