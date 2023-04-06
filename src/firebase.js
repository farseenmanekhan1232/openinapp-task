import { initializeApp } from "firebase/app";
import { OAuthProvider, getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

import keys from "../firebase_keys";

const googleProvider = new GoogleAuthProvider();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = keys;

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();
export const appleAuthProvider = new OAuthProvider("apple.com");
