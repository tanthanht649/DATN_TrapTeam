import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BackgroundApp,
  Header,
  Input,
  Loading,
  TextPlus,
  ViewSwitcher,
} from '@components';
import {
  ALERT_DANGER,
  BACKGROUND_WHITE,
  CLOSE_ITEM,
  HEART,
  HEART_INACTIVE_2,
  ICON_BACK,
  ICON_FILTER,
  LOCATION,
  LOGO_APP,
  fontFamily,
} from '@assets';
import {Colors, DimensionsStyle} from '@resources';
import {ItemTourOutstanding} from '../home';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList, SearchStackParamList} from '@navigation';
import {Tour, TourAndFavorite} from '@domain';
import {useSelector} from 'react-redux';
import {
  RootState,
  addFavorite,
  deleteFavorite,
  findTourByFilter,
  findTourByNames,
  getDataFavorite,
  useAppDispatch,
} from '@shared-state';

type PropsType = NativeStackScreenProps<SearchStackParamList, 'SearchResult'> &
  NativeStackScreenProps<HomeStackParamList, 'SearchResult'>;

const ItemFind = ({item}: {item: string}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.GRAY_SEARCH,
        margin: 7,
        paddingVertical: 5,
        paddingEnd: 20,
        paddingStart: 5,
        borderRadius: 30,
        marginStart: 20,
      }}>
      <Pressable
        onPress={() => {
          console.log('delete');
        }}>
        <Image source={CLOSE_ITEM} style={{width: 30, height: 30, margin: 5}} />
      </Pressable>

      <Text
        style={{
          fontFamily: fontFamily.Medium,
          color: Colors.BLACK,
          marginStart: 5,
        }}>
        {item}
      </Text>
    </View>
  );
};

const _SearchResult: React.FC<PropsType> = props => {
  const {navigation} = props;
  const dispatch = useAppDispatch();

  const dataUser = useSelector((state: RootState) => state.user.dataUsers);
  const isFilter = props.route.params?.isFilter;
  const departureLocation = props.route.params?.departureLocation;
  const locationProvinces = props.route.params?.locationProvinces;
  const is_popular = props.route.params?.is_popular;
  const minPrice = props.route.params?.minPrice;
  const maxPrice = props.route.params?.maxPrice;
  const dayFind = props.route.params?.dayFind;

 

  const text = props.route.params?.text;


  const dataSearchName = useSelector(
    (state: RootState) => state.tour.dataSearchName,
  );

  useEffect(() => {
    if (text !== undefined) {
      dispatch(findTourByNames(text));
    }
  }, [text]);

  const [listViewType, setListViewType] = useState<'list' | 'grid'>('grid');
  const [isLayout, setIsLayout] = useState(false);
  const [column, setColumn] = useState(2);

  const dataFavoriteNoId = useSelector(
    (state: RootState) => state.favorite.dataFavoriteNoId,
  );

  const [dataTourAndFavorite, setDataTourAndFavorite] = useState<
    TourAndFavorite[]
  >([]);

  useEffect(() => {
    const tourAndFavorite = dataSearchName.map((item: Tour) => {
      const isFavorite = dataFavoriteNoId.some(
        (check: Tour) => check._id === item._id,
      );
      return {...item, isFavorite: isFavorite};
    });

    setDataTourAndFavorite(tourAndFavorite);
  }, [dataFavoriteNoId, dataSearchName]);

  const loadingTour = useSelector((state: RootState) => state.tour.loadingTour);

  // const price =
  //   Number(minPrice).toLocaleString('vi-VN') +
  //   ' - ' +
  //   Number(maxPrice).toLocaleString('vi-VN');
  const is_popular_text = is_popular ? 'Phổ biến' : 'Không nổi bật';

  const [dataFind, setDataFind] = useState<string[]>([]);

  useEffect(() => {
    if (departureLocation !== 'Điểm đến') {
      dataFind.push('Điểm đến: ' + departureLocation);
    }

    if (locationProvinces !== 'Điểm đi') {
      dataFind.push('Điểm đi: ' + locationProvinces);
    }

    dataFind.push(is_popular_text);

    if (minPrice == '0' && maxPrice == '0') {
      dataFind.push('Giá: Tất cả');
    }

    if (minPrice == '0' && maxPrice != '0') {
      dataFind.push(
        'Giá: Dưới ' + Number(maxPrice).toLocaleString('vi-VN') + ' VNĐ',
      );
    }

    dataFind.push(dayFind + '');
  }, []);

  const [marginBottom, setMarginBottom] = useState(0);

  useEffect(() => {
    if (isFilter) {
      setMarginBottom(130);
    } else {
      setMarginBottom(40);
    }
  }, [isFilter]);

  const renderItemFind = React.useMemo(
    () =>
      ({item}: {item: string}) => {
        return <ItemFind item={item} key={item} />;
      },
    [],
  );

  useEffect(() => {
    listViewType === 'grid' ? setIsLayout(true) : setIsLayout(false);
    listViewType === 'grid' ? setColumn(2) : setColumn(1);
  }, [listViewType]);

  const ItemTourFavorite = ({
    item,
    index,
    onPress,
    user_id,
    onPressFavorite,
  }: {
    item: TourAndFavorite;
    index: number;
    onPress: () => void;
    user_id?: string | undefined;
    onPressFavorite: () => void;
  }) => {
    return (
      <Pressable
        style={{
          width: '100%',
          height: DimensionsStyle.width * 0.35,
          flexDirection: 'row',
          marginEnd: 15,
          backgroundColor: Colors.SOFT_BLUE,
          borderRadius: 20,
          overflow: 'hidden',
          marginBottom: 10,
        }}
        onPress={onPress}>
        <View
          style={{
            width: '50%',
            padding: 7,
          }}>
          <Image
            source={{uri: item.image}}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'stretch',
              borderRadius: 20,
            }}
          />

          <TouchableOpacity
            style={{position: 'absolute', top: 15, right: 15}}
            onPress={() => {
              onPressFavorite();
            }}>
            <Image
              source={item.isFavorite ? HEART : HEART_INACTIVE_2}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'stretch',
              }}
            />
          </TouchableOpacity>
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
            {item.name}
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
              {item.departure_location}
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
            {item.price.toLocaleString('vi-VN')} VNĐ
          </Text>
        </View>
      </Pressable>
    );
  };

  const renderItemTourOutstanding = React.useMemo(
    () =>
      ({item, index}: {item: TourAndFavorite; index: number}) => {
        return (
          <ItemTourOutstanding
            item={item}
            key={item._id}
            index={index}
            onPress={() =>
              navigation.navigate('DetailTour', {
                tour_id: item._id,
                isFavorite: item.isFavorite,
              })
            }
            onPressFavorite={() => {
              const data = {
                user_id: dataUser?._id,
                tour_id: item._id,
              };

              if (item.isFavorite) {
                dispatch(deleteFavorite(data)).then(() => {
                  dispatch(getDataFavorite(dataUser?._id));
                });
              } else {
                dispatch(addFavorite(data)).then(() => {
                  dispatch(getDataFavorite(dataUser?._id));
                });
              }
            }}
          />
        );
      },
    [],
  );

  const renderItemTourFavorite = React.useMemo(
    () =>
      ({item, index}: {item: TourAndFavorite; index: number}) => {
        return (
          <ItemTourFavorite
            item={item}
            key={item._id}
            index={index}
            onPress={() =>
              navigation.navigate('DetailTour', {
                tour_id: item._id,
                isFavorite: item.isFavorite,
              })
            }
            onPressFavorite={() => {
              const data = {
                user_id: dataUser?._id,
                tour_id: item._id,
              };

              if (item.isFavorite) {
                dispatch(deleteFavorite(data)).then(() => {
                  dispatch(getDataFavorite(dataUser?._id));
                });
              } else {
                dispatch(addFavorite(data)).then(() => {
                  dispatch(getDataFavorite(dataUser?._id));
                });
              }
            }}
          />
        );
      },
    [],
  );

  const eventRight = () => {};
  const eventBack = () => {
    navigation.goBack();
  };

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        <Header
          iconLeft={ICON_BACK}
          eventLeft={eventBack}
          eventRight={eventRight}
          textCenter="Kết quả tìm kiếm"
        />

        {loadingTour ? (
          <Loading height={DimensionsStyle.height * 1} />
        ) : (
          <View
            style={{
              flex: 1,
            }}>
            {dataTourAndFavorite.length > 0 ? (
              <View>
                <View>
                  <ViewSwitcher
                    quantityEstates={dataSearchName.length}
                    onTabChange={setListViewType}
                  />
                </View>
                {isFilter ? (
                  <View>
                    <FlatList
                      data={dataFind}
                      renderItem={renderItemFind}
                      keyExtractor={index => index.toString()}
                      style={{marginBottom: 10}}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    />
                  </View>
                ) : null}
                <View style={_styles.containerListFeatured}>
                  <FlatList
                    data={dataTourAndFavorite}
                    renderItem={
                      isLayout
                        ? renderItemTourOutstanding
                        : renderItemTourFavorite
                    }
                    keyExtractor={item => item._id.toString()}
                    numColumns={column}
                    key={column}
                    showsVerticalScrollIndicator={false}
                    style={{
                      marginBottom: isFilter ? 270 : 120,
                    }}
                  />
                </View>
              </View>
            ) : (
              <View
                style={{
                  height: DimensionsStyle.height * 0.8,
                  width: '100%',
                }}>
                <View
                  style={{
                    flex: 1,
                  }}>
                  <TextPlus
                    text="Tìm thấy 0 chuyến đi"
                    textBolds={['0']}
                    numberOfLines={1}
                    textStyle={{
                      fontSize: 20,
                      marginStart: 20,
                      marginTop: 10,
                    }}
                    boldStyle={{
                      fontSize: 20,
                      fontFamily: fontFamily.Bold,
                    }}
                  />

                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 1,
                    }}>
                    <Image
                      source={ALERT_DANGER}
                      style={{
                        width: 200,
                        height: 200,
                        alignSelf: 'center',
                        resizeMode: 'stretch',
                      }}
                    />
                    <TextPlus
                      text="Tìm kiếm không thấy"
                      textBolds={['không thấy']}
                      numberOfLines={1}
                      textStyle={{
                        fontSize: 25,
                        marginTop: 10,
                        textAlign: 'center',
                        width: '100%',
                      }}
                      boldStyle={{
                        fontSize: 25,
                        fontFamily: fontFamily.Bold,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: fontFamily.Medium,
                        textAlign: 'center',
                        marginHorizontal: 30,
                        lineHeight: 20,
                        marginTop: 20,
                        fontSize: 14,
                      }}>
                      Rất tiếc, chúng tôi không thể tìm thấy chuyến đi mà bạn
                      đang tìm kiếm. Có lẽ, một chút lỗi chính tả?
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        )}

        {/* {isFound ? (
          <View
            style={{
              flex: 1,
              width: '100%',
            }}>
            <View>
              <ViewSwitcher
                quantityEstates={dataSearchName.length}
                onTabChange={setListViewType}
              />
            </View>
            {isFilter ? (
              <View>
                <FlatList
                  data={DATAFIND}
                  renderItem={renderItemFind}
                  keyExtractor={item => item}
                  style={{marginBottom: 10}}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            ) : null}

            {loadingTour ? (
              <Loading />
            ) : (
              <View style={_styles.containerListFeatured}>
                <FlatList
                  data={dataTourAndFavorite}
                  renderItem={
                    isLayout
                      ? renderItemTourOutstanding
                      : renderItemTourFavorite
                  }
                  keyExtractor={item => item._id.toString()}
                  numColumns={column}
                  key={column}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            )}
          </View>
        ) : (
          <View
            style={{
              flex: 1,
            }}>
            <TextPlus
              text="Tìm thấy 0 tour"
              textBolds={['0']}
              numberOfLines={1}
              textStyle={{
                fontSize: 20,
                marginStart: 20,
                marginTop: 10,
              }}
              boldStyle={{
                fontSize: 20,
                fontFamily: fontFamily.Bold,
              }}
            />

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <Image
                source={ALERT_DANGER}
                style={{
                  width: 200,
                  height: 200,
                  alignSelf: 'center',
                  resizeMode: 'stretch',
                }}
              />
              <TextPlus
                text="Tìm kiếm không thấy"
                textBolds={['không thấy']}
                numberOfLines={1}
                textStyle={{
                  fontSize: 25,
                  marginTop: 10,
                  textAlign: 'center',
                  width: '100%',
                }}
                boldStyle={{
                  fontSize: 25,
                  fontFamily: fontFamily.Bold,
                }}
              />
              <Text
                style={{
                  fontFamily: fontFamily.Medium,
                  textAlign: 'center',
                  marginHorizontal: 30,
                  lineHeight: 20,
                  marginTop: 20,
                  fontSize: 14,
                }}>
                Rất tiếc, chúng tôi không thể tìm thấy tour mà bạn đang tìm
                kiếm. Có lẽ, một chút lỗi chính tả?
              </Text>
            </View>
          </View>
        )} */}
      </SafeAreaView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },

  containerListFeatured: {
    marginHorizontal: 20,
    alignSelf: 'center',
  },

  iconRight: {
    width: 50,
    height: 50,
  },
  body: {},
  inputSearch: {
    height: 50,
  },
  boxSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.GRAY_SEARCH,
    borderRadius: 10,
    paddingStart: 10,
    marginTop: DimensionsStyle.width * 0.05,
    marginHorizontal: DimensionsStyle.width * 0.05,
  },
  textInput: {
    width: DimensionsStyle.width * 0.6,
  },
  textTitle: {
    marginTop: DimensionsStyle.width * 0.05,
    marginHorizontal: DimensionsStyle.width * 0.05,
    fontFamily: fontFamily.Medium,
    fontSize: 18,
  },
  textCount: {
    fontFamily: fontFamily.Bold,
  },
});

export const SearchResult = React.memo(_SearchResult);
