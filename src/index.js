import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZiZHWhm0wCyN1UJAd2ZCjEkVgAHZ0uKg",
  authDomain: "armybase-c294a.firebaseapp.com",
  projectId: "armybase-c294a",
  storageBucket: "armybase-c294a.appspot.com",
  messagingSenderId: "732191123489",
  appId: "1:732191123489:web:61b3dc83c990e8db345b60",
  databaseURL: "https://armybase-c294a-default-rtdb.firebaseio.com/"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

