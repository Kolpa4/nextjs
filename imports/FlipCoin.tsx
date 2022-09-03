import React, {useState} from 'react';
// import { Quest } from './Quest';

export const FlipCoin = ({
  roomId,
  maxi,
  page,
  setPage,
}: {
  roomId: number;
  maxi: number;
  page: string;
  setPage?: (page: string) => any;
}) => {
  const [num, setNum] = useState(0);
  const [tempNum, setTempNum] = useState(0);
  const [quest, setQuest] = useState(0);

  
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const handleClick = () => {
    setQuest(0);
    const interval = setInterval(() => {
      setTempNum(randomNumberInRange(1, {maxi}));
    }, 0);
    setTimeout(() => {
      clearInterval(interval);
      const newNum = randomNumberInRange(1, {maxi})
      setNum(newNum)
    }, 0);
  };

 
  return (<>
    <div>
      <button onClick={handleClick}>Задание {num}</button>

      {!!num && num === 1 && roomId === 1? <p><button onClick={() => setPage('quest1')}>ПЕРЕЙТИ</button></p>:
                num === 2 && roomId === 1? <p><button onClick={() => setPage('quest2')}>ПЕРЕЙТИ</button></p>:
                num === 1 && roomId === 2? <p><button onClick={() => setPage('quest3')}>ПЕРЕЙТИ</button></p>:
                num === 2 && roomId === 2? <p><button onClick={() => setPage('quest4')}>ПЕРЕЙТИ</button></p>:
                num === 1 && roomId === 3? <p><button onClick={() => setPage('quest5')}>ПЕРЕЙТИ</button></p>:
                num === 2 && roomId === 3? <p><button onClick={() => setPage('quest6')}>ПЕРЕЙТИ</button></p>:
                num === 3 && roomId === 3? <p><button onClick={() => setPage('quest7')}>ПЕРЕЙТИ</button></p>:
                num === 3 && roomId === 4? <p><button onClick={() => setPage('quest8')}>ПЕРЕЙТИ</button></p>:
                num === 1 && roomId === 5? <p><button onClick={() => setPage('quest9')}>ПЕРЕЙТИ</button></p>:
                num === 1 && roomId === 6? <p><button onClick={() => setPage('quest10')}>ПЕРЕЙТИ</button></p>:
                num === 1 && roomId === 7? <p><button onClick={() => setPage('quest11')}>ПЕРЕЙТИ</button></p>:
                null
}

    </div>
  </>);
};