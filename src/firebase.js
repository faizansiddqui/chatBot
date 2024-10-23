import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD5pn9U5MVUEGUu2YpSNd36MMY7xDyaNTM",
    authDomain: "chat-9b662.firebaseapp.com",
    projectId: "chat-9b662",
    storageBucket: "chat-9b662.appspot.com",
    messagingSenderId: "385642087916",
    appId: "1:385642087916:web:872bffa77bbf327bacacc9",
    measurementId: "G-3Q0366L3WX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
