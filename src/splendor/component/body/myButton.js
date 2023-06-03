import styled from "styled-components";

const MyButtonWrap = styled.button`
  width: 7rem;
  height: 4rem;
  font-size: 1.5rem;
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  background-color: #04aa6d;
  color: white;
  border: none;
  border-radius: 10px;
  margin: auto;
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

function MyButton({ onClick, str, canPlay, disabled }) {
  return (
    <MyButtonWrap canPlay={canPlay} disabled={disabled} onClick={onClick}>
      {str}
    </MyButtonWrap>
  );
}

export default MyButton;
