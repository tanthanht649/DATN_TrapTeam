import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  BackgroundApp,
  Button,
  Header,
  ModalPayment,
  ModalSuccessful,
} from '@components';
import {
  BACKGROUND_WHITE,
  FULL_NAME,
  HEART,
  ICON_BACK,
  LOCATION,
  MOMO,
  ORDER_BT,
  VIETTEL_PAY,
  ZALO_PAY,
  fontFamily,
} from '@assets';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList, SearchStackParamList } from '@navigation';
import { Colors, DimensionsStyle } from '@resources';
import {
  AppContext,
  RootState,
  addBookingTour,
  getBookingTourByUserId,
  useAppDispatch,
} from '@shared-state';
import { useSelector } from 'react-redux';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'Pay'> &
  NativeStackScreenProps<SearchStackParamList, 'Pay'>;

const _Pay: React.FC<PropsType> = props => {
  const { navigation } = props;
  const { route } = props;
  const user_id = route.params?.user_id;
  const tour_id = route.params?.tour_id;
  const discount = route.params?.discount;
  const adult_account = route.params?.adult_account;
  const child_account = route.params?.child_account;
  const price = route.params?.price;
  const note = route.params?.note;
  const role = route.params?.role;
  const location_custom = route.params?.location_custom;
  const priceService = route.params?.priceService;

  const [priceShow, setPriceShow] = React.useState<number>(0);
  const quantity = useSelector(
    (state: RootState) => state.bookingTour.quantity,
  );
  const eventRight = () => { };
  const eventLeft = () => { };
  const eventBack = () => {
    navigation.goBack();
  };

  const dispatch = useAppDispatch();

  const dataTourDetail = useSelector(
    (state: RootState) => state.tour.tourDetail,
  );

  useEffect(() => {
    if (dataTourDetail) {
      if (quantity > 30) {
        setPriceShow(dataTourDetail.price * 0.8);
      } else {
        setPriceShow(dataTourDetail.price);
      }
    }
  }, [
    quantity, dataTourDetail
  ]);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { pay } = React.useContext(AppContext);

  const [modalVisiblePay, setModalVisiblePay] = useState<boolean>(false);
  const handleModal = () => {
    setModalVisiblePay(false);
    navigation.replace('HistoryDetail');
  };

  const [imagePay, setImagePay] = useState<ImageSourcePropType>(MOMO);
  const [namePay, setNamePay] = useState<string>('Ví MoMo');

  useEffect(() => {
    if (pay === 'Momo') {
      setImagePay(MOMO);
      setNamePay('Ví MoMo');
    } else if (pay === 'ZaloPay') {
      setImagePay(ZALO_PAY);
      setNamePay('Ví ZaloPay');
    } else if (pay === 'ViettelPay') {
      setImagePay(VIETTEL_PAY);
      setNamePay('Ví ViettelPay');
    }
  }, [pay]);

  const onPress = () => {
    setModalVisible(false);
  };

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            iconLeft={ICON_BACK}
            eventLeft={eventBack}
            eventRight={eventRight}
            textCenter="Thanh toán"
          />
          <View
            style={{
              height: DimensionsStyle.width * 0.35,
              flexDirection: 'row',
              marginHorizontal: 20,
              backgroundColor: Colors.SOFT_BLUE,
              borderRadius: 20,
              overflow: 'hidden',
              marginTop: 10,
            }}>
            <View
              style={{
                width: '50%',
                padding: 7,
              }}>
              <Image
                source={{ uri: dataTourDetail.image }}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'stretch',
                  borderRadius: 20,
                }}
              />

              <Image
                source={HEART}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'stretch',
                  position: 'absolute',
                  top: 15,
                  left: 15,
                  display: 'none',
                }}
              />
            </View>
            <View
              style={{
                width: '50%',
                padding: 20,
                paddingStart: 5,
                paddingEnd: 15,
              }}>
              <Text
                numberOfLines={2}
                style={{
                  fontSize: 16,
                  fontFamily: fontFamily.Bold,
                  lineHeight: 18,
                  color: Colors.BLUE_TEXT_HOME,
                }}>
                {dataTourDetail.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 11,
                }}>
                <Image
                  source={LOCATION}
                  style={{ width: 12, height: 12, marginEnd: 2 }}
                />
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 10,
                    fontFamily: fontFamily.Medium,
                  }}>
                  {dataTourDetail.departure_location}
                </Text>
              </View>
              <Text
                numberOfLines={1}
                style={{
                  color: Colors.RED,
                  position: 'absolute',
                  bottom: 20,
                  left: 10,
                  fontSize: 17,
                }}>
                {priceShow.toLocaleString('vi-VN')} VNĐ
              </Text>
            </View>
          </View>

          <Text
            style={[
              _styles.text,
              {
                marginTop: 30,
                marginVertical: 15,
                marginHorizontal: 20,
              },
            ]}>
            Chi Tiết Thanh Toán
          </Text>
          <View style={_styles.card}>
            <View style={_styles.row}>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 13,
                    color: Colors.BLUE_TEXT,
                    fontFamily: fontFamily.Regular,
                  },
                ]}>
                Người lớn x{adult_account}
              </Text>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 13,
                    color: Colors.BLUE_TEXT,
                    fontFamily: fontFamily.Regular,
                  },
                ]}>
                {(Number(adult_account) * priceShow).toLocaleString(
                  'vi-VN',
                )}{' '}
                VND
              </Text>
            </View>
            <View style={_styles.row}>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 13,
                    color: Colors.BLUE_TEXT,
                    fontFamily: fontFamily.Regular,
                  },
                ]}>
                Trẻ em x{child_account}
              </Text>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 13,
                    color: Colors.BLUE_TEXT,
                    fontFamily: fontFamily.Regular,
                  },
                ]}>
                {(
                  Number(child_account) *
                  priceShow *
                  0.6
                ).toLocaleString('vi-VN')}{' '}
                VND
              </Text>
            </View>
            <View style={_styles.row}>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 13,
                    color: Colors.BLUE_TEXT,
                    fontFamily: fontFamily.Regular,
                  },
                ]}>
                Giảm giá
              </Text>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 13,
                    color: Colors.BLUE_TEXT,
                    fontFamily: fontFamily.Regular,
                  },
                ]}>
                {discount?.toLocaleString('vi-vn')} VND
              </Text>
            </View>
            <View style={_styles.row}>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 13,
                    color: Colors.BLUE_TEXT,
                    fontFamily: fontFamily.Regular,
                  },
                ]}>
                Phí dịch vụ
              </Text>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 13,
                    color: Colors.BLUE_TEXT,
                    fontFamily: fontFamily.Regular,
                  },
                ]}>
                {(
                  Number(priceService)
                ).toLocaleString('vi-VN')}{' '}
                VND
              </Text>
            </View>
          </View>
          <View style={_styles.sum}>
            <Text
              style={[
                _styles.text,
                {
                  marginVertical: 20,
                  marginHorizontal: 20,
                },
              ]}>
              Tổng
            </Text>
            <Text
              style={[
                _styles.text,
                {
                  fontSize: 20,
                  marginVertical: 20,
                  marginHorizontal: 20,
                },
              ]}>
              {price?.toLocaleString('vi-VN')} VND
            </Text>
          </View>
          <View style={_styles.row}>
            <Text style={_styles.text}>Phương Thức Thanh Toán</Text>
            <Pressable onPress={() => setModalVisible(true)}>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 13,
                    fontFamily: fontFamily.Bold,
                  },
                ]}>
                Thay đổi
              </Text>
            </Pressable>
          </View>
          <View style={_styles.pay}>
            <Image style={_styles.image} source={imagePay}></Image>
            <View>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 14,
                    color: Colors.BLACK,
                    fontFamily: fontFamily.Bold,
                  },
                ]}>
                {namePay}
              </Text>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 12,
                    color: Colors.BLUE_TEXT,
                    fontFamily: fontFamily.Regular,
                  },
                ]}>
                {price?.toLocaleString('vi-VN')} VND
              </Text>
            </View>
          </View>
          <Button
            title="Thanh toán"
            imageIconLeft={FULL_NAME}
            imageIconRight={ORDER_BT}
            onPress={() => {

              setModalVisiblePay(true);
              const data = {
                user_id: user_id,
                tour_id: tour_id,
                discount: discount,
                adult_count: Number(adult_account),
                child_count: Number(child_account),
                price: price,
                note: note,
                role: role,
                location_custom: location_custom,
              };

              dispatch(addBookingTour(data));
            }}
            viewStyle={{
              width: DimensionsStyle.width * 1 - 40,
              backgroundColor: Colors.GREEN,
              borderRadius: 10,
              marginVertical: 20,
              marginTop: 40,
              marginBottom: 10,
            }}
          />
        </ScrollView>
        <ModalPayment
          visible={modalVisible}
          onPress={onPress}
          Cancel={() => {
            setModalVisible(false);
          }}
        />
        <ModalSuccessful
          visible={modalVisiblePay}
          onPress={handleModal}
          text="Bạn đã thanh toán thành công"
          textBold="thành công"
          titleButton="Xem danh sách tour đã đặt"
        />
      </SafeAreaView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily.Black,
    fontSize: 18,
    color: Colors.BLUE_DARK,
  },
  card: {
    height: DimensionsStyle.height * 0.16,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 20,
    marginHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'space-around',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    height: 35,
    width: 35,
    marginRight: 10,
  },
  pay: {
    height: DimensionsStyle.height * 0.1,
    width: DimensionsStyle.width * 0.5,
    backgroundColor: Colors.WHITE,
    borderWidth: 2,
    borderColor: Colors.GREEN,
    borderRadius: 25,
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  sum: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: Colors.GRAY_SEARCH,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.GREY,
    marginBottom: 10,
  },
});

export const Pay = React.memo(_Pay);
