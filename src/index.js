import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import DefaultLayout from './styles/global';
import Player from './components/Player';

import Routes from './routes';
import {store, persistor} from './store';

export default function app() {
  return (
    <Fragment>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#d90026"
      />

      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <DefaultLayout>
            <Player />

            <Routes />
          </DefaultLayout>
        </PersistGate>
      </Provider>
    </Fragment>
  );
}
