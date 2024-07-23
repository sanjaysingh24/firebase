
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCxraWqLLNV9M-aL081Sl0pPbOc-oUoN-g",
  authDomain: "level-oxygen-427510-e2.firebaseapp.com",
  projectId: "level-oxygen-427510-e2",
  storageBucket: "level-oxygen-427510-e2.appspot.com",
  messagingSenderId: "39191391644",
  appId: "1:39191391644:web:fc521271ecbf85b3a7ec59",
  measurementId: "G-YLY7Y9QKE4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
