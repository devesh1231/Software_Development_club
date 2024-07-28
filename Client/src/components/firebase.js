// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app" ;
import {getAuth} from "firebase/auth" ;
import {getFirestore} from "firebase/firestore" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKGdddPuqvMDWY8OLOjKkX5o2Yhb7A_Xs",
  authDomain: "sdcwebsite-807cc.firebaseapp.com",
  projectId: "sdcwebsite-807cc",
  storageBucket: "sdcwebsite-807cc.appspot.com",
  messagingSenderId: "578980785438",
  appId: "1:578980785438:web:05279e029d3e77fb572d0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth() ;
export const db = getFirestore(app) ;
export default app ;

// in auth only email and passowrd are there
// but if you want to store and see fname and lname you 
// need to store on firestore