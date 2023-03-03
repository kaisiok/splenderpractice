import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import MyToken from "./myToken";
import UserTokenModal from "./userTokenMadal";

const MyTokensWrap = styled.div`
  background-color: skyblue;
  width: 90%;
  height: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
function MyTokens() {
  const [openModal, setOpenModal] = useState(false);
  const activatedPlayer = useSelector(
    (state) => state.user[state.turn.activatedPlayer - 1]
  );

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <MyTokensWrap onClick={handleClick}>
      {Object.keys(activatedPlayer.tokens).map((el) => {
        return (
          <MyToken key={el} type={el} number={activatedPlayer.tokens[el]} />
        );
      })}
      <UserTokenModal open={openModal} onClose={handleClose} />
    </MyTokensWrap>
  );
}

export default MyTokens;
