import styled from "styled-components";
import MyToken from "./myToken";

const MyTokensWrap = styled.div`
  background-color: skyblue;
  width: 90%;
  height: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
function MyTokens() {
  return (
    <MyTokensWrap>
      <MyToken />
      <MyToken />
      <MyToken />
      <MyToken />
      <MyToken />
    </MyTokensWrap>
  );
}

export default MyTokens;
