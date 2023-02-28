import styled from "styled-components";
import MyCard from "./myCard";
import { useSelector, useDispatch } from "react-redux";
import { buyCard } from "../../../redux/reducers/cardSlice";
import { buyCardUser } from "../../../redux/reducers/userSlice";
import { buyCardInTurn } from "../../../redux/reducers/turnSlice";

const MyCardsWrap = styled.div`
  background-color: salmon;
  width: 40%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function MyCards() {
  const dispatch = useDispatch();
  const activatedPlayer = useSelector(
    (state) => state.user[state.turn.activatedPlayer - 1]
  );
  const cardOnBoard = useSelector((state) => state.card.cardOnBoard);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const cardTier = "tier" + data[0];
    const cardIdx = data.slice(-1);
    const selectedCard = cardOnBoard[cardTier][cardIdx];

    const payload = { user: activatedPlayer, selectedCard };

    dispatch(buyCardUser(payload));
    dispatch(buyCard(data));
    dispatch(buyCardInTurn(payload));
  };

  return (
    <MyCardsWrap onDragOver={handleDragOver} onDrop={handleDrop}>
      {Object.keys(activatedPlayer.cards).map((el) => {
        return (
          <MyCard
            key={el}
            cardType={el}
            number={activatedPlayer.cards[el].length}
          />
        );
      })}
    </MyCardsWrap>
  );
}

export default MyCards;
