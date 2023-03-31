import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAdT_HjMjMwmlST2qyGGdqFaalbMCzWObI",
    authDomain: "chats-f95e2.firebaseapp.com",
    projectId: "chats-f95e2",
    storageBucket: "chats-f95e2.appspot.com",
    messagingSenderId: "680534311860",
    appId: "1:680534311860:web:ae0d521e57681fcf66a8e1",
    measurementId: "G-W9WNF51WJP"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;