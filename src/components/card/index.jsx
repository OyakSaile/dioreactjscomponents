import { useState } from "react";
import { Button } from "../buttons";
export function Card() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }
  return (
    <div className="card">
      <div className="card-header">Card</div>
      <div className="card-body ">
        <p>{count}</p>
      </div>
      <Button className="btn btn-success" onClick={incrementCount}>
        Adicionar
      </Button>{" "}
      <Button className="btn btn-danger" onClick={decrementCount}>
        Remover
      </Button>
    </div>
  );
}
