import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Layout/RootLayout";
import Homepage from "./Pages/Homepage/Homepage";
import Apps from "./Pages/Apps/Apps";
import Installation from "./Pages/Installation/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/Apps",
        element: <Apps></Apps>,
      },
      {
        path: "/Installation",
        element: <Installation></Installation>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
