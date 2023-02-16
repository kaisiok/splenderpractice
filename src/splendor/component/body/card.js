import styled from "styled-components";

const CardWrap = styled.div`
  background-color: lime;
  margin: auto;
  width: 35%;
  height: 45%;
`;

function Card({ tier, score, cost, type }) {
  return (
    <CardWrap>
      <div>tier:{tier}</div>
      <div> score:{score} </div>
      <div>type:{type}</div>
      <div>
        cost
        {cost.emerald > 0 ? <div>emerald: {cost.emerald}</div> : null}
        {cost.diamond > 0 ? <div>diamond: {cost.diamond}</div> : null}
        {cost.sapphire > 0 ? <div> sapphire: {cost.sapphire}</div> : null}
        {cost.onyx > 0 ? <div> onyx: {cost.onyx}</div> : null}
        {cost.ruby > 0 ? <div>ruby: {cost.ruby}</div> : null}
      </div>
    </CardWrap>
  );
}

export default Card;
