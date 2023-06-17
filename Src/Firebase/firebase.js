// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgm6404CgGmrccLkY5LozGj35JOTYUVZY",
  authDomain: "eden-aqua.firebaseapp.com",
  projectId: "eden-aqua",
  storageBucket: "eden-aqua.appspot.com",
  messagingSenderId: "804825155075",
  appId: "1:804825155075:web:fbb5c660490571b8f5b036",
  measurementId: "G-C2C8S5M7ZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);