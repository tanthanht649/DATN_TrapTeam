import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  SafeAreaInsetsContext,
  SafeAreaView,
} from 'react-native-safe-area-context';

const _Version = () => {
  return (
    <SafeAreaView>
      <Text>Version</Text>
    </SafeAreaView>
  );
};

const _styles = StyleSheet.create({});
export const Version = React.memo(_Version);
