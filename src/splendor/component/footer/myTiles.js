import styled from "styled-components";
import { useSelector } from "react-redux";
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
  const activatedPlayer = useSelector((state) => state.turn.activatedPlayer);
  const userTiles = useSelector(
    (state) => state.user[activatedPlayer - 1].tiles
  );
  return (
    <MyTilesWrap>
      {userTiles.map((el) => {
        return <MyTile key={el.id} info={el} />;
      })}
    </MyTilesWrap>
  );
}

export default MyTiles;
