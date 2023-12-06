import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OnboardingLoginStackParamList} from '@navigation';
import {BackgroundApp, Button, Input, TextPlus} from '@components';
import {
  BACKGROUND_WHITE,
  EMAIL,
  IMAGE_LOGIN_1,
  IMAGE_LOGIN_2,
  IMAGE_LOGIN_3,
  IMAGE_LOGIN_4,
  fontFamily,
} from '@assets';
import {Colors, DimensionsStyle} from '@resources';
import {AppContext} from '@shared-state';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import {RootState, getUser, useAppDispatch} from '@shared-state';

GoogleSignin.configure({
  webClientId:
    '501822796114-pjge4vqejp7vu5b4ad7afkju6aicel5k.apps.googleusercontent.com',
});

type PropsType = NativeStackScreenProps<OnboardingLoginStackParamList, 'Login'>;
const _Login: React.FC<PropsType> = props => {
  const dispatch = useAppDispatch();
  const {setLoggedIn} = React.useContext(AppContext);
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
            setLoggedIn(true);
            const dataGetUser = {
              email: userCredential.user.email,
              name: userCredential.user.displayName,
              avatar: userCredential.user.photoURL,
              phone_number: '',
            };
            dispatch(getUser(dataGetUser));
            // Console thông tin tài khoản đăng nhập
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
