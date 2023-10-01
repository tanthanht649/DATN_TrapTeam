import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {WelcomeTeam, Test, TestTrongDev, OnboardingStart} from '@containers';

type WelcomeTeamProps = {};
type TestProps = {};
type TestTrongDevProps = {};
type OnboardingStartProps = {};

export type WelcomeTeamStackParamList = {
  WelcomeTeam: WelcomeTeamProps | undefined;
  Test: TestProps | undefined;
  TestTrongDev: TestTrongDevProps | undefined;
  OnboardingStart: OnboardingStartProps | undefined;
};

const Stack = createNativeStackNavigator<WelcomeTeamStackParamList>();

const _StackTest = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnboardingStart"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="WelcomeTeam" component={WelcomeTeam} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="TestTrongDev" component={TestTrongDev} />
        <Stack.Screen name="OnboardingStart" component={OnboardingStart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const StackTest = React.memo(_StackTest);
