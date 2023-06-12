import styled from "styled-components";
import MyTiles from "./myTiles";
import MyHand from "./myHand";
import { useSelector } from "react-redux";

const MyInfoWrap = styled.div`
  width: 45%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 3px solid black;
  border-radius: 20px;
  margin-left: 2rem;
`;

const Score_TileWrap = styled.div`
  height: 40%;
  width: 95%;
  margin-top: 10px;
  position: relative;
  display: flex;
  > .userScore {
    width: 40%;
    height: 100%;
    font-size: 2rem;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white,
      -1px 1px 0 white;
    > .userScoreNumber {
      font-size: 3rem;
      color: #d6b534;
      text-shadow: 1px 1px 0 gold, -1px -1px 0 gold, 1px -1px 0 gold,
        -1px 1px 0 gold;
      margin-right: 1rem;
    }
  }
`;

function MyInfo() {
  const userSocer = useSelector(
    (state) => state.user[state.turn.activatedPlayer - 1].score
  );
  return (
    <MyInfoWrap>
      <Score_TileWrap>
        <div className="userScore">
          <div className="userScoreNumber">{userSocer}</div> <div>scored</div>
        </div>
        <MyTiles />
      </Score_TileWrap>

      <MyHand />
    </MyInfoWrap>
  );
}

export default MyInfo;
