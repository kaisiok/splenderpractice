import styled from "styled-components";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../../redux/reducers/testSlice";

const MyBoardWrap = styled.div`
  background-color: yellow;
`;

function MyBoard() {
  const dispatch = useDispatch();

  return (
    <MyBoardWrap>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </MyBoardWrap>
  );
}

export default MyBoard;
