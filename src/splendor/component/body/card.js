import styled from "styled-components";
import { useRef } from "react";
import { useSelector } from "react-redux";
import rubyImg from "../../img/ruby.png";
import sapphireImg from "../../img/sapphire.png";
import diamondImg from "../../img/diamond.png";
import emeraldImg from "../../img/emerald.png";
import onyxImg from "../../img/onyx.png";

const CardWrap = styled.div`
  box-sizing: border-box;
  background-color: white;
  border: 0.3em solid ${(props) => props.borderColor};
  border-radius: 7%;
  margin: auto;
  width: 35%;
  height: 45%;
  position: relative;
  & > #score_in_card {
    width: 30%;
    font-size: 2.5rem;
    color: #d6b534;
    text-shadow: 1px 1px 0 gold, -1px -1px 0 gold, 1px -1px 0 gold,
      -1px 1px 0 gold;
    transform: translate(0%, 15%);
  }
  & > #jewel_img {
    width: 3rem;
    height: 3rem;
    transform: translate(60%, -80%);
    -webkit-user-drag: none;
  }
`;

const JewelCostWrap = styled.div`
  display: flex;
  .cost_jewel_img {
    width: 1.8rem;
    height: 1.8rem;
    -webkit-user-drag: none;
  }
`;

function Card({ score, cost, type, id, idx, location }) {
  const isDraggable = useSelector((state) => state.turn.canPlay);
  const cardDragRef = useRef(null);
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", location + event.target.id + idx);
  };

  const borderColor = (() => {
    switch (type) {
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

  let jewelImg = (() => {
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
      default:
        return null;
    }
  })();

  return (
    <CardWrap
      draggable={isDraggable}
      id={id}
      onDragStart={handleDragStart}
      ref={cardDragRef}
      borderColor={borderColor}
    >
      <div id="score_in_card"> {score} </div>
      <img id="jewel_img" src={jewelImg} alt="jewel_img" />
      <JewelCostWrap>
        {Object.keys(cost).map((el) => {
          let costImg;
          if (el === "emeraldToken") {
            costImg = emeraldImg;
          } else if (el === "diamondToken") {
            costImg = diamondImg;
          } else if (el === "onyxToken") {
            costImg = onyxImg;
          } else if (el === "rubyToken") {
            costImg = rubyImg;
          } else if (el === "sapphireToken") {
            costImg = sapphireImg;
          }
          if (cost[el] > 0) {
            return (
              <div key={costImg + "div"}>
                <img
                  src={costImg}
                  className="cost_jewel_img"
                  alt="cost_jewel_img"
                />
                <div>{cost[el]}</div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </JewelCostWrap>
    </CardWrap>
  );
}

export default Card;
