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
  FeaturedListHome,
  FeaturedListDetail,
  Rule,
  Version,
  HomeFull,
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
type FeaturedListHomeProps = {};
type FeaturedListDetailProps = {};
type RuleProps = {};
type VersionProps = {};
type HomeFullProps = {};

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
  FeaturedListHome: FeaturedListHomeProps | undefined;
  FeaturedListDetail: FeaturedListDetailProps | undefined;
  Rule: RuleProps | undefined;
  Version: VersionProps | undefined;
  HomeFull: HomeFullProps | undefined;
};

const Stack = createNativeStackNavigator<WelcomeTeamStackParamList>();

const _StackTest = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Version"
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
        <Stack.Screen name="FeaturedListHome" component={FeaturedListHome} />
        <Stack.Screen name="Rule" component={Rule} />
        <Stack.Screen name="Version" component={Version} />

        <Stack.Screen
          name="FeaturedListDetail"
          component={FeaturedListDetail}
        />
        <Stack.Screen name="HomeFull" component={HomeFull} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const StackTest = React.memo(_StackTest);
