import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  OnboardingNextOne,
  OnboardingNextTwo,
  OnboardingStart,
  OnboardingNextThree,
  Login,
} from '@containers';

type OnboardingNextOneProps = {};
type OnboardingNextTwoProps = {};
type OnboardingStartProps = {};
type OnboardingNextThreeProps = {};
type LoginProps = {};

export type OnboardingLoginStackParamList = {
  OnboardingNextOne: OnboardingNextOneProps | undefined;
  OnboardingNextTwo: OnboardingNextTwoProps | undefined;
  OnboardingStart: OnboardingStartProps | undefined;
  OnboardingNextThree: OnboardingNextThreeProps | undefined;
  Login: LoginProps | undefined;
};

const Stack = createNativeStackNavigator<OnboardingLoginStackParamList>();

const _OnboardingLoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnboardingStart"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="OnboardingNextOne" component={OnboardingNextOne} />
      <Stack.Screen name="OnboardingNextTwo" component={OnboardingNextTwo} />
      <Stack.Screen name="OnboardingStart" component={OnboardingStart} />
      <Stack.Screen
        name="OnboardingNextThree"
        component={OnboardingNextThree}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export const OnboardingLoginStack = React.memo(_OnboardingLoginStack);
