import { Item } from "./components/item";
import { Card } from "./components/card";
export function App() {
  return (
    <div>
      <h1>First app With React</h1>

      <ul>
        <Item texto="Item 1" />
        <Item texto="Item 2" />
        <Item texto="Item 3" />
      </ul>
      <Card />
    </div>
  );
}
