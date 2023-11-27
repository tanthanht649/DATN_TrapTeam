import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const _Rules = () => {
  return (
    <SafeAreaView>
      <Text>Rules</Text>
    </SafeAreaView>
  );
};

const _styles = StyleSheet.create({});

export const Rules = React.memo(_Rules);
