
// import  firebase from 'firebase';
import { firebase } from '@firebase/app';
import '@firebase/storage';
import '@firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAB3R4nP5eznVMnT8TSMBdD08RhtD907lM",
    authDomain: "fotogram-b7b26.firebaseapp.com",
    databaseURL: "https://fotogram-b7b26.firebaseio.com",
    projectId: "fotogram-b7b26",
    storageBucket: "fotogram-b7b26.appspot.com",
    messagingSenderId: "222497378848",
    appId: "1:222497378848:web:f03094afc0232bf7a5a245"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export { projectStorage, projectFirestore, timestamp } ;