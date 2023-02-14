import styled from "styled-components";
import Token from "./token";

const TokensWrap = styled.div`
  background-color: gainsboro;
  width: 10%;
  height: 80%;
  margin: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

function Tokens() {
  return (
    <TokensWrap>
      <Token token={"emerald"} />
      <Token token={"diamond"} />
      <Token token={"sapphire"} />
      <Token token={"onyx"} />
      <Token token={"ruby"} />
      <Token token={"gold"} />
    </TokensWrap>
  );
}

export default Tokens;
