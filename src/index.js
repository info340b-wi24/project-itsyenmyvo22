import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZiZHWhm0wCyN1UJAd2ZCjEkVgAHZ0uKg",
  authDomain: "armybase-c294a.firebaseapp.com",
  projectId: "armybase-c294a",
  storageBucket: "armybase-c294a.appspot.com",
  messagingSenderId: "732191123489",
  appId: "1:732191123489:web:61b3dc83c990e8db345b60",
  databaseURL: "https://armybase-c294a-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
