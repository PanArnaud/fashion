import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationNavigator from './src/Navigators/AuthenticationNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
};

export default App;
