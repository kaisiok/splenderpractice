import styled from "styled-components";
import MyTiles from "./myTiles";
import MyTokens from "./myTokens";

const MyInfoWrap = styled.div`
  background-color: whitesmoke;
  width: 30%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

function MyInfo() {
  return (
    <MyInfoWrap>
      score:0
      <MyTiles />
      <MyTokens />
    </MyInfoWrap>
  );
}

export default MyInfo;
