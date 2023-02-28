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
        {cost.diamondCards > 1 ? <div>diamond {cost.diamondCards}</div> : null}
        {cost.emeraldCards > 1 ? <div>emerald {cost.emeraldCards}</div> : null}
        {cost.sapphireCards > 1 ? (
          <div>sapphire {cost.sapphireCards}</div>
        ) : null}
        {cost.onyxCards > 1 ? <div>onyx {cost.onyxCards}</div> : null}
        {cost.rubyCards > 1 ? <div>ruby {cost.rubyCards}</div> : null}
      </div>
    </TileWrap>
  );
}

export default Tile;
