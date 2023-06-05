import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD3Bs2foVAEWMLKuqvYMV2dnZMfnNZYmLk",
  authDomain: "genz-9192a.firebaseapp.com",
  databaseURL: "https://genz-9192a-default-rtdb.firebaseio.com",
  projectId: "genz-9192a",
  storageBucket: "genz-9192a.appspot.com",
  messagingSenderId: "1095471761052",
  appId: "1:1095471761052:web:f27b4c9c8d68e8b00d4f59",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };
