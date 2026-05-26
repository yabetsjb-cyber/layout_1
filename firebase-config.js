// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, push, set, onValue, update, remove, onChildAdded } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2ZEoec4ajtIp1neq0Gkg4TZf7Ixejvuo",
    authDomain: "menu-444d8.firebaseapp.com",
    databaseURL: "https://menu-444d8-default-rtdb.firebaseio.com",
    projectId: "menu-444d8",
    storageBucket: "menu-444d8.firebasestorage.app",
    messagingSenderId: "1045440091593",
    appId: "1:1045440091593:web:86e3458e2cc7d86ea30418"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, set, onValue, update, remove, onChildAdded };
