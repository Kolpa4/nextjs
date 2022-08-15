import { useRouter } from 'next/router'
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
  <div> 
    <p><button onClick={() => setPage('rooma')}>Комната: {roomId}</button></p> 
  </div>)
}
