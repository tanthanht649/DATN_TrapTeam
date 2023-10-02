import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  WelcomeTeam,
  Test,
  OnboardingNextOne,
  OnboardingNextTwo,
  OnboardingStart,
  OnboardingNextThree,
  AllReviews,
  EditProfile,
  Login,
  LoginOption,
  Profile,
  Register,
  RegisterOTP,
} from '@containers';

type WelcomeTeamProps = {};
type TestProps = {};
type OnboardingNextOneProps = {};
type OnboardingNextTwoProps = {};
type OnboardingStartProps = {};
type OnboardingNextThreeProps = {};
type AllReviewsProps = {};
type EditProfileProps = {};
type LoginProps = {};
type LoginOptionProps = {};
type ProfileProps = {};
type RegisterProps = {};
type RegisterOTPProps = {};

export type WelcomeTeamStackParamList = {
  WelcomeTeam: WelcomeTeamProps | undefined;
  Test: TestProps | undefined;
  OnboardingNextOne: OnboardingNextOneProps | undefined;
  OnboardingNextTwo: OnboardingNextTwoProps | undefined;
  OnboardingStart: OnboardingStartProps | undefined;
  OnboardingNextThree: OnboardingNextThreeProps | undefined;
  AllReviews: AllReviewsProps | undefined;
  EditProfile: EditProfileProps | undefined;
  Login: LoginProps | undefined;
  LoginOption: LoginOptionProps | undefined;
  Profile: ProfileProps | undefined;
  Register: RegisterProps | undefined;
  RegisterOTP: RegisterOTPProps | undefined;
};

const Stack = createNativeStackNavigator<WelcomeTeamStackParamList>();

const _StackTest = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnboardingNextOne"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="WelcomeTeam" component={WelcomeTeam} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="OnboardingNextOne" component={OnboardingNextOne} />
        <Stack.Screen name="OnboardingNextTwo" component={OnboardingNextTwo} />
        <Stack.Screen name="OnboardingStart" component={OnboardingStart} />
        <Stack.Screen
          name="OnboardingNextThree"
          component={OnboardingNextThree}
        />
        <Stack.Screen name="AllReviews" component={AllReviews} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginOption" component={LoginOption} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterOTP" component={RegisterOTP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const StackTest = React.memo(_StackTest);
