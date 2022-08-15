// import React from 'react'


export default function Profile({
  page,
  setPage,
}: {
  page: string;
  setPage?: (page: string) => any;
}) {
  return (
    <div>
      <p><button onClick={() => setPage('portal')}>ПОРТАЛ</button></p>
      <p><button onClick={() => setPage('notepad')}>Блокнот</button></p>
    </div>
  )
}
