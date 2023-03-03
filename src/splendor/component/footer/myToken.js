import styled from "styled-components";

const MyTokenWrap = styled.div`
  background-color: blanchedalmond;
  height: 70%;
  width: 15%;
`;

function MyToken({ type, number, handleClick }) {
  return (
    <MyTokenWrap onClick={handleClick}>
      <div>{type}</div>
      <div>{number}</div>
    </MyTokenWrap>
  );
}

export default MyToken;
