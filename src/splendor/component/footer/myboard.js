import styled from "styled-components";
import { useDispatch } from "react-redux";
import { nextTurn } from "../../../redux/reducers/turnSlice";
import MyCards from "./myCards";
import MyHand from "./myHand";
import MyInfo from "./myInfo";

const MyBoardWrap = styled.div`
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;
const DoUndoButten = styled.button`
  width: 200px;
`;
function MyBoard() {
  const dispatch = useDispatch();

  return (
    <MyBoardWrap>
      <DoUndoButten onClick={() => dispatch()}>undo</DoUndoButten>
      <MyCards />
      <MyHand />
      <MyInfo />
      <DoUndoButten onClick={() => dispatch(nextTurn())}>next</DoUndoButten>
    </MyBoardWrap>
  );
}

export default MyBoard;
