import {Image, Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {WelcomeTeamStackParamList} from '@navigation';
import {BackgroundApp, Button, Header, Input} from '@components';
import {
  BACKGROUND_WHITE,
  CALL,
  CAMERA,
  CAMERA_PROFILE,
  EMAIL_LOGIN,
  FULL_NAME,
  ICON_BACK,
  IMAGE_TEST,
} from '@assets';
import {DimensionsStyle} from '@resources';

type PropsType = NativeStackScreenProps<
  WelcomeTeamStackParamList,
  'EditProfile'
>;
const _EditProfile: React.FC<PropsType> = props => {
  const {navigation} = props;
  const [fullName, setFullName] = useState<string>('Mathew Adam');
  const handleOnchangeFullName = (value: string) => {
    setFullName(value);
    console.log(value);
  };
  const [email, setEmail] = useState<string>('Mathew@email.com');
  const handleOnchangeEmail = (value: string) => {
    setEmail(value);
    console.log(value);
  };
  const [call, setCall] = useState<string>('Mathew@email.com');
  const handleOnchangeCall = (value: string) => {
    setCall(value);
    console.log(value);
  };
  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        <Header
          textCenter={'Chỉnh sửa thông tin'}
          iconLeft={ICON_BACK}
          eventLeft={() => console.log('IconLeft')}
          styleIconLeft={{marginLeft: -DimensionsStyle.width * 0.06}}
        />
        <View style={_styles.avatar}>
          <Image style={_styles.image} source={IMAGE_TEST}></Image>
          <Pressable>
            <Image style={_styles.edit} source={CAMERA_PROFILE}></Image>
          </Pressable>
        </View>
        <Input
          imageIconLeft={FULL_NAME}
          imageIconRight={FULL_NAME}
          label="FullName"
          iconLeftStyle={{display: 'none'}}
          value={fullName}
          onChangeText={handleOnchangeFullName}
          viewStyle={{
            width: 327,
            alignSelf: 'center',
            marginTop: DimensionsStyle.height * 0.04,
          }}></Input>
        <Input
          imageIconLeft={CALL}
          imageIconRight={CALL}
          label="Call"
          iconLeftStyle={{display: 'none'}}
          value={call}
          onChangeText={handleOnchangeCall}
          viewStyle={{
            width: 327,
            alignSelf: 'center',
            marginTop: DimensionsStyle.height * 0.02,
          }}></Input>
        <Input
          imageIconLeft={EMAIL_LOGIN}
          imageIconRight={EMAIL_LOGIN}
          label="Call"
          iconLeftStyle={{display: 'none'}}
          iconRightStyle={{width: 24, height: 17}}
          value={call}
          onChangeText={handleOnchangeCall}
          viewStyle={{
            width: 327,
            alignSelf: 'center',
            marginTop: DimensionsStyle.height * 0.02,
          }}></Input>
      </SafeAreaView>
      <View style={_styles.bottom}>
        <Button
          title="Cập nhật"
          imageIconLeft={FULL_NAME}
          imageIconRight={FULL_NAME}
          onPress={() => {
            navigation.navigate('RegisterOTP');
          }}
          viewStyle={{
            width: 278,
            marginTop: DimensionsStyle.height * 0.2,
          }}></Button>
      </View>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  avatar: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginBottom: 12,
    marginTop: 30,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'stretch',
    borderRadius: 100,
    overflow: 'hidden',
  },
  bottom: {
    position: 'absolute',
    top: DimensionsStyle.height * 0.61,
    alignSelf: 'center',
  },
  edit: {
    height: 30,
    width: 30,
    position: 'absolute',
    right: -5,
    top: -30,
  },
});

export const EditProfile = React.memo(_EditProfile);
