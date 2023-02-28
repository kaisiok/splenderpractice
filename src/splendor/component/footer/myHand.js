import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import HandedCard from "./handedCard";
import { bringCardUser } from "../../../redux/reducers/userSlice";
import { bringCard } from "../../../redux/reducers/cardSlice";
import { bringCardInTurn } from "../../../redux/reducers/turnSlice";
import { getGoldToken } from "../../../redux/reducers/tokenSlice";

const MyHandWrap = styled.div`
  background-color: mediumturquoise;
  width: 10%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

function MyHand() {
  const activatedPlayer = useSelector(
    (state) => state.turn.activatedPlayer - 1
  );
  const handedCards = useSelector((state) => state.user[activatedPlayer].hands);
  const cardOnBoard = useSelector((state) => state.card.cardOnBoard);
  const remainGoldToken = useSelector((state) => state.tokens.goldToken);

  const dispatch = useDispatch();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (handedCards.length <= 2) {
      const data = event.dataTransfer.getData("text/plain");
      const cardTier = "tier" + data[0];
      const cardIdx = data.slice(-1);
      const selectedCard = cardOnBoard[cardTier][cardIdx];

      const payload = { user: activatedPlayer, selectedCard, remainGoldToken };
      dispatch(bringCardUser(payload));
      dispatch(bringCard(data));
      dispatch(bringCardInTurn(payload));
      if (remainGoldToken > 0) {
        dispatch(getGoldToken());
      }
    } else {
      alert("최대 3장까지 손에 들 수 있습니다.");
    }
  };

  return (
    <MyHandWrap onDragOver={handleDragOver} onDrop={handleDrop}>
      {handedCards.map((el) => (
        <HandedCard
          key={el.id}
          id={el.id}
          tier={el.tier}
          score={el.score}
          cost={el.cost}
          type={el.type}
        />
      ))}
    </MyHandWrap>
  );
}

export default MyHand;
