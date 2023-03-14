import styled from "styled-components";

const TokenWrap = styled.div`
  background-color: ${(props) => props.tokenColor};
  width: 70%;
  height: 0;
  padding-bottom: 70%;
  border-radius: 50%;
  color: white;
  text-shadow: 1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black,
    -1px 1px 0 black;
  position: relative;
  border: 0.2em dashed white;
  > div:nth-child(1) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

function HeaderToken({ number, type }) {
  const tokenColor = (() => {
    switch (type.slice(0, -5)) {
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
      case "gold":
        return "gold";
      default:
        return null;
    }
  })();
  return (
    <TokenWrap tokenColor={tokenColor}>
      <div>{number}</div>
    </TokenWrap>
  );
}

export default HeaderToken;
