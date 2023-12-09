import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeFull,
  ListTourBanner,
  FeaturedListHome,
  FeaturedListDetail,
  FavoriteEmpty,
  SearchResult,
  DetailTour,
  BookTour,
  Pay,
} from '@containers';

type HomeFullProps = {};
type ListTourBannerProps = {
  province_id: string;
  image: string;
  title: string;
};
type FeaturedListHomeProps = {};
type FeaturedListDetailProps = {
  location_id: string;
};
type FavoriteEmptyProps = {};
type SearchResultProps = {};
type DetailTourProps = {
  tour_id: string;
  isFavorite: boolean;
};
type BookTourProps = {};
type PayProps = {};

export type HomeStackParamList = {
  HomeFull: HomeFullProps | undefined;
  ListTourBanner: ListTourBannerProps | undefined;
  FeaturedListHome: FeaturedListHomeProps | undefined;
  FeaturedListDetail: FeaturedListDetailProps | undefined;
  FavoriteEmpty: FavoriteEmptyProps | undefined;
  SearchResult: SearchResultProps | undefined;
  DetailTour: DetailTourProps | undefined;
  BookTour: BookTourProps | undefined;
  Pay: PayProps | undefined;
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
      <Stack.Screen name="DetailTour" component={DetailTour} />
      <Stack.Screen name="BookTour" component={BookTour} />
      <Stack.Screen name="Pay" component={Pay} />
    </Stack.Navigator>
  );
};

export const HomeStack = React.memo(_HomeStack);
