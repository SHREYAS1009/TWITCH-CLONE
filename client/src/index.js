import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';


import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {AuthPage} from "./AuthPage";
import {DashboardPage} from "./DashboardPage/DashboardPage";
import './index.css';


const router = createBrowserRouter([
  {path:"/auth",element:<AuthPage/>},
  {path:"/", element:<DashboardPage/>},

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
        <RouterProvider router={router}/>

        
      </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
