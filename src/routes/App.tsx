import { useState } from "react";
import { Navigate, RouterProvider } from "react-router";
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
import Profile from "../pages/Guru/Profile";
import ProfilStudent from "../pages/User/Profile";
import { DetailCourse, EditCourse, UploadCourse } from "../pages/Guru/Course";
import HIstory from "../pages/User/HIstory";
import History from "../pages/Guru/History";
import Payment from "../pages/User/Payment";
import axios from "axios";
import { useCookies } from "react-cookie";
import EditStudent from "../pages/User/EditStudent";
import ModalChat from "../pages/User/ModalChat";
import Ulasan from "../pages/User/Ulasan";

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  axios.interceptors.request.use(function (config) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${cookie.token}`;
    return config;
  });
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/ProfileDetail/:id",
      element: <DetailTeacher />,
    },
    {
      path: "/profileTeacher",
      element: <Profile />,
    },

    {
      path: "/searching",
      element: <SearchingMentor />,
    },

    {
      path: "/daftarKursus",
      element: checkToken ? <Home /> : <Navigate to="/" />,
    },

    {
      path: "/instrument",
      element: checkToken ? <Instrument /> : <Navigate to="/" />,
    },
    {
      path: "/genre",
      element: checkToken ? <Genre /> : <Navigate to="/" />,
    },
    {
      path: "/",
      element: <MainHomePage />,
    },
    {
      path: "/genre",
      element: checkToken ? <Genre /> : <Navigate to="/" />,
    },
    {
      path: "/editTeacher/:id",
      element: checkToken ? <EditTeacher /> : <Navigate to="/" />,
    },
    {
      path: "/ProfilStudent",
      element: checkToken ? <ProfilStudent /> : <Navigate to="/" />,
    },
    {
      path: "/detailCourse/:id",
      element: checkToken ? <DetailCourse /> : <Navigate to="/" />,
    },
    {
      path: "/chat",
      element: checkToken ? <Chat /> : <Navigate to="/" />,
    },

    {
      path: "/uploadCourse",
      element: checkToken ? <UploadCourse /> : <Navigate to="/" />,
    },
    {
      path: "/editCourse/:id",
      element: checkToken ? <EditCourse /> : <Navigate to="/" />,
    },
    {
      path: "/historyStudent",
      element: checkToken ? <HIstory /> : <Navigate to="/" />,
    },
    {
      path: "/historyTeacher",
      element: checkToken ? <History /> : <Navigate to="/" />,
    },
    {
      path: "/editStudent",
      element: checkToken ? <EditStudent /> : <Navigate to="/" />,
    },
    {
      path: "/payment/:id",
      element: checkToken ? <Payment /> : <Navigate to="/" />,
    },
    {
      path: "/ulasan",
      element: checkToken ? <Ulasan /> : <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
