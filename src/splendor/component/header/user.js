import styled from "styled-components";
import Cards from "./cards";
import Hand from "./hand";

const UserWrap = styled.div`
  background-color: gray;
  display: flex;
`;

function User({ user }) {
  return (
    <div>
      {user.id}
      <div> score:{user.score}</div>
      <UserWrap>
        <Cards cards={user.cards} />
        <Hand tokens={user.tokens} hands={user.hands} />
      </UserWrap>
    </div>
  );
}

export default User;
