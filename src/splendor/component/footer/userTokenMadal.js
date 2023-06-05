import styled from "styled-components";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import MyToken from "./myToken";
import MyButton from "../body/myButton";
import {
  getBackTokenUser,
  getTokenUser,
} from "../../../redux/reducers/userSlice";
import { getBackToken } from "../../../redux/reducers/tokenSlice";

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  font-family: "Gowun Batang", serif;
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
  width: 60rem;
  height: 35rem;
  text-align: center;
  > .buttonContainer {
    margin: auto;
    margin-top: 3rem;
    display: flex;
    width: 20rem;
  }
`;

const MyTokensWrap = styled.div`
  display: flex;
  border: 3px solid black;
  border-radius: 20px;
  width: 40rem;
  height: 7rem;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  padding-top: 1.5rem;
  &.selectedToken {
    width: 20rem;
    height: 5rem;
    padding-top: 0;
  }
`;

function UserTokenModal({ open, onClose }) {
  const activatedPlayer = useSelector(
    (state) => state.user[state.turn.activatedPlayer - 1]
  );
  const userIdx = useSelector((state) => state.turn.activatedPlayer - 1);
  const [selectedTokens, setSelectedTokens] = useState({
    emeraldToken: 0,
    diamondToken: 0,
    sapphireToken: 0,
    onyxToken: 0,
    rubyToken: 0,
    goldToken: 0,
  });
  const [cancelButtonDisabled, setCancelButtonDisabled] = useState(true);

  const dispatch = useDispatch();

  function checkToken10() {
    let userSum = 0;
    for (let a in activatedPlayer.tokens) {
      userSum += activatedPlayer.tokens[a];
    }
    return userSum > 10;
  }

  function selectToken(el) {
    let newTokens = Object.assign({}, selectedTokens);
    if (activatedPlayer.tokens[el] > 0) {
      newTokens[el] += 1;
      dispatch(getBackTokenUser({ userIdx, selectedToken: el }));
      setCancelButtonDisabled(false);
      setSelectedTokens(newTokens);
    }
  }
  function handleConfirm() {
    dispatch(getBackToken(selectedTokens));
    setSelectedTokens({
      emeraldToken: 0,
      diamondToken: 0,
      sapphireToken: 0,
      onyxToken: 0,
      rubyToken: 0,
      goldToken: 0,
    });
    setCancelButtonDisabled(true);
    onClose();
  }
  function handleCancle() {
    dispatch(getTokenUser({ id: userIdx + 1, tokens: selectedTokens }));
    setSelectedTokens({
      emeraldToken: 0,
      diamondToken: 0,
      sapphireToken: 0,
      onyxToken: 0,
      rubyToken: 0,
      goldToken: 0,
    });
    setCancelButtonDisabled(true);
  }

  if (!open) return null;
  return createPortal(
    <div onClick={(e) => e.stopPropagation()}>
      <ModalOverlay>
        <ModalContent>
          <h1>토큰이 10개 이하가 될 때 까지 버릴 토큰을 선택하세요</h1>

          <MyTokensWrap>
            {Object.keys(activatedPlayer.tokens).map((el) => {
              return (
                <MyToken
                  key={el}
                  type={el}
                  number={activatedPlayer.tokens[el]}
                  handleClick={() => {
                    selectToken(el);
                  }}
                />
              );
            })}
          </MyTokensWrap>
          <div>
            <h2>선택한 토큰</h2>
            <MyTokensWrap className="selectedToken">
              {Object.keys(selectedTokens).map((el) => {
                if (selectedTokens[el] > 0) {
                  return (
                    <MyToken
                      key={el + "selected"}
                      type={el}
                      number={selectedTokens[el]}
                    />
                  );
                }
              })}
            </MyTokensWrap>
          </div>
          <div className={"buttonContainer"}>
            <MyButton
              disabled={cancelButtonDisabled}
              onClick={handleCancle}
              str={"취소"}
              canPlay={cancelButtonDisabled}
            />
            <MyButton
              disabled={checkToken10()}
              onClick={handleConfirm}
              str={"확인"}
              canPlay={checkToken10()}
            />
          </div>
        </ModalContent>
      </ModalOverlay>
    </div>,
    document.body
  );
}

export default UserTokenModal;
