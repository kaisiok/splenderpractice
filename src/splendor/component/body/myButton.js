import styled from "styled-components";

const MyButtonWrap = styled.button`
  width: ${(props) => props.buttonSize.width}rem;
  height: ${(props) => props.buttonSize.height}rem;
  font-size: ${(props) => props.buttonSize.font}rem;
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  background-color: #04aa6d;
  color: white;
  border: none;
  border-radius: 10px;
  margin: auto;
  font-family: "Gowun Batang", serif;
  ${(props) =>
    props.canPlay &&
    `
    background-color: #ddd;
    pointer-events: none;
    opacity: 0.5;
    color: black;
  `}
  :hover {
    background-color: #ddd;
    color: black;
  }
`;

function MyButton({ onClick, str, canPlay, disabled, size }) {
  const buttonSize = size ? size : { width: 7, height: 4, font: 1.5 };

  return (
    <MyButtonWrap
      canPlay={canPlay}
      disabled={disabled}
      onClick={onClick}
      buttonSize={buttonSize}
    >
      {str}
    </MyButtonWrap>
  );
}

export default MyButton;
