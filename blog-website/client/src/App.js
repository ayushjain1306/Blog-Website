import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from "./context/userContext.js";
import Account from "./Components/account/Account.jsx";
import Home from './Components/home/Home.jsx';
import CreateBlog from "./Components/createBlog/CreateBlog.jsx";
import OpenBlog from "./Components/openBlogs/OpenBlog.jsx";
import Profile from "./Components/dashboard/Profile.jsx";
import AuthorProfile from './Components/authorProfile/AuthorProfile.jsx';

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Account />} />
          <Route path='/signup' element={<Account />} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/blog" element={<OpenBlog />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/author-profile' element={<AuthorProfile />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;