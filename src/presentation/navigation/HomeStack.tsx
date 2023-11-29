import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeFull,
  ListTourBanner,
  FeaturedListHome,
  FeaturedListDetail,
  FavoriteEmpty,
  SearchResult,
} from '@containers';

type HomeFullProps = {};
type ListTourBannerProps = {};
type FeaturedListHomeProps = {};
type FeaturedListDetailProps = {};
type FavoriteEmptyProps = {};
type SearchResultProps = {};

export type HomeStackParamList = {
  HomeFull: HomeFullProps | undefined;
  ListTourBanner: ListTourBannerProps | undefined;
  FeaturedListHome: FeaturedListHomeProps | undefined;
  FeaturedListDetail: FeaturedListDetailProps | undefined;
  FavoriteEmpty: FavoriteEmptyProps | undefined;
  SearchResult: SearchResultProps | undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const _HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeFull"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="HomeFull" component={HomeFull} />
      <Stack.Screen name="ListTourBanner" component={ListTourBanner} />
      <Stack.Screen name="FeaturedListHome" component={FeaturedListHome} />
      <Stack.Screen name="FeaturedListDetail" component={FeaturedListDetail} />
      <Stack.Screen name="FavoriteEmpty" component={FavoriteEmpty} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
    </Stack.Navigator>
  );
};

export const HomeStack = React.memo(_HomeStack);
