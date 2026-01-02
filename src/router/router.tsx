import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default function AppProvider() {
  return <RouterProvider router={AppRouter} />;
}
