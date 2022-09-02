import React, { useMemo, useState } from 'react';
import { ApolloClientTokenizedProvider } from '@deep-foundation/react-hasura/apollo-client-tokenized-provider';
import { TokenProvider, useTokenController } from '@deep-foundation/deeplinks/imports/react-token';
import { useQuery, useSubscription, gql } from '@apollo/client';
import { LocalStoreProvider, useLocalStore } from '@deep-foundation/store/local';
import { MinilinksLink, MinilinksResult, useMinilinksConstruct } from '@deep-foundation/deeplinks/imports/minilinks';
import { ChakraProvider } from '@chakra-ui/react';
import {Authorisation} from '../imports/Authorisation';
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
import Quest1 from '../imports/Quests/Quest1';
import Quest2 from '../imports/Quests/Quest2';
import Quest3 from '../imports/Quests/Quest3';
import Quest4 from '../imports/Quests/Quest4';
import Quest5 from '../imports/Quests/Quest5';
import Quest6 from '../imports/Quests/Quest6';
import Quest7 from '../imports/Quests/Quest7';
import Quest8 from '../imports/Quests/Quest8';
import Quest9 from '../imports/Quests/Quest9';
import Quest10 from '../imports/Quests/Quest10';
import Quest11 from '../imports/Quests/Quest11';
import { MyGlobalContext } from '../context/indexContext';

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
    {/* <MyGlobalContext.Provider value= {{ roomId, setRoomId }}> */}
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
      {page === 'quest1' && <Quest1 page={page} setPage={setPage}/>}
      {page === 'quest2' && <Quest2 page={page} setPage={setPage}/>}
      {page === 'quest3' && <Quest3 page={page} setPage={setPage}/>}
      {page === 'quest4' && <Quest4 page={page} setPage={setPage}/>}
      {page === 'quest5' && <Quest5 page={page} setPage={setPage}/>}
      {page === 'quest6' && <Quest6 page={page} setPage={setPage}/>}
      {page === 'quest7' && <Quest7 page={page} setPage={setPage}/>}
      {page === 'quest8' && <Quest8 page={page} setPage={setPage}/>}
      {page === 'quest9' && <Quest9 page={page} setPage={setPage}/>}
      {page === 'quest10' && <Quest10 page={page} setPage={setPage}/>}
      {page === 'quest11' && <Quest11 page={page} setPage={setPage}/>}
      {/* </MyGlobalContext.Provider> */}
    </ChakraProvider>
  </>);
}