// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOkSgRebk9V0GwcfCF5xaYhyph_HbCMG8",
    authDomain: "questionnaire-c3b08.firebaseapp.com",
    projectId: "questionnaire-c3b08",
    storageBucket: "questionnaire-c3b08.appspot.com",
    messagingSenderId: "1077793874849",
    appId: "1:1077793874849:web:05f2c0e97e6888290ee1e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };