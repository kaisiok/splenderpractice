import styled from "styled-components";
import Tokens from "./tokens";
import HandedCard from "./handedCard";

const HandWrap = styled.div`
  background-color: purple;
  display: flex;
  width: 40%;
`;
const HandedCardWrap = styled.div`
  background-color: yellowgreen;
  width: 50%;
  height: 100%;
`;

function Hand({ tokens, hands }) {
  return (
    <HandWrap>
      <Tokens tokens={tokens} />
      <HandedCardWrap>
        {hands.map((el) => {
          return <HandedCard key={el.id} card={el} />;
        })}
      </HandedCardWrap>
    </HandWrap>
  );
}

export default Hand;
