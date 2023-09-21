import {StyleSheet, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {LOGO_APP, SPLASH_SCREEN, fontFamily} from '@assets';
import {Colors, DimensionsStyle} from '@resources';
import {BackgroundApp} from '@components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {WelcomeTeamStackParamList} from '@navigation';

type PropsType = NativeStackScreenProps<
  WelcomeTeamStackParamList,
  'WelcomeTeam'
>;

const _WelcomeTeam: React.FC<PropsType> = props => {
  const {navigation} = props;
  return (
    <BackgroundApp source={SPLASH_SCREEN}>
      <SafeAreaView style={_styles.container}>
        <Text style={_styles.textTitle}>Welcome Team</Text>
        <Text style={[_styles.textName, {fontFamily: fontFamily.Italic}]}>
          Trương Tấn Thành
        </Text>
        <Text style={[_styles.textName, {fontFamily: fontFamily.Bold}]}>
          Nguyễn Lê Thuy Ân
        </Text>
        <Text style={[_styles.textName, {fontFamily: fontFamily.Hairline}]}>
          Huỳnh Phi Long
        </Text>
        <Text style={[_styles.textName, {fontFamily: fontFamily.Regular}]}>
          Nguyễn Thị Diễm Kiều
        </Text>
        <Text style={[_styles.textName, {fontFamily: fontFamily.Light}]}>
          Huỳnh Thị Mỹ Linh
        </Text>
        <Text style={[_styles.textName, {fontFamily: fontFamily.Semibold}]}>
          Lữ Văn Trọng
        </Text>
        <Pressable
          style={_styles.pressable}
          onPress={() => navigation.navigate('Test')}>
          <Image source={LOGO_APP} style={_styles.imageLogo} />
        </Pressable>
      </SafeAreaView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textTitle: {
    fontSize: 25,
    fontFamily: fontFamily.Black,
    color: Colors.RED,
    marginBottom: 10,
  },

  textName: {
    fontSize: 18,
    color: Colors.WHITE,
    marginTop: 5,
  },

  imageLogo: {
    width: DimensionsStyle.width * 0.4,
    height: DimensionsStyle.width * 0.32,
    resizeMode: 'stretch',
  },

  pressable: {
    position: 'absolute',
    bottom: 0,
  },
});

export const WelcomeTeam = React.memo(_WelcomeTeam);
