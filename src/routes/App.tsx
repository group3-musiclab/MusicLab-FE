import { useState } from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
