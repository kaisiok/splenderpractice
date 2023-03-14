import styled from "styled-components";
import goldImg from "../../img/gold.png";
import rubyImg from "../../img/ruby.png";
import sapphireImg from "../../img/sapphire.png";
import diamondImg from "../../img/diamond.png";
import emeraldImg from "../../img/emerald.png";
import onyxImg from "../../img/onyx.png";

const MyTokenWrap = styled.div`
  box-sizing: border-box;
  display: block;
  width: 2.5em;
  height: 2.5em;
  font-size: 2em;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background: white;
  border: 8px dashed ${(props) => props.borderColor};
  border-radius: 6em;
  padding-top: 6em/2 - 1em;
  transition: all linear 0.15s;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  position: relative;
  margin: 0.1em;
  text-shadow: 1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black,
    -1px 1px 0 black;
  ${(props) =>
    props.disabled &&
    `
    pointer-events: none;
    opacity: 0.5;
  `}
  > img:nth-child(2) {
    width: ${(props) => props.imgSize}em;
    height: ${(props) => props.imgSize}em;
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
    <MyTokenWrap
      onClick={handleClick}
      imgType={type}
      imgSize={imgSize}
      borderColor={borderColor}
      disabled={disabled}
    >
      <div>{number}</div>
      <img src={backgroundImg} alt="ruby" />
    </MyTokenWrap>
  );
}

export default MyToken;
