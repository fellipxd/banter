import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyBeMGlSlGDyJ-Y72a9QW2pjojgAQo37yZA",
  authDomain: "banter-5cc2e.firebaseapp.com",
  projectId: "banter-5cc2e",
  storageBucket: "banter-5cc2e.appspot.com",
  messagingSenderId: "1027453327289",
  appId: "1:1027453327289:web:8033b0549677cf69580868"
};



// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
