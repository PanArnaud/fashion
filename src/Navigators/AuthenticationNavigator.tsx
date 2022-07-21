import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../Pages/Authentication/Login';
import OnBoarding from '../Pages/Authentication/OnBoarding';
import Welcome from '../Pages/Authentication/Welcome';
import { Routes } from './Navigation';

const AuthenticationStack = createNativeStackNavigator<Routes>();

const AuthenticationNavigator = (): JSX.Element => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
