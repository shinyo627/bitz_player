import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC4ftWmn7pSLV3JZpfEMk7TOXPLnNwWP28',
  authDomain: 'bitzplayer-91734.firebaseapp.com',
  projectId: 'bitzplayer-91734',
  storageBucket: 'bitzplayer-91734.appspot.com',
  //   messagingSenderId: '351475017506',
  appId: '1:351475017506:web:7d23f25671e060f18fa77b',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
};
