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
import UpdateEquipments from "../pages/UpdateEquipments";
import Blogs from "../pages/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch("https://b10-a10-equi-sports-server.vercel.app/equipments"),
        loader: async () => {
          const response = await fetch("https://b10-a10-equi-sports-server.vercel.app/equipments");
          const data = await response.json();
          return data; // Data will be provided to the component
        },
      },
      {
        path: "/all_equipments",
        element: <AllEquipments></AllEquipments>,
        // loader: () => fetch("https://b10-a10-equi-sports-server.vercel.app/equipments/all"),
        loader: async () => {
          const response = await fetch("https://b10-a10-equi-sports-server.vercel.app/equipments/all");
          const data = await response.json();
          return data; // Data will be provided to the component
        },
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
        loader: ({ params })=> fetch(`https://b10-a10-equi-sports-server.vercel.app/equipments/${params.id}`)
      },
      {
        path: "/update_equipment/:id",
        element: (
          <PrivateRoute>
            <UpdateEquipments></UpdateEquipments>
          </PrivateRoute>
        ),
        loader: ({ params })=> fetch(`https://b10-a10-equi-sports-server.vercel.app/equipments/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
