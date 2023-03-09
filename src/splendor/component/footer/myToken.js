import styled from "styled-components";
import goldImg from "../../img/gold.png";
import rubyImg from "../../img/ruby.png";
import sapphireImg from "../../img/sapphire.png";
import diamondImg from "../../img/diamond.png";
import emeraldImg from "../../img/emerald.png";
import onyxImg from "../../img/onyx.png";

const MyTokenWrap = styled.div`
  position: relative;
  table-layout: fixed;
  > img:nth-child(2) {
    width: 90px;
    height: 90px;
    position: relative;
    z-index: 1;
    ${({ imgType }) => {
      if (imgType === "diamondToken") {
        return `
          top : 5px;
        `;
      }
    }}
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

function MyToken({ type, number, handleClick }) {
  let backgroundImg = (() => {
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

  return (
    <MyTokenWrap onClick={handleClick} imgType={type}>
      <div>{number}</div>
      <img src={backgroundImg} alt="ruby" />
    </MyTokenWrap>
  );
}

export default MyToken;
