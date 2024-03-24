import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from "./context/userContext.js";
import Account from "./Components/account/Account.jsx";
import Home from './Components/home/Home.jsx';
import Dashboard from "./Components/dashboard/Dashboard.jsx";
import CreateBlog from "./Components/createBlog/CreateBlog.jsx";
import OpenBlog from "./Components/openBlogs/OpenBlog.jsx";

function App() {

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
          <Route path='/dashboard' element={<Dashboard/>}>
            {/* <Route path='/' /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
