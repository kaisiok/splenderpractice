import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openNewCard } from "../../../redux/reducers/cardSlice";

const CardDeckWrap = styled.div`
  background-color: darkgrey;
`;

function CardDeck({ tier }) {
  const dispatch = useDispatch();
  const leftCard = useSelector((state) => state.card.cardOnDeck[tier].length);
  const cardOnBoard = useSelector((state) => state.card.cardOnBoard[tier]);

  useEffect(() => {
    dispatch(openNewCard(tier));
  }, [cardOnBoard]);

  return <CardDeckWrap>{leftCard} card left</CardDeckWrap>;
}

export default CardDeck;
