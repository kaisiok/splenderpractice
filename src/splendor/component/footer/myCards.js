import styled from "styled-components";
import MyCard from "./myCard";
import { useSelector, useDispatch } from "react-redux";
import { buyCard } from "../../../redux/reducers/cardSlice";
import {
  buyCardUser,
  buyCardInHandUser,
} from "../../../redux/reducers/userSlice";
import { buyCardInTurn } from "../../../redux/reducers/turnSlice";
import { buyCardToken } from "../../../redux/reducers/tokenSlice";
import MyTokens from "./myTokens";
const MyCard_TokenWrap = styled.div`
  width: 40%;
  height: 80%;
  position: relative;
`;

const MyCardsWrap = styled.fieldset`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 3px solid black;
  border-radius: 20px;
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 0;
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
    let data = event.dataTransfer.getData("text/plain");
    if (data.slice(0, 8) === "deckDrag") {
      alert("덱에 있는 카드는 핸드로만 가져올 수 있습니다.");
    } else if (data.slice(0, 5) === "board") {
      data = data.slice(5);
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
    } else if (data.slice(0, 4) === "hand") {
      data = data.slice(4);
      const cardIdx = data.slice(-1);
      const selectedCard = activatedPlayer.hands[cardIdx];
      const payload = { user: activatedPlayer, selectedCard };

      if (tokenCheck(userTokens, userCards, selectedCard.cost)) {
        dispatch(buyCardUser(payload));
        dispatch(buyCardInHandUser({ user: activatedPlayer, idx: cardIdx }));
        dispatch(buyCardInTurn(payload));
        dispatch(buyCardToken(payload));
      } else {
        alert("토큰이 모자랍니다.");
      }
    } else {
      alert("에러");
    }
  };

  return (
    <MyCard_TokenWrap>
      <MyTokens />
      <MyCardsWrap onDragOver={handleDragOver} onDrop={handleDrop}>
        <legend>내가 구매한 카드</legend>
        {Object.keys(activatedPlayer.cards).map((el) => {
          return (
            <MyCard
              key={el}
              cardType={el}
              number={activatedPlayer.cards[el].length}
              size={{ width: 4, height: 6, border: 0.5, font: 3 }}
            />
          );
        })}
      </MyCardsWrap>
    </MyCard_TokenWrap>
  );
}

export default MyCards;
