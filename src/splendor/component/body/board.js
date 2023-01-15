import styled from "styled-components";
import { useSelector } from "react-redux";

const BoardWrap = styled.div`
  background-color: green;
`;

function Board() {
  const number = useSelector((state) => state.test.value);

  return (
    <BoardWrap>
      <div>{number}</div>
    </BoardWrap>
  );
}

export default Board;
