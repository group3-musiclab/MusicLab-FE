import { useState } from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Home from "../pages/Guru/Home";
import DetailTeacher from "../pages/Guru/DetailTeacher";
import SearchingMentor from "../pages/User/SearchingMentor";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/teacher/id_teacher",
      element: <DetailTeacher />,
    },
    {
      path: "/beranda/courses",
      element: <Home />,
    },
    {
      path: "/searching",
      element: <SearchingMentor />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
