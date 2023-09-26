import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {WelcomeTeamStackParamList} from '@navigation';

type PropsType = NativeStackScreenProps<WelcomeTeamStackParamList, 'Test'>;
const _Test: React.FC<PropsType> = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={_styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Test = React.memo(_Test);
