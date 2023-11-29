import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  BACKGROUND_HOME,
  BACKGROUND_WHITE,
  EMAIL,
  FIND,
  HEART,
  ICON_BACK,
  LOCATION,
  MESSAGING,
  NOTIFICATION,
  NOTIFICATION_SELECT,
  PLUS,
  START_SMALL,
  STAR_5,
  fontFamily,
} from '@assets';
import {Colors, DimensionsStyle} from '@resources';
import {
  BackgroundApp,
  HeaderHome,
  HeaderHome2,
  TopTab,
  Header,
  HeaderMessager,
  Button,
  TextPlus,
  Input,
  ModalSuccessful,
} from '@components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileStackParamList, WelcomeTeamStackParamList} from '@navigation';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'AddReview'>;

const _AddReview: React.FC<PropsType> = props => {
  const {navigation} = props;
  const [textNote, setTextNote] = React.useState('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const handleModal = () => {
    setModalVisible(false);
  };
  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <Header
        iconLeft={ICON_BACK}
        textCenter="Thêm đánh giá"
        eventLeft={() => {
          navigation.goBack();
        }}
      />
      <SafeAreaView style={_styles.container}>
        <TextPlus
          textBolds={['trải nghiệm']}
          text={'Xin chào, trải nghiệm \n của bạn như thế nào?'}
          boldStyle={{
            fontFamily: fontFamily.Bold,
            color: Colors.GREY_DARK_1,
            fontSize: 25,
            lineHeight: 40,
            letterSpacing: 0.75,
          }}
          textStyle={{
            color: Colors.GREY_DARK_1,
            fontSize: 25,
            lineHeight: 40,
            letterSpacing: 0.75,
            marginLeft: '10%',
            marginTop: '5%',
            width: '100%',
          }}
          numberOfLines={2}
        />

        <Text style={_styles.text}>
          Bạn có thể mô tả các khía cạnh tích cực và tiêu cực của tour
        </Text>

        <Input
          imageIconLeft={MESSAGING}
          imageIconRight={MESSAGING}
          iconRightStyle={{opacity: 0}}
          label="Viết vào đây trải nghiệm của bạn"
          value={textNote}
          onChangeText={textNote => setTextNote(textNote)}
          viewStyle={{
            marginTop: '20%',
            marginBottom: '3%',
            height: '25%',
            borderRadius: 25,
            marginLeft: '9%',
            alignItems: 'flex-start',
            paddingTop: 30,
          }}
          textInputStyle={{
            width: '90%',
            height: '100%',
          }}
        />
        <Button
          title="Đăng"
          onPress={() => {
            setModalVisible(true);
          }}
          viewStyle={{width: 250, position: 'absolute', bottom: 0}}
          imageIconLeft={EMAIL}
          imageIconRight={MESSAGING}
        />
      </SafeAreaView>
      <ModalSuccessful
        visible={modalVisible}
        onPress={handleModal}
        text="Bài đánh giá của bạn đăng tải thành công"
        textBold="thành công"
        titleButton="Xem bài viết"
        content="Cảm ơn bạn đã chia sẻ ý kiến của mình"
      />
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: Colors.GREY_MEDIUM,
    fontFamily: fontFamily.Medium,
    fontSize: 12,
    marginTop: Dimensions.get('screen').height * 0.03,
    marginLeft: Dimensions.get('screen').width * 0.07,
  },
  group: {
    marginTop: Dimensions.get('window').height * 0.08,
    marginLeft: Dimensions.get('window').height * 0.04,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imagereview: {
    resizeMode: 'stretch',
    marginTop: -Dimensions.get('window').height * 0.03,
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').height * 0.05,
    marginHorizontal: 6,
  },
  title: {
    fontSize: 24,
    color: Colors.BLACK,
    letterSpacing: 0.54,
    fontFamily: fontFamily.Bold,
    marginLeft: Dimensions.get('screen').width * 0.035,
    marginTop: -Dimensions.get('window').height * 0.025,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 25,
    borderColor: Colors.GRAY_SEARCH,
    backgroundColor: Colors.GRAY_SEARCH,
    width: DimensionsStyle.width * 0.18,
    height: DimensionsStyle.width * 0.18,
    marginTop: Dimensions.get('screen').height * 0.02,
    marginLeft: Dimensions.get('screen').width * 0.1,
  },
  add: {
    resizeMode: 'stretch',
    marginTop: -Dimensions.get('screen').height * 0.01,
    marginLeft: Dimensions.get('screen').width * 0.06,
    width: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').height * 0.025,
  },
});

export const AddReview = React.memo(_AddReview);
