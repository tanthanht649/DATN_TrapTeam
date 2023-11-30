import {Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {StackTest} from './StackTest';
import {HomeStack} from './HomeStack';
import {
  BOTTOM_BLOGS_ACTIVE,
  BOTTOM_BLOGS_INACTIVE,
  BOTTOM_HOUSE_ACTIVE,
  BOTTOM_HOUSE_INACTIVE,
  BOTTOM_PROFILE_ACTIVE,
  BOTTOM_PROFILE_INACTIVE,
  BOTTOM_ZOOM_ACTIVE,
  BOTTOM_ZOOM_INACTIVE,
  fontFamily,
} from '@assets';
import {Colors} from '../resource/value';
import {BlogStack} from './BlogStack';
import {ProfileStack} from './ProfileStack';
import {SearchStack} from './SearchStack';

const Tab = createBottomTabNavigator();

const _BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.BLUE,
        tabBarInactiveTintColor: Colors.WHITE,
        tabBarLabelStyle: {
          fontSize: 30,
          fontFamily: fontFamily.Black,
        },
        tabBarStyle: {
          height: 70,
          paddingBottom: 5,
          backgroundColor: Colors.WHITE,
          borderTopWidth: 0,
        },

        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return (
              <Image
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? Colors.BLUE : Colors.BLUE_SELECT,
                  marginTop: 35,
                }}
                source={focused ? BOTTOM_HOUSE_ACTIVE : BOTTOM_HOUSE_INACTIVE}
              />
            );
          } else if (route.name === 'Searchs') {
            return (
              <Image
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? Colors.BLUE : Colors.BLUE_SELECT,
                  marginTop: 35,
                }}
                source={focused ? BOTTOM_ZOOM_ACTIVE : BOTTOM_ZOOM_INACTIVE}
              />
            );
          } else if (route.name === 'Blogss') {
            return (
              <Image
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? Colors.BLUE : Colors.BLUE_SELECT,
                  marginTop: 35,
                }}
                source={focused ? BOTTOM_BLOGS_ACTIVE : BOTTOM_BLOGS_INACTIVE}
              />
            );
          } else if (route.name === 'Profiles') {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? Colors.BLUE : Colors.BLUE_SELECT,
                  marginTop: 35,
                }}
                source={
                  focused ? BOTTOM_PROFILE_ACTIVE : BOTTOM_PROFILE_INACTIVE
                }
              />
            );
          }
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: '.',
        }}
      />
      <Tab.Screen
        name="Searchs"
        component={SearchStack}
        options={{
          tabBarLabel: '.',
        }}
      />
      <Tab.Screen
        name="Blogss"
        component={BlogStack}
        options={{
          tabBarLabel: '.',
        }}
      />
      <Tab.Screen
        name="Profiles"
        component={ProfileStack}
        options={{
          tabBarLabel: '.',
        }}
      />
    </Tab.Navigator>
  );
};

export const BottomNavigation = React.memo(_BottomNavigation);
