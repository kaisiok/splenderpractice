import styled from "styled-components";
import MyCard from "../footer/myCard";
import tile_id_1 from "../../img/tile_id_1.png";
import tile_id_2 from "../../img/tile_id_2.png";
import tile_id_3 from "../../img/tile_id_3.png";
import tile_id_4 from "../../img/tile_id_4.png";
import tile_id_5 from "../../img/tile_id_5.png";
import tile_id_6 from "../../img/tile_id_6.png";
import tile_id_7 from "../../img/tile_id_7.png";
import tile_id_8 from "../../img/tile_id_8.png";
import tile_id_9 from "../../img/tile_id_9.png";
import tile_id_10 from "../../img/tile_id_10.png";

const TileWrap = styled.div`
  border-radius: 10%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  height: ${(props) => props.size.height}rem;
  width: ${(props) => props.size.width}rem;
  position: relative;
  overflow: hidden;
  & > #tile_cost_wrapper {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50%;
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

function Tile({ score, cost, location, image }) {
  const size = (() => {
    switch (location) {
      case "myTiles":
        return { height: 3, width: 3, font: 1.5 };
      default:
        return { height: 5, width: 5, font: 2 };
    }
  })();
  const backgroundImg = (() => {
    switch (image) {
      case "tile_id_1":
        return tile_id_1;
      case "tile_id_2":
        return tile_id_2;
      case "tile_id_3":
        return tile_id_3;
      case "tile_id_4":
        return tile_id_4;
      case "tile_id_5":
        return tile_id_5;
      case "tile_id_6":
        return tile_id_6;
      case "tile_id_7":
        return tile_id_7;
      case "tile_id_8":
        return tile_id_8;
      case "tile_id_9":
        return tile_id_9;
      case "tile_id_10":
        return tile_id_10;
      default:
        return tile_id_1;
    }
  })();

  return (
    <TileWrap size={size} image={backgroundImg}>
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
