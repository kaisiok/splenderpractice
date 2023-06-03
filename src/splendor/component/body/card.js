import styled from "styled-components";
import { useRef } from "react";
import { useSelector } from "react-redux";
import rubyImg from "../../img/ruby.png";
import sapphireImg from "../../img/sapphire.png";
import diamondImg from "../../img/diamond.png";
import emeraldImg from "../../img/emerald.png";
import onyxImg from "../../img/onyx.png";
import CardCost from "./cardCost";

const CardWrap = styled.div`
  box-sizing: border-box;
  background-color: white;
  border: 0.3rem solid ${(props) => props.borderColor};
  border-radius: 7%;
  width: 7rem;
  height: 9rem;
  position: relative;
  transform: translate(0, 0);
`;
const CardTopWrap = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  & > #score_in_card {
    margin-left: 0.3rem;
    right: 3rem;
    font-size: 2rem;
    color: #d6b534;
    text-shadow: 1px 1px 0 gold, -1px -1px 0 gold, 1px -1px 0 gold,
      -1px 1px 0 gold;
  }
  & > #jewel_img {
    width: 2rem;
    height: 2rem;
    -webkit-user-drag: none;
  }
`;

const JewelCostWrap = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  width: 5.5rem;
  height: 5.5rem;

  .cost_jewel_img {
    width: 100%;
    height: 50%;
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
      <CardTopWrap>
        <div id="score_in_card"> {score} </div>
        <img id="jewel_img" src={jewelImg} alt="jewel_img" />
      </CardTopWrap>

      <JewelCostWrap>
        {Object.keys(cost).map((el) => {
          if (cost[el] > 0) {
            return (
              <CardCost key={el + "div"} costType={el} costValue={cost[el]} />
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
