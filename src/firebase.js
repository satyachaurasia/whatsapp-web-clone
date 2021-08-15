import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg0zNeVkPEW7T30KeOes4c3fui-vnuVzw",
  authDomain: "whatsapp-web-clone-1a4c7.firebaseapp.com",
  databaseURL:
    "https://whatsapp-web-clone-1a4c7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "whatsapp-web-clone-1a4c7",
  storageBucket: "whatsapp-web-clone-1a4c7.appspot.com",
  messagingSenderId: "290493399179",
  appId: "1:290493399179:web:5d7c1a017288a34c5a948e",
  measurementId: "G-5D5DW5BE3E",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
