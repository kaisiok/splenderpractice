import React, { useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 60px;
  height: 30px;
  background-color: ${({ isOn }) => (isOn ? "#5DBE6F" : "#ccc")};
  border-radius: 15px;
  padding: 2px;
  margin: auto;
  cursor: pointer;
`;

const ToggleCircle = styled.div`
  width: 26px;
  height: 26px;
  background-color: #fff;
  border-radius: 50%;
  transform: translateX(${({ isOn }) => (isOn ? "30px" : "0")});
  transition: transform 0.3s ease;
`;

const Toggle = ({ onoff }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    onoff();
  };

  return (
    <ToggleContainer isOn={isOn} onClick={handleToggle}>
      <ToggleCircle isOn={isOn} />
    </ToggleContainer>
  );
};

export default Toggle;
