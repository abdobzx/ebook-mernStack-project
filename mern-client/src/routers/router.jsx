import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import Blog from "../components/Blog";
import About from "../components/About";
import SingleBook from "../shop/SingleBook";
import Dashboard from "../dashboard/Dashboard";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadBook from "../dashboard/UploadBook";

import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import ManageBooks from "../dashboard/ManageBooks";
import Login from "../components/Login";
import PrivateRoute from "../PrivareRoute/PrivateRoute";
import Logout from "../components/Logout";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        { 
            path:"/", 
            element:<Home></Home>
        },
        {
          path:"/shop",
          element:<Shop/>
        },
        {
          path:"/blog",
          element:<Blog/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/book/:id",
          element:<SingleBook/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`),
        },


      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout></DashboardLayout>,
      children:[
        {
          path:"/admin/dashboard",
          element:<PrivateRoute><UploadBook/></PrivateRoute>
        },
        {
          path:"/admin/dashboard/uploadBook",
          element:<UploadBook></UploadBook>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks></ManageBooks>
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks></EditBooks>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`),
        },
      ]

    },

    {
      path:"login",
      element:<Login></Login>
    },{
      path:"logout",
      element:<Logout></Logout>
    }
  ]);

  export default router;