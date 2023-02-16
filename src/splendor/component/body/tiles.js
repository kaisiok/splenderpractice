import styled from "styled-components";
import Tile from "./tile";
import { useSelector } from "react-redux";

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
  const tileOnBoard = useSelector((state) => state.tile);

  return (
    <TilesWrap>
      <TilesTopWrap>
        <Tile
          key={tileOnBoard[0].id}
          score={tileOnBoard[0].score}
          cost={tileOnBoard[0].cost}
        />
        <Tile
          key={tileOnBoard[1].id}
          score={tileOnBoard[1].score}
          cost={tileOnBoard[1].cost}
        />
      </TilesTopWrap>
      <TilesMiddleWrap>
        <Tile
          key={tileOnBoard[2].id}
          score={tileOnBoard[2].score}
          cost={tileOnBoard[2].cost}
        />
      </TilesMiddleWrap>
      <TilesBottomWrap>
        <Tile
          key={tileOnBoard[3].id}
          score={tileOnBoard[3].score}
          cost={tileOnBoard[3].cost}
        />
        <Tile
          key={tileOnBoard[4].id}
          score={tileOnBoard[4].score}
          cost={tileOnBoard[4].cost}
        />
      </TilesBottomWrap>
    </TilesWrap>
  );
}

export default Tiles;
