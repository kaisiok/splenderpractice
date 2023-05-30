import styled from "styled-components";
import MyCard from "../footer/myCard";

const TileWrap = styled.div`
  border-radius: 10%;
  background-color: brown;
  height: 5rem;
  width: 5rem;
  position: relative;
  & > #tile_cost_wrapper {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 45%;
    background-color: rgba(255, 255, 255, 0.5);
  }
  & > #tile_score_wrapper {
    position: absolute;
    left: 70%;
    font-size: 2rem;
    color: #d6b534;
    text-shadow: 1px 1px 0 gold, -1px -1px 0 gold, 1px -1px 0 gold,
      -1px 1px 0 gold;
  }
`;

function Tile({ score, cost, size }) {
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
                size={{ width: 1.5, height: 2, border: 0.3, font: 2 }}
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
