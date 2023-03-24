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
import EditTeacher from "../pages/Guru/EditTeacher";
import Chat from "../pages/User/Chat";
import Profile from "../pages/User/Profile";
import { DetailCourse, EditCourse, UploadCourse } from "../pages/Guru/Course";
import HIstory from "../pages/User/HIstory";
import History from "../pages/Guru/History";
import axios from "axios";
import { useCookies } from "react-cookie";

function App() {
  const [cookie, setCookie] = useCookies(["token"]);

  axios.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${cookie.token}`;
    return config;
  });
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
      element: <Instrument />,
    },
    {
      path: "/genre",
      element: <Genre />,
    },
    {
      path: "/homepage",
      element: <MainHomePage />,
    },
    {
      path: "/genre",
      element: <Genre />,
    },
    {
      path: "/editTeacher",
      element: <EditTeacher />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/detailCourse",
      element: <DetailCourse />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/uploadCourse",
      element: <UploadCourse />,
    },
    {
      path: "/editCourse",
      element: <EditCourse />,
    },
    {
      path: "/historyStudent",
      element: <HIstory />,
    },
    {
      path: "/historyTeacher",
      element: <History />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
