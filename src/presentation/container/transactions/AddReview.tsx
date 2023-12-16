import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Alert,
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
import {HomeStackParamList, ProfileStackParamList, WelcomeTeamStackParamList} from '@navigation';
import {useSelector} from 'react-redux';
import {RootState, addReview, useAppDispatch} from '@shared-state';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'AddReview'> & NativeStackScreenProps<HomeStackParamList, 'AddReview'>;

const _AddReview: React.FC<PropsType> = props => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const tour_id = props.route.params?.tour_id;
  const dataUser = useSelector((state: RootState) => state.user.dataUsers);
  const loadingReview = useSelector(
    (state: RootState) => state.review.loadingReview,
  );

  const [textNote, setTextNote] = React.useState('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const handleModal = () => {
    setModalVisible(false);
    navigation.goBack();
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
          title="Thêm"
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
                {cancelable: false},
              );
            }

            const data = {
              user_id: dataUser?._id,
              tour_id: tour_id,
              content: textNote,
            };
            dispatch(addReview(data));
            if (!loadingReview) {
              setModalVisible(true);
            }
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
        titleButton="Tiếp tục khám phá"
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
