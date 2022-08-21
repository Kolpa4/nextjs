import React, {useState} from 'react';

export const Room = ({
  roomId,
  page,
  setPage,
}: {
  roomId: number;
  page: string;
  setPage?: (page: string) => any;
}) => {
  return (
    roomId === 1? <p><button onClick={() => setPage('room1')}>Комната: {roomId}</button></p>:
    roomId === 2? <p><button onClick={() => setPage('room2')}>Комната: {roomId}</button></p>:
    roomId === 3? <p><button onClick={() => setPage('room3')}>Комната: {roomId}</button></p>:
    roomId === 4? <p><button onClick={() => setPage('room4')}>Комната: {roomId}</button></p>:
    roomId === 5? <p><button onClick={() => setPage('room5')}>Комната: {roomId}</button></p>:
    roomId === 6? <p><button onClick={() => setPage('room6')}>Комната: {roomId}</button></p>:
    roomId === 7? <p><button onClick={() => setPage('room7')}>Комната: {roomId}</button></p>:
    roomId === 8? <p><button onClick={() => setPage('room8')}>Комната: {roomId}</button></p>:
    null
  )
}
