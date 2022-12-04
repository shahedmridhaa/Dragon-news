import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXGorYUTCuIWfFH2jP6zYtdrjzxkNAu-s",
  authDomain: "dragon-news-31df7.firebaseapp.com",
  projectId: "dragon-news-31df7",
  storageBucket: "dragon-news-31df7.appspot.com",
  messagingSenderId: "988439079897",
  appId: "1:988439079897:web:e85734008c39c12a9a47c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;