import React, { cloneElement } from "react";
import * as C from "./App.styles";
import InfoItem from "./components/InfoItem";

import logoMemory from "./assets/devmemory_logo.png";

import { GridType } from "./types/GridItemsType";
import { itens } from "./data/items";
import GridItem from "./components/GridItem";
import formatTimeElapsed from "./helpers/formatTimeElapsed";

const App = () => {
  const [playing, setPlaying] = React.useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = React.useState<number>(0);
  const [shownCount, setShownCount] = React.useState<number>(0);
  const [moveCount, setMoveCount] = React.useState<number>(0);
  const [gridItems, setGridItems] = React.useState<GridType[]>([]);

  const timeOutRef = React.useRef<number>();

  React.useEffect(() => {
    resetAndCreateGrid();
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (playing) setTimeElapsed(timeElapsed + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  React.useEffect(() => {
    if (shownCount === 2) {
      let shownsFilter = gridItems.filter((item) => item.show === true);

      if (shownsFilter.length === 2) {
        if (shownsFilter[0].item === shownsFilter[1].item) {
          let tmpGrid = [...gridItems];
          tmpGrid.forEach((item, index) => {
            if (item.show) {
              tmpGrid[index].permanentShow = true;
              tmpGrid[index].show = false;
            }
          });
          setGridItems(tmpGrid);
          setShownCount(0);
        } else {
          let tmpGrid = [...gridItems];
          for (let i in tmpGrid) {
            setTimeout(() => {
              tmpGrid[i].show = false;
            }, 100);
          }
          setGridItems(tmpGrid);
          setShownCount(0);
        }

        setMoveCount((moveCount) => moveCount + 1);
      }
    }
  }, [shownCount, gridItems]);

  React.useEffect(() => {
    if (
      moveCount > 0 &&
      gridItems.every((item) => item.permanentShow === true)
    ) {
      setPlaying(false);
    }
  }, [moveCount, gridItems]);

  const resetAndCreateGrid = () => {
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    let tempGrid: GridType[] = [];
    for (let i = 0; i < itens.length * 2; i++) {
      tempGrid.push({
        item: null,
        show: false,
        permanentShow: false,
      });
    }

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < itens.length; j++) {
        let pos = -1;
        while (pos < 0 || tempGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (itens.length * 2));
        }
        tempGrid[pos].item = j;
      }
    }

    setGridItems(tempGrid);

    setPlaying(true);
  };

  React.useEffect(() => {
    if (shownCount == 2) {
      clearTimeout(timeOutRef.current);
    }
  }, [shownCount]);

  const handleClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      let tmpGridItems = [...gridItems];

      if (!tmpGridItems[index].permanentShow && !tmpGridItems[index].show) {
        tmpGridItems[index].show = true;
        setShownCount(shownCount + 1);
      }
      setGridItems(tmpGridItems);
    }
  };

  return (
    <C.Main>
      <C.Container>
        <C.Info>
          <C.LogoLink href="#">
            <img src={logoMemory} alt="Logo memory" width="200" />
          </C.LogoLink>
          <C.InfoArea>
            <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
            <InfoItem label="Movimentos" value={moveCount.toString()} />
          </C.InfoArea>
          <C.Button onClick={resetAndCreateGrid}>Reiniciar</C.Button>
        </C.Info>
        <C.GameArea>
          <C.Grid>
            {gridItems.map((item, index) => (
              <GridItem
                key={index}
                onClick={() => handleClick(index)}
                item={item}
              />
            ))}
          </C.Grid>
        </C.GameArea>
      </C.Container>
    </C.Main>
  );
};

export default App;
