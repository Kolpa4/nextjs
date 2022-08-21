import React, { useMemo, useState } from 'react';
import { ApolloClientTokenizedProvider } from '@deep-foundation/react-hasura/apollo-client-tokenized-provider';
import { TokenProvider, useTokenController } from '@deep-foundation/deeplinks/imports/react-token';
import { useQuery, useSubscription, gql } from '@apollo/client';
import { LocalStoreProvider, useLocalStore } from '@deep-foundation/store/local';
import { MinilinksLink, MinilinksResult, useMinilinksConstruct } from '@deep-foundation/deeplinks/imports/minilinks';
import { ChakraProvider } from '@chakra-ui/react';
import { Authorisation } from '../imports/Authorisation';
import Profile from '../imports/Profile';
import {Portal} from '../imports/Portal';
import Notepad from '../imports/Notepad';
import Room1 from '../imports/Rooms/Room1';
import Room2 from '../imports/Rooms/Room2';
import Room3 from '../imports/Rooms/Room3';
import Room4 from '../imports/Rooms/Room4';
import Room5 from '../imports/Rooms/Room5';
import Room6 from '../imports/Rooms/Room6';
import Room7 from '../imports/Rooms/Room7';
import Room8 from '../imports/Rooms/Room8';
import Quest1 from '../imports/Quests/Quest1';
import Quest2 from '../imports/Quests/Quest2';

const Intro = ({
  page,
  setPage,
}: {
  page: string;
  setPage?: (page: string) => any;
}) => {
  return <>
    <p><button onClick={() => setPage('authorization')}>Войти</button></p>
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
      {page === 'room1' && <Room1 page={page} setPage={setPage}/>}
      {page === 'room2' && <Room2 page={page} setPage={setPage}/>}
      {page === 'room3' && <Room3 page={page} setPage={setPage}/>}
      {page === 'room4' && <Room4 page={page} setPage={setPage}/>}
      {page === 'room5' && <Room5 page={page} setPage={setPage}/>}
      {page === 'room6' && <Room6 page={page} setPage={setPage}/>}
      {page === 'room7' && <Room7 page={page} setPage={setPage}/>}
      {page === 'room8' && <Room8 page={page} setPage={setPage}/>}
      {page === 'quest1' && <Quest1 page={page} setPage={setPage}/>}
      {page === 'quest2' && <Quest2 page={page} setPage={setPage}/>}
    </ChakraProvider>
  </>);
}