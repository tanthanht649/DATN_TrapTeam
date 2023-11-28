import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeFull, Rule} from '@containers';

type HomeFullProps = {};
type RuleProps = {};

export type BlogStackParamList = {
  HomeFull: HomeFullProps | undefined;
  Rule: RuleProps | undefined;
};

const Stack = createNativeStackNavigator<BlogStackParamList>();

const _BlogStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Rule"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="HomeFull" component={HomeFull} />
      <Stack.Screen name="Rule" component={Rule} />
    </Stack.Navigator>
  );
};

export const BlogStack = React.memo(_BlogStack);
