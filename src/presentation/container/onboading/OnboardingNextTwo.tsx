import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  BackgroundApp,
  Button,
  ButtonArrow,
  Header,
  TextPlus,
} from '@components';
import {
  ARROW_LEFT_LINE,
  BACKGROUND_WHITE,
  HEART_INACTIVE,
  ICON_BACK,
  ICON_LOGOUT,
  LINE_ONBOARDING,
  LOGO_APP,
  ONBOARDING_1,
  ONBOARDING_2,
  fontFamily,
} from '@assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DimensionsStyle} from '@resources';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {WelcomeTeamStackParamList} from '@navigation';
type PropsType = NativeStackScreenProps<
  WelcomeTeamStackParamList,
  'OnboardingNextTwo'
>;

const _OnboardingNextTwo: React.FC<PropsType> = props => {
  const {navigation} = props;
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
            text={`Fast sell your property\nin just one click`}
            textBolds={['one click']}
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
            source={ONBOARDING_2}
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '70%',
                marginStart: -30,
              }}>
              <ButtonArrow
                imageIcon={ARROW_LEFT_LINE}
                onPress={() => navigation.goBack()}
                shadow={false}
                viewStyle={{marginTop: -35}}
              />
              <Button
                title="Next"
                onPress={() => navigation.navigate('OnboardingNextThree')}
                imageIconLeft={LOGO_APP}
                imageIconRight={LOGO_APP}
                viewStyle={{
                  width: DimensionsStyle.width * 0.5,
                  marginBottom: 20,
                }}
              />
            </View>
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

export const OnboardingNextTwo = React.memo(_OnboardingNextTwo);
