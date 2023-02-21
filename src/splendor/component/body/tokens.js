import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import Token from "./token";
import TokenModal from "./tokenModal";

const TokensWrap = styled.div`
  background-color: gainsboro;
  width: 10%;
  height: 80%;
  margin: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

function Tokens() {
  const [openModal, setOpenModal] = useState(false);
  const tokens = useSelector((state) => state.tokens);
  const isActivated = useSelector((state) => state.turn.canPlay);

  const handleClick = () => {
    if (isActivated) {
      setOpenModal(true);
    }
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <TokensWrap onClick={handleClick}>
      <Token type={"emerald"} number={tokens.emeraldToken} />
      <Token type={"diamond"} number={tokens.diamondToken} />
      <Token type={"sapphire"} number={tokens.sapphireToken} />
      <Token type={"onyx"} number={tokens.onyxToken} />
      <Token type={"ruby"} number={tokens.rubyToken} />
      <Token type={"gold"} number={tokens.goldToken} />{" "}
      <TokenModal open={openModal} onClose={handleClose} />
    </TokensWrap>
  );
}

export default Tokens;
