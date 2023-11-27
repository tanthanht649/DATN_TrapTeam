import {Image, Pressable, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {WelcomeTeamStackParamList} from '@navigation';
import {BackgroundApp, Button, Header, TextPlus} from '@components';
import {
    ADD_IMAGE,
  BACKGROUND_WHITE,
  ICON_BACK,
  LINE_BLOG,
  LOGO_HOME,
  LOGO_VERSION,
  fontFamily,
} from '@assets';
import {Colors, DimensionsStyle} from '@resources';

type PropsType = NativeStackScreenProps<WelcomeTeamStackParamList, 'CreateBlog'>;
const _CreateBlog: React.FC<PropsType> = props => {
  const {navigation} = props;

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        <Header
          textCenter={'Tạo bài viết'}
          iconLeft={ICON_BACK}
          eventLeft={() => console.log('IconLeft')}
          styleIconLeft={{marginLeft: -DimensionsStyle.width * 0.06, marginRight:DimensionsStyle.width * 0.06}}
        />
        <Image style={_styles.image} source={ADD_IMAGE}></Image>
        <TextInput style={_styles.title} placeholder='Tiêu đề' ></TextInput>
        <Pressable onPress={()=>{}}>
        <Image style={_styles.line}  source={LINE_BLOG}></Image>
        </Pressable>
        <View style={_styles.content}>
        <TextInput style={_styles.text}  placeholder='Nội dung' ></TextInput>
        </View>  
      </SafeAreaView>
      <Button
          textBoldModal='thành công'
          textModal='Đăng nhập thành công'
          titleButtonModal='Hoàn tất'
          contentModal='cảm ơn bạn'
          showmodal={false}
          title="Đăng bài"
          viewStyle={{marginTop:10,width:DimensionsStyle.width *0.4}}
          imageIconLeft={ADD_IMAGE}
          imageIconRight={ADD_IMAGE}
          onPress={() => {
            navigation.navigate('Blogs')         
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
    width: DimensionsStyle.width*0.86,
    resizeMode: 'stretch',
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop:30
  },
  title: {
    fontSize: 24,
    fontFamily: fontFamily.Regular,
    color: Colors.BLUE_TEXT,
    marginTop: DimensionsStyle.height * 0.002,
    lineHeight: 30,
    textAlign: 'justify',
  },
  content:{
    height:DimensionsStyle.height*0.35
  },
  text: {
    fontSize: 14,
    fontFamily: fontFamily.Bold,
    color: Colors.BLUE_TEXT,
    
  },
  line:{
    height:2,
    width: DimensionsStyle.width * 0.83,
    

}
});

export const CreateBlog = React.memo(_CreateBlog);
