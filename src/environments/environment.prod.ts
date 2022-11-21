// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCdj7hxv9xiUVXf9bo1g_BJxmyH-HecEvk',
  authDomain: 'tmdb-firebase-aa74d.firebaseapp.com',
  databaseURL: 'https://tmdb-firebase-aa74d-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'tmdb-firebase-aa74d',
  storageBucket: 'tmdb-firebase-aa74d.appspot.com',
  messagingSenderId: '1026947791103',
  appId: '1:1026947791103:web:1a98fbac81685e0da234ca',
  measurementId: 'G-GLSV88GX0P'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const environment = {
  production: true,
  API_BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY_M: 'a97a9c09e4685018971221092cbb3067',
  DOMINIO: 'https://tmdb-api-ae6f1.web.app'
};
