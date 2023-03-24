// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
//import "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTevIpOMdJUU5E1Gmo-95Kb31DlWP5RX4",
  authDomain: "rest-backend-d3993.firebaseapp.com",
  projectId: "rest-backend-d3993",
  storageBucket: "rest-backend-d3993.appspot.com",
  messagingSenderId: "1064025900810",
  appId: "1:1064025900810:web:3cb39993d3e01a687ddcf3",
  measurementId: "G-EBW10M735G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)
//export const ref = FirebaseApp.storage().ref()
//export const uploadBytes = FirebaseApp.storage().uploadBytes()