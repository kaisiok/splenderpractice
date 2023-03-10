import styled from "styled-components";

const MyCardWrap = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.size.border}px solid white;
  border-radius: 8%;
  width: ${(props) => props.size.width}rem;
  height: ${(props) => props.size.height}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.size.font}rem;
  color: white;
`;

function MyCard({ cardType, number, size }) {
  const borderColor = (() => {
    switch (cardType.slice(0, -5)) {
      case "emerald":
        return "green";
      case "diamond":
        return "silver";
      case "sapphire":
        return "blue";
      case "onyx":
        return "black";
      case "ruby":
        return "red";
      default:
        return null;
    }
  })();
  return (
    <MyCardWrap backgroundColor={borderColor} size={size}>
      {number}
    </MyCardWrap>
  );
}

export default MyCard;
