import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationNavigator from './src/Navigators/AuthenticationNavigator';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/Themes/Theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <ThemeProvider {...{theme}}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthenticationNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
