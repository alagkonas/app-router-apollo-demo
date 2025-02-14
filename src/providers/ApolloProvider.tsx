"use client";

import { HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  InMemoryCache,
  ApolloClient,
} from "@apollo/experimental-nextjs-app-support";
import { setVerbosity } from "ts-invariant";

const GRAPHQL_API_ENDPOINT = "https://rickandmortyapi.com/graphql";

setVerbosity("debug");

function makeClient() {
  const httpLink = new HttpLink({
    uri: GRAPHQL_API_ENDPOINT,
    fetchOptions: { cache: "default" }
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

export function ApolloProvider({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>);
}
