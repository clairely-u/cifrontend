import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup,
 GoogleAuthProvider } from "firebase/auth";

 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwqDDywCaWTV6tAKHhW4a3Nss5opjIhm8",
    authDomain: "clothesinventoryfb.firebaseapp.com",
    projectId: "clothesinventoryfb",
    storageBucket: "clothesinventoryfb.appspot.com",
    messagingSenderId: "1098620622684",
    appId: "1:1098620622684:web:e4923e692bfdd234459399"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

  const authProvider = new GoogleAuthProvider();

  export function signInWithGoogle(): void {
    signInWithPopup(auth, authProvider);
    }
    export function signOut(): void {
    auth.signOut();
    }

  

 