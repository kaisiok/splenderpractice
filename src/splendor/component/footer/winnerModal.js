import styled from "styled-components";
import { createPortal } from "react-dom";
import { useState } from "react";
import MyButton from "../body/myButton";

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  font-family: "Gowun Batang", serif;
  ${(props) =>
    props.showBoard &&
    `
    background-color: rgba(0, 0, 0, 0);
  `}
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
  width: 40rem;
  height: 20rem;
  text-align: center;
  > .buttonContainer {
    margin: auto;
    margin-top: 3rem;
    display: flex;
    width: 30rem;
  }
  ${(props) =>
    props.showBoard &&
    `
    display:none;
  `}
`;

function WinnerModal({ open, message }) {
  const [showBoard, setShowBoard] = useState(false);

  function handleConfirm() {
    window.location.reload();
  }
  function handleCancle() {
    setShowBoard(!showBoard);
  }

  if (!open) return null;
  return createPortal(
    <div onClick={(e) => e.stopPropagation()}>
      <ModalOverlay onClick={handleCancle} showBoard={showBoard}>
        <ModalContent showBoard={showBoard}>
          <h1>축하합니다!</h1>
          <h2>{message}</h2>
          <div className={"buttonContainer"}>
            <MyButton
              onClick={handleCancle}
              str={"보드 확인하기"}
              size={{ width: 12, height: 4, font: 1.5 }}
            />
            <MyButton
              onClick={handleConfirm}
              str={"한판 더 하기"}
              size={{ width: 12, height: 4, font: 1.5 }}
            />
          </div>
        </ModalContent>
      </ModalOverlay>
    </div>,
    document.body
  );
}

export default WinnerModal;
