import "./App.css";
import Summary from "./splendor/component/header/summary";
import Board from "./splendor/component/body/board";
import MyBoard from "./splendor/component/footer/myboard";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Summary />
      <Board />
      <MyBoard />
    </div>
  );
}

export default App;
