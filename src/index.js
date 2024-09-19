// index.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider, OAuthProvider, EmailAuthProvider, onAuthStateChanged } from 'firebase/auth';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAwss1ltaE8np7Fvhqwk9H5oN8vqbwmVsI",
  authDomain: "foresight-9bbf7.firebaseapp.com",
  projectId: "foresight-9bbf7",
  storageBucket: "foresight-9bbf7.appspot.com",
  messagingSenderId: "686349833822",
  appId: "1:686349833822:web:91a2344d6cd90da27cc6cf",
  measurementId: "G-M6X8YN5LCW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Analytics
const auth = getAuth(app);
const analytics = getAnalytics(app); // Only if you use Firebase Analytics

// Set up authentication providers
const googleProvider = new GoogleAuthProvider();
const yahooProvider = new OAuthProvider('yahoo.com'); // Verify Yahoo provider ID
const emailProvider = new EmailAuthProvider();

// Monitor authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is logged in');
  } else {
    console.log('No user logged in');
  }
});

export { auth, googleProvider, yahooProvider, emailProvider };
