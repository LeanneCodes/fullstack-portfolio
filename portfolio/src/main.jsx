import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Link,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
