import {useMaterial3Theme} from '@pchmn/expo-material3-theme';
import MainApp from '@src/MainApp';
import {persistor, store} from '@src/store';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  const theme = useMaterial3Theme({fallbackSourceColor: '#3E8260'});

  useEffect(() => {
    console.log(theme);
  }, [theme]);

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
