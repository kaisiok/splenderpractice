import styled from "styled-components";
import HeaderToken from "./headerToken";

const TokensWrap = styled.div`
  background-color: skyblue;
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

function HeaderTokens({ tokens }) {
  return (
    <TokensWrap>
      {Object.keys(tokens).map((el) => {
        return <HeaderToken key={el} number={tokens[el]} type={el} />;
      })}
    </TokensWrap>
  );
}

export default HeaderTokens;
