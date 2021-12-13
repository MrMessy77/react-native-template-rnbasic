import React, { useEffect } from 'react';
import { AppState, StatusBar, View, BackHandler } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as AntProvider } from '@ant-design/react-native';
import 'react-native-gesture-handler';

import Navigator from './navigator';
import store from './store';

export default App = (props) => {
  useEffect(() => {
    return function cleanup() {
    }
  });

  return (
    <Provider store={store}>
      <AntProvider>
        <View style={{ flex: 1 }}>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </View>
      </AntProvider>
    </Provider>
  );
}