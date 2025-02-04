import { MouseEvent } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { Route, Routes } from "react-router-dom";
import { Menu } from "./pages/Menu/Menu";
import { Card } from "./pages/Card/Card";
import { Error } from "./pages/Error/Error";
function App() {
  // const [counter, setCounter] = useState<number>(0);
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
      <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route path="/card" element={<Card />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
