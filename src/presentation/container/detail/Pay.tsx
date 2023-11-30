import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackgroundApp, Header} from '@components';
import {BACKGROUND_WHITE, HEART, ICON_BACK, LOCATION, fontFamily} from '@assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList, SearchStackParamList} from '@navigation';
import {Tour} from '../home';
import {Colors, DimensionsStyle} from '@resources';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'Pay'>;

const _Pay: React.FC<PropsType> = props => {
  const {navigation} = props;
  const eventRight = () => {};
  const eventLeft = () => {};
  const eventBack = () => {
    navigation.goBack();
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
                source={{uri: itemTour.image}}
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
                  style={{width: 12, height: 12, marginEnd: 2}}
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
        </ScrollView>
      </SafeAreaView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({});

export const Pay = React.memo(_Pay);
