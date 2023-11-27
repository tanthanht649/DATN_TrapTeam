import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { BackgroundApp, Button, Header, Input, TextPlus } from '@components';
import { BACKGROUND_WHITE, EMAIL, EMAIL_LOGIN, FULL_NAME, ICON_BACK, LOCK, fontFamily } from '@assets';
import { Colors, DimensionsStyle } from '@resources';

type PropsType = NativeStackScreenProps<WelcomeTeamStackParamList, 'Register'>;
const _Register: React.FC<PropsType> = props => {
  const { navigation } = props;
  const [fullName, setFullName] = useState<string>('');
  const handleOnchangeFullName = (value: string) => {
    setFullName(value);
    console.log(value)
  }
  const [email, setEmail] = useState<string>('');
  const handleOnchangeEmail = (value: string) => {
    setEmail(value);
    console.log(value)
  }
  const [password, setPassword] = useState<string>('');
  const handleOnchangePassword = (value: string) => {
    setPassword(value);
    console.log(value)
  }
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState('Hiện mật khẩu');
  const managePasswordVisibility = () => {
    hidePassword ? setShow('Ẩn mật khẩu') : setShow('Hiện mật khẩu')
    setHidePassword(!hidePassword);
    console.log(hidePassword)
  };
  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        <Header
          iconLeft={ICON_BACK}
          styleIconLeft={{ marginLeft: -DimensionsStyle.width * 0.06 }}
          eventLeft={() => { navigation.goBack() }}
        />
        <TextPlus text='Tạo tài khoản của bạn'
          textBolds={['tài khoản']}
          boldStyle={_styles.textBold}
          textStyle={_styles.text} />
        <View style={_styles.row}>
          <Text style={[_styles.text, { fontSize: 12, marginLeft: 0, marginTop: 0 }]}>Đăng kí và tạo tài khoản bằng cách nhấn vào nút </Text>
         
            <Text style={[_styles.textBold, { fontSize: 12 }]}>"Đăng kí"</Text>
         
        </View>
        <Input
          imageIconLeft={FULL_NAME}
          imageIconRight={EMAIL_LOGIN}
          iconLeftStyle={{ height: 20, width: 20 }}
          label='Họ và tên'
          iconRightStyle={{ opacity: 0 }}
          value={fullName}
          onChangeText={handleOnchangeFullName}
          viewStyle={{ width: 327, alignSelf: 'center', marginTop: DimensionsStyle.height * 0.04 }} ></Input>
        <Input
          imageIconLeft={EMAIL_LOGIN}
          imageIconRight={EMAIL_LOGIN}
          iconLeftStyle={{ height: 14, width: 20 }}
          label='Email'
          iconRightStyle={{ opacity: 0 }}
          value={email}
          onChangeText={handleOnchangeEmail}
          viewStyle={{ width: 327, alignSelf: 'center', marginTop: DimensionsStyle.height * 0.025 }} ></Input>
        {/* <Input
          imageIconLeft={LOCK}
          imageIconRight={EMAIL_LOGIN}
          label='Mật khẩu'
          iconRightStyle={{ opacity: 0 }}
          value={password}
          onChangeText={handleOnchangePassword}
          hidePassword={hidePassword}
          viewStyle={{ width: 327, alignSelf: 'center', marginTop: DimensionsStyle.height * 0.025 }} ></Input>
        <View style={_styles.rowText}>
          <Pressable onPress={()=>{}}>
            <Text style={_styles.textRow}>Điều khoản dịch vụ</Text>
          </Pressable>
          <Pressable onPress={managePasswordVisibility}>
            <Text style={_styles.textRow}>{show}</Text>
          </Pressable>
        </View> */}
      </SafeAreaView>
      <View style={_styles.bottom}>
        <Button title='Đăng kí'
          imageIconLeft={EMAIL}
          imageIconRight={EMAIL}
          onPress={() => { navigation.navigate('RegisterOTP') }}
          viewStyle={{ width: 278, marginTop: DimensionsStyle.height * 0.13 }}></Button>
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
  bottom: {
    position: 'absolute',
    top: DimensionsStyle.height * 0.61,
    alignSelf: 'center'
  },
  row:{
    flexDirection:'row',
    alignItems:'center'
  }
});

export const Register = React.memo(_Register);
