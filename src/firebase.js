import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCNLMd5LqGjPW6V2zixnTEJTTOCERlilH0",
  authDomain: "whats-app-clone-7a272.firebaseapp.com",
  projectId: "whats-app-clone-7a272",
  storageBucket: "whats-app-clone-7a272.appspot.com",
  messagingSenderId: "597063008755",
  appId: "1:597063008755:web:a75cb06ea09efcbae89286",
  measurementId: "G-G45XVZL7RV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;