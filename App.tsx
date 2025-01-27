import MainApp from '@src/MainApp';
import {persistor, store} from '@src/store';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <SafeAreaProvider>
        <MainApp />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
