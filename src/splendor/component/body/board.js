import styled from "styled-components";
import Tiles from "./tiles";
import Tokens from "./tokens";
import Cards from "./cards";

const BoardWrap = styled.div`
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Board() {
  return (
    <BoardWrap>
      <Cards />
      <Tokens />
      <Tiles />
    </BoardWrap>
  );
}

export default Board;
