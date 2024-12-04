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
import EquipmentDetails from "../pages/EquipmentDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/equipments"),
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
        path: "/equipments/:id",
        element: (
          <PrivateRoute>
            <EquipmentDetails></EquipmentDetails>
          </PrivateRoute>
        ),
        loader: ({ params })=> fetch(`http://localhost:5000/equipments/${params.id}`)
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
