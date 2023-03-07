import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { nextTurn, undoTurn } from "../../../redux/reducers/turnSlice";
import { undoToken } from "../../../redux/reducers/tokenSlice";
import { undoTokenUser } from "../../../redux/reducers/userSlice";
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
  const turnInfo = useSelector((state) => state.turn);
  console.log(turnInfo);

  function handleUndo() {
    if (turnInfo.action === "tokens") {
      dispatch(undoToken(turnInfo.tokens));
      dispatch(undoTokenUser(turnInfo));
      dispatch(undoTurn());
    } else if (
      turnInfo.action === "buyCard" ||
      turnInfo.action === "bringCard"
    ) {
      alert("카드를 가져왔을 땐 행동을 취소할 수 없습니다.");
    }
  }

  return (
    <MyBoardWrap>
      <DoUndoButten onClick={handleUndo} disabled={turnInfo.canPlay}>
        undo
      </DoUndoButten>
      <MyCards />
      <MyHand />
      <MyInfo />
      <DoUndoButten
        onClick={() => dispatch(nextTurn())}
        //  disabled={!turnInfo.canPlay}
      >
        next
      </DoUndoButten>
    </MyBoardWrap>
  );
}

export default MyBoard;
