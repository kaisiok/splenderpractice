import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  nextTurn,
  undoTurn,
  gameEndTurn,
} from "../../../redux/reducers/turnSlice";
import { undoToken } from "../../../redux/reducers/tokenSlice";
import { undoTokenUser } from "../../../redux/reducers/userSlice";
import MyCards from "./myCards";
import MyInfo from "./myInfo";

const MyBoardWrap = styled.div`
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
`;
const DoUndoButten = styled.button`
  width: 200px;
`;
function MyBoard() {
  const dispatch = useDispatch();
  const turnInfo = useSelector((state) => state.turn);
  const activatedPlayer = useSelector(
    (state) => state.user[state.turn.activatedPlayer - 1]
  );
  const allUser = useSelector((state) => state.user);

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
  function handleNextTurn() {
    if (activatedPlayer.score >= 15) {
      dispatch(gameEndTurn());
    }
    if (
      (turnInfo.gameEnd && turnInfo.activatedPlayer === 4) ||
      (activatedPlayer.score >= 15 && turnInfo.activatedPlayer === 4)
    ) {
      let winner = [];
      let highestScore = 0;
      let cardNumber = 100;
      for (let i = 0; i < allUser.length; i++) {
        if (allUser[i].score > highestScore) {
          highestScore = allUser[i].score;
        }
      }
      for (let i = 0; i < allUser.length; i++) {
        if (allUser[i].score === highestScore) {
          let userCardNumber =
            allUser[i].cards.diamondCards.length +
            allUser[i].cards.emeraldCards.length +
            allUser[i].cards.onyxCards.length +
            allUser[i].cards.rubyCards.length +
            allUser[i].cards.sapphireCards.length;

          if (userCardNumber < cardNumber) {
            cardNumber = userCardNumber;
          }
        }
      }
      for (let i = 0; i < allUser.length; i++) {
        if (
          allUser[i].score === highestScore &&
          allUser[i].cards.diamondCards.length +
            allUser[i].cards.emeraldCards.length +
            allUser[i].cards.onyxCards.length +
            allUser[i].cards.rubyCards.length +
            allUser[i].cards.sapphireCards.length ===
            cardNumber
        ) {
          winner.push(allUser[i].id);
        }
      }
      if (winner.length === 1) {
        alert(`${winner[0]} 님이 승리했습니다.`);
      } else if (winner.length > 1) {
        let str = "";
        for (let i = 0; i < winner.length; i++) {
          str = str + winner[i] + ",";
        }
        str = str.slice(0, 1);
        alert(`${str} 님이 승리했습니다.`);
      } else {
        alert("error");
      }
    } else {
      dispatch(nextTurn());
    }
  }

  return (
    <MyBoardWrap>
      <DoUndoButten onClick={handleUndo} disabled={turnInfo.canPlay}>
        undo
      </DoUndoButten>
      <MyCards />
      <MyInfo />
      <DoUndoButten
        onClick={handleNextTurn}
        // disabled={turnInfo.canPlay}
      >
        next
      </DoUndoButten>
    </MyBoardWrap>
  );
}

export default MyBoard;
