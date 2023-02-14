import styled from "styled-components";
import Cards from "./cards";
import Hand from "./hand";

const UserWrap = styled.div`
  background-color: gray;
  width: 24%;
  margin: auto;
`;

const UserInfoWrap = styled.div`
  display: flex;
`;

function User({ user }) {
  return (
    <UserWrap>
      {user.id}
      <div> score:{user.score}</div>
      <UserInfoWrap>
        <Cards cards={user.cards} />
        <Hand tokens={user.tokens} hands={user.hands} />
      </UserInfoWrap>
    </UserWrap>
  );
}

export default User;
