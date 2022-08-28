// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZoIipO-xNx3OCs2L1ToQ168F5Nd91ZPg",
  authDomain: "ts-stocks-ec022.firebaseapp.com",
  projectId: "ts-stocks-ec022",
  storageBucket: "ts-stocks-ec022.appspot.com",
  messagingSenderId: "802897012084",
  appId: "1:802897012084:web:b29d47739ab643a351f821",
  measurementId: "G-YM6NDKNPDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default app;
