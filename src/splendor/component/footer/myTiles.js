import styled from "styled-components";
import { useSelector } from "react-redux";
import Tile from "../body/tile";

const MyTilesWrap = styled.div`
  background-color: gray;
  opacity: 0.5;
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  right: 0;
  border-radius: 20px;
`;
function MyTiles() {
  const activatedPlayer = useSelector((state) => state.turn.activatedPlayer);
  const userTiles = useSelector(
    (state) => state.user[activatedPlayer - 1].tiles
  );

  return (
    <MyTilesWrap>
      {userTiles.length === 0 ? (
        <div>내 귀족 타일</div>
      ) : (
        userTiles.map((el) => {
          return (
            <Tile
              key={el.id}
              score={el.score}
              cost={el.cost}
              location={"myTiles"}
              image={el.image}
            />
          );
        })
      )}
    </MyTilesWrap>
  );
}

export default MyTiles;
