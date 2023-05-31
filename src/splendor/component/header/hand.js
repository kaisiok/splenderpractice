import styled from "styled-components";
import HeaderTokens from "./headerTokens";

const HandWrap = styled.div`
  width: 30%;
  height: 100%;
`;

function Hand({ tokens }) {
  return (
    <HandWrap>
      <HeaderTokens tokens={tokens} />
    </HandWrap>
  );
}

export default Hand;
