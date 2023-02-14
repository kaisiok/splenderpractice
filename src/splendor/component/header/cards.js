import styled from "styled-components";
import Card from "./card";

const CardsWrap = styled.div`
  background-color: pink;
  width: 60%;
`;

function Cards({ cards }) {
  return (
    <CardsWrap>
      <Card cards={cards.emeraldCards} jewel={"emerald"} />
      <Card cards={cards.diamondCards} jewel={"diamond"} />
      <Card cards={cards.sapphireCards} jewel={"sapphire"} />
      <Card cards={cards.onyxCards} jewel={"onyx"} />
      <Card cards={cards.rubyCards} jewel={"ruby"} />
    </CardsWrap>
  );
}

export default Cards;
