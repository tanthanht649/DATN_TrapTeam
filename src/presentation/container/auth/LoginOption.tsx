import { FlatList, Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { BackgroundApp, Button } from '@components';
import { BACKGROUND_WHITE, EMAIL, IMAGE_TEST, fontFamily } from '@assets';
import { Colors, DimensionsStyle } from '@resources';

type PropsType = NativeStackScreenProps<WelcomeTeamStackParamList, 'LoginOption'>;
const _LoginOption: React.FC<PropsType> = props => {
  const { navigation } = props;
  const DATA = [
    {
      id: '1',
      image: IMAGE_TEST
    },
    {
      id: '2',
      image: IMAGE_TEST
    },
    {
      id: '3',
      image: IMAGE_TEST
    },
    {
      id: '4',
      image: IMAGE_TEST
    }
  ];
  type ItemProps = { image: ImageSourcePropType };

  const Item = ({ image }: ItemProps) => (
    <View>
      <Image style={_styles.item} source={image}></Image>
    </View>
  );

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        <FlatList data={DATA} style={_styles.flatlist}
          numColumns={2}
          renderItem={({ item }) => <Item image={item.image} />}
          keyExtractor={item => item.id} ></FlatList>
        <Text style={_styles.text}>Sẵn sàng
          <Text style={_styles.textBold}> Khám phá?</Text>
        </Text>
      </SafeAreaView>
      <View style={_styles.bottom}>
        <Button title='Tiếp tục với Email'
          textBoldModal=''
          textModal=''
          titleButtonModal=''
          imageIconLeft={EMAIL}
          imageIconRight={EMAIL}
          viewIconLeft={{ display: 'flex' }}
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
    flexDirection: 'column',
  },
  item: {
    width: DimensionsStyle.width * 0.45,
    height: DimensionsStyle.height * 0.22,
    borderRadius: 20,
    resizeMode: 'stretch',
    margin: 5,
  },
  flatlist: {
    marginTop: 6,
    alignSelf: 'center'
  },
  text: {
    fontSize: 25,
    fontFamily: fontFamily.Regular,
    color: Colors.GREY_DARK,
    marginLeft: DimensionsStyle.width * 0.05,
    marginTop: DimensionsStyle.height * 0.05,
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
  }

});

export const LoginOption = React.memo(_LoginOption);
