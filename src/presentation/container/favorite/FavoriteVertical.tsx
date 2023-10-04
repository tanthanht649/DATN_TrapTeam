import { StyleSheet, Text } from 'react-native';
import React from 'react';


import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { Header } from '@components';
import { ICON_DELETE } from '@assets';
import { Colors } from '@resources';

type PropsType = NativeStackScreenProps<
  WelcomeTeamStackParamList,
  'FavoriteVertical'
>;

const _FavoriteVertical: React.FC<PropsType> = props => {
  const { navigation } = props;
  return (
    <SafeAreaView style={_styles.container}>
      <Header
        textCenter={'Search results'}
        iconRight={ICON_DELETE}
        eventRight={() => console.log('EventRight')}
        isCheck={false}
      />
    </SafeAreaView>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:Colors.WHITE,
  },
});
export const FavoriteVertical = React.memo(_FavoriteVertical);
