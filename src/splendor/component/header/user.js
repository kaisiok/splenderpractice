import styled from "styled-components";
import { useSelector } from "react-redux";
import HeaderCards from "./headerCards";
import Hand from "./hand";

import CardDeck from "../body/cardDeck";

const UserWrap = styled.fieldset`
  width: 19rem;
  height: 10rem;
  margin: auto;
  display: flex;
  align-items: flex-end;
  border: 5px solid ${(props) => (props.active ? "blue" : "gray")};
  border-radius: 20px;
  position: relative;
  padding: 0;
`;

const UserInfoWrap = styled.div`
  display: flex;
  height: 8rem;
  width: 19rem;
  > .cardsInfoWrap {
    width: 70%;
    > .score_handWrap {
      height: 40%;
      display: flex;
      justify-content: space-around;
    }
  }
`;
const ScoreWrap = styled.div`
  width: 3rem;
  height: 3rem;
  font-size: 3rem;
  color: #d6b534;
  text-shadow: 1px 1px 0 gold, -1px -1px 0 gold, 1px -1px 0 gold,
    -1px 1px 0 gold;
`;
const HandedCardWrap = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0;
  position: relative;
  padding-left: 30px;

  > .handEmoji {
    position: absolute;
    z-index: 3;
    left: 0%;
  }
  > .cardDeckGrid {
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const EmptyCard = styled.div`
  width: 1.5rem;
  height: 2rem;
  border: 0.2rem dotted black;
  border-radius: 8%;
`;

function User({ user }) {
  const isActive =
    Number(user.id[4]) === useSelector((state) => state.turn.activatedPlayer);

  return (
    <UserWrap active={isActive}>
      <legend className="userId">{user.id}</legend>
      <UserInfoWrap>
        <div className="cardsInfoWrap">
          <div className="score_handWrap">
            <ScoreWrap>{user.score}</ScoreWrap>
            <HandedCardWrap>
              <div className="handEmoji">🖐️</div>
              <div className="cardDeckGrid">
                {user.hands.map((el) => {
                  const tier = "tier" + el.id.slice(0, 1);
                  return (
                    <CardDeck
                      tier={tier}
                      number={0}
                      key={el.id}
                      size={{ width: 1.5, height: 2 }}
                    />
                  );
                })}
                {user.hands.length < 1 ? <EmptyCard></EmptyCard> : null}
                {user.hands.length < 2 ? <EmptyCard></EmptyCard> : null}
                {user.hands.length < 3 ? <EmptyCard></EmptyCard> : null}
              </div>
            </HandedCardWrap>
          </div>
          <HeaderCards cards={user.cards} />
        </div>
        <Hand tokens={user.tokens} />
      </UserInfoWrap>
    </UserWrap>
  );
}

export default User;
