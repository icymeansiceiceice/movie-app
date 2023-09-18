// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPRt1ycb_LrRebxRIUtgKLGrhGsyO8Yxo",
  authDomain: "movie-app-3a236.firebaseapp.com",
  projectId: "movie-app-3a236",
  storageBucket: "movie-app-3a236.appspot.com",
  messagingSenderId: "607708814200",
  appId: "1:607708814200:web:c954cf211593c3546b068d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
const timestamp = serverTimestamp();

export {db,auth,timestamp}