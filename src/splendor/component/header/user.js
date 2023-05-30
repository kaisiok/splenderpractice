import styled from "styled-components";
import { useSelector } from "react-redux";
import HeaderCards from "./headerCards";
import Hand from "./hand";

const UserWrap = styled.div`
  background-color: ${(props) => (props.active ? "blue" : "gray")};
  width: 15.625rem;
  height: 12rem;
  margin: auto;
`;

const UserInfoWrap = styled.div`
  display: flex;
  height: 80%;
`;

function User({ user }) {
  const isActive =
    Number(user.id[4]) === useSelector((state) => state.turn.activatedPlayer);

  return (
    <UserWrap active={isActive}>
      {user.id}
      <div> score:{user.score}</div>
      <UserInfoWrap>
        <HeaderCards cards={user.cards} />
        <Hand tokens={user.tokens} hands={user.hands} />
      </UserInfoWrap>
    </UserWrap>
  );
}

export default User;
