import { useEffect, useState } from 'react';
import * as C from './App.styles';
import LogoImg from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg';
import { InfoItem } from './components/infoItem';
import { Bttn } from './components/button';
import { GridItem } from './components/gridItem';
import { GridItemType } from './types/gridTypes';
import { Items } from './data/items';
import { FormateTimeElapsed } from './helpers/TimeElapsedFn';



const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [showCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);
  const [clickedItem, setClickedItem] = useState<number | null>(0);

  useEffect(() => resetAndCreateGrid(), []);
  
  useEffect(() => {
    const timer = setInterval(() => {
      if(playing) setTimeElapsed(timeElapsed +1);
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  useEffect(() => {
    //verify if opened are equal:
    if(showCount === 2) {
      let filterArr = gridItems.filter((item) => {
        return item.shown === true;
      })
      if(filterArr.length === 2) {
        if(filterArr[0].item === filterArr[1].item) {
          filterArr[0].permaShown = true;
          filterArr[1].permaShown = true;
          filterArr[0].shown = false;
          filterArr[1].shown = false;
          filterArr = [];
          setShownCount(0);
        } else {
          setTimeout(() => {
            filterArr[0].shown = false;
            filterArr[1].shown = false;
            filterArr = [];
          }, 1000) 
          setShownCount(0);
        }
      }
    }
  }, [showCount, gridItems]);

  useEffect(() => {
    if(moveCount > 0 && gridItems.every((item) => item.permaShown === true)) {
      setPlaying(false);
    }
  }, [moveCount, gridItems]);

  const handleItemClick = (index:number, item: GridItemType) => {
    setMoveCount(moveCount +1);
      if(playing && index !== null && showCount < 2) { 
        let tmpGrid = [...gridItems];
        if(tmpGrid[index].permaShown === false && tmpGrid[index].shown === false) {
          tmpGrid[index].shown = true;
          setShownCount(showCount + 1);
        }
        setGridItems(tmpGrid);
      }
  }

  const resetAndCreateGrid = () => {
      setTimeElapsed(0);
      setMoveCount(0);
      setShownCount(0);

      let tempGrid: GridItemType[] = [];
      for(let i = 0; i < Items.length * 2; i++) {
        tempGrid.push({
          item: null,
          shown: false,
          permaShown: false
        });
      }
      for(let w = 0; w < 2; w++) {
        for(let i=0; i < Items.length; i++) {
          let pos = -1
          while(pos<0 || tempGrid[pos].item !== null) {
            pos = Math.floor(Math.random() * (Items.length * 2));
          } 
          tempGrid[pos].item = i;
        }
      }

      setGridItems(tempGrid);

      setPlaying(true);
    
  }

  return (
    <div>
      <C.MainContainer>
        <C.LeftSide>
          <C.LogoLink href="">
            <img src={LogoImg} width="200" alt=""/>
          </C.LogoLink>
          <C.infoControll>
            <InfoItem label="TEMPO" value={FormateTimeElapsed(timeElapsed)}/>
            <InfoItem label="MOVIMENTO" value={`${moveCount}`}/>
          </C.infoControll>
          <Bttn label="Reiniciar" icon={RestartIcon} onClick={resetAndCreateGrid} />
        </C.LeftSide>

        <C.GridArea>
          <C.Grid>
            {gridItems.map((item, index) => (
              <GridItem key={index}
              item = {item}
              onClick={() => handleItemClick(index, item)}
              />
            ))}
          </C.Grid>
        </C.GridArea>
      </C.MainContainer>
    </div>
  )
}

export default App;
