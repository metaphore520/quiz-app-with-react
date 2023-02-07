import { initializeApp } from "firebase/app";

const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
});

/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsU8bQiQo_u8Rt5faGmU7utMEQkC_hfRc",
  authDomain: "react-quiz-dev-61b47.firebaseapp.com",
  projectId: "react-quiz-dev-61b47",
  storageBucket: "react-quiz-dev-61b47.appspot.com",
  messagingSenderId: "565275689202",
  appId: "1:565275689202:web:89ec2cee3b47391340d06b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

*/
