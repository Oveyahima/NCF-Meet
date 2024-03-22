import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home.js';
import App from './App.js';
import Signup from './signup.js';
import Login from './login.js';
import Main from './main.js';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename="/react-rtc-demo">
    <>
      <ToastContainer
        toastClassName={() =>
          "relative flex py-4 px-3 rounded overflow-hidden cursor-pointer bg-white shadow-lg"
        }
        bodyClassName={() => "text-black text-base font-normal"}
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeButton={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/App" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  </Router>
);
