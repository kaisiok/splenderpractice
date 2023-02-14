import styled from "styled-components";

const TokenWrap = styled.div`
  background-color: aqua;
  width: 50%;
  height: 10%;
`;

function Token({ token }) {
  return <TokenWrap>{token}</TokenWrap>;
}

export default Token;
