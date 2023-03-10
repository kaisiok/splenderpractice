import styled from "styled-components";
import MyCard from "../footer/myCard";

const CardsWrap = styled.div`
  background-color: pink;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

function Cards({ cards }) {
  return (
    <CardsWrap>
      {Object.keys(cards).map((el) => {
        return (
          <MyCard
            key={el}
            cardType={el}
            number={cards[el].length}
            size={{ width: 2, height: 3, border: 0.5, font: 1 }}
          />
        );
      })}
    </CardsWrap>
  );
}

export default Cards;
