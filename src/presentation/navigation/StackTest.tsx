import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {WelcomeTeam, Test} from '@containers';
import { HomeFull } from '../container/home';
import { HomePromotion } from '../container/home/HomePromotion';
import { Review } from '../container/transactions';
import { Summary } from '../container/transactions/Summary';
import { AddReview } from '../container/transactions/AddReview';

type WelcomeTeamProps = {};
type TestProps = {};
type HomeFullProps = {};
type HomePromotionProps = {};
type ReviewProps = {};
type SummaryProps = {};
type AddReviewProps = {};

export type WelcomeTeamStackParamList = {
  WelcomeTeam: WelcomeTeamProps | undefined;
  Test: TestProps | undefined;
  HomeFull: HomeFullProps | undefined;
  HomePromotion: HomePromotionProps | undefined;
  Review: ReviewProps | undefined;
  Summary: SummaryProps | undefined;
  AddReview: AddReviewProps | undefined;
};

const Stack = createNativeStackNavigator<WelcomeTeamStackParamList>();

const _StackTest = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Review"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>

        <Stack.Screen name="WelcomeTeam" component={WelcomeTeam} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name='HomeFull' component={HomeFull}/>
        <Stack.Screen name='HomePromotion' component={HomePromotion}/>
        <Stack.Screen name='Review' component={Review}/>
        <Stack.Screen name='Summary' component={Summary}/>
        <Stack.Screen name='AddReview' component={AddReview}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const StackTest = React.memo(_StackTest);
