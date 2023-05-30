import styled from "styled-components";
import Card from "./card";
import CardDeck from "./cardDeck";
import { useSelector } from "react-redux";

const TiersWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 30%;
  float: left;
`;
const CardsWrap = styled.div`
  background-color: brown;
  display: flex;
  flex-wrap: wrap;
  height: 70%;
  width: 90%;
`;

function Tiers({ tier }) {
  const cardOnBoard = useSelector((state) => state.card.cardOnBoard[tier]);
  const leftCard = useSelector((state) => state.card.cardOnDeck[tier].length);

  return (
    <TiersWrap>
      <CardDeck tier={tier} number={leftCard} />
      {/* <CardsWrap> */}
      {cardOnBoard.map((el, idx) => {
        if (el) {
          return (
            <Card
              key={el.id}
              id={el.id}
              idx={idx}
              score={el.score}
              cost={el.cost}
              type={el.type}
              location={"board"}
            />
          );
        } else {
          return null;
        }
      })}
      {/* </CardsWrap> */}
    </TiersWrap>
  );
}

export default Tiers;
