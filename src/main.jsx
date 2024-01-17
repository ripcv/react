import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYl1t9SmWt9znmhOdwtb2cGd_H0HG2ZX4",
  authDomain: "reactjs-58501.firebaseapp.com",
  projectId: "reactjs-58501",
  storageBucket: "reactjs-58501.appspot.com",
  messagingSenderId: "147870638650",
  appId: "1:147870638650:web:474cec460572dab0890b03"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
