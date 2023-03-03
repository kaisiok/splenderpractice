import styled from "styled-components";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import MyToken from "./myToken";

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 50%;
  height: 50%;
  text-align: center;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  color: black;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const MyTokensWrap = styled.div`
  background-color: skyblue;
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function UserTokenModal({ open, onClose }) {
  const activatedPlayer = useSelector(
    (state) => state.user[state.turn.activatedPlayer - 1]
  );
  function hadleModalClose() {
    onClose();
  }

  if (!open) return null;
  return createPortal(
    <div onClick={(e) => e.stopPropagation()}>
      <ModalOverlay onClick={hadleModalClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalClose onClick={hadleModalClose}>&times;</ModalClose>{" "}
          <h1>토큰이 10개 이하가 될 때 까지 버릴 토큰을 선택하세요</h1>
          <div>
            <h2>선택한 토큰</h2>
          </div>
          <MyTokensWrap>
            {Object.keys(activatedPlayer.tokens).map((el) => {
              return (
                <MyToken
                  key={el}
                  type={el}
                  number={activatedPlayer.tokens[el]}
                  handleClick={() => {
                    console.log(el);
                  }}
                />
              );
            })}
          </MyTokensWrap>
        </ModalContent>
      </ModalOverlay>
    </div>,
    document.body
  );
}

export default UserTokenModal;
