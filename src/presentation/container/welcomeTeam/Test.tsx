import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {WelcomeTeamStackParamList} from '@navigation';
import {BackgroundApp, ItemLocation} from '@components';
import {BACKGROUND_WHITE, LOCATION, LOCATION_2} from '@assets';

type PropsType = NativeStackScreenProps<WelcomeTeamStackParamList, 'Test'>;
const _Test: React.FC<PropsType> = props => {
  const {navigation} = props;
  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </Pressable>
        <ItemLocation
          imageLocation={LOCATION_2}
          text="2.5 km from Srengseng, Kembangan, West Jakarta City, Jakarta 11630"
          textBolds={['2.5 km']}
          statusOnPress={true}
        />
      </SafeAreaView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export const Test = React.memo(_Test);
