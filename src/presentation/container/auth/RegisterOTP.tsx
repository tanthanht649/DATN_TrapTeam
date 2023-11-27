import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { BackgroundApp, Header, TextPlus, } from '@components';
import { BACKGROUND_WHITE, ICON_BACK, TIMER, fontFamily } from '@assets';
import { Colors, DimensionsStyle } from '@resources';
import OTPInputView from '@twotalltotems/react-native-otp-input'
type PropsType = NativeStackScreenProps<WelcomeTeamStackParamList, 'RegisterOTP'>;
const _RegisterOTP: React.FC<PropsType> = props => {
  const { navigation } = props;
  const [OTP, setOTP] = useState<string>('');

  const handleChangeOTP = (value: string) => {
    setOTP(value);
  }

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        <Header
          iconLeft={ICON_BACK}
          styleIconLeft={{ marginLeft: -DimensionsStyle.width * 0.06 }}
          eventLeft={() => { navigation.goBack() }}
        />
        <TextPlus text='Nhập mã'
          textBolds={['mã']}
          boldStyle={_styles.textBold}
          textStyle={_styles.text}
          viewStyle={{ marginBottom: DimensionsStyle.height * 0.03 }} />
        <View>
          <Text style={[_styles.text, { fontSize: 12, marginLeft: 0, marginTop: 0 }]}>Nhập mã gồm 4 chữ số mà chúng tôi vừa gửi tới</Text>
          <Pressable onPress={() => { }}>
            <Text style={[_styles.textBold, { fontSize: 12 }]}>jonathan@email.com</Text>
          </Pressable>
        </View>
        <OTPInputView
          style={{ width: '100%', height: 100, marginTop:DimensionsStyle.height*0.1 }}
          pinCount={4}
          code={OTP}
          autoFocusOnLoad
          codeInputFieldStyle={_styles.underlineStyleBase}
          codeInputHighlightStyle={_styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`)
          }}
        />

      </SafeAreaView>
      <View style={_styles.bottom}>
        <View style={_styles.watch}>
          <Image source={TIMER} style={_styles.clock}></Image>
          <Text style={_styles.time}>00:21</Text>
        </View>
        <View style={_styles.row}>
          <Text style={[_styles.text, { fontSize: 12, marginLeft: 0, marginTop: 0 }]}>Không nhận được OTP? </Text>
          <Pressable onPress={() => { }}>
            <Text style={[_styles.textBold, { fontSize: 12 }]}> Gửi lại OTP</Text>
          </Pressable>
        </View>
      </View>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    marginHorizontal: 24
  },
  text: {
    fontSize: 25,
    fontFamily: fontFamily.Regular,
    color: Colors.GREY_DARK,
    marginTop: DimensionsStyle.height * 0.055,
    lineHeight: 30
  },
  textBold: {
    fontSize: 25,
    fontFamily: fontFamily.Bold,
    color: Colors.BLUE,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: DimensionsStyle.height * 0.02,
  },
  bottom: {
    position: 'absolute',
    top: DimensionsStyle.height * 0.70,
    alignSelf: 'center'
  },
  time: {
    fontSize: 12,
    fontFamily: fontFamily.Medium,
    color: Colors.BLUE,
    marginLeft: 5
  },
  clock: {
    width: 20,
    height: 20
  },
  watch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    borderRadius: 20,
    backgroundColor: Colors.GRAY_SEARCH,
    width: DimensionsStyle.width * 0.2,
    alignSelf: 'center',
    height: 50
  },
  underlineStyleBase: {
    width: DimensionsStyle.width * 0.20,
    height: DimensionsStyle.width * 0.19,
    backgroundColor:Colors.GRAY_SEARCH,
    borderRadius: 10,
    borderWidth:2
},
underlineStyleHighLighted: {
    borderColor:Colors.BLUE,
},
});
export const RegisterOTP = React.memo(_RegisterOTP);
