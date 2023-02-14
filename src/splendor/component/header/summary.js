import styled from "styled-components";
import { useSelector } from "react-redux";
import User from "./user";

const SummaryWrap = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

function Summary() {
  const users = useSelector((state) => state.user);

  return (
    <SummaryWrap>
      {users.map((el) => {
        return <User key={el.id} user={el} />;
      })}
    </SummaryWrap>
  );
}

export default Summary;
