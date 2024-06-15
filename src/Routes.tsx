import Login from "./pages/Login/Login";
import Verif from "./pages/Verification/Verification";
import Pref from "./pages/Preferences/Preferences";
import ProfileReg from "./pages/Registration/Registration";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
function Route() {
  const Router = createBrowserRouter([
    {
      path: "",
      element: <Navigate to="/Signup" />,
    },
    {
      path: "/Signup",
      element: <Login />,
    },
    {
      path: "/Signup/Registration",
      element: <ProfileReg />,
    },
    {
      path: "/Signup/Registration/Preferences",
      element: <Pref />,
    },
    {
      path: "/Signup/Registration/Verification",
      element: <Verif />,
    },
  ]);
  return <RouterProvider router={Router} />;
}

export default Route;
