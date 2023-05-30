import styled from "styled-components";
import Tiles from "./tiles";
import Tokens from "./tokens";
import Cards from "./cards";

const BoardWrap = styled.div`
  background-color: green;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Board() {
  return (
    <BoardWrap>
      <Cards />
      <Tiles />
      <Tokens />
    </BoardWrap>
  );
}

export default Board;
