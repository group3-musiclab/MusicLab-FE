import { useState } from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Home from "../pages/Guru/Home";
import DetailTeacher from "../pages/Guru/DetailTeacher";

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
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
