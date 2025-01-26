import MainApp from '@src/MainApp';
import {persistor, store} from '@src/store';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <MainApp />
    </Provider>
  );
}

export default App;
