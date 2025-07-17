import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Home from './Components/Home';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Layout from './Components/Layout';
import Github, { getLoaderData } from "./Components/Github";
import User from './Components/User';

function App() {
    const route=createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    path:"",
                    element:<Home/>
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/Contact",
                    element:<Contact/>
                },
                {
                    path:"/codeforces/:handleName",
                    element:<Github />,
                    loader:getLoaderData,
                    
                },
                {
                    path:"/User/:id",
                    element:<User/>
                }
        ]
        }
    ]);
    return (
        <>
        <RouterProvider router={route}/>
        </>   
    )
}

export default App
