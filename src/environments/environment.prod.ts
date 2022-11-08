// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDisVYxyPuy8diVACyRar3OvkvFgR5qzJc",
  authDomain: "moviedb-api-e496d.firebaseapp.com",
  projectId: "moviedb-api-e496d",
  storageBucket: "moviedb-api-e496d.appspot.com",
  messagingSenderId: "119251570712",
  appId: "1:119251570712:web:c911401d81620f0358336d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const environment = {
  production: true,
  API_BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY_M: 'a97a9c09e4685018971221092cbb3067',
  DOMINIO: 'https://tmdb-api-ae6f1.web.app'
};