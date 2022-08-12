import React, {useState} from 'react';

var numb;

const RNDgenerator = () => {
  const [num, setNum] = useState(0);

  
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const handleClick = () => {
    setTimeout(()=>{setNum(randomNumberInRange(1, 100))},3000)
  };

 
  return (

    <div>
      <h2>ЧИСЛО: {num}</h2>
      <button onClick={handleClick}>Случайное число от 1 до 100</button>
      
    </div>

  );
};

export default RNDgenerator;