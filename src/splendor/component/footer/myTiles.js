import styled from "styled-components";
import MyTile from "./myTile";

const MyTilesWrap = styled.div`
  background-color: beige;
  width: 90%;
  height: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
function MyTiles() {
  return (
    <MyTilesWrap>
      <MyTile />
      <MyTile />
      <MyTile />
      <MyTile />
      <MyTile />
    </MyTilesWrap>
  );
}

export default MyTiles;
