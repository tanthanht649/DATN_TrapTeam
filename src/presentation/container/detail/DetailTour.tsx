import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {BackgroundApp, Button, Header, Loading} from '@components';
import {
  AVT,
  BACKGROUND_WHITE,
  DT_1,
  FULL_NAME,
  HEART,
  HEART_INACTIVE,
  HEART_INACTIVE_2,
  ICON_BACK,
  LOCATION,
  LOCATION_2,
  LOCATION_DT,
  LOCATION_ORANGE,
  ORDER_BT,
  SETTING_BG,
  VHL,
  VHL_FL_1,
  fontFamily,
} from '@assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, DimensionsStyle} from '@resources';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  HomeStackParamList,
  SearchStackParamList,
  WelcomeTeamStackParamList,
} from '@navigation';
import {RootState, getTourById, useAppDispatch} from '@shared-state';
import {useSelector} from 'react-redux';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'DetailTour'> &
  NativeStackScreenProps<SearchStackParamList, 'DetailTour'>;

const _DetailTour: React.FC<PropsType> = props => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const tour_id = props.route.params?.tour_id;
  const isFavorite = props.route.params?.isFavorite;
  const [isFull, setIsFull] = React.useState<boolean>(false);
  const [titleButtonShowReview, setTitleButtonShowReview] =
    React.useState<string>('Xem tất cả bình luận');
  const dataTour = useSelector((state: RootState) => state.tour.tourDetail);
  const loadingTour = useSelector(
    (state: RootState) => state.tour.loadingTourDetail,
  );

  useEffect(() => {
    dispatch(getTourById(tour_id));
  }, []);

  const [dataImageTop, setDataImageTop] = React.useState<any>([]);
  const [dataSchedules, setDataSchedules] = React.useState<any>([]);
  const daysDifference = (endDate: any, startDate: any) => {
    const startDay = new Date(startDate);
    const endDay = new Date(endDate);
    const timeDifference = Number(endDay) - Number(startDay);
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Số mili giây trong một ngày
    const daysDifference = Math.round(timeDifference / millisecondsPerDay);
    return daysDifference;
  };

  const [imageDetail, setImageDetail] = React.useState(dataTour.image);
  useEffect(() => {
    if (dataTour && dataTour.locations) {
      setDataImageTop(dataTour.locations.map(location => location.image));
      setDataSchedules(dataTour.schedules);
      setImageDetail(dataTour.image);
    }

    if (dataImageTop.length > 0) {
      setDataImageTop(dataImageTop.concat(dataTour.image));
    }
  }, [dataTour]);

  const ITEM_IMG_TOP = ({item, index, onPress}: any) => {
    return (
      <Pressable
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
        }}
        onPress={onPress}>
        <Image
          source={{uri: item}}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            borderRadius: 10,
          }}
        />
      </Pressable>
    );
  };

  const renderItemImgTop = ({item, index, onPress}: any) => {
    return (
      <ITEM_IMG_TOP
        item={item}
        index={index}
        key={index}
        onPress={() => {
          setImageDetail(item);
        }}
      />
    );
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

  interface Review {
    id: number;
    name: string;
    date: string;
    content: string;
    avatar: any;
  }

  const DATAREVIEW: Review[] = [
    {
      id: 1,
      name: 'Tấn Thành',
      date: '20/10/2021',
      content:
        'Điểm đến rất thú vị, có nhiều cảnh đẹp để chụp hình, đồ ăn siêu ngon. Các bạn hướng dẫn viên rất vui vẻ, dễ thương.',
      avatar: AVT,
    },
    {
      id: 2,
      name: 'Diễm Kiều',
      date: '20/10/2021',
      content:
        'Phong cảnh rất đẹp, khí hậu mùa thu mát mẻ. Tour rất vui, và chuyên nghiệp.',
      avatar: AVT,
    },
    {
      id: 3,
      name: 'Thuy Ân',
      date: '20/10/2021',
      content:
        'Phong cảnh rất đẹp, khí hậu mùa thu mát mẻ. Tour rất vui, và chuyên nghiệp.',
      avatar: AVT,
    },
    {
      id: 4,
      name: 'Phi Long',
      date: '20/10/2021',
      content:
        'Điểm đến rất thú vị, có nhiều cảnh đẹp để chụp hình, đồ ăn siêu ngon. Các bạn hướng dẫn viên rất vui vẻ, dễ thương.',
      avatar: AVT,
    },
    {
      id: 5,
      name: 'Mỹ Linh',
      date: '20/10/2021',
      content:
        'Điểm đến rất thú vị, có nhiều cảnh đẹp để chụp hình, đồ ăn siêu ngon. Các bạn hướng dẫn viên rất vui vẻ, dễ thương.',
      avatar: AVT,
    },
    {
      id: 6,
      name: 'Trọng LV',
      date: '20/10/2021',
      content:
        'Điểm đến rất thú vị, có nhiều cảnh đẹp để chụp hình, đồ ăn siêu ngon. Các bạn hướng dẫn viên rất vui vẻ, dễ thương.',
      avatar: AVT,
    },
  ];

  const ItemReview = ({item, index}: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginBottom: 15,
          marginHorizontal: 30,
          alignSelf: 'center',
          backgroundColor: Colors.GRAY_SEARCH,
          borderRadius: 25,
          padding: 15,
        }}>
        <View
          style={{
            padding: 3,
            backgroundColor: Colors.WHITE,
            marginEnd: 10,
            borderRadius: 100,
          }}>
          <Image
            source={item.avatar}
            style={{
              width: 50,
              height: 50,
              resizeMode: 'stretch',
              borderRadius: 25,
            }}
          />
        </View>

        <View>
          <Text
            style={{
              fontFamily: fontFamily.Black,
              fontSize: 16,
              lineHeight: 20,
              color: Colors.BLUE_DARK,
              paddingTop: 10,
              marginBottom: 5,
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.Medium,
              fontSize: 14,
              lineHeight: 22,
              color: Colors.BLUE_TEXT_HOME,
              textAlign: 'justify',
            }}>
            {item.content}
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.Medium,
              fontSize: 12,
              lineHeight: 20,
              color: Colors.BLUE_2,
              marginTop: 5,
            }}>
            {item.date}
          </Text>
        </View>
      </View>
    );
  };

  const renderItemReview = ({item, index}: any) => {
    return <ItemReview item={item} index={index} key={item.id} />;
  };

  interface Location {
    id: number;
    name: string;
    image: any;
    address: string;
  }

  const DATALOCATION: Location[] = [
    {
      id: 1,
      name: 'Bà Nà Hills',
      image: VHL,
      address: 'Đà Nẵng, Việt Nam',
    },
    {
      id: 2,
      name: 'Hội An',
      image: DT_1,
      address: 'Quảng Nam, Việt Nam',
    },
    {
      id: 3,
      name: 'Cù Lao Chàm',
      image: DT_1,
      address: 'Quảng Nam, Việt Nam',
    },
    {
      id: 4,
      name: 'Bà Nà Hills',
      image: VHL_FL_1,
      address: 'Đà Nẵng, Việt Nam',
    },
  ];

  const ItemLocation = ({item, index}: any) => {
    return (
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: Colors.GRAY_SEARCH,
          width: DimensionsStyle.width * 0.5 - 25,
          padding: 7,
          margin: 5,
          borderRadius: 25,
        }}>
        <Image
          source={item.image}
          style={{
            width: '100%',
            height: DimensionsStyle.width * 0.5 - 25,
            resizeMode: 'stretch',
            borderRadius: 25,
          }}
        />
        <View style={{marginStart: 10}}>
          <Text
            style={{
              fontFamily: fontFamily.Black,
              fontSize: 16,
              lineHeight: 20,
              color: Colors.BLUE_DARK,
              marginBottom: 10,
              marginTop: 15,
            }}>
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginBottom: 10,
            }}>
            <Image
              source={LOCATION_ORANGE}
              style={{width: 15, height: 15, marginEnd: 2}}
            />
            <Text
              numberOfLines={1}
              style={{
                fontFamily: fontFamily.Medium,
                fontSize: 12,
                lineHeight: 20,
                color: Colors.BLUE_2,
              }}>
              {item.address}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderItemLocation = ({item, index}: any) => {
    return <ItemLocation item={item} index={index} key={item.id} />;
  };

  const halfwayIndex = Math.ceil(DATALOCATION.length / 2);
  const column1Data = DATALOCATION.slice(0, halfwayIndex);
  const column2Data = DATALOCATION.slice(halfwayIndex);

  const [dataShowReview, setDataShowReview] = React.useState<Review[]>(
    DATAREVIEW.slice(0, 2),
  );

  useEffect(() => {
    isFull
      ? setDataShowReview(DATAREVIEW)
      : setDataShowReview(DATAREVIEW.slice(0, 2));

    isFull
      ? setTitleButtonShowReview('Thu gọn bình luận')
      : setTitleButtonShowReview('Xem tất cả bình luận');
  }, [isFull]);

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      {loadingTour ? (
        <Loading height={DimensionsStyle.height * 1} />
      ) : (
        <ScrollView
          style={_styles.container}
          showsVerticalScrollIndicator={false}>
          <View>
            <View>
              <Image
                source={{uri: imageDetail}}
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
                source={{uri: imageDetail}}
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
                iconRight={isFavorite ? HEART : HEART_INACTIVE_2}
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
                {loadingTour ? (
                  <Loading height={DimensionsStyle.width * 0.475} />
                ) : (
                  <ScrollView
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}>
                    {dataImageTop.map((item: any, index: any) => {
                      return renderItemImgTop({item, index});
                    })}
                  </ScrollView>
                )}
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
                  {dataTour.name}
                </Text>

                <Text
                  style={{
                    fontFamily: fontFamily.Bold,
                    fontSize: 18,
                    color: Colors.RED,
                  }}>
                  {Number(dataTour.price).toLocaleString('vi-VN')} VNĐ
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
                  {dataTour?.province_id?.name}, Việt Nam
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
                {/* {dataTour.description} */}
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
                Trẻ em:{' '}
                {Math.round(Number(dataTour.price) * 0.6).toLocaleString(
                  'vi-VN',
                )}{' '}
                VND
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
                Người lớn: {Number(dataTour.price).toLocaleString('vi-VN')} VND
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
                {daysDifference(dataTour.end_date, dataTour.departure_date)}{' '}
                ngày{' '}
                {daysDifference(dataTour.end_date, dataTour.departure_date) - 1}{' '}
                đêm
              </Text>
              {dataSchedules.map((item: any, index: any) => {
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
                  paddingBottom: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.GRAY,
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
              <Text
                style={[
                  _styles.text,
                  {
                    marginVertical: 15,
                  },
                ]}>
                Đánh giá
              </Text>
              {dataShowReview.map((item: any, index: any) => {
                return renderItemReview({item, index});
              })}

              <Button
                title={titleButtonShowReview}
                imageIconLeft={FULL_NAME}
                imageIconRight={FULL_NAME}
                onPress={() => {
                  setIsFull(!isFull);
                }}
                viewStyle={{
                  width: DimensionsStyle.width * 0.88,
                  backgroundColor: Colors.GRAY_SEARCH,
                  borderRadius: 20,
                }}
                textStyle={{
                  color: Colors.BLUE_DARK,
                }}
              />

              <Text
                style={[
                  _styles.text,
                  {
                    marginVertical: 25,
                  },
                ]}>
                Địa điểm tham quan
              </Text>
            </View>
            <View>
              {
                <View style={_styles.containerFlatlist}>
                  <View>
                    {column1Data.map((item, index) =>
                      renderItemLocation({item: item, index: index}),
                    )}
                  </View>
                  <View>
                    {column2Data.map((item, index) =>
                      renderItemLocation({item: item, index: index}),
                    )}
                  </View>
                </View>
              }
            </View>

            <Button
              title="Đặt tour"
              imageIconLeft={FULL_NAME}
              imageIconRight={ORDER_BT}
              onPress={() => {
                navigation.navigate('BookTour');
              }}
              viewStyle={{
                width: DimensionsStyle.width * 0.7,
                backgroundColor: Colors.GREEN,
                borderRadius: 10,
                marginVertical: 20,
              }}
              viewIconRight={{
                display: 'flex',
              }}
            />
          </View>
        </ScrollView>
      )}
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

  containerFlatlist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    alignSelf: 'center',
  },
});

export const DetailTour = React.memo(_DetailTour);
