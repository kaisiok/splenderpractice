import "./App.css";
import Summary from "./splendor/component/header/summary";
import Board from "./splendor/component/body/board";
import MyBoard from "./splendor/component/footer/myBoard";
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
      <Summary />
      <Board />
      <MyBoard />
    </div>
  );
}

export default App;
