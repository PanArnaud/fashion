import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthenticationNavigator from './src/Navigators/AuthenticationNavigator';
import { theme } from './src/Themes/Theme';

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
