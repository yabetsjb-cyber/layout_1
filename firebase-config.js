// Firebase SDK v9+ (Modular) via CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {
    getDatabase,
    ref,
    push,
    set,
    get,
    update,
    remove,
    onValue,
    onChildAdded,
    onChildChanged,
    onChildRemoved,
    query,
    orderByChild,
    equalTo
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';

import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

// ⚠️ Replace apiKey, messagingSenderId, and appId with your actual values
// Find them at: https://console.firebase.google.com/u/0/project/burgershotel-d54cb/settings/general
const firebaseConfig = {

    apiKey: "AIzaSyBmW-ZnLm5-kj-etJKBnBTbIrBZRZBivSM",

    authDomain: "burgershotel-d54cb.firebaseapp.com",

    databaseURL: "https://burgershotel-d54cb-default-rtdb.firebaseio.com",

    projectId: "burgershotel-d54cb",

    storageBucket: "burgershotel-d54cb.firebasestorage.app",

    messagingSenderId: "626309924971",

    appId: "1:626309924971:web:3c6385d62e230a7c8f092e",

    measurementId: "G-BVDP17W47M"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export {
    db,
    auth,
    ref,
    push,
    set,
    get,
    update,
    remove,
    onValue,
    onChildAdded,
    onChildChanged,
    onChildRemoved,
    query,
    orderByChild,
    equalTo,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
};
