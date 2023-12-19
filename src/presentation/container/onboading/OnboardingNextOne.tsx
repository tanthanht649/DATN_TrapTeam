import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { BackgroundApp, Button, Header, TextPlus } from '@components';
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
import { SafeAreaView } from 'react-native-safe-area-context';
import { DimensionsStyle } from '@resources';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  OnboardingLoginStackParamList,
  WelcomeTeamStackParamList,
} from '@navigation';
type PropsType = NativeStackScreenProps<
  OnboardingLoginStackParamList,
  'OnboardingNextOne'
>;

const _OnboardingNextOne: React.FC<PropsType> = props => {
  const { navigation } = props;
  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View>
          <Header
            iconLeft={LOGO_APP}
            textRight={'Bỏ qua'}
            eventLeft={() => console.log('IconLeft')}
            eventRight={() => navigation.navigate('Login')}
            isCheck={true}
            styleIconLeft={{
              width: DimensionsStyle.width * 0.1,
              height: DimensionsStyle.width * 0.12,
              resizeMode: 'stretch',
            }}
          />

          <TextPlus
            text={`Tìm địa điểm tốt nhất\nvới giá tốt nhất`}
            textBolds={['tốt nhất']}
            textStyle={_styles.textFind}
            boldStyle={{ fontSize: 25 }}
            viewStyle={{ marginStart: 30 }}
          />

          <Text style={_styles.textLorem}>
            Điều quan trọng là phải có dịch vụ khách hàng,{'\n'}nhưng sau đó nó
            sẽ là dịch vụ khách hàng.
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
              title="Tiếp"
              onPress={() => navigation.navigate('OnboardingNextTwo')}
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
    lineHeight: 18,
  },
});
export const OnboardingNextOne = React.memo(_OnboardingNextOne);
