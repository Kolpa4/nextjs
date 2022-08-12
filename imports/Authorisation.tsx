import React from 'react'

export const Authorisation = ({
  page,
  setPage,
}: {
  page: string;
  setPage?: (page: string) => any;
}) => {
  return (<>
    <p><button onClick={() => setPage('profile')}>Профиль</button></p>
  </>);
}
