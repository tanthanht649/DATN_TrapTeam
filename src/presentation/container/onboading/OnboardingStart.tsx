import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {BackgroundApp, Button} from '@components';
import {LOGO_APP, SPLASH_SCREEN, fontFamily} from '@assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, DimensionsStyle} from '@resources';

const _OnboardingStart = () => {
  return (
    <BackgroundApp source={SPLASH_SCREEN}>
      <SafeAreaView style={_styles.container}>
        <View>
          <Image source={LOGO_APP} style={_styles.imageLogo} />
          <Text style={[_styles.textCenter, {marginTop: -30}]}>House Gold</Text>
        </View>
        <View
          style={{
            bottom: 20,
            position: 'absolute',
          }}>
          <Button
            title="let's start"
            onPress={() => {}}
            imageIconLeft={LOGO_APP}
            imageIconRight={LOGO_APP}
            viewStyle={{width: DimensionsStyle.width * 0.5, marginBottom: 20}}
          />
          <Text
            style={[
              _styles.textCenter,
              {fontSize: 12, fontFamily: fontFamily.Thin},
            ]}>
            Made with love
          </Text>
          <Text style={[_styles.textCenter, {fontSize: 12}]}>v.1.0</Text>
        </View>
      </SafeAreaView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageLogo: {
    width: DimensionsStyle.width * 0.6,
    height: DimensionsStyle.width * 0.4,
    marginTop: -DimensionsStyle.height * 0.2,
  },

  textCenter: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: fontFamily.Bold,
    color: Colors.WHITE,
  },
});
export const OnboardingStart = React.memo(_OnboardingStart);
