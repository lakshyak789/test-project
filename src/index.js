import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import { ChakraProvider } from '@chakra-ui/react'

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    "Authorization": "Bearer 61d69d77079ead57fd405e445e9e3a",
  }
});
ReactDOM.render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ClientContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();