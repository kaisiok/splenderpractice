import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Card from "../body/card";
import { bringCardUser } from "../../../redux/reducers/userSlice";
import { bringCard, bringDeck } from "../../../redux/reducers/cardSlice";
import { bringCardInTurn } from "../../../redux/reducers/turnSlice";
import { getGoldToken } from "../../../redux/reducers/tokenSlice";

const MyHandWrap = styled.div`
  width: 95%;
  height: 100%;
  display: grid;
  grid-template-columns: 3rem 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-around;
  border: 3px solid gray;
  border-radius: 20px;
  margin: 10px;
  > .handEmoji {
    font-size: 2.5rem;
  }
`;
const EmptyCard = styled.div`
  border: 0.3rem dashed gray;
  border-radius: 7%;
  width: 7rem;
  height: 9rem;
`;

function MyHand() {
  const activatedPlayer = useSelector(
    (state) => state.turn.activatedPlayer - 1
  );
  const handedCards = useSelector((state) => state.user[activatedPlayer].hands);
  const cardOnBoard = useSelector((state) => state.card.cardOnBoard);
  const cardOnDeck = useSelector((state) => state.card.cardOnDeck);
  const remainGoldToken = useSelector((state) => state.tokens.goldToken);

  const dispatch = useDispatch();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (handedCards.length <= 2) {
      let data = event.dataTransfer.getData("text/plain");
      if (data.slice(0, 8) === "deckDrag") {
        const tier = data.slice(-5);
        const topCard = cardOnDeck[tier][cardOnDeck[tier].length - 1];
        const payload = {
          user: activatedPlayer,
          selectedCard: topCard,
          remainGoldToken,
        };
        dispatch(bringCardUser(payload));
        dispatch(bringDeck(tier));
        dispatch(bringCardInTurn(payload));

        if (remainGoldToken > 0) {
          dispatch(getGoldToken());
        }
      } else if (data.slice(0, 5) === "board") {
        data = data.slice(5);
        const cardTier = "tier" + data[0];
        const cardIdx = data.slice(-1);
        const selectedCard = cardOnBoard[cardTier][cardIdx];

        const payload = {
          user: activatedPlayer,
          selectedCard,
          remainGoldToken,
        };
        dispatch(bringCardUser(payload));
        dispatch(bringCard(data));
        dispatch(bringCardInTurn(payload));
        if (remainGoldToken > 0) {
          dispatch(getGoldToken());
        }
      } else if (data.slice(0, 4) === "hand") {
        //손에서 손으로 옮기는 상황 아무일도 일어나지 않는다
      } else {
        alert("에러");
      }
    } else {
      alert("최대 3장까지 손에 들 수 있습니다.");
    }
  };

  return (
    <MyHandWrap onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className="handEmoji">🖐️</div>
      {handedCards.map((el, idx) => (
        <Card
          key={el.id}
          id={el.id}
          idx={idx}
          score={el.score}
          cost={el.cost}
          type={el.type}
          location={"hand"}
        />
      ))}
      {handedCards.length < 1 ? <EmptyCard></EmptyCard> : null}
      {handedCards.length < 2 ? <EmptyCard></EmptyCard> : null}
      {handedCards.length < 3 ? <EmptyCard></EmptyCard> : null}
    </MyHandWrap>
  );
}

export default MyHand;
