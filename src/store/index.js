import {persistStore, persistReducer} from 'redux-persist';
import {createStore} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './modules/rootReducer';

const persistReducers = persistReducer(
  {
    key: '@whoIsThisPokemon',
    storage: AsyncStorage,
  },
  rootReducer,
);

const store = createStore(persistReducers);

const persistor = persistStore(store);

export {store, persistor};
