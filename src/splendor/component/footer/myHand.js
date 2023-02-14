import styled from "styled-components";
import HandedCard from "./handedCard";

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
  return (
    <MyHandWrap>
      <HandedCard />
      <HandedCard />
      <HandedCard />
    </MyHandWrap>
  );
}

export default MyHand;
