// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from 'firebase/app';

// Add the Firebase products and methods that you want to use
import { getAuth, EmailAuthProvider } from 'firebase/auth';
import {} from 'firebase/firestore';

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

let rsvpListener = null;
let guestbookListener = null;

let db, auth;

async function main() {
     // Initialize the FirebaseUI widget using Firebase
  const ui = new firebaseui.auth.AuthUI(auth);
  // Add Firebase project configuration object here
  const firebaseConfig = {
    apiKey: "AIzaSyCjTxAu4YhYg_quwFK3nxN8_Cgt-Tqg1-E",
    authDomain: "app-base-50a7d.firebaseapp.com",
    projectId: "app-base-50a7d",
    storageBucket: "app-base-50a7d.appspot.com",
    messagingSenderId: "495620980841",
    appId: "1:495620980841:web:bfae1082ed4ad4fc13e2f8"
  };

  // initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);

//add the FirebaseUI initialization statement
  initializeApp(firebaseConfig);
    auth = getAuth();

  // FirebaseUI config
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      },
    },
  };

  // const ui = new firebaseui.auth.AuthUI(auth);
}
main();
