import styled from "styled-components";

function Card({ cards, jewel }) {
  return (
    <div>
      {jewel}:{cards.length}
    </div>
  );
}

export default Card;
