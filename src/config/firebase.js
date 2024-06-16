// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn8g0iOfpcR7ad0ZYiyC27ykjBEUySZVs",
  authDomain: "clone-e2e03.firebaseapp.com",
  projectId: "clone-e2e03",
  storageBucket: "clone-e2e03.appspot.com",
  messagingSenderId: "598280271072",
  appId: "1:598280271072:web:1506fc410052808405cc85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
