import MainApp from '@src/MainApp';
import {store} from '@src/store';
import React from 'react';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;
