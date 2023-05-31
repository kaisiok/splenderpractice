import styled from "styled-components";
import Tiers from "./tiers";

const CardsWrap = styled.div`
  height: 80%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

function Cards() {
  return (
    <CardsWrap>
      <Tiers tier={"tier3"} />
      <Tiers tier={"tier2"} />
      <Tiers tier={"tier1"} />
    </CardsWrap>
  );
}

export default Cards;
