import styled from "styled-components";
import HeaderTokens from "./headerTokens";
import CardDeck from "../body/cardDeck";

const HandWrap = styled.div`
  background-color: purple;
  display: flex;
  width: 40%;
  height: 100%;
`;
const HandedCardWrap = styled.div`
  background-color: yellowgreen;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

function Hand({ tokens, hands }) {
  return (
    <HandWrap>
      <HeaderTokens tokens={tokens} />
      <HandedCardWrap>
        {hands.map((el) => {
          const tier = "tier" + el.id.slice(0, 1);
          return <CardDeck tier={tier} number={0} key={el.id} />;
        })}
      </HandedCardWrap>
    </HandWrap>
  );
}

export default Hand;
