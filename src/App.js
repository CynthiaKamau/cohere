import "./App.css";
import Carousel from "./components/Carousel";
import { Donate } from "./components/Donate";

function App() {
  return (
    <div className="App">
      <div className="grid grid-flow-col auto-cols-max">
        <div className="mt-8">
          <p>Question 1</p>
          <Carousel />
        </div>
        <div className="mt-8">
          <p>Question 2</p>
          <Donate />
        </div>
        <div className="mt-8">
          <p>Question 3 : Implement a queue.</p>
          <p> Is contained in functions directory</p>
        </div>
      </div>
    </div>
  );
}

export default App;
