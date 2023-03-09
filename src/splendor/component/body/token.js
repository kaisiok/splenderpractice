import styled from "styled-components";
import goldImg from "../../img/gold.png";
import rubyImg from "../../img/ruby.png";
import sapphireImg from "../../img/sapphire.png";
import diamondImg from "../../img/diamond.png";
import emeraldImg from "../../img/emerald.png";
import onyxImg from "../../img/onyx.png";

const TokenWrap = styled.div`
  width: 50%;
  height: 10%;
  position: relative;
  > img:nth-child(2) {
    width: 90px;
    height: 90px;
    position: relative;
    z-index: 1;
  }
  > div:nth-child(1) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    z-index: 2;
    font-size: 30px;
    color: white;
    text-shadow: 1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black,
      -1px 1px 0 black;
  }
`;

function Token({ type, number }) {
  let backgroundImg = (() => {
    switch (type + "Token") {
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
        return null;
    }
  })();
  return (
    <TokenWrap>
      <div>{number}</div>
      <img src={backgroundImg} />
    </TokenWrap>
  );
}

export default Token;
