import React from "react";
import Signin from "./pages/Sign-in/Sign-in";
import Verif from "./pages/Verification/verif";
import Pref from "./pages/Preferences/pref";
import ProfileReg from "./pages/Profile-reg/profile-reg";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
function Routing() {
  const Router = createBrowserRouter([
    {
      path: "",
      element: <Navigate to="/Signin" />,
    },
    {
      path: "/Signin",
      element: <Signin />,
    },
    {
      path: "/Signin/Registration",
      element: <ProfileReg />,
    },
    {
      path: "/Signin/Registration/Preferences",
      element: <Pref />,
    },
    {
      path: "/Signin/Registration/Verification",
      element: <Verif />,
    },
  ]);
  return <RouterProvider router={Router} />;
}

export default Routing;
