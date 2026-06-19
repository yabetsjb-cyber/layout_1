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

// ⚠️ Replace apiKey, messagingSenderId, and appId with your actual values
// Find them at: https://console.firebase.google.com/u/0/project/burgershotel-d54cb/settings/general
const firebaseConfig = {
    apiKey: "AIzaSyxxxxxxxxxxxxxxxx",
    authDomain: "burgershotel-d54cb.firebaseapp.com",
    databaseURL: "https://burgershotel-d54cb-default-rtdb.firebaseio.com",
    projectId: "burgershotel-d54cb",
    storageBucket: "burgershotel-d54cb.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {
    db,
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
};
