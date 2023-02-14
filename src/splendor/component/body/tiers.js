import styled from "styled-components";
import Card from "./card";
import CardDeck from "./cardDeck";

const TiersWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
const CardsWrap = styled.div`
  background-color: brown;
  display: flex;
  flex-wrap: wrap;
  height: 70%;
  width: 90%;
`;

function Tiers() {
  return (
    <TiersWrap>
      <CardDeck />
      <CardsWrap>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsWrap>
    </TiersWrap>
  );
}

export default Tiers;
