import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { BackgroundApp, Button, Header, Loading } from '@components';
import {
  BACKGROUND_WHITE,
  FULL_NAME,
  HEART,
  HEART_INACTIVE_2,
  ICON_BACK,
  LOCATION,
  LOCATION_DT,
  LOCATION_ORANGE,
  ORDER_BT,
  VHL,
  VHL_FL_1,
  fontFamily,
} from '@assets';
import { Colors, DimensionsStyle } from '@resources';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList, SearchStackParamList } from '@navigation';
import {
  RootState,
  addFavorite,
  deleteFavorite,
  getAllReviews,
  getDataFavorite,
  getLocationsByProvince,
  getQuantityBookingTour,
  getTourById,
  useAppDispatch,
} from '@shared-state';
import { useSelector } from 'react-redux';
import { Location, Review, TourAndLocation } from '@domain';
import moment from 'moment';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'DetailTour'> &
  NativeStackScreenProps<SearchStackParamList, 'DetailTour'>;

const _DetailTour: React.FC<PropsType> = props => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const tour_id = props.route.params?.tour_id;
  const isFavorite = props.route.params?.isFavorite;

  const [favoriteAddOrDelete, setFavoriteAddOrDelete] = React.useState<
    boolean | undefined
  >(isFavorite);
  const [titleButtonShowReview, setTitleButtonShowReview] =
    React.useState<string>('Xem tất cả bình luận');

  const dataUser = useSelector((state: RootState) => state.user.dataUsers);
  useEffect(() => {
    dispatch(getTourById(tour_id));
  }, []);

  const dataTour = useSelector((state: RootState) => state.tour.tourDetail);
  const loadingTour = useSelector(
    (state: RootState) => state.tour.loadingTourDetail,
  );

  const [dataImageTop, setDataImageTop] = React.useState<any>([]);
  const [dataLocationString, setDataLocationString] = React.useState<any>([]);
  const [dataSchedules, setDataSchedules] = React.useState<any>([]);
  const daysDifference = (endDate: any, startDate: any) => {
    const startDay = new Date(startDate);
    const endDay = new Date(endDate);
    const timeDifference = Number(endDay) - Number(startDay);
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Số mili giây trong một ngày
    const daysDifference = Math.round(timeDifference / millisecondsPerDay);
    return daysDifference;
  };

  const [imageDetail, setImageDetail] = React.useState('');
  useEffect(() => {
    if (dataTour && dataTour.locations) {
      setDataImageTop(dataTour.locations.map(location => location.image));
      setDataSchedules(dataTour.schedules);
      setImageDetail(dataTour.image);
      setDataLocationString(dataTour.locations.map(location => location.name));
    }
  }, [dataTour]);

  useEffect(() => {
    if (dataTour.locations)
      if (dataImageTop.length === dataTour.locations.length) {
        {
          if (dataImageTop.length > 0) {
            setDataImageTop(dataImageTop.concat(dataTour.image));
          }
        }
      }
  }, [dataImageTop]);

  const ITEM_IMG_TOP = ({ item, index, onPress }: any) => {
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
          source={{ uri: item }}
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

  const renderItemImgTop = ({ item, index, onPress }: any) => {
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

  const ITEM_SCHEDULE = ({ item, index }: any) => {
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

  const renderItemSchedule = ({ item, index }: any) => {
    return <ITEM_SCHEDULE item={item} index={index} key={index} />;
  };

  const ItemLocation = ({ item, index }: { item: Location; index: number }) => {
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
          source={{ uri: item.image }}
          style={{
            width: '100%',
            height: DimensionsStyle.width * 0.5 - 25,
            resizeMode: 'stretch',
            borderRadius: 25,
          }}
        />
        <View style={{ marginStart: 10 }}>
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
              style={{ width: 15, height: 15, marginEnd: 2 }}
            />
            <Text
              numberOfLines={1}
              style={{
                fontFamily: fontFamily.Medium,
                fontSize: 12,
                lineHeight: 20,
                color: Colors.BLUE_2,
              }}>
              {item.province_id.name}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderItemLocation = ({ item, index }: any) => {
    return <ItemLocation item={item} index={index} key={index} />;
  };
  const [dataLocations, setDataLocations] = React.useState<Location[]>([]);
  const [column1Data, setColumn1Data] = React.useState<Location[]>([]);
  const [column2Data, setColumn2Data] = React.useState<Location[]>([]);

  useEffect(() => {
    if (dataTour) {
      if (dataTour.locations) {
        setDataLocations(dataTour.locations);
      }
    }
  }, [dataTour]);

  useEffect(() => {
    if (dataLocations.length > 0) {
      const halfwayIndex = Math.round(dataLocations.length / 2);
      setColumn1Data(dataLocations.slice(0, halfwayIndex));
      setColumn2Data(dataLocations.slice(halfwayIndex));
    }
  }, [dataLocations]);

  const [isFull, setIsFull] = React.useState<boolean>(false);

  useEffect(() => {
    dispatch(getAllReviews(tour_id));
  }, []);
  const loadingReview = useSelector(
    (state: RootState) => state.review.loadingReview,
  );
  const dataReview = useSelector(
    (state: RootState) => state.review.dataReviews,
  );

  const [dataShowReview, setDataShowReview] = React.useState<Review[]>([]);

  useEffect(() => {
    if (dataReview) {
      if (dataReview.length > 0) {
        isFull
          ? setDataShowReview(dataReview)
          : setDataShowReview(dataReview.slice(0, 2));
      }
    }
  }, [dataReview]);

  useEffect(() => {
    isFull
      ? setDataShowReview(dataReview)
      : setDataShowReview(dataReview.slice(0, 2));

    isFull
      ? setTitleButtonShowReview('Thu gọn bình luận')
      : setTitleButtonShowReview('Xem tất cả bình luận');
  }, [isFull]);

  const [isReview, setIsReview] = React.useState<boolean>(false);

  useEffect(() => {
    if (dataReview.length > 0) {
      setIsReview(true);
    }
  }, [dataReview]);

  const convertISOToDate = (isoString: string) => {
    // Chuyển đổi chuỗi ISO thành đối tượng Moment
    const momentObj = moment(isoString);

    // Chuyển đổi đối tượng Moment thành chuỗi định dạng dd/MM/yyyy
    const formattedDate = momentObj.format('DD/MM/YYYY');

    return formattedDate;
  };

  const convertArrayToString = (array: [string]) => {
    // Sử dụng phương pháp map() để trích xuất giá trị của mỗi phần tử trong mảng
    const values = array.map(item => item);

    // Sử dụng phương pháp join() để kết hợp các giá trị thành một chuỗi, với dấu phẩy làm dấu phân cách
    const result = values.join(', ');
    return result;
  };

  const ItemReview = ({ item, index }: any) => {
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
          width: '100%',
        }}>
        <View
          style={{
            padding: 3,
            backgroundColor: Colors.WHITE,
            marginEnd: 10,
            borderRadius: 100,
          }}>
          <Image
            source={{ uri: item.user_id?.avatar }}
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
            {item.user_id?.name}
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
            {convertISOToDate(item.created_at)}
          </Text>
        </View>
      </View>
    );
  };

  const renderItemReview = ({ item, index }: any) => {
    return <ItemReview item={item} index={index} key={item._id} />;
  };

  useEffect(() => {
    if (dataTour) {
      if (dataTour.province_id) {
        dispatch(getLocationsByProvince(dataTour.province_id._id));
      }
    }
  }, [dataTour]);

  useEffect(() => {
    if (dataTour && dataTour._id) {
      dispatch(getQuantityBookingTour(dataTour._id));
    }
  }, [dataTour]);

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
              {imageDetail === '' ? (
                <Loading height={DimensionsStyle.height * 0.585} />
              ) : (
                <Image
                  source={{ uri: imageDetail }}
                  style={{
                    width: '100%',
                    height: DimensionsStyle.height * 0.585,
                    resizeMode: 'stretch',
                    opacity: 0.5,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                  }}
                />
              )}

              {imageDetail === '' ? (
                <Loading height={DimensionsStyle.height * 0.585} />
              ) : (
                <Image
                  source={{ uri: imageDetail }}
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
              )}

              <Header
                iconLeft={ICON_BACK}
                iconRight={favoriteAddOrDelete ? HEART : HEART_INACTIVE_2}
                eventLeft={() => navigation.goBack()}
                eventRight={() => {
                  const data = {
                    user_id: dataUser?._id,
                    tour_id: tour_id,
                  };

                  if (favoriteAddOrDelete) {
                    setFavoriteAddOrDelete(false);
                    dispatch(deleteFavorite(data)).then(() => {
                      dispatch(getDataFavorite(dataUser?._id));
                    });
                  } else {
                    setFavoriteAddOrDelete(true);
                    dispatch(addFavorite(data)).then(() => {
                      dispatch(getDataFavorite(dataUser?._id));
                    });
                  }
                }}
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
                      return renderItemImgTop({ item, index });
                    })}
                  </ScrollView>
                )}
              </View>
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 10 }}>
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
                  style={{ width: 15, height: 15, marginEnd: 5 }}
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
                {dataTour.description}
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
                    marginBottom: 10,
                  },
                ]}>
                {daysDifference(dataTour.end_date, dataTour.departure_date)}{' '}
                ngày{' '}
                {daysDifference(dataTour.end_date, dataTour.departure_date) - 1}{' '}
                đêm
              </Text>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
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
                  ]}
                >
                  Ngày khởi hành:{' '}
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
                  {moment(dataTour.departure_date).format('DD/MM/YYYY')}</Text>
              </View>

              {dataSchedules.map((item: any, index: any) => {
                return renderItemSchedule({ item, index });
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
                  {convertArrayToString(dataLocationString)},{' '}
                  {dataTour?.province_id?.name}, Việt Nam
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
              {isReview ? (
                <View>
                  {loadingReview ? (
                    <Loading height={DimensionsStyle.height * 0.3} />
                  ) : (
                    <View>
                      {dataShowReview.map((item: any, index: any) => {
                        return renderItemReview({ item, index });
                      })}
                    </View>
                  )}
                </View>
              ) : (
                <Text
                  style={{
                    width: DimensionsStyle.width * 0.8,
                    alignSelf: 'center',
                    textAlign: 'center',
                    fontFamily: fontFamily.Medium,
                    fontSize: 14,
                    color: Colors.BLUE_DARK,
                  }}>
                  Chưa có đánh giá nào về chuyến du lịch này
                </Text>
              )}

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
                  display: isReview ? 'flex' : 'none',
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
                      renderItemLocation({ item: item, index: index }),
                    )}
                  </View>
                  <View>
                    {column2Data.map((item, index) =>
                      renderItemLocation({ item: item, index: index }),
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
