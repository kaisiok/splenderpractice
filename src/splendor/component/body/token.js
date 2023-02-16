import styled from "styled-components";

const TokenWrap = styled.div`
  background-color: aqua;
  width: 50%;
  height: 10%;
`;

function Token({ type, number }) {
  return (
    <TokenWrap>
      {type}: {number}E/A
    </TokenWrap>
  );
}

export default Token;
