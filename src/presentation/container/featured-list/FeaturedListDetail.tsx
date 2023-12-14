import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackgroundApp, Header, Input, Loading, ViewSwitcher} from '@components';
import {
  BACKGROUND_WHITE,
  DL,
  EMAIL_LOGIN,
  FIND,
  FTL_1,
  HEART,
  HEART_ACTIVE,
  HEART_INACTIVE,
  HEART_INACTIVE_2,
  ICON_BACK,
  IMAGE_FEATURED_LIST,
  IMAGE_FEATURED_LIST_2,
  IMAGE_FEATURED_LIST_3,
  LOCATION,
  ONBOARDING_1,
  SETTING,
  SETTING_BG,
  VHL,
  VHL_FL_1,
  VHL_FL_2,
  VHL_FL_3,
  fontFamily,
} from '@assets';
import {Colors, DimensionsStyle} from '@resources';
import {ItemTourOutstanding} from '../home';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '@navigation';
import {Tour, TourAndFavorite} from '@domain';
import {
  RootState,
  addFavorite,
  deleteFavorite,
  getDataFavorite,
  getLocationsById,
  getTourByLocation,
  useAppDispatch,
} from '@shared-state';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';

type PropsType = NativeStackScreenProps<
  HomeStackParamList,
  'FeaturedListDetail'
>;

const _FeaturedListDetail: React.FC<PropsType> = props => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const linkDefault = 'https://wallpaperaccess.com/full/1668873.jpg';
  const location_id = props.route.params?.location_id;
  const [hideElement, setHideElement] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [listViewType, setListViewType] = useState<'list' | 'grid'>('grid');
  const [imageTopRight, setImageTopRight] = useState(linkDefault);
  const [imageTopLeftTop, setImageTopLeftTop] = useState(linkDefault);
  const [imageTopLeftBottom, setImageTopLeftBottom] = useState(linkDefault);

  const dataUser = useSelector((state: RootState) => state.user.dataUsers);
  const loadingLocation = useSelector(
    (state: RootState) => state.location.loadingLocation,
  );
  useEffect(() => {
    dispatch(getLocationsById(location_id));
  }, []);

  useEffect(() => {
    dispatch(getTourByLocation(location_id));
  }, []);

  const locationById = useSelector(
    (state: RootState) => state.location.locationById,
  );

  const dataTourByLocation = useSelector(
    (state: RootState) => state.tour.dataTourByLocation,
  );

  useEffect(() => {
    if (locationById) {
      if (locationById?.image) {
        setImageTopRight(locationById?.image);
        setImageTopLeftBottom(locationById?.image);
        setImageTopLeftTop(locationById?.province_id?.image);
      }
    }
  }, [locationById]);

  const [isLayout, setIsLayout] = useState(false);
  const [column, setColumn] = useState(2);

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

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y + 10;
    setHideElement(offsetY > 20);
  };
  const dataFavoriteNoId = useSelector(
    (state: RootState) => state.favorite.dataFavoriteNoId,
  );

  const [dataTourAndFavorite, setDataTourAndFavorite] = useState<
    TourAndFavorite[]
  >([]);

  useEffect(() => {
    const tourAndFavorite = dataTourByLocation.map((item: Tour) => {
      const isFavorite = dataFavoriteNoId.some(
        (check: Tour) => check._id === item._id,
      );
      return {...item, isFavorite: isFavorite};
    });

    setDataTourAndFavorite(tourAndFavorite);
  }, [dataFavoriteNoId, dataTourByLocation]);

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        {hideElement ? null : (
          <View>
            {loadingLocation ? (
              <SafeAreaView
                style={{
                  height: DimensionsStyle.width * 0.8,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <Loading height={DimensionsStyle.width * 0.8} />
              </SafeAreaView>
            ) : (
              <View style={[_styles.containerImageTop]}>
                <View style={_styles.containerImageTopLeft}>
                  <Image
                    style={[
                      _styles.image,
                      {
                        opacity: 0.4,
                      },
                    ]}
                    source={{uri: imageTopRight}}
                  />

                  <Image
                    style={[
                      _styles.image,
                      {
                        width: '93%',
                        height: '93%',
                        position: 'absolute',
                        resizeMode: 'stretch',
                        alignSelf: 'center',
                        top: 12,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 12,
                        borderTopRightRadius: 12,
                        borderTopLeftRadius: 30,
                      },
                    ]}
                    source={{uri: imageTopRight}}
                  />
                </View>
                <View style={_styles.containerImageTopCenter}></View>
                <View style={[_styles.containerImageTopRight]}>
                  <View style={_styles.containerImageTopRightBottom}>
                    <Image
                      style={[
                        _styles.image,
                        {
                          opacity: 0.6,
                        },
                      ]}
                      source={{uri: imageTopRight}}
                    />
                    <Image
                      style={[
                        _styles.image,
                        {
                          width: '85%',
                          height: '78%',
                          position: 'absolute',
                          resizeMode: 'stretch',
                          alignSelf: 'center',
                          top: 13,
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 30,
                          borderTopRightRadius: 12,
                          borderTopLeftRadius: 12,
                        },
                      ]}
                      source={{uri: imageTopRight}}
                    />
                  </View>
                  <View style={[_styles.containerImageTopRightTop]}>
                    <Image
                      style={[
                        _styles.image,
                        {
                          opacity: 0.75,
                        },
                      ]}
                      source={{
                        uri: imageTopLeftTop,
                      }}
                    />
                    <Image
                      style={[
                        _styles.image,
                        {
                          width: '85%',
                          height: '90%',
                          position: 'absolute',
                          resizeMode: 'stretch',
                          alignSelf: 'center',
                          top: 12,
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopRightRadius: 30,
                          borderTopLeftRadius: 12,
                        },
                      ]}
                      source={{
                        uri: imageTopLeftTop,
                      }}
                    />
                  </View>
                </View>
              </View>
            )}
          </View>
        )}
        {hideElement ? null : (
          <Header
            iconLeft={ICON_BACK}
            iconRight={SETTING_BG}
            iconHeart={HEART_INACTIVE}
            eventLeft={() => navigation.goBack()}
            eventRight={() => console.log('EventRight')}
            isCheck={true}
            styleView={_styles.viewHeder}
            styleIconRight={{display: 'none'}}
          />
        )}

        {loadingLocation ? (
          <Loading height={200} />
        ) : (
          <View style={_styles.containetTextCenter}>
            <Text style={_styles.textCenterTop}>{locationById?.name}</Text>
            <Text style={_styles.textCenterBottom}>
              {locationById?.description}
            </Text>
          </View>
        )}

        <View>
          <ViewSwitcher quantityEstates={22} onTabChange={setListViewType} />
        </View>

        <View style={_styles.containerListFeatured}>
          <Animated.FlatList
            data={dataTourAndFavorite}
            renderItem={
              isLayout ? renderItemTourOutstanding : renderItemTourFavorite
            }
            keyExtractor={item => item._id.toString()}
            numColumns={column}
            key={column}
            style={{
              height: DimensionsStyle.height * 0.6,
              marginBottom: isLayout ? 120 : 20,
            }}
            showsVerticalScrollIndicator={false}
            onScroll={handleScroll}
          />
        </View>
      </SafeAreaView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: DimensionsStyle.width * 0.4,
  },

  containerListFeatured: {
    marginHorizontal: 20,
    alignSelf: 'center',
  },

  viewHeder: {
    position: 'absolute',
    top: 15,
    left: 0,
    right: 0,
  },

  containerImageTop: {
    height: DimensionsStyle.width * 0.8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
  },

  containerImageTopLeft: {
    width: '72%',
    borderRadius: 30,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    overflow: 'hidden',
  },

  containerImageTopCenter: {
    width: '2%',
  },
  containerImageTopRight: {
    width: '30.5%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    right: 0,
  },

  containerImageTopRightTop: {
    width: '100%',
    height: '70%',
    borderTopRightRadius: 30,
    borderRadius: 12,
    overflow: 'hidden',
  },
  containerImageTopRightBottom: {
    width: '100%',
    height: '34%',
    borderRadius: 12,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },

  containetTextCenter: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  textCenterTop: {
    fontSize: 25,
    color: Colors.BLACK,
    fontFamily: fontFamily.Bold,
    marginBottom: 10,
  },
  textCenterBottom: {
    fontSize: 15,
    color: Colors.BLACK,
    fontFamily: fontFamily.Regular,
    textAlign: 'justify',
    lineHeight: 20,
  },
});

export const FeaturedListDetail = React.memo(_FeaturedListDetail);
