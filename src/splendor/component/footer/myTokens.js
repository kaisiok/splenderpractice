import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MyToken from "./myToken";
import UserTokenModal from "./userTokenMadal";

const MyTokensWrap = styled.div`
  background-color: skyblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
function MyTokens() {
  const [openModal, setOpenModal] = useState(false);
  const activatedPlayer = useSelector(
    (state) => state.user[state.turn.activatedPlayer - 1]
  );

  useEffect(() => {
    checkToken10();
  }, [activatedPlayer.tokens]);

  function checkToken10() {
    let userSum = 0;
    for (let a in activatedPlayer.tokens) {
      userSum += activatedPlayer.tokens[a];
    }
    if (userSum > 10) {
      setOpenModal(true);
    }
  }

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <MyTokensWrap>
      {Object.keys(activatedPlayer.tokens).map((el) => {
        return (
          <MyToken
            key={el}
            type={el}
            number={activatedPlayer.tokens[el]}
            disabled={activatedPlayer.tokens[el] === 0}
          />
        );
      })}
      <UserTokenModal open={openModal} onClose={handleClose} />
    </MyTokensWrap>
  );
}

export default MyTokens;
