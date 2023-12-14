import { Alert, Image, Pressable, StyleSheet, TextInput, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  BlogStackParamList,
  ProfileStackParamList,
  WelcomeTeamStackParamList,
} from '@navigation';
import {
  BackgroundApp,
  Button,
  Header,
} from '@components';
import {
  ADD_IMAGE,
  BACKGROUND_WHITE,
  ICON_BACK,
  LINE_BLOG,
  fontFamily,
} from '@assets';
import { Colors, DimensionsStyle } from '@resources';
import { launchImageLibrary } from 'react-native-image-picker';
import { CONSTANTS } from '@core';
import { useSelector } from 'react-redux';
import { RootState, addBlog, useAppDispatch } from '@shared-state';

type PropsType = NativeStackScreenProps<BlogStackParamList, 'CreateBlog'> &
  NativeStackScreenProps<ProfileStackParamList>;
const _CreateBlog: React.FC<PropsType> = props => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const dataUser = useSelector((state: RootState) => state.user.dataUsers);
  const loadingBlog = useSelector(
    (state: RootState) => state.blog.loadingBlog,
  );
  const [image, setImage] = useState(
    ADD_IMAGE,
  );
  const [textNote, setTextNote] = React.useState('');
  const [imageadd, setImageAdd] = useState(ADD_IMAGE);
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
        setImage({ uri: res.imageURL });
        setImageAdd(res.imageURL)
      }
    });
  }, []);



  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        <Header
          textCenter={'Tạo bài viết'}
          iconLeft={ICON_BACK}
          eventLeft={() => navigation.goBack()}
          styleIconLeft={{
            marginLeft: -DimensionsStyle.width * 0.06,
            marginRight: DimensionsStyle.width * 0.06,
          }}
        />
        <Pressable onPress={handleChoosePhoto}>
          <Image style={_styles.image} source={image}></Image>
        </Pressable>
        {/* <TextInput style={_styles.title} placeholder="Tiêu đề"></TextInput> */}
        <Image style={_styles.line} source={LINE_BLOG}></Image>
        <View style={_styles.content}>
          <TextInput style={_styles.text} placeholder="Nội dung" value={textNote} onChangeText={textNote => setTextNote(textNote)}></TextInput>
        </View>
      </SafeAreaView>
      <Button
        title="Đăng bài"
        viewStyle={{ marginTop: 10, width: DimensionsStyle.width * 0.4 }}
        imageIconLeft={ADD_IMAGE}
        imageIconRight={ADD_IMAGE}
        onPress={() => {
          if (textNote === '') {
            Alert.alert(
              'Thông báo',
              'Bạn chưa nhập nội dung đánh giá',
              [
                {
                  text: 'OK',
                  onPress: () => console.log('OK Pressed'),
                  style: 'cancel',
                },
              ],
              { cancelable: false },
            );
          } else{
            const data = {
              user_id: dataUser?._id,
              content: textNote,
              image: imageadd
            };
            dispatch(addBlog(data));
            navigation.navigate('Blogs');
          }
            
          
        }}
      />
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    paddingHorizontal: 34,
  },
  image: {
    height: 165,
    width: DimensionsStyle.width * 0.86,
    resizeMode: 'contain',
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontFamily: fontFamily.Regular,
    color: Colors.BLUE_TEXT,
    marginTop: DimensionsStyle.height * 0.002,
    lineHeight: 30,
    textAlign: 'justify',
  },
  content: {
    height: DimensionsStyle.height * 0.35,
  },
  text: {
    fontSize: 14,
    fontFamily: fontFamily.Bold,
    color: Colors.BLUE_TEXT,
  },
  line: {
    height: 2,
    width: DimensionsStyle.width * 0.83,
  },
});

export const CreateBlog = React.memo(_CreateBlog);
