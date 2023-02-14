import styled from "styled-components";
import { useSelector } from "react-redux";
import Tiles from "./tiles";
import Tokens from "./tokens";
import Cards from "./cards";

const BoardWrap = styled.div`
  background-color: green;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Board() {
  const number = useSelector((state) => state.test.value);

  return (
    <BoardWrap>
      <Tiles />
      <Tokens />
      <Cards />
    </BoardWrap>
  );
}

export default Board;
