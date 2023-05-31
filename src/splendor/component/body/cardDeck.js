import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openNewCard, shuffleCard } from "../../../redux/reducers/cardSlice";

const CardDeckWrap = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border: 0.2rem solid white;
  border-radius: 8%;
  width: ${(props) => props.cardSize.width}rem;
  height: ${(props) => props.cardSize.height}rem;
  position: relative;
  transform: translate(0, 0);
  & > .card_tier {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

function CardDeck({ tier, number, size }) {
  const dispatch = useDispatch();
  const DeckDragRef = useRef(null);
  const cardOnBoard = useSelector((state) => state.card.cardOnBoard[tier]);
  const isDraggable = useSelector((state) => state.turn.canPlay);
  const backgroundColor = (() => {
    if (tier === "tier1") {
      return "#0070DD";
    } else if (tier === "tier2") {
      return "#A335EE";
    } else {
      return "#FF8000";
    }
  })();
  const cardSize = size ? size : { width: 7, height: 9 };

  useEffect(() => {
    if (cardOnBoard.length === 0) {
      dispatch(shuffleCard());
    }
    dispatch(openNewCard(tier));
  }, [cardOnBoard]);

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", "deckDrag" + tier);
  };

  return (
    <CardDeckWrap
      backgroundColor={backgroundColor}
      draggable={isDraggable && number > 0}
      ref={DeckDragRef}
      onDragStart={handleDragStart}
      cardSize={cardSize}
    >
      {number > 0 ? <div>{number}</div> : null}
      <div className="card_tier">
        {tier === "tier1" ? "Ⅰ" : tier === "tier2" ? "Ⅱ" : "Ⅲ"}
      </div>
    </CardDeckWrap>
  );
}

export default CardDeck;
