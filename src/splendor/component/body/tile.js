import styled from "styled-components";
import MyCard from "../footer/myCard";

const TileWrap = styled.div`
  border-radius: 10%;
  background-color: brown;
  height: ${(props) => props.size.height}rem;
  width: ${(props) => props.size.width}rem;
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
    font-size: ${(props) => props.size.font}rem;
    color: #d6b534;
    text-shadow: 1px 1px 0 gold, -1px -1px 0 gold, 1px -1px 0 gold,
      -1px 1px 0 gold;
  }
`;

function Tile({ score, cost, location }) {
  const size = (() => {
    switch (location) {
      case "myTiles":
        return { height: 3, width: 3, font: 1.5 };
      default:
        return { height: 5, width: 5, font: 2 };
    }
  })();

  return (
    <TileWrap size={size}>
      <div id="tile_score_wrapper">{score}</div>
      {location ? null : (
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
      )}
    </TileWrap>
  );
}

export default Tile;
