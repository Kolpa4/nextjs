import React, {useState} from 'react';
import { Quest } from './Quest';

export const FlipCoin = ({
  max,
  page,
  setPage,
}: {
  max: number;
  page: string;
  setPage?: (page: string) => any;
}) => {
  const [num, setNum] = useState(0);
  const [tempNum, setTempNum] = useState(0);
  const [quest, setQuest] = useState(0);

  
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const handleClick = () => {;
    setQuest(0);
    const interval = setInterval(() => {
      setTempNum(randomNumberInRange(1, {max}));
    }, 0);
    setTimeout(() => {
      clearInterval(interval);
      const newNum = randomNumberInRange(1, {max})
      setNum(newNum),
      setQuest(newNum);
    }, 0);
  };

 
  return (<>
    <div>
      <button onClick={handleClick}>Задание</button>

      {!!quest && <Quest questId={quest} page={'quest'} setPage={setPage}/>}

    </div>
  </>);
};