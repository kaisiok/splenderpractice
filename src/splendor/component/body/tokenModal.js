import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { createPortal } from "react-dom";

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

function TokenModal({ open, onClose }) {
  const [tokenInModal, setTokenInModal] = useState(
    useSelector((state) => state.token)
  );
  const [selectedToken, setSelectedToken] = useState({});

  function tokenSelect(string) {
    if (string in selectedToken) {
      const newSelectedToken = Object.assign({}, selectedToken);
      const newTokenInModal = Object.assign({}, tokenInModal);
      newSelectedToken[string] += 1;
      newTokenInModal[string] -= 1;
      setTokenInModal(newTokenInModal);
      setSelectedToken(newSelectedToken);
    } else {
      const newSelectedToken = Object.assign({}, selectedToken);
      const newTokenInModal = Object.assign({}, tokenInModal);
      newSelectedToken[string] = 1;
      newTokenInModal[string] -= 1;
      setTokenInModal(newTokenInModal);
      setSelectedToken(newSelectedToken);
    }
  }
  //토큰 유효성 검사 함수를 만든다.(true나 false 반환) 이 함수를 아래 if문에 넣는다.
  function validateToken(string) {
    let sum = 0;
    let result = true;
    for (const key in selectedToken) {
      sum = sum + selectedToken[key];
      if (selectedToken[key] === 2) {
        result = false;
      } else if (sum >= 3) {
        result = false;
      }
    }
    for (const key in selectedToken) {
      if (sum === 2 && key === string) {
        result = string;
      }
    }

    return result;
  }

  function buttonDisabled(string) {
    if (tokenInModal[string] === 0 || validateToken(string) === false) {
      return true;
    } else if (selectedToken[string] === 1 && tokenInModal[string] < 3) {
      return true;
    } else if (validateToken(string) === string) {
      return true;
    }
    return false;
  }

  if (!open) return null;
  return createPortal(
    <div onClick={(e) => e.stopPropagation()}>
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalClose onClick={onClose}>&times;</ModalClose>{" "}
          <h1>토큰을 고른 후 확인버튼을 눌러주세요</h1>
          {Object.keys(tokenInModal).map((el) => {
            return (
              <div key={el}>
                {el}:{tokenInModal[el]}
                <button
                  onClick={() => {
                    tokenSelect(el);
                  }}
                  disabled={buttonDisabled(el)}
                >
                  +
                </button>
              </div>
            );
          })}
          <div>
            <h2>선택한 토큰</h2>
            {Object.keys(selectedToken).map((el) => {
              return (
                <div key={el}>
                  {el}:{selectedToken[el]}
                </div>
              );
            })}
          </div>
          <button onClick={onClose}>취소</button>
          <button>확인</button>
        </ModalContent>
      </ModalOverlay>
    </div>,
    document.body
  );
}

export default TokenModal;
