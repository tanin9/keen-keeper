import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Homepage from "./pages/homepage/Homepage.jsx";
 
import Errorpage from "./pages/errorpage/Errorpage.jsx";
import FriendDetails from "./pages/friendDetails/FriendDetails.jsx";
import Timeline from "./pages/timeline/Timeline.jsx";
import FriendProvider from "./context/FriendProvider.jsx";
import { ToastContainer } from "react-toastify";

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
        path: "/timeline",
        element: <Timeline/>,
      },
      {
        path: "/friendDetails/:friendId",
        element: <FriendDetails />,
        loader: () => fetch("/data.json"),
      },

      {
        path: "*",
        element: <Errorpage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
      <ToastContainer/>
    </FriendProvider>
  </StrictMode>,
);
