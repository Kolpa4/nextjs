import React, {useState} from 'react';
import { Quest } from './Quest';

export const FlipCoin = ({
  page,
  setPage,
}: {
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
      setTempNum(randomNumberInRange(1, 2));
    }, 0);
    setTimeout(() => {
      clearInterval(interval);
      const newNum = randomNumberInRange(1, 2)
      setNum(newNum),
      setQuest(newNum);
    }, 0);
  };

 
  return (<>
    <div>
      {/* <h2>Задание: {num || tempNum}</h2> */}
      <button onClick={handleClick}>Получить Задание</button>

      {!!quest && <Quest questId={quest} page={'quest'} setPage={setPage}/>}

    </div>
  </>);
};