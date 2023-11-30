import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Profile,
  FavoriteEmpty,
  HistoryDetail,
  Rule,
  CreateBlog,
  Blogs,
  Version,
  EditProfile,
  AddReview,
} from '@containers';

type ProfileProps = {};
type FavoriteEmptyProps = {};
type HistoryDetailProps = {};
type RuleProps = {};
type CreateBlogProps = {};
type BlogsProps = {};
type VersionProps = {};
type EditProfileProps = {};
type AddReviewProps = {};

export type ProfileStackParamList = {
  Profile: ProfileProps | undefined;
  FavoriteEmpty: FavoriteEmptyProps | undefined;
  HistoryDetail: HistoryDetailProps | undefined;
  Rule: RuleProps | undefined;
  CreateBlog: CreateBlogProps | undefined;
  Blogs: BlogsProps | undefined;
  Version: VersionProps | undefined;
  EditProfile: EditProfileProps | undefined;
  AddReview: AddReviewProps | undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const _ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="FavoriteEmpty" component={FavoriteEmpty} />
      <Stack.Screen name="HistoryDetail" component={HistoryDetail} />
      <Stack.Screen name="Rule" component={Rule} />
      <Stack.Screen name="CreateBlog" component={CreateBlog} />
      <Stack.Screen name="Blogs" component={Blogs} />
      <Stack.Screen name="Version" component={Version} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="AddReview" component={AddReview} />
    </Stack.Navigator>
  );
};

export const ProfileStack = React.memo(_ProfileStack);
