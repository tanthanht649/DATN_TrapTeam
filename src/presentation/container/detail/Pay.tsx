import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BackgroundApp, Header, ModalPayment } from '@components';
import { BACKGROUND_WHITE, HEART, ICON_BACK, LOCATION, MOMO, fontFamily } from '@assets';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList, SearchStackParamList } from '@navigation';
import { Tour } from '../home';
import { Colors, DimensionsStyle } from '@resources';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'Pay'>;

const _Pay: React.FC<PropsType> = props => {
  const { navigation } = props;
  const eventRight = () => { };
  const eventLeft = () => { };
  const eventBack = () => {
    navigation.goBack();
  };

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<{}>();

  const handleDataFromModal = (data:{}) => {
      setSelectedData(data);
      console.log('Phương thức đã thay đổi hiển thị ở Pay',selectedData);
      setModalVisible(false);
      navigation.navigate("Pay")
  };
  


  const itemTour: Tour = {
    id: 1,
    tourist_destinationId: 1,
    provide: 'Vietnam Travel',
    name: 'Tour Tết 2024: Quy Nhơn – Phú Quốc',
    description: 'Điểm đến: Hồ Hoàn Kiếm',
    available_seats: 10,
    duration: 1,
    image: 'https://i.redd.it/x8m1euew4du21.jpg',
    price: 4450000,
    departure_date: '2021-10-10',
    departure_location: 'Hà Nội, Việt Nam',
    note: 'Không được hủy',
    schedule: 'Hà Nội',
    status: true,
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
                source={{ uri: itemTour.image }}
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
                {itemTour.name}
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
                  {itemTour.departure_location}
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
                {itemTour.price.toLocaleString('vi-VN')} VNĐ
              </Text>
            </View>

          </View>

          <Text
            style={[
              _styles.text,
              {
                marginTop: 30,
                marginVertical: 15,
                marginHorizontal: 20
              },
            ]}>
            Chi tiết thanh toán
          </Text>
          <View style={_styles.card}>
            <View style={_styles.row}>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 13,
                    color: Colors.BLUE_TEXT,
                    fontFamily: fontFamily.Regular
                  },
                ]}>
                Người lớn x2
              </Text>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 13,
                    color: Colors.BLUE_TEXT,
                    fontFamily: fontFamily.Regular
                  },
                ]}>
                13.380.000 VND
              </Text>
            </View>
            <View style={_styles.row}>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 13,
                    color: Colors.BLUE_TEXT,
                    fontFamily: fontFamily.Regular
                  },
                ]}>
                Trẻ em x3
              </Text>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 13,
                    color: Colors.BLUE_TEXT,
                    fontFamily: fontFamily.Regular
                  },
                ]}>
                1.800.000 VND
              </Text>
            </View>
            <View style={_styles.row}>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 13,
                    color: Colors.BLUE_TEXT,
                    fontFamily: fontFamily.Regular
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
                    fontFamily: fontFamily.Regular
                  },
                ]}>
                380.000 VND
              </Text>
            </View>
          </View>
          <View style={_styles.row}>
            <Text
              style={[
                _styles.text,
                {
                  marginVertical: 30,
                  marginHorizontal: 20
                },
              ]}>
              Tổng
            </Text>
            <Text
              style={[
                _styles.text,
                {
                  fontSize: 20,
                  marginVertical: 30,
                  marginHorizontal: 20
                },
              ]}>
              14,800,000 VND
            </Text>
          </View>
          <View style={_styles.row}>
            <Text
              style={
                _styles.text
              }>
              Phương thức thanh toán
            </Text>
            <Pressable onPress={() => setModalVisible(true)
            }>
              <Text
                style={[
                  _styles.text,
                  {

                    fontSize: 13,
                    fontFamily: fontFamily.Bold
                  },
                ]}>
                Thay đổi
              </Text>
            </Pressable>

          </View>
          <View style={_styles.pay}>
            <Image style={_styles.image} source={MOMO}></Image>
            <View>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 14,
                    color: Colors.BLACK,
                    fontFamily: fontFamily.Bold
                  },
                ]}>
                Ví MoMo
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
                14.000.380.000 VND
              </Text>
            </View>
          </View>

        </ScrollView>
        <ModalPayment visible={modalVisible}   onPress={handleDataFromModal} Cancel={() => { setModalVisible(false) } }></ModalPayment>

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
    width: DimensionsStyle.width * 0.89,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.SOFT_BLUE,
    borderRadius: 20,
    marginHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'space-around'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center'
  },
  image: {
    height: 35,
    width: 35,
    marginRight:10
  },
  pay: {
    height: DimensionsStyle.height * 0.10,
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
    justifyContent: 'flex-start'
  },
});

export const Pay = React.memo(_Pay);
