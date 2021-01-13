import firebase from "firebase/app"; 
import "firebase/firestore"; 
import "firebase/auth"; 


const firebaseConfig = {
    apiKey: "AIzaSyDHIWxnWbbix5xUUfhDwk9zu4TkhY6IXek",
    authDomain: "fir-auth-react-c5af9.firebaseapp.com",
    projectId: "fir-auth-react-c5af9",
    storageBucket: "fir-auth-react-c5af9.appspot.com",
    messagingSenderId: "618365784510",
    appId: "1:618365784510:web:86b9c3adb8cf28f54329ef"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const db = firebaseApp.firestore(); 
  export const auth = firebase.auth();  
