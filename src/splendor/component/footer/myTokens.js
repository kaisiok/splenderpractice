import styled from "styled-components";
import { useSelector } from "react-redux";
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
  const activatedPlayer = useSelector(
    (state) => state.user[state.turn.activatedPlayer - 1]
  );
  return (
    <MyTokensWrap>
      {Object.keys(activatedPlayer.tokens).map((el) => {
        return (
          <MyToken key={el} type={el} number={activatedPlayer.tokens[el]} />
        );
      })}
    </MyTokensWrap>
  );
}

export default MyTokens;
