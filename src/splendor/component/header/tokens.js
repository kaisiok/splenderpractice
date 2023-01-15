import styled from "styled-components";

const TokensWrap = styled.div`
  background-color: skyblue;
`;

function Tokens({ tokens }) {
  return (
    <TokensWrap>
      <div>emerald:{tokens.emeraldToken}</div>
      <div>diamond:{tokens.diamondToken}</div>
      <div>onyx:{tokens.onyxToken}</div>
      <div>ruby:{tokens.rubyToken}</div>
      <div>sapphire:{tokens.sapphireToken}</div>
      <div>gold:{tokens.goldToken}</div>
    </TokensWrap>
  );
}

export default Tokens;
