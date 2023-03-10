import styled from "styled-components";
import MyCard from "../footer/myCard";

const TileWrap = styled.div`
  border-radius: 10%;
  background-color: brown;
  height: 8rem;
  width: 8rem;
  & > #tile_cost_wrapper {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  & > #tile_score_wrapper {
    font-size: 3rem;
    color: #d6b534;
    text-shadow: 1px 1px 0 gold, -1px -1px 0 gold, 1px -1px 0 gold,
      -1px 1px 0 gold;
  }
`;

function Tile({ score, cost }) {
  return (
    <TileWrap>
      <div id="tile_score_wrapper">{score}</div>
      <div id="tile_cost_wrapper">
        {Object.keys(cost).map((el) => {
          if (cost[el] > 0) {
            return (
              <MyCard
                key={el}
                cardType={el}
                number={cost[el]}
                size={{ width: 2, height: 3, border: 0.3, font: 3 }}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </TileWrap>
  );
}

export default Tile;
