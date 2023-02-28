import styled from "styled-components";

const MyCardWrap = styled.div`
  background-color: white;
  width: 15%;
  height: 50%;
`;

function MyCard({ cardType, number }) {
  return (
    <MyCardWrap>
      <div>{cardType}</div>
      <div>{number}</div>
    </MyCardWrap>
  );
}

export default MyCard;
