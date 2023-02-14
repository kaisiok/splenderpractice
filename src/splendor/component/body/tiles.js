import styled from "styled-components";
import Tile from "./tile";

const TilesWrap = styled.div`
  background-color: white;
  width: 20%;
  height: 80%;
  margin: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const TilesTopWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const TilesMiddleWrap = styled.div`
  display: flex;
`;
const TilesBottomWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

function Tiles() {
  return (
    <TilesWrap>
      <TilesTopWrap>
        <Tile />
        <Tile />
      </TilesTopWrap>
      <TilesMiddleWrap>
        <Tile />
      </TilesMiddleWrap>
      <TilesBottomWrap>
        <Tile />
        <Tile />
      </TilesBottomWrap>
    </TilesWrap>
  );
}

export default Tiles;
