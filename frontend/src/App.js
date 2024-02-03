// App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AuthenticatedPage from './components/AuthenticatedPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoginPanel, setLoginPanel] = useState(true);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const togglePanel = () => {
    setLoginPanel((prev) => !prev);
  };

  const route = createBrowserRouter([
    {
      path:'/', element:<HomePage/>
    },
    {
      path:'/login', element:<Login/>
    },
    {
      path:'/register',element:<Register/>
    },{
      path:'/auth',element:<AuthenticatedPage/>
    }
  ])

  return (
    <>
        <RouterProvider router={route}>
        {/* <Login/>
        <Register/> */}
        </RouterProvider>
        </>
  );
}

export default App;
