import React, {useState} from 'react';
import { Room } from './Room';

export const Portal = ({
  page,
  setPage,
}: {
  page: string;
  setPage?: (page: string) => any;
}) => {
  const [num, setNum] = useState(0);
  const [tempNum, setTempNum] = useState(0);
  const [room, setRoom] = useState(0);

  
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const handleClick = () => {
    setNum(0);
    const interval = setInterval(() => {
      setTempNum(randomNumberInRange(1, 100));
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      const newNum = randomNumberInRange(1, 100)
      setNum(newNum);
      setRoom(Math.floor((newNum/13)+1))
    }, 3000);
  };

 
  return (<>
    <div>
      <h2>Событие: {num || tempNum}</h2>
      <button onClick={handleClick}>Случайное число от 1 до 100</button>

      {!!room && <Room roomId={room} page={'room'} setPage={setPage}/>}

      <p><button onClick={() => setPage('profile')}>Профиль</button></p>
      
    </div>
  </>);
};
