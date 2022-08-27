import React, {useState} from 'react';
import { MyGlobalContext } from '../context/indexContext';
import { useGlobalContext } from '../context/indexContext';

export const Quest = ({
  questId,
  page,
  setPage,
}: {
  questId: number;
  page: string;
  setPage?: (page: string) => any;
}) => {
  const { roomId, setRoomId } = useGlobalContext()

  return (
    <MyGlobalContext.Provider value= {{ roomId, setRoomId }}>
    questId === 1 && roomId === 1? <p><button onClick={() => setPage('quest1')}>Задание: {questId}</button></p>:
    questId === 2 && roomId === 1? <p><button onClick={() => setPage('quest2')}>Задание: {questId}</button></p>:
    questId === 1 && roomId === 2? <p><button onClick={() => setPage('quest3')}>Задание: {questId}</button></p>:
    questId === 2 && roomId === 2? <p><button onClick={() => setPage('quest4')}>Задание: {questId}</button></p>:
    questId === 1 && roomId === 3? <p><button onClick={() => setPage('quest5')}>Задание: {questId}</button></p>:
    questId === 2 && roomId === 3? <p><button onClick={() => setPage('quest6')}>Задание: {questId}</button></p>:
    questId === 3 && roomId === 3? <p><button onClick={() => setPage('quest7')}>Задание: {questId}</button></p>:
    roomId === 4? <p><button onClick={() => setPage('quest8')}>Задание: {questId}</button></p>:
    roomId === 5? <p><button onClick={() => setPage('quest9')}>Задание: {questId}</button></p>:
    roomId === 6? <p><button onClick={() => setPage('quest10')}>Задание: {questId}</button></p>:
    roomId === 7? <p><button onClick={() => setPage('quest11')}>Задание: {questId}</button></p>:
    null
    </MyGlobalContext.Provider>
  )
}