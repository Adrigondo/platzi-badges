import React from "react"
import { BrowserRouter, Route, Routes, Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetails from "../pages/BadgeDetails";
import NotFound from "../pages/NotFound";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/badges", element: <Badges /> },
  { path: "/badges/new", element: <BadgeNew /> },
  { path: "/badges/:badgeId/edit", element: <BadgeEdit /> },
  { path: "/badges/:badgeId", element: <BadgeDetails /> },
  { path: "/404", element: <NotFound /> },
  {
    path: '*',
    element: <Navigate to={`/404`} />
  }
  // { path: "*", :"/404"},
], {
  basename: process.env.NODE_ENV === 'production'
    ? import.meta.env.VITE_REPO_NAME || '/'
    : '/',
})

function App() {
  console.log("VITE_REPO_NAME:", import.meta.env.VITE_REPO_NAME);
  return (
    <RouterProvider router={router} />
  );
}

export default App;