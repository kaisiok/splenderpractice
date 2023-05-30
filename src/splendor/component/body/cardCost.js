import styled from "styled-components";

const CostCricle = styled.section`
  width: 2.5rem;
  height: 2.5rem;
  display: inline-block;
  margin: 0.1rem;
`;
const CostBall = styled.figure`
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: 50%;
  position: relative;
  background: radial-gradient(
    circle at 50% 120%,
    ${(props) => props.firstColor},
    ${(props) => props.secondColor} 80%,
    ${(props) => props.secondColor} 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    background: radial-gradient(
      circle at 50% 120%,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0) 70%
    );
    border-radius: 50%;
    bottom: 2.5%;
    left: 5%;
    opacity: 0.6;
    height: 100%;
    width: 90%;
    filter: blur(5px);
    z-index: 2;
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 5%;
    left: 10%;
    border-radius: 50%;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8) 14%,
      rgba(255, 255, 255, 0) 24%
    );
    transform: translateX(-15px) translateY(-15px) skewX(-20deg);
    filter: blur(3px);
  }
`;
const CostValue = styled.span`
  color: white;
  font-size: 2rem;

  text-shadow: 1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black,
    -1px 1px 0 black;
`;

function CardCost({ costValue, costType }) {
  const firstColor = (() => {
    switch (costType) {
      case "emeraldToken":
        return "#00FF00";
      case "diamondToken":
        return "#E0E0E0";
      case "sapphireToken":
        return "#0000CC";
      case "onyxToken":
        return "#202020";
      case "rubyToken":
        return "#FF0000";
      default:
        return null;
    }
  })();
  const secondColor = (() => {
    switch (costType) {
      case "emeraldToken":
        return "#00CC00";
      case "diamondToken":
        return "#C0C0C0";
      case "sapphireToken":
        return "#000099";
      case "onyxToken":
        return "#000000";
      case "rubyToken":
        return "#CC0000";
      default:
        return null;
    }
  })();

  return (
    <CostCricle className="stage">
      <CostBall
        className="ball"
        firstColor={firstColor}
        secondColor={secondColor}
      >
        <CostValue className="costValue">{costValue}</CostValue>
      </CostBall>
    </CostCricle>
  );
}

export default CardCost;
