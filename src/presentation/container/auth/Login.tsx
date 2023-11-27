import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { BackgroundApp, Button, Input, ModalSuccessful, TextPlus } from '@components';
import {
  BACKGROUND_LOGIN,
  BACKGROUND_WHITE,
  EMAIL,
  IMAGE_LOGIN_1,
  IMAGE_LOGIN_2,
  IMAGE_LOGIN_3,
  IMAGE_LOGIN_4,
  LOCK,
  fontFamily,
} from '@assets';
import { Colors, DimensionsStyle } from '@resources';

type PropsType = NativeStackScreenProps<WelcomeTeamStackParamList, 'Login'>;
const _Login: React.FC<PropsType> = props => {
  const { navigation } = props;
  const [email, setEmail] = useState<string>('');
  const handleOnchangeEmail = (value: string) => {
    setEmail(value);
    console.log(value);
  };
  const [password, setPassword] = useState<string>('');
  const handleOnchangePassword = (value: string) => {
    setPassword(value);
    console.log(value);
  };
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState('Hiện mật khẩu');
  const managePasswordVisibility = () => {
    hidePassword ? setShow('Ẩn mật khẩu') : setShow('Hiện mật khẩu');
    setHidePassword(!hidePassword);
    console.log(hidePassword);
  };
  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView>
        <View style={_styles.containerImage}>
          <View style={_styles.imageOn}>
            <Image source={IMAGE_LOGIN_1} style={_styles.imageLogin} />
            <Image source={IMAGE_LOGIN_4} style={_styles.imageLogin} />
          </View>
          <View style={[_styles.imageOn, { marginTop: 14, marginBottom: 30 }]}>
            <Image source={IMAGE_LOGIN_2} style={_styles.imageLogin} />
            <Image source={IMAGE_LOGIN_3} style={_styles.imageLogin} />
          </View>
        </View>
        <TextPlus
          text="Sẵn sàng để khám phá?"
          textBolds={['khám phá']}
          boldStyle={_styles.textBold}
          textStyle={_styles.text}
          viewStyle={_styles.textReady}
        />
      </SafeAreaView>
      <View style={_styles.bottom}>
        <Button
          textBoldModal='thành công'
          textModal='Đăng nhập thành công'
          titleButtonModal='Hoàn tất'
          contentModal='cảm ơn bạn'
          showmodal={true}
          title="Tiếp tục với email"
          imageIconLeft={EMAIL}
          imageIconRight={EMAIL}
          onPress={() => {
            // navigation.navigate('EditProfile')         
          }}
          onPressModal={() => {
            navigation.navigate('EditProfile')
          }}
          viewStyle={{
            width: 278,
            marginTop: DimensionsStyle.height * 0.13,
          }}
          viewIconLeft={{ display: 'flex' }}
        />

        {/* <View style={_styles.row}>
          <Text
            style={[_styles.text, {fontSize: 12, marginLeft: 0, marginTop: 0}]}>
            Bạn chưa có tài khoản?
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={[_styles.textBold, {fontSize: 12}]}> Đăng kí</Text>
          </Pressable>
        </View> */}
      </View>
      {/* <ModalSuccessful showModal={true} titleButton='Hoàn tất' text='Bài đánh giá của bạn đăng tải thành công' textBold='thành công' onPress={() => { }} ></ModalSuccessful> */}

    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },

  containerImage: {
    marginHorizontal: 14,
    marginTop: 10,
  },

  imageLogin: {
    width: DimensionsStyle.width * 0.45,
    height: DimensionsStyle.width * 0.45,
    resizeMode: 'stretch',
  },

  imageOn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    fontSize: 25,
    fontFamily: fontFamily.Regular,
    color: Colors.GREY_DARK,
    lineHeight: 30,
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
    marginTop: DimensionsStyle.height * 0.12,
  },
  bottom: {
    position: 'absolute',
    top: DimensionsStyle.height * 0.61,
    alignSelf: 'center',
  },
  rowText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: DimensionsStyle.height * 0.02,
  },
  textRow: {
    fontSize: 12,
    fontFamily: fontFamily.Semibold,
    color: Colors.BLUE,
  },
  textReady: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export const Login = React.memo(_Login);
