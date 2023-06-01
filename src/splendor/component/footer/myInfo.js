import styled from "styled-components";
import MyTiles from "./myTiles";
import MyHand from "./myHand";
import { useSelector } from "react-redux";

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
  const userSocer = useSelector(
    (state) => state.user[state.turn.activatedPlayer - 1].score
  );
  return (
    <MyInfoWrap>
      <div>score:{userSocer}</div>
      <MyTiles />
      <MyHand />
    </MyInfoWrap>
  );
}

export default MyInfo;
