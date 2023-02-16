import styled from "styled-components";

const TileWrap = styled.div`
  background-color: gray;
  height: 100px;
  width: 100px;
`;

function Tile({ score, cost }) {
  return (
    <TileWrap>
      {score}
      <div>
        {cost.diamondCard > 1 ? <div>diamond {cost.diamondCard}</div> : null}
        {cost.emeraldCard > 1 ? <div>emerald {cost.emeraldCard}</div> : null}
        {cost.sapphireCard > 1 ? <div>sapphire {cost.sapphireCard}</div> : null}
        {cost.onyxCard > 1 ? <div>onyx {cost.onyxCard}</div> : null}
        {cost.rubyCard > 1 ? <div>ruby {cost.rubyCard}</div> : null}
      </div>
    </TileWrap>
  );
}

export default Tile;
