// import React, {useState} from 'react';
// import { MyGlobalContext } from '../context/indexContext';
// import { useGlobalContext } from '../context/indexContext';

// export const Quest = ({
//   roomId,
//   questId,
//   page,
//   setPage,
// }: {
//   roomId: number;
//   questId: number;
//   page: string;
//   setPage?: (page: string) => any;
// }) => {

//   return (

//     questId === 1 && roomId === 1? <p><button onClick={() => setPage('quest1')}>ПЕРЕЙТИ</button></p>:
//     questId === 2 && roomId === 1? <p><button onClick={() => setPage('quest2')}>ПЕРЕЙТИ</button></p>:
//     questId === 1 && roomId === 2? <p><button onClick={() => setPage('quest3')}>ПЕРЕЙТИ</button></p>:
//     questId === 2 && roomId === 2? <p><button onClick={() => setPage('quest4')}>ПЕРЕЙТИ</button></p>:
//     questId === 1 && roomId === 3? <p><button onClick={() => setPage('quest5')}>ПЕРЕЙТИ</button></p>:
//     questId === 2 && roomId === 3? <p><button onClick={() => setPage('quest6')}>ПЕРЕЙТИ</button></p>:
//     questId === 3 && roomId === 3? <p><button onClick={() => setPage('quest7')}>ПЕРЕЙТИ</button></p>:
//     roomId === 4? <p><button onClick={() => setPage('quest8')}>ПЕРЕЙТИ</button></p>:
//     roomId === 5? <p><button onClick={() => setPage('quest9')}>ПЕРЕЙТИ</button></p>:
//     roomId === 6? <p><button onClick={() => setPage('quest10')}>ПЕРЕЙТИ</button></p>:
//     roomId === 7? <p><button onClick={() => setPage('quest11')}>ПЕРЕЙТИ</button></p>:
//     null

//   )
// }