import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Addcowpage from './pages/addcowpage/addcowpage';
import Allbirthspage from './pages/birthspage/birthspage';
import Addbirthpage from './pages/addbirthpage/addbirthpage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Milkpage from './pages/milkpage/milkpage';
import Medicalexmpage from './pages/medical exm page/medicalexmpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/addcow",
    element: <Addcowpage/>,
  },
  {
    path: "/births",
    element: <Allbirthspage/>,
  },
  {
    path: "/addbirth",
    element: <Addbirthpage/>,
  },
  {
    path: "/milk",
    element: <Milkpage/>,
  },
  {
    path: "/medicalexm",
    element: <Medicalexmpage/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
