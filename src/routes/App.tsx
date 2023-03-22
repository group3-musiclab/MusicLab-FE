import { useState } from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Guru/Home";
import DetailTeacher from "../pages/Guru/DetailTeacher";
import SearchingMentor from "../pages/User/SearchingMentor";
import Instrument from "../pages/Guru/Instrument";
import Genre from "../pages/Guru/Genre";
import MainHomePage from "../pages/MainHomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
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
    },
    {
      path: "/instrument",
      element: <Instrument />
    },
    {
      path: "/genre",

      element: <Genre />,
    },
    {
      path: "/homepage",
      element: <MainHomePage />,
    },
      element: <Genre />
    }

  ]);

  return <RouterProvider router={router} />;
}

export default App;
