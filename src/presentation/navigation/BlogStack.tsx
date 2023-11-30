import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Blogs, CreateBlog, Profile} from '@containers';

type BlogsProps = {};
type CreateBlogProps = {};

export type BlogStackParamList = {
  Blogs: BlogsProps | undefined;
  CreateBlog: CreateBlogProps | undefined;
};

const Stack = createNativeStackNavigator<BlogStackParamList>();

const _BlogStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Blogs"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Blogs" component={Blogs} />
      <Stack.Screen name="CreateBlog" component={CreateBlog} />
    </Stack.Navigator>
  );
};

export const BlogStack = React.memo(_BlogStack);
