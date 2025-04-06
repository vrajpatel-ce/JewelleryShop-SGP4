// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, browserPopupRedirectResolver } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCUe_UiW9AmY5jCv109wEhRX0Gn_nv8AY",
  authDomain: "jewellery-shop-7ea4b.firebaseapp.com",
  projectId: "jewellery-shop-7ea4b",
  storageBucket: "jewellery-shop-7ea4b.firebasestorage.app",
  messagingSenderId: "205568462269",
  appId: "1:205568462269:web:47d3e8bdd083f081d256d4",
  measurementId: "G-83HRL27WN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with custom settings
const auth = getAuth(app);
auth.useDeviceLanguage(); // Set language to user's preferred language

// Configure Google Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
  // Add any additional OAuth 2.0 scopes you need
  scope: [
    'profile',
    'email'
  ].join(' ')
});

export { auth, googleProvider, browserPopupRedirectResolver };
export default app;