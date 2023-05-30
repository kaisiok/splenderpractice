import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import MyToken from "../footer/myToken";
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
      <MyToken
        type={"emeraldToken"}
        number={tokens.emeraldToken}
        disabled={false}
      />
      <MyToken
        type={"diamondToken"}
        number={tokens.diamondToken}
        disabled={false}
      />
      <MyToken
        type={"sapphireToken"}
        number={tokens.sapphireToken}
        disabled={false}
      />
      <MyToken type={"onyxToken"} number={tokens.onyxToken} disabled={false} />
      <MyToken type={"rubyToken"} number={tokens.rubyToken} disabled={false} />
      <MyToken type={"goldToken"} number={tokens.goldToken} disabled={false} />
      <TokenModal open={openModal} onClose={handleClose} />
    </TokensWrap>
  );
}

export default Tokens;
