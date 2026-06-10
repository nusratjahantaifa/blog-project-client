import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import AllBlogs from "../pages/AllBlogs";
 import BlogDetails from "../pages/BlogDetails";
 import AddBlog from "../pages/AddBlog";
 import Wishlist from "../pages/Wishlist";
import Login from "../pages/Login";
 import Register from "../pages/Register";
 import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />, 
    children: [
     
      {
        index: true, //  cleaner than "/"
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <AllBlogs />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/add-blog",
        element: (
          <PrivateRoute>
            <AddBlog />
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;