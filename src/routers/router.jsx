import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllEquipments from "../pages/AllEquipments";
import AddEquipments from "../pages/AddEquipments";
import MyEquipments from "../pages/MyEquipments";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all_equipments",
        element: <AllEquipments></AllEquipments>,
      },
      {
        path: "/add_equipments",
        element: (
          <PrivateRoute>
            <AddEquipments></AddEquipments>
          </PrivateRoute>
        ),
      },
      {
        path: "/my_equipments",
        element: (
          <PrivateRoute>
            <MyEquipments></MyEquipments>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
