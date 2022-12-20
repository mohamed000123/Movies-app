import 'react-native-gesture-handler';
import React from 'react';
import MovisStack from './app/modules/movies-list/view/RouterConfig';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <MovisStack />
    </NavigationContainer>
  );
};

export default App;
