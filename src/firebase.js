import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDStrZ-utBQ4otmpkQbBWZznttfIBYpD7M",
    authDomain: "amazoclonereact-f9429.firebaseapp.com",
    projectId: "amazoclonereact-f9429",
    storageBucket: "amazoclonereact-f9429.appspot.com",
    messagingSenderId: "818795290141",
    appId: "1:818795290141:web:7ab271f3958535c844f0f4",
    measurementId: "G-L4T7S3T4G7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth, db};