// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0JDc2qqXv8fvusKKOAXMphNqpTUpOVXI",
    authDomain: "gestion-contact-43ac9.firebaseapp.com",
    projectId: "gestion-contact-43ac9",
    storageBucket: "gestion-contact-43ac9.appspot.com",
    messagingSenderId: "747926323146",
    appId: "1:747926323146:web:3d8e78f49fe261826e1933"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);