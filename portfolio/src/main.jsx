import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './index.css'
import Selenium from './pages/Selenium.jsx';
import Jira from './pages/Jira.jsx'
import Postman from './pages/Postman.jsx'
import Appium from './pages/Jira.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "selenium",
    element: <Selenium />
  },
  {
    path: "jira",
    element: <Jira />
  },
  {
    path: "postman",
    element: <Postman />
  },
  {
    path: "appium",
    element: <Appium />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
