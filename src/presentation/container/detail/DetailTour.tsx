import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackgroundApp, Header} from '@components';
import {
  BACKGROUND_WHITE,
  DT_1,
  HEART,
  HEART_INACTIVE,
  ICON_BACK,
  LOCATION,
  LOCATION_2,
  LOCATION_DT,
  SETTING_BG,
  VHL,
  fontFamily,
} from '@assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, DimensionsStyle} from '@resources';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList, WelcomeTeamStackParamList} from '@navigation';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'DetailTour'>;

const _DetailTour: React.FC<PropsType> = props => {
  const {navigation} = props;

  const DATA_IMG_TOP: any = [VHL, DT_1, VHL, DT_1, VHL];

  const ITEM_IMG_TOP = ({item, index}: any) => {
    return (
      <View
        style={{
          width: DimensionsStyle.width * 0.15,
          height: DimensionsStyle.width * 0.15,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: Colors.WHITE,
          padding: 2,
          borderRadius: 10,
          marginBottom: 5,
        }}>
        <Image
          source={item}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            borderRadius: 10,
          }}
        />
      </View>
    );
  };

  const renderItemImgTop = ({item, index}: any) => {
    return <ITEM_IMG_TOP item={item} index={index} key={index} />;
  };

  const DATA_SCHEDULE: string[] = [
    'ĐÀ NẴNG - SƠN TRÀ - MỸ KHÊ',
    'KHÁM PHÁ CAO NGUYÊN BÀ BÀ - TẮM BIỂN - MỸ KHÊ',
    'CÙ LAO CHÀM - PHỐ CỔ HỘI AN',
    'KHÁM PHÁ ĐÀ NẴNG',
  ];

  const ITEM_SCHEDULE = ({item, index}: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginBottom: 5,
        }}>
        <Text
          style={{
            fontFamily: fontFamily.Medium,
            fontSize: 14,
            lineHeight: 20,
            color: Colors.BLUE_DARK,
          }}>
          Ngày {index + 1}: {item}
        </Text>
      </View>
    );
  };

  const renderItemSchedule = ({item, index}: any) => {
    return <ITEM_SCHEDULE item={item} index={index} key={index} />;
  };

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <ScrollView
        style={_styles.container}
        showsVerticalScrollIndicator={false}>
        <View>
          <View>
            <Image
              source={DT_1}
              style={{
                width: '100%',
                height: DimensionsStyle.height * 0.585,
                resizeMode: 'stretch',
                opacity: 0.5,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
              }}
            />
            <Image
              source={DT_1}
              style={{
                width: '96%',
                height: DimensionsStyle.height * 0.565,
                resizeMode: 'stretch',
                alignSelf: 'center',
                position: 'absolute',
                marginTop: DimensionsStyle.height * 0.01,
                borderRadius: 40,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
            <Header
              iconLeft={ICON_BACK}
              iconRight={HEART}
              eventLeft={() => navigation.goBack()}
              eventRight={() => console.log('EventRight')}
              isCheck={true}
              styleView={_styles.viewHeder}
            />

            <View
              style={{
                width: DimensionsStyle.width * 0.15,
                height: DimensionsStyle.width * 0.475,
                position: 'absolute',
                alignSelf: 'center',
                bottom: DimensionsStyle.height * 0.03,
                right: DimensionsStyle.height * 0.03,
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <ScrollView
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}>
                {DATA_IMG_TOP.map((item: any, index: any) => {
                  return renderItemImgTop({item, index});
                })}
              </ScrollView>
            </View>
          </View>
          <View style={{marginHorizontal: 20, marginTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: fontFamily.Bold,
                  width: DimensionsStyle.width * 0.5,
                  fontSize: 18,
                  color: Colors.BLUE_DARK,
                }}>
                Tour Tết 2024: Đà Nẵng - Hội An - Quảng Nam
              </Text>
              <Text
                style={{
                  fontFamily: fontFamily.Bold,

                  fontSize: 18,
                  color: Colors.RED,
                }}>
                6.000.000 VND
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Image
                source={LOCATION}
                style={{width: 15, height: 15, marginEnd: 5}}
              />
              <Text
                style={{
                  fontFamily: fontFamily.Medium,
                  fontSize: 14,
                  color: Colors.BLUE_DARK,
                }}>
                Đà Nẵng - Quảng Nam, Việt Nam
              </Text>
            </View>

            <Text
              style={[
                _styles.text,
                {
                  marginTop: 5,
                },
              ]}>
              Mô tả
            </Text>
            <Text
              style={[
                _styles.text,
                {
                  fontFamily: fontFamily.Medium,
                  fontSize: 14,
                  textAlign: 'justify',
                  lineHeight: 18,
                  marginTop: 5,
                },
              ]}>
              Điểm đến rất thú vị, có nhiều cảnh đẹp để chụp hình, đồ ăn siêu
              ngon. Các bạn hướng dẫn viên rất vui vẻ, dễ thương. Điểm đến rất
              thú vị, có nhiều cảnh đẹp để chụp hình, đồ ăn siêu ngon. Các bạn
              hướng dẫn viên rất vui vẻ, dễ thương. Điểm đến rất thú vị, có
              nhiều cảnh đẹp để chụp hình, đồ ăn siêu ngon. Các bạn hướng dẫn
              viên rất vui vẻ, dễ thương.
            </Text>
            <Text
              style={[
                _styles.text,
                {
                  fontFamily: fontFamily.Medium,
                  fontSize: 14,
                  textAlign: 'justify',
                  lineHeight: 18,
                  marginTop: 5,
                },
              ]}>
              Trẻ em: 600.000 VND
            </Text>
            <Text
              style={[
                _styles.text,
                {
                  fontFamily: fontFamily.Medium,
                  fontSize: 14,
                  textAlign: 'justify',
                  lineHeight: 18,
                },
              ]}>
              Người lớn: 1.200.000 VND
            </Text>
            <Text
              style={[
                _styles.text,
                {
                  marginBottom: 5,
                  marginTop: 10,
                },
              ]}>
              Lịch trình
            </Text>
            <Text
              style={[
                _styles.text,
                {
                  fontFamily: fontFamily.Medium,
                  fontSize: 14,
                  textAlign: 'justify',
                  lineHeight: 18,
                  marginBottom: 5,
                },
              ]}>
              4 ngày 3 đêm
            </Text>
            {DATA_SCHEDULE.map((item: any, index: any) => {
              return renderItemSchedule({item, index});
            })}
            <Text
              style={[
                _styles.text,
                {
                  marginBottom: 5,
                  marginTop: 10,
                },
              ]}>
              Vị trí
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Image
                source={LOCATION_DT}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'stretch',
                  marginEnd: 10,
                }}
              />
              <Text
                style={{
                  fontFamily: fontFamily.Medium,
                  fontSize: 14,
                  lineHeight: 18,
                  color: Colors.BLUE_DARK,
                  marginTop: 5,
                  width: DimensionsStyle.width * 0.7,
                }}>
                Bà Nà Hills, Đà Nẵng - Hội An, Quảng Nam, Việt Nam
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  viewHeder: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
  },

  text: {
    fontFamily: fontFamily.Black,
    fontSize: 18,
    color: Colors.BLUE_DARK,
  },
});

export const DetailTour = React.memo(_DetailTour);
