import styled from "styled-components";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import rubyImg from "../../img/ruby.png";
import sapphireImg from "../../img/sapphire.png";
import diamondImg from "../../img/diamond.png";
import emeraldImg from "../../img/emerald.png";
import onyxImg from "../../img/onyx.png";
import CardCost from "./cardCost";
import card001 from "../../img/cardimg/card001.png";
import card002 from "../../img/cardimg/card002.png";
import card003 from "../../img/cardimg/card003.png";
import card004 from "../../img/cardimg/card004.png";
import card005 from "../../img/cardimg/card005.png";
import card006 from "../../img/cardimg/card006.png";
import card007 from "../../img/cardimg/card007.png";
import card008 from "../../img/cardimg/card008.png";
import card009 from "../../img/cardimg/card009.png";
import card010 from "../../img/cardimg/card010.png";
import card011 from "../../img/cardimg/card011.png";
import card012 from "../../img/cardimg/card012.png";
import card013 from "../../img/cardimg/card013.png";
import card014 from "../../img/cardimg/card014.png";
import card015 from "../../img/cardimg/card015.png";
import card016 from "../../img/cardimg/card016.png";
import card017 from "../../img/cardimg/card017.png";
import card018 from "../../img/cardimg/card018.png";
import card019 from "../../img/cardimg/card019.png";
import card020 from "../../img/cardimg/card020.png";
import card021 from "../../img/cardimg/card021.png";
import card022 from "../../img/cardimg/card022.png";
import card023 from "../../img/cardimg/card023.png";
import card024 from "../../img/cardimg/card024.png";
import card025 from "../../img/cardimg/card025.png";
import card026 from "../../img/cardimg/card026.png";
import card027 from "../../img/cardimg/card027.png";
import card028 from "../../img/cardimg/card028.png";
import card029 from "../../img/cardimg/card029.png";
import card030 from "../../img/cardimg/card030.png";
import card031 from "../../img/cardimg/card031.png";
import card032 from "../../img/cardimg/card032.png";
import card033 from "../../img/cardimg/card033.png";
import card034 from "../../img/cardimg/card034.png";
import card035 from "../../img/cardimg/card035.png";
import card036 from "../../img/cardimg/card036.png";
import card037 from "../../img/cardimg/card037.png";
import card038 from "../../img/cardimg/card038.png";
import card039 from "../../img/cardimg/card039.png";
import card040 from "../../img/cardimg/card040.png";

const CardWrap = styled.div`
  box-sizing: border-box;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  border: 0.3rem solid ${(props) => props.borderColor};
  border-radius: 7%;
  width: 7rem;
  height: 9rem;
  position: relative;
  transform: translate(0, 0);

  &.dragging {
    opacity: 0.1;
    cursor: grabbing;
  }
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

function Card({ score, cost, type, id, idx, location, tier }) {
  const isDraggable = useSelector((state) => state.turn.canPlay);
  const [isDragging, setIsDragging] = useState(false);

  const cardDragRef = useRef(null);
  const handleDragStart = (event) => {
    setIsDragging(true);
    event.dataTransfer.setData("text/plain", location + event.target.id + idx);
  };
  const handleDragEnd = () => {
    setIsDragging(false);
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
  let cardBackgroundImg;
  if (tier === 1) {
    if (type === "emerald") {
      if (score === 0) {
        cardBackgroundImg = card040;
      } else if (score === 1) {
        cardBackgroundImg = card039;
      }
    } else if (type === "diamond") {
      if (score === 0) {
        cardBackgroundImg = card038;
      } else if (score === 1) {
        cardBackgroundImg = card037;
      }
    } else if (type === "sapphire") {
      if (score === 0) {
        cardBackgroundImg = card036;
      } else if (score === 1) {
        cardBackgroundImg = card035;
      }
    } else if (type === "onyx") {
      if (score === 0) {
        cardBackgroundImg = card034;
      } else if (score === 1) {
        cardBackgroundImg = card033;
      }
    } else if (type === "ruby") {
      if (score === 0) {
        cardBackgroundImg = card032;
      } else if (score === 1) {
        cardBackgroundImg = card031;
      }
    }
  } else if (tier === 2) {
    if (type === "emerald") {
      if (score === 1) {
        cardBackgroundImg = card030;
      } else if (score === 2) {
        cardBackgroundImg = card029;
      } else if (score === 3) {
        cardBackgroundImg = card028;
      }
    } else if (type === "diamond") {
      if (score === 1) {
        cardBackgroundImg = card027;
      } else if (score === 2) {
        cardBackgroundImg = card026;
      } else if (score === 3) {
        cardBackgroundImg = card025;
      }
    } else if (type === "sapphire") {
      if (score === 1) {
        cardBackgroundImg = card024;
      } else if (score === 2) {
        cardBackgroundImg = card023;
      } else if (score === 3) {
        cardBackgroundImg = card022;
      }
    } else if (type === "onyx") {
      if (score === 1) {
        cardBackgroundImg = card021;
      } else if (score === 2) {
        cardBackgroundImg = card020;
      } else if (score === 3) {
        cardBackgroundImg = card019;
      }
    } else if (type === "ruby") {
      if (score === 1) {
        cardBackgroundImg = card018;
      } else if (score === 2) {
        cardBackgroundImg = card017;
      } else if (score === 3) {
        cardBackgroundImg = card016;
      }
    }
  } else if (tier === 3) {
    if (type === "emerald") {
      if (score === 3) {
        cardBackgroundImg = card015;
      } else if (score === 4) {
        cardBackgroundImg = card014;
      } else if (score === 5) {
        cardBackgroundImg = card013;
      }
    } else if (type === "diamond") {
      if (score === 3) {
        cardBackgroundImg = card012;
      } else if (score === 4) {
        cardBackgroundImg = card011;
      } else if (score === 5) {
        cardBackgroundImg = card010;
      }
    } else if (type === "sapphire") {
      if (score === 3) {
        cardBackgroundImg = card009;
      } else if (score === 4) {
        cardBackgroundImg = card008;
      } else if (score === 5) {
        cardBackgroundImg = card007;
      }
    } else if (type === "onyx") {
      if (score === 3) {
        cardBackgroundImg = card006;
      } else if (score === 4) {
        cardBackgroundImg = card005;
      } else if (score === 5) {
        cardBackgroundImg = card004;
      }
    } else if (type === "ruby") {
      if (score === 3) {
        cardBackgroundImg = card003;
      } else if (score === 4) {
        cardBackgroundImg = card002;
      } else if (score === 5) {
        cardBackgroundImg = card001;
      }
    }
  } else {
  }

  return (
    <CardWrap
      backgroundImg={cardBackgroundImg}
      className={`${isDragging ? "dragging" : ""}`}
      draggable={isDraggable}
      id={id}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
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
