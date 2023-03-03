import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openNewCard, shuffleCard } from "../../../redux/reducers/cardSlice";

const CardDeckWrap = styled.div`
  background-color: darkgrey;
`;

function CardDeck({ tier }) {
  const dispatch = useDispatch();
  const DeckDragRef = useRef(null);
  const leftCard = useSelector((state) => state.card.cardOnDeck[tier].length);
  const cardOnBoard = useSelector((state) => state.card.cardOnBoard[tier]);
  const isDraggable = useSelector((state) => state.turn.canPlay);

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
      draggable={isDraggable && cardOnBoard.length > 0}
      ref={DeckDragRef}
      onDragStart={handleDragStart}
    >
      {leftCard} card left
    </CardDeckWrap>
  );
}

export default CardDeck;
