import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

var uuid = require('uuid');

const firebaseConfig = {
  apiKey: "AIzaSyDO_vR5c8DR3Ug2zyatEPp_DKBoPyplhNY",
  authDomain: "u-survey-b4bd5.firebaseapp.com",
  databaseURL: "https://u-survey-b4bd5-default-rtdb.firebaseio.com",
  projectId: "u-survey-b4bd5",
  storageBucket: "u-survey-b4bd5.appspot.com",
  messagingSenderId: "1019839758193",
  appId: "1:1019839758193:web:a0e59c77296596332b40d0",
  measurementId: "G-BL0XNB189J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
