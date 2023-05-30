import styled from "styled-components";
import goldImg from "../../img/gold.png";
import rubyImg from "../../img/ruby.png";
import sapphireImg from "../../img/sapphire.png";
import diamondImg from "../../img/diamond.png";
import emeraldImg from "../../img/emerald.png";
import onyxImg from "../../img/onyx.png";
const TokenStackWrap = styled.div`
  position: relative;
  ${(props) =>
    props.disabled &&
    `
    pointer-events: none;
    opacity: 0.5;
  `}
`;
const TokenStack = styled.div`
  position: absolute;
  width: 100%;
  top: ${(props) => {
    return props.number;
  }}px;
  z-index: ${(props) => {
    return 100 - props.number;
  }};
  & > .oval {
    width: 100%;
    height: 0.5rem;
    background-color: ${(props) => props.borderColor};
    position: absolute;
    top: 1.3rem;
    border-left: 1px solid black;
    border-right: 1px solid black;
    z-index: 10;
  }

  > .bottom-oval {
    width: 100%;
    height: 4rem;
    background-color: ${(props) => props.borderColor};
    border-radius: 100%;
    transform: rotateX(30deg);
    border: 1px solid black;
    position: absolute;
  }
`;
const MyTokenWrap = styled.div`
  box-sizing: border-box;
  display: block;
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background: white;
  border: 5px dashed ${(props) => props.borderColor};
  border-radius: 100%;
  transition: all linear 0.15s;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  position: relative;
  text-shadow: 1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black,
    -1px 1px 0 black;
  transform: rotateX(30deg);
  z-index: 200;
  > img:nth-child(2) {
    width: ${(props) => props.imgSize}rem;
    height: ${(props) => props.imgSize}rem;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

function MyToken({ type, number, handleClick, disabled }) {
  const backgroundImg = (() => {
    switch (type) {
      case "emeraldToken":
        return emeraldImg;
      case "diamondToken":
        return diamondImg;
      case "sapphireToken":
        return sapphireImg;
      case "onyxToken":
        return onyxImg;
      case "rubyToken":
        return rubyImg;
      case "goldToken":
        return goldImg;
      default:
        alert("err Token type 미전달");
        return null;
    }
  })();
  const imgSize = (() => {
    switch (type) {
      case "emeraldToken":
        return 1.5;
      case "diamondToken":
        return 1.3;
      default:
        return 1;
    }
  })();
  const borderColor = (() => {
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
    <TokenStackWrap disabled={disabled}>
      <MyTokenWrap
        onClick={handleClick}
        imgType={type}
        imgSize={imgSize}
        borderColor={borderColor}
      >
        <div>{number}</div>
        <img src={backgroundImg} alt="ruby" />
      </MyTokenWrap>
      {Array.from({ length: number }).map((el, idx) => {
        return (
          <TokenStack
            number={idx * 5 + 5}
            borderColor={borderColor}
            key={"tokenstack" + idx}
          >
            <div className="oval"></div>
            <div className="bottom-oval"></div>
          </TokenStack>
        );
      })}
    </TokenStackWrap>
  );
}

export default MyToken;
