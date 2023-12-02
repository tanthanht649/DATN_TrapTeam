import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  OnboardingLoginStackParamList,
  WelcomeTeamStackParamList,
} from '@navigation';
import {BackgroundApp, Button, Input, TextPlus} from '@components';
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
import {Colors, DimensionsStyle} from '@resources';
import {AppContext} from '@shared-state';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '501822796114-pjge4vqejp7vu5b4ad7afkju6aicel5k.apps.googleusercontent.com',
});

type PropsType = NativeStackScreenProps<OnboardingLoginStackParamList, 'Login'>;
const _Login: React.FC<PropsType> = props => {
  const {navigation} = props;
  const [userInfo, setUserInfo] = useState({});
  // function GoogleSignIn() {
  //   return (
  //     <Button
  //       title="Google Sign-In"
  //       onPress={() =>
  //         onGoogleButtonPress().then(() =>
  //           console.log('Signed in with Google!'),
  //         )
  //       }
  //     />
  //   );
  // }

  // async function onGoogleButtonPress() {
  //   // Check if your device supports Google Play
  //   await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  //   // Get the users ID token
  //   const {idToken} = await GoogleSignin.signIn();

  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(googleCredential);
  // }

  function GoogleSignIn() {
    return (
      <Button
        title="Tiếp tục với email"
        imageIconLeft={EMAIL}
        imageIconRight={EMAIL}
        viewStyle={{
          width: 278,
          marginTop: DimensionsStyle.height * 0.13,
        }}
        viewIconLeft={{display: 'flex'}}
        onPress={() =>
          onGoogleButtonPress().then(userCredential => {
            console.log('Signed in with Google!');
            setUserInfo(userCredential.user);
            setLoggedIn(true); // Console thông tin tài khoản đăng nhập
          })
        }
      />
    );
  }

  async function onGoogleButtonPress() {
    // Kiểm tra xem thiết bị có hỗ trợ Google Play không
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Lấy ID token của người dùng
    const {idToken} = await GoogleSignin.signIn();

    // Tạo một Google credential với token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Đăng nhập người dùng bằng credential
    const userCredential = await auth().signInWithCredential(googleCredential);

    return userCredential;
  }

  console.log(userInfo);

  const {isLoggedIn, setLoggedIn} = React.useContext(AppContext);
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
          <View style={[_styles.imageOn, {marginTop: 14, marginBottom: 30}]}>
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
        <GoogleSignIn />
        {/* <Button
          title="Tiếp tục với email"
          imageIconLeft={EMAIL}
          imageIconRight={EMAIL}
          onPress={() => {
            setLoggedIn(true);
          }}
          viewStyle={{
            width: 278,
            marginTop: DimensionsStyle.height * 0.13,
          }}
          viewIconLeft={{display: 'flex'}}
        /> */}
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
