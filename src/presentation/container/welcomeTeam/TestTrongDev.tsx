import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const _TestTrongDev = () => {
  return (
    <View>
      <Text>TestTrongDev</Text>
    </View>
  );
};

const _styles = StyleSheet.create({});
export const TestTrongDev = React.memo(_TestTrongDev);
