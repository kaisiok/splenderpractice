import "./App.css";
import Summary from "./splendor/component/header/summary.js";
import Board from "./splendor/component/body/board.js";
import MyBoard from "./splendor/component/footer/myBoard.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { shuffleTile } from "./redux/reducers/tileSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shuffleTile());
  }, []);

  return (
    <div className="App">
      <div className="Board_container">
        <Board />
        <MyBoard />
      </div>
      <Summary />
    </div>
  );
}

export default App;
