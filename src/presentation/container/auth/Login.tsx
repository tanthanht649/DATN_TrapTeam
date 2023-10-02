import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { BackgroundApp, Button, Input, TextPlus } from '@components';
import { BACKGROUND_LOGIN, EMAIL, EMAIL_LOGIN, LOCK, fontFamily } from '@assets';
import { Colors, DimensionsStyle } from '@resources';

type PropsType = NativeStackScreenProps<WelcomeTeamStackParamList, 'Login'>;
const _Login: React.FC<PropsType> = props => {
  const { navigation } = props;
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
  const[show,setShow]= useState('Hiện mật khẩu');
  const managePasswordVisibility = () => {
    hidePassword? setShow('Ẩn mật khẩu'):setShow('Hiện mật khẩu')
    setHidePassword(!hidePassword);   
    console.log(hidePassword)
  };
  return (
    <BackgroundApp source={BACKGROUND_LOGIN}>
      <SafeAreaView style={_styles.container}>
        <TextPlus text='Hãy Đăng nhập'
          textBolds={['Đăng nhập']}
          boldStyle={_styles.textBold}
          textStyle={_styles.text} />
        <Input
          imageIconLeft={EMAIL_LOGIN}
          imageIconRight={EMAIL_LOGIN}
          iconLeftStyle={{ height: 14, width: 20 }}
          label='Email'
          iconRightStyle={{ opacity: 0 }}
          value={email}
          onChangeText={handleOnchangeEmail}
          viewStyle={{ width: 327, alignSelf: 'center',marginTop:DimensionsStyle.height*0.04 }} ></Input>
        <Input
          imageIconLeft={LOCK}
          imageIconRight={EMAIL_LOGIN}
          label='Mật khẩu'
          iconRightStyle={{ opacity: 0 }}
          value={password}
          onChangeText={handleOnchangePassword}
          hidePassword={hidePassword}
          viewStyle={{ width: 327, alignSelf: 'center',marginTop:DimensionsStyle.height*0.025 }} ></Input>
        <View style={_styles.rowText}>
          <Text style={_styles.textRow}>Quên mật khẩu</Text>
          <Pressable onPress={managePasswordVisibility}>
            <Text style={_styles.textRow}>{show}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
      <View style={_styles.bottom}>
        <Button title='Đăng nhập'
          imageIconLeft={EMAIL}
          imageIconRight={EMAIL}
          onPress={() => { navigation.navigate('Login') }}
          viewStyle={{ width: 278, marginTop: DimensionsStyle.height * 0.13 }}></Button>
        <View style={_styles.row}>
          <Text style={[_styles.text, { fontSize: 12, marginLeft: 0, marginTop: 0 }]}>Bạn chưa có tài khoản?</Text>
          <Pressable onPress={() => { navigation.navigate('Register') }}>
            <Text style={[_styles.textBold, { fontSize: 12 }]}> Đăng kí</Text>
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
    marginTop: DimensionsStyle.height * 0.15,
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
    marginTop: DimensionsStyle.height * 0.12,
  },
  bottom: {
    position: 'absolute',
    top: DimensionsStyle.height * 0.61,
    alignSelf: 'center'
  },
  rowText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:DimensionsStyle.height * 0.02,
  },
  textRow: {
    fontSize: 12,
    fontFamily: fontFamily.Semibold,
    color: Colors.BLUE,
  }

});

export const Login = React.memo(_Login);
