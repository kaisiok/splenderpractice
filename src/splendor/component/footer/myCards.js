import styled from "styled-components";
import MyCard from "./myCard";

const MyCardsWrap = styled.div`
  background-color: salmon;
  width: 40%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function MyCards() {
  return (
    <MyCardsWrap>
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
    </MyCardsWrap>
  );
}

export default MyCards;
