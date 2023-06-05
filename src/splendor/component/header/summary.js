import styled from "styled-components";
import { useSelector } from "react-redux";
import User from "./user";

const SummaryWrap = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  height: 54rem;
  width: 23.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 20px;
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
