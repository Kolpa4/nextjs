import React, {useState} from 'react';

export const Quest = ({
  questId,
  page,
  setPage,
}: {
  questId: number;
  page: string;
  setPage?: (page: string) => any;
}) => {
  return (
    questId === 1? <p><button onClick={() => setPage('quest1')}>Задание: {questId}</button></p>:
    questId === 2? <p><button onClick={() => setPage('quest2')}>Задание: {questId}</button></p>:
    null

  )
}