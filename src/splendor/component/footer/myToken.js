import styled from "styled-components";

const MyTokenWrap = styled.div`
  background-color: blanchedalmond;
  height: 70%;
  width: 15%;
`;

function MyToken({ type, number }) {
  return (
    <MyTokenWrap>
      <div>{type}</div>
      <div>{number}</div>
    </MyTokenWrap>
  );
}

export default MyToken;
