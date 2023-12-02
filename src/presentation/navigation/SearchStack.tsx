import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Search, SearchResult, FeaturedListHome, DetailTour, BookTour, Pay} from '@containers';

type SearchProps = {};
type SearchResultProps = {};
type FeaturedListHomeProps = {};
type DetailTourProps = {};
type BookTourProps = {};
type PayProps = {};

export type SearchStackParamList = {
  Search: SearchProps | undefined;
  SearchResult: SearchResultProps | undefined;
  FeaturedListHome: FeaturedListHomeProps | undefined;
  DetailTour: DetailTourProps | undefined;
  BookTour: BookTourProps | undefined;
  Pay: PayProps | undefined;
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
      <Stack.Screen name="DetailTour" component={DetailTour} />
      <Stack.Screen name="BookTour" component={BookTour} />
      <Stack.Screen name="Pay" component={Pay} />
    </Stack.Navigator>
  );
};

export const SearchStack = React.memo(_SearchStack);
