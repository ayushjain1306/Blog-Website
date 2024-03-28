import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from "./context/userContext.js";
import Account from "./Components/account/Account.jsx";
import Home from './Components/home/Home.jsx';
import Dashboard from "./Components/dashboard/Dashboard.jsx";
import CreateBlog from "./Components/createBlog/CreateBlog.jsx";
import OpenBlog from "./Components/openBlogs/OpenBlog.jsx";
import Profile from "./Components/dashboard/Profile.jsx";
import Blogs from "./Components/dashboard/Blogs.jsx";

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
          <Route path='/profile' element={<Dashboard/>}>
            <Route index element={<Profile />} />
            <Route path='blogs' element={<Blogs />} />
            <Route index element={<Profile />} />
            <Route index element={<Profile />} />
            <Route index element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
