import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Cookies from "js-cookie";
import UserProvider from "./context/userContext.js";
import Account from "./Components/account/Account.jsx";
import Home from './Components/home/Home.jsx';
import DefaultPage from "./DefaultPage.jsx";
import CreateBlog from "./Components/createBlog/CreateBlog.jsx";
import OpenBlog from "./Components/openBlogs/OpenBlog.jsx";

function App() {
  const token = Cookies.get('token');

  const isValid = () => {
    if (!token){
      return false;
    }

    const [header, payload, signature] = token.split('.');

    const decodedPayload = JSON.parse(atob(payload));

    if (header && signature && decodedPayload && decodedPayload.exp){
      const currentTime = Math.floor(Date.now()/1000);
      const expiryTime = decodedPayload.exp;

      if (expiryTime > currentTime){
        return false;
      }

      return true;
    }

    return false;
  }

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Account />} />
          <Route path='/signup' element={<Account />} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path = "/create-blog" element = {<CreateBlog />} />
          <Route path = "/blog" element = {<OpenBlog />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
