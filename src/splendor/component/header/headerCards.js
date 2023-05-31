import styled from "styled-components";
import MyCard from "../footer/myCard";

const CardsWrap = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

function HeaderCards({ cards }) {
  return (
    <CardsWrap>
      {Object.keys(cards).map((el) => {
        return (
          <MyCard
            key={el}
            cardType={el}
            number={cards[el].length}
            size={{ width: 2, height: 3, border: 1.5, font: 1 }}
          />
        );
      })}
    </CardsWrap>
  );
}

export default HeaderCards;
