import styled from "styled-components";
import MyCard from "./myCard";
import { useSelector, useDispatch } from "react-redux";
import { buyCard } from "../../../redux/reducers/cardSlice";
import { buyCardUser } from "../../../redux/reducers/userSlice";
import { buyCardInTurn } from "../../../redux/reducers/turnSlice";
import { buyCardToken } from "../../../redux/reducers/tokenSlice";

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
  const userTokens = activatedPlayer.tokens;
  const userCards = activatedPlayer.cards;

  function tokenCheck(userTokens, userCards, cost) {
    let goldTokenNeeds = 0;
    for (let type in cost) {
      let sum = 0;
      let typeDiscount = type.slice(0, -5) + "Cards";
      let discount = userCards[typeDiscount].length;
      if (cost[type] > 0) {
        sum = userTokens[type] + discount - cost[type];
        if (sum < 0) {
          goldTokenNeeds = goldTokenNeeds + sum;
        }
      }
    }
    return userTokens.goldToken + goldTokenNeeds >= 0;
  }

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    if (data.slice(0, 8) === "deckDrag") {
      alert("덱에 있는 카드는 핸드로만 가져올 수 있습니다.");
    } else {
      const cardTier = "tier" + data[0];
      const cardIdx = data.slice(-1);
      const selectedCard = cardOnBoard[cardTier][cardIdx];
      const payload = { user: activatedPlayer, selectedCard };

      if (tokenCheck(userTokens, userCards, selectedCard.cost)) {
        dispatch(buyCardUser(payload));
        dispatch(buyCard(data));
        dispatch(buyCardInTurn(payload));
        dispatch(buyCardToken(payload));
      } else {
        alert("토큰이 모자랍니다.");
      }
    }
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
