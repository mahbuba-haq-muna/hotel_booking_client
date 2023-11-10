// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvCygbignB5I6ikclwt8fvAlQ96vUN8VM",
  authDomain: "royel-oasis-client.firebaseapp.com",
  projectId: "royel-oasis-client",
  storageBucket: "royel-oasis-client.appspot.com",
  messagingSenderId: "885981766569",
  appId: "1:885981766569:web:806f652aa6902ecb5a9ab8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;