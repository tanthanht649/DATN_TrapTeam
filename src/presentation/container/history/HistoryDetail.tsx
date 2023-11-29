import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  BACKGROUND_HOME,
  BACKGROUND_WHITE,
  EMAIL,
  FIND,
  FULL_NAME,
  HEART,
  ICON_BACK,
  ICON_CALENDAR,
  ICON_CLOCK,
  ICON_LOCATION_HISTORY,
  ICON_USER,
  LOCATION,
  MESSAGING,
  NOTIFICATION,
  NOTIFICATION_SELECT,
  START_SMALL,
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
} from '@components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileStackParamList, WelcomeTeamStackParamList} from '@navigation';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'HistoryDetail'>;

interface Item {
  id: number;
  title: string;
  location: string;
  people: string;
  time: string;
  date: string;
  image: any;
  money: string;
}
const DATA: Item[] = [
  {
    id: 1,
    title: 'Sun World Fansipan Legend',
    location: 'Lào Cai, Việt Nam',
    people: '10 người',
    time: '2 ngày 1 đêm',
    date: '04/12/2023 - 06/12/2023',
    image: require('../../../../assets/images/sapa.png'),
    money: '30,000,000 VND',
  },
  {
    id: 2,
    title: 'Sun World Fansipan Legend',
    location: 'Lào Cai, Việt Nam',
    people: '10 người',
    time: '2 ngày 1 đêm',
    date: '04/12/2023 - 06/12/2023',
    image: require('../../../../assets/images/sapa.png'),
    money: '30,000,000 VND',
  },
  {
    id: 3,
    title: 'Sun World Fansipan Legend',
    location: 'Lào Cai, Việt Nam',
    people: '10 người',
    time: '2 ngày 1 đêm',
    date: '04/12/2023 - 06/12/2023',
    image: require('../../../../assets/images/sapa.png'),
    money: '30,000,000 VND',
  },
  {
    id: 4,
    title: 'Sun World Fansipan Legend',
    location: 'Lào Cai, Việt Nam',
    people: '10 người',
    time: '2 ngày 1 đêm',
    date: '04/12/2023 - 06/12/2023',
    image: require('../../../../assets/images/sapa.png'),
    money: '30,000,000 VND',
  },
  {
    id: 5,
    title: 'Sun World Fansipan Legend',
    location: 'Lào Cai, Việt Nam',
    people: '10 người',
    time: '2 ngày 1 đêm',
    date: '04/12/2023 - 06/12/2023',
    image: require('../../../../assets/images/sapa.png'),
    money: '30,000,000 VND',
  },
  {
    id: 6,
    title: 'Sun World Fansipan Legend',
    location: 'Lào Cai, Việt Nam',
    people: '10 người',
    time: '2 ngày 1 đêm',
    date: '04/12/2023 - 06/12/2023',
    image: require('../../../../assets/images/sapa.png'),
    money: '30,000,000 VND',
  },
  {
    id: 7,
    title: 'Sun World Fansipan Legend',
    location: 'Lào Cai, Việt Nam',
    people: '10 người',
    time: '2 ngày 1 đêm',
    date: '04/12/2023 - 06/12/2023',
    image: require('../../../../assets/images/sapa.png'),
    money: '30,000,000 VND',
  },
  {
    id: 8,
    title: 'Sun World Fansipan Legend',
    location: 'Lào Cai, Việt Nam',
    people: '10 người',
    time: '2 ngày 1 đêm',
    date: '04/12/2023 - 06/12/2023',
    image: require('../../../../assets/images/sapa.png'),
    money: '30,000,000 VND',
  },
  {
    id: 9,
    title: 'Sun World Fansipan Legend',
    location: 'Lào Cai, Việt Nam',
    people: '10 người',
    time: '2 ngày 1 đêm',
    date: '04/12/2023 - 06/12/2023',
    image: require('../../../../assets/images/sapa.png'),
    money: '30,000,000 VND',
  },
  {
    id: 10,
    title: 'Sun World Fansipan Legend',
    location: 'Lào Cai, Việt Nam',
    people: '10 người',
    time: '2 ngày 1 đêm',
    date: '04/12/2023 - 06/12/2023',
    image: require('../../../../assets/images/sapa.png'),
    money: '30,000,000 VND',
  },
];

const ItemHistory = ({item, onPress}: {item: Item; onPress: () => void}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        marginHorizontal: 15,
        padding: 20,
        backgroundColor: Colors.GREY_SOFT,
        marginBottom: 20,
        borderRadius: 20,
        paddingTop: 5,
        paddingBottom: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: Colors.GREY,
          paddingHorizontal: 7,
          paddingBottom: 12,
        }}>
        <View
          style={{
            width: '50%',
          }}>
          <Text
            style={{
              width: '80%',
              fontSize: 14,
              fontFamily: fontFamily.Bold,
              color: Colors.BLUE_TEXT_HOME,
              lineHeight: 18,
              marginBottom: 5,
            }}>
            {item.title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginVertical: 7,
            }}>
            <View style={{width: 15, height: 15, marginRight: 10}}>
              <Image
                source={ICON_LOCATION_HISTORY}
                style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
              />
            </View>

            <Text
              style={{
                fontSize: 13,
                fontFamily: fontFamily.Medium,
              }}>
              {item.location}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginVertical: 7,
            }}>
            <View style={{width: 15, height: 15, marginRight: 10}}>
              <Image
                source={ICON_USER}
                style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
              />
            </View>

            <Text
              style={{
                fontSize: 13,
                fontFamily: fontFamily.Medium,
              }}>
              {item.people}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginVertical: 7,
            }}>
            <View style={{width: 15, height: 15, marginRight: 10}}>
              <Image
                source={ICON_CLOCK}
                style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
              />
            </View>

            <Text
              style={{
                fontSize: 13,
                fontFamily: fontFamily.Medium,
              }}>
              {item.time}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginVertical: 7,
            }}>
            <View style={{width: 15, height: 15, marginRight: 10}}>
              <Image
                source={ICON_CALENDAR}
                style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
              />
            </View>

            <Text
              style={{
                fontSize: 13,
                fontFamily: fontFamily.Medium,
              }}>
              {item.date}
            </Text>
          </View>
        </View>
        <View style={{marginTop: 15}}>
          <Image source={item.image} />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '70%',
            marginTop: 5,
            paddingStart: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fontFamily.Bold,
              color: Colors.BLUE_TEXT_HOME,
              marginBottom: 5,
            }}>
            Thành tiền:{' '}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fontFamily.Bold,
              color: Colors.RED,
              lineHeight: 18,
              marginBottom: 5,
            }}>
            {item.money}
          </Text>
        </View>
        <View
          style={{
            width: '30%',
          }}>
          <Button
            title="Đánh giá"
            imageIconLeft={FULL_NAME}
            imageIconRight={FULL_NAME}
            onPress={onPress}
            viewStyle={{
              width: '100%',
              height: 40,
            }}
            textStyle={{fontSize: 12}}
          />
        </View>
      </View>
    </View>
  );
};

const _HistoryDetail: React.FC<PropsType> = props => {
  const {navigation} = props;

  const handleToAddReview = () => {
    navigation.navigate('AddReview');
  };

  const renderItemHistory = ({item}: {item: Item}) => {
    return <ItemHistory item={item} onPress={handleToAddReview} />;
  };

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <Header
        iconLeft={ICON_BACK}
        textCenter="Chi tiết lịch sử tour"
        eventLeft={() => navigation.goBack()}
      />
      <FlatList
        data={DATA}
        renderItem={renderItemHistory}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: 20,
        }}
      />
    </BackgroundApp>
  );
};

export const HistoryDetail = React.memo(_HistoryDetail);

const _styles = StyleSheet.create({});
