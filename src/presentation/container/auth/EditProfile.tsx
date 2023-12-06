import {Image, Pressable, StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileStackParamList, WelcomeTeamStackParamList} from '@navigation';
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
import {useSelector} from 'react-redux';
import {RootState, updateProfile, useAppDispatch} from '@shared-state';
import {launchImageLibrary} from 'react-native-image-picker';
import {CONSTANTS} from '@core';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'EditProfile'>;
const _EditProfile: React.FC<PropsType> = props => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const dataUser = useSelector((state: RootState) => state.user.dataUsers);
  const [imageAvatar, setImageAvatar] = useState(
    'https://www.bing.com/th?id=OIP.fN9gx82LKxSZVpTc18meBgHaEo&w=149&h=100&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2',
  );

  const [idUser, setIdUser] = useState<string>('a');

  useEffect(() => {
    if (dataUser) {
      setImageAvatar(dataUser.avatar.toString());
    }
  }, [dataUser]);

  const handleChoosePhoto = useCallback(async () => {
    const options: any = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: true,
    };
    //const result = await launchCamera(options, ...);
    const result = await launchImageLibrary(options, async (response: any) => {
      if (response.didCancel) {
        console.log('Cancel pick image');
      } else if (response.error) {
        console.log('image picker error: ', response.error);
      } else if (response.customButton) {
        console.log('tap button: ', response.customButton);
      } else {
        response = response.assets[0];
        const formData = new FormData();
        formData.append('image', {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        });
        const fetchData = async () => {
          let url = `${CONSTANTS.IP}api/image/upload`;
          const response = await fetch(url, {
            // Accept: 'application/json',
            method: 'POST',
            headers: {
              // Authorization: Bearer ${token},
              'Content-Type': 'multipart/form-data',
            },
            body: formData,
          });
          const res = await response.json();
          return res;
        };
        const res = await fetchData();
        setImageAvatar(res.imageURL);
      }
    });
  }, []);

  const [fullName, setFullName] = useState<string>(dataUser?.name || '');
  const handleOnchangeFullName = (value: string) => {
    setFullName(value);
    console.log(value);
  };
  const [email, setEmail] = useState<string>(dataUser?.email || '');
  const [call, setCall] = useState<string>(dataUser?.phone_number || '');
  const handleOnchangeCall = (value: string) => {
    setCall(value);
    console.log(value);
  };

  const handleUpdateInfo = () => {
    const data = {
      id: dataUser?._id,
      name: fullName,
      email: email,
      phone_number: call,
      avatar: imageAvatar,
    };
    dispatch(updateProfile(data));
  };

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        <Header
          textCenter={'Chỉnh sửa thông tin'}
          iconLeft={ICON_BACK}
          eventLeft={() => navigation.goBack()}
          styleIconLeft={{marginLeft: -DimensionsStyle.width * 0.06}}
        />
        <View style={_styles.avatar}>
          <Image style={_styles.image} source={{uri: imageAvatar}}></Image>
          <Pressable onPress={handleChoosePhoto}>
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
          label="Phone Number"
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
          value={email}
          editable={false}
          onChangeText={() => {}}
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
          onPress={handleUpdateInfo}
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
