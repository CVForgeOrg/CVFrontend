// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCc_nqec0lfRVBs7JPurTrWm_3oXa0t3p8",
    authDomain: "cvforge-bf66a.firebaseapp.com",
    projectId: "cvforge-bf66a",
    storageBucket: "cvforge-bf66a.appspot.com",
    messagingSenderId: "920203331334",
    appId: "1:920203331334:web:469338eeaf2e0e3c7a8087",
    measurementId: "G-T2XGMLCBVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;