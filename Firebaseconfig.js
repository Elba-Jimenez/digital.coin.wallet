// Import Firebase modules and configuration
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMS7hdH3a-s9rwUpku-ytYnvkN6qMLRKw",
  authDomain: "digital-coin-wallet.firebaseapp.com",
  projectId: "digital-coin-wallet",
  storageBucket: "digital-coin-wallet.appspot.com",
  messagingSenderId: "155591819246",
  appId: "1:155591819246:web:60e349eab9887ca1bdd8ff",
  measurementId: "G-GZRK9LYN48"
};

firebase.initializeApp(firebaseConfig);
