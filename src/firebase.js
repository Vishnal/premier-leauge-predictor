// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0z-h6vgP01EST5YIf9KuigEeuMamF15A",
  authDomain: "premier-league-predictor-acec8.firebaseapp.com",
  projectId: "premier-league-predictor-acec8",
  storageBucket: "premier-league-predictor-acec8.appspot.com",
  messagingSenderId: "190395431050",
  appId: "1:190395431050:web:2c1f2b435e48a64bd1d573",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
