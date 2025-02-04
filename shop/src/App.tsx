import { MouseEvent } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Menu } from "./pages/Menu/Menu";
import { Card } from "./pages/Card/Card";
import { Error } from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/card",
    element: <Card />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  const addCounter = (e: MouseEvent) => {
    console.log(e);
  };
  return (
    <>
      <Button appearence="big" onClick={addCounter}>
        Big
      </Button>
      <Button appearence="small" onClick={addCounter}>
        small
      </Button>
      <Input placeholder="Email" />
      <div>
        <a href="/">Меню</a>
        <a href="/card">Корзина</a>
      </div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
