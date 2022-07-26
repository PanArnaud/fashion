import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../Pages/Authentication/Login';
import OnBoarding from '../Pages/Authentication/OnBoarding';
import Welcome from '../Pages/Authentication/Welcome';
import SignUp from '../Pages/Authentication/SignUp';
import ForgotPassword from '../Pages/Authentication/ForgotPassword';
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
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
      <AuthenticationStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
