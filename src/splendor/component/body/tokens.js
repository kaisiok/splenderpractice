import styled from "styled-components";
import { useSelector } from "react-redux";
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
  const tokens = useSelector((state) => state.token);

  return (
    <TokensWrap>
      <Token type={"emerald"} number={tokens.emeraldToken} />
      <Token type={"diamond"} number={tokens.diamondToken} />
      <Token type={"sapphire"} number={tokens.sapphireToken} />
      <Token type={"onyx"} number={tokens.onyxToken} />
      <Token type={"ruby"} number={tokens.rubyToken} />
      <Token type={"gold"} number={tokens.goldToken} />
    </TokensWrap>
  );
}

export default Tokens;
