import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
  HistoryDetail,
  AddReview
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
type SearchResultProps = {
  isFilter: boolean;
  departureLocation?: string ;
  locationProvinces?: string ;
  is_popular?: boolean;
  minPrice?: string;
  maxPrice?: string;
  dayFind?: string;
  text?: string | undefined;
};
type DetailTourProps = {
  tour_id: string;
  isFavorite: boolean;
};
type BookTourProps = {};

interface LocationInBookTour {
  _id: string;
  name: string;
}
type PayProps = {
  user_id: string | undefined;
  tour_id: string;
  discount: number;
  adult_account: number;
  child_account: number;
  price: number;
  note: string;
  role: boolean;
  location_custom: LocationInBookTour[];
  priceService: number;
  isSale: boolean;
};

type HistoryDetailProps = {};

type AddReviewProps = {
  tour_id: string;
};

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
  HistoryDetail: HistoryDetailProps | undefined;
  AddReview: AddReviewProps | undefined;
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
      <Stack.Screen name="HistoryDetail" component={HistoryDetail} />
      <Stack.Screen name="AddReview" component={AddReview} />
    </Stack.Navigator>
  );
};

export const HomeStack = React.memo(_HomeStack);
