import React, {useState} from 'react';
import { MyGlobalContext } from '../context/indexContext';
import { useGlobalContext } from '../context/indexContext';
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
  const { roomId, setRoomId } = useGlobalContext()

  
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
      setRoom(        
        newNum > 0 && newNum <= 15 ? 1 :
        newNum > 15 && newNum <= 30 ? 2 :
        newNum > 30 && newNum <= 60 ? 3 :
        newNum > 60 && newNum <= 70 ? 4 :
        newNum > 70 && newNum <= 80 ? 5 :
        newNum > 80 && newNum <= 80 ? 6 :
        newNum > 90 && newNum <= 100 ? 7 :
        null);
      setRoomId(
        newNum > 0 && newNum <= 15 ? 1 :
        newNum > 15 && newNum <= 30 ? 2 :
        newNum > 30 && newNum <= 60 ? 3 :
        newNum > 60 && newNum <= 70 ? 4 :
        newNum > 70 && newNum <= 80 ? 5 :
        newNum > 80 && newNum <= 80 ? 6 :
        newNum > 90 && newNum <= 100 ? 7 :
        null
      )
    }, 3000);
  };

 
  return (<>
  <MyGlobalContext.Provider value= {{ roomId, setRoomId }}>
    <div>

      <h2>Событие: {num || tempNum}</h2>
      <button onClick={handleClick}>Случайное число от 1 до 100</button>

      {!!room && <Room roomId={room} page={'room'} setPage={setPage}/>}

      <p><button onClick={() => setPage('profile')}>Профиль</button></p>
      
    </div>
  </MyGlobalContext.Provider>
  </>);
};
