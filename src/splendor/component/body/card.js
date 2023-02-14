import styled from "styled-components";

const CardWrap = styled.div`
  background-color: lime;
  margin: auto;
  width: 35%;
  height: 45%;
`;

function Card() {
  return <CardWrap>card</CardWrap>;
}

export default Card;
