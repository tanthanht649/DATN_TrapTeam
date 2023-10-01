import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {BackgroundApp, Button, Header, TextPlus} from '@components';
import {
  BACKGROUND_WHITE,
  HEART_INACTIVE,
  ICON_BACK,
  ICON_LOGOUT,
  LINE_ONBOARDING,
  LOGO_APP,
  ONBOARDING_1,
  fontFamily,
} from '@assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DimensionsStyle} from '@resources';

const _OnboardingNextOne = () => {
  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View>
          <Header
            iconLeft={LOGO_APP}
            textRight={'Skip'}
            eventLeft={() => console.log('IconLeft')}
            eventRight={() => console.log('EventRight')}
            isCheck={true}
            styleIconLeft={{
              width: DimensionsStyle.width * 0.3,
              height: DimensionsStyle.width * 0.25,
              resizeMode: 'stretch',
              marginStart: -12,
            }}
          />

          <TextPlus
            text={`Find best place\nto stay in good price`}
            textBolds={['good price']}
            textStyle={_styles.textFind}
            boldStyle={{fontSize: 25}}
            viewStyle={{marginStart: 30}}
          />

          <Text style={_styles.textLorem}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: DimensionsStyle.width * 0.95,
            alignSelf: 'center',
            marginBottom: DimensionsStyle.width * 0.025,
          }}>
          <Image
            source={ONBOARDING_1}
            style={{
              width: '100%',
              height: DimensionsStyle.height * 0.6,
              borderRadius: 40,
              overflow: 'hidden',
              resizeMode: 'stretch',
            }}
          />

          <View
            style={{
              position: 'absolute',
              width: '100%',
              alignItems: 'center',
              bottom: 20,
            }}>
            <Image
              source={LINE_ONBOARDING}
              style={{
                width: '20%',
                height: 3,
                resizeMode: 'stretch',
                marginBottom: 15,
              }}
            />
            <Button
              title="Next"
              onPress={() => {}}
              imageIconLeft={LOGO_APP}
              imageIconRight={LOGO_APP}
              viewStyle={{
                width: DimensionsStyle.width * 0.5,
                marginBottom: 20,
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  textFind: {
    textAlign: 'left',
    marginTop: 50,
    fontSize: 25,
    width: '100%',
    lineHeight: 40,
  },

  textLorem: {
    fontFamily: fontFamily.Medium,
    fontSize: 12,
    marginStart: 30,
    marginTop: 20,
  },
});
export const OnboardingNextOne = React.memo(_OnboardingNextOne);
