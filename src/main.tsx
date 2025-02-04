import { StrictMode } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Menu } from "./pages/Menu/Menu";
import { Card } from "./pages/Card/Card";
import { Error } from "./pages/Error/Error";
import { Layout } from "./layout/Layout/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Menu /> },
      { path: "/card", element: <Card /> },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <App />
  </StrictMode>
);
