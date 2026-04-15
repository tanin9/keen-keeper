import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Homepage from "./pages/homepage/Homepage.jsx";
import Friends from "./pages/friends/Friends.jsx";
import Errorpage from "./pages/errorpage/Errorpage.jsx";
import FriendDetails from "./pages/friendDetails/FriendDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "/friendDetails/:id",
        element: <FriendDetails />,
        loader:()=>fetch("/data.json")
      },

      {
        path: "*",
        element: <Errorpage />
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>,
);
