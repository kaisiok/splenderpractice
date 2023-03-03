import styled from "styled-components";
import { useRef } from "react";
import { useSelector } from "react-redux";

const CardWrap = styled.div`
  background-color: lime;
  margin: auto;
  width: 35%;
  height: 45%;
`;

function Card({ tier, score, cost, type, id, idx }) {
  const isDraggable = useSelector((state) => state.turn.canPlay);
  const cardDragRef = useRef(null);
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id + idx);
  };

  return (
    <CardWrap
      draggable={isDraggable}
      id={id}
      onDragStart={handleDragStart}
      ref={cardDragRef}
    >
      <div>tier:{tier}</div>
      <div> score:{score} </div>
      <div>type:{type}</div>
      <div>
        cost
        {cost.emeraldToken > 0 ? <div>emerald: {cost.emeraldToken}</div> : null}
        {cost.diamondToken > 0 ? <div>diamond: {cost.diamondToken}</div> : null}
        {cost.sapphireToken > 0 ? (
          <div> sapphire: {cost.sapphireToken}</div>
        ) : null}
        {cost.onyxToken > 0 ? <div> onyx: {cost.onyxToken}</div> : null}
        {cost.rubyToken > 0 ? <div>ruby: {cost.rubyToken}</div> : null}
      </div>
    </CardWrap>
  );
}

export default Card;
