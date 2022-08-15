import React, { useMemo, useState } from 'react';
import { ApolloClientTokenizedProvider } from '@deep-foundation/react-hasura/apollo-client-tokenized-provider';
import { TokenProvider, useTokenController } from '@deep-foundation/deeplinks/imports/react-token';
import { useQuery, useSubscription, gql } from '@apollo/client';
import { LocalStoreProvider, useLocalStore } from '@deep-foundation/store/local';
import { MinilinksLink, MinilinksResult, useMinilinksConstruct } from '@deep-foundation/deeplinks/imports/minilinks';
import { ChakraProvider } from '@chakra-ui/react';
import { Authorisation } from '../imports/Authorisation';
import Profile from '../imports/Profile';
import  { Portal } from '../imports/Portal';
import  { Room } from '../imports/Room';
import Rooma from '../imports/Rooma';
import Notepad from '../imports/Notepad';

const Intro = ({
  page,
  setPage,
}: {
  page: string;
  setPage?: (page: string) => any;
}) => {
  return <>
    <p><button onClick={() => setPage('authorization')}>Войти</button></p>

    {/* <p><a href="/https://web.telegram.org/z/#-1770564114Blocknote">https://web.telegram.org/z/#-1770564114</a></p> */}
  </>;
};

export default function Index() {
  const [page, setPage] = useState<string>('intro');
  return (<>
    <ChakraProvider>
      {page === 'intro' && <Intro page={page} setPage={setPage}/>}
      {page === 'authorization' && <Authorisation page={page} setPage={setPage}/>}
      {page === 'profile' && <Profile page={page} setPage={setPage}/>}
      {page === 'portal' && <Portal page={page} setPage={setPage}/>}
      {page === 'notepad' && <Notepad page={page} setPage={setPage}/>}
      {page === 'rooma' && <Rooma page={page} setPage={setPage}/>}
    </ChakraProvider>
  </>);
}