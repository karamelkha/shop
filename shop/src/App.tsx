import { MouseEvent } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
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
      <Input></Input>
    </>
  );
}

export default App;
