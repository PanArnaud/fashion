import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import OnBoarding from '../Pages/Authentication/OnBoarding';
import Welcome from '../Pages/Authentication/Welcome';

const AuthenticationStack = createNativeStackNavigator();

const AuthenticationNavigator = (): JSX.Element => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
