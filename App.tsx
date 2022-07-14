import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationNavigator from './src/Navigators/AuthenticationNavigator';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/Themes/Theme';

const App = () => {
  return (
    <ThemeProvider {...{theme}}>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
