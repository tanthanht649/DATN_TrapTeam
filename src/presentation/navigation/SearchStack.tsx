import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Search, SearchResult, FeaturedListHome} from '@containers';

type SearchProps = {};
type SearchResultProps = {};
type FeaturedListHomeProps = {};

export type SearchStackParamList = {
  Search: SearchProps | undefined;
  SearchResult: SearchResultProps | undefined;
  FeaturedListHome: FeaturedListHomeProps | undefined;
};

const Stack = createNativeStackNavigator<SearchStackParamList>();

const _SearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
      <Stack.Screen name="FeaturedListHome" component={FeaturedListHome} />
    </Stack.Navigator>
  );
};

export const SearchStack = React.memo(_SearchStack);
