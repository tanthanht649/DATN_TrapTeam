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
import React, {useEffect} from 'react';
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
  Loading,
} from '@components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList, ProfileStackParamList} from '@navigation';
import {useSelector} from 'react-redux';
import {RootState, getBookingTourByUserId, useAppDispatch} from '@shared-state';
import {BookingTour} from '@domain';
import moment from 'moment';
type PropsType = NativeStackScreenProps<
  ProfileStackParamList,
  'HistoryDetail'
> &
  NativeStackScreenProps<HomeStackParamList, 'HistoryDetail'>;

const daysDifference = (endDate: any, startDate: any) => {
  const startDay = new Date(startDate);
  const endDay = new Date(endDate);
  const timeDifference = Number(endDay) - Number(startDay);
  const millisecondsPerDay = 24 * 60 * 60 * 1000; // Số mili giây trong một ngày
  const daysDifference = Math.round(timeDifference / millisecondsPerDay);
  return daysDifference;
};

const currentDate = new Date();

const isDateAfter = (date1: Date, date2: Date) => {
  return date1.getTime() > date2.getTime();
};

const ItemHistory = ({
  item,
  onPress,
}: {
  item: BookingTour;
  onPress: () => void;
}) => {
  const compareDate = new Date(item.tour_id.end_date);
  const isAfter = isDateAfter(currentDate, compareDate);
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
            numberOfLines={3}
            style={{
              width: '100%',
              fontSize: 14,
              fontFamily: fontFamily.Bold,
              color: Colors.BLUE_TEXT_HOME,
              lineHeight: 18,
              marginBottom: 5,
            }}>
            {item.tour_id?.name}
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
              {item.tour_id.province_id.name}
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
              {item.adult_count + item.child_count} người
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
              {daysDifference(
                item.tour_id.end_date,
                item.tour_id.departure_date,
              )}{' '}
              ngày{' '}
              {daysDifference(
                item.tour_id.end_date,
                item.tour_id.departure_date,
              ) - 1}{' '}
              đêm
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
              {moment(item.tour_id.departure_date).format('DD/MM/YYYY')} -{' '}
              {moment(item.tour_id.end_date).format('DD/MM/YYYY')}
            </Text>
          </View>
        </View>
        <View style={{marginTop: 15}}>
          <Image
            source={{uri: item.tour_id.image}}
            style={{
              width: DimensionsStyle.width * 0.33,
              height: DimensionsStyle.width * 0.33,
              resizeMode: 'stretch',
              borderRadius: 10,
            }}
          />
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
            {item.price.toLocaleString('vi-VN')} VNĐ
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
            onPress={isAfter ? onPress : () => {}}
            viewStyle={{
              width: '100%',
              height: 40,
              backgroundColor: isAfter ? Colors.GREEN : Colors.GREY,
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
  const dispatch = useAppDispatch();
  const dataUser = useSelector((state: RootState) => state.user.dataUsers);

  useEffect(() => {
    if (dataUser) {
      dispatch(getBookingTourByUserId(dataUser?._id));
    }
  }, [dataUser]);

  const loadingBookingTour = useSelector(
    (state: RootState) => state.bookingTour.loadingBookingTour,
  );

  const listBookingTour = useSelector(
    (state: RootState) => state.bookingTour.listBookingTour,
  );

  const renderItemHistory = ({item}: {item: BookingTour}) => {
    return (
      <ItemHistory
        item={item}
        onPress={() =>
          navigation.navigate('AddReview', {
            tour_id: item.tour_id._id,
          })
        }
      />
    );
  };

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <Header
        iconLeft={ICON_BACK}
        textCenter="Chi tiết lịch sử tour"
        eventLeft={() => navigation.goBack()}
      />
      {loadingBookingTour ? (
        <Loading height={DimensionsStyle.height * 1} />
      ) : (
        <FlatList
          data={listBookingTour}
          renderItem={renderItemHistory}
          keyExtractor={item => item._id.toString()}
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 20,
          }}
        />
      )}
    </BackgroundApp>
  );
};

export const HistoryDetail = React.memo(_HistoryDetail);

const _styles = StyleSheet.create({});
