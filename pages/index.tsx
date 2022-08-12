import React, { useMemo, useState } from 'react';
import { ApolloClientTokenizedProvider } from '@deep-foundation/react-hasura/apollo-client-tokenized-provider';
import { TokenProvider, useTokenController } from '@deep-foundation/deeplinks/imports/react-token';
import { useQuery, useSubscription, gql } from '@apollo/client';
import { LocalStoreProvider, useLocalStore } from '@deep-foundation/store/local';
import { MinilinksLink, MinilinksResult, useMinilinksConstruct } from '@deep-foundation/deeplinks/imports/minilinks';
import { ChakraProvider } from '@chakra-ui/react';
import MainWindow from './MainWindow';

export default function Index() {
  return (<>
    <ChakraProvider>
      {/* <MainWindow/> */}
      <h1>Deep.Foundation nextjs examples</h1>
      <p><a href="/MainWindow">Войти</a></p>
      <p><a href="/messanger">messanger</a></p>
    </ChakraProvider>
  </>);
}