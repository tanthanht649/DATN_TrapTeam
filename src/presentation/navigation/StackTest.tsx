import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {WelcomeTeam, Test, LoginOption, Login, Register, RegisterOTP} from '@containers';

type WelcomeTeamProps = {};
type TestProps = {};
type LoginOptionProps={};
type LoginProps={};
type RegisterProps={};
type RegisterOTPProps={};




export type WelcomeTeamStackParamList = {
  WelcomeTeam: WelcomeTeamProps | undefined;
  Test: TestProps | undefined;
  LoginOption: LoginOptionProps|undefined;
  Login: LoginProps|undefined;
  Register:RegisterProps|undefined;
  RegisterOTP:RegisterOTPProps|undefined
};

const Stack = createNativeStackNavigator<WelcomeTeamStackParamList>();

const _StackTest = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeTeam"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="WelcomeTeam" component={WelcomeTeam} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="LoginOption" component={LoginOption} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterOTP" component={RegisterOTP} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const StackTest = React.memo(_StackTest);
