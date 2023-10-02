import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  WelcomeTeam,
  Test,
  TestTrongDev,
  OnboardingStart,
  OnboardingNextOne,
  OnboardingNextTwo,
  OnboardingNextThree,
} from '@containers';

type WelcomeTeamProps = {};
type TestProps = {};
type TestTrongDevProps = {};
type OnboardingStartProps = {};
type OnboardingNextOneProps = {};
type OnboardingNextTwoProps = {};
type OnboardingNextThreeProps = {};

export type WelcomeTeamStackParamList = {
  WelcomeTeam: WelcomeTeamProps | undefined;
  Test: TestProps | undefined;
  TestTrongDev: TestTrongDevProps | undefined;
  OnboardingStart: OnboardingStartProps | undefined;
  OnboardingNextOne: OnboardingNextOneProps | undefined;
  OnboardingNextTwo: OnboardingNextTwoProps | undefined;
  OnboardingNextThree: OnboardingNextThreeProps | undefined;
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
        <Stack.Screen name="TestTrongDev" component={TestTrongDev} />
        <Stack.Screen name="OnboardingStart" component={OnboardingStart} />
        <Stack.Screen name="OnboardingNextOne" component={OnboardingNextOne} />
        <Stack.Screen name="OnboardingNextTwo" component={OnboardingNextTwo} />
        <Stack.Screen
          name="OnboardingNextThree"
          component={OnboardingNextThree}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const StackTest = React.memo(_StackTest);
