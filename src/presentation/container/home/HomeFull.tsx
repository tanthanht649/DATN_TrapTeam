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
import React, {useEffect, useState, useRef} from 'react';
import {
  AVT_HOME,
  BACKGROUND_HOME,
  FIND,
  HEART,
  HEART_ACTIVE,
  HEART_INACTIVE,
  ICON_BACK,
  LOCATION,
  LOGO_APP,
  NOTIFICATION,
  NOTIFICATION_SELECT,
  SETTING,
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
import {
  HomeStackParamList,
  OnboardingLoginStackParamList,
  WelcomeTeamStackParamList,
} from '@navigation';

type PropsType = NativeStackScreenProps<WelcomeTeamStackParamList, 'HomeFull'> &
  NativeStackScreenProps<HomeStackParamList, 'HomeFull'>;

//Banner
interface Banner {
  id: number;
  image: string;
  title: string;
}

const DATABANNER: Banner[] = [
  {
    id: 1,
    image:
      'https://th.bing.com/th/id/R.957bb2fa15d85ee8502355045f2b9995?rik=7lPOeXlelRZv%2bw&pid=ImgRaw&r=0',
    title: 'Chợ nổi Cái răng',
  },
  {
    id: 2,
    image:
      'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2022/12/ha-long.jpg',
    title: 'Vịnh Hạ Long',
  },
  {
    id: 3,
    image: 'https://i.redd.it/x8m1euew4du21.jpg',
    title: 'Đà Nẵng',
  },
  {
    id: 4,
    image:
      'https://th.bing.com/th/id/R.8ca75c2872c4c28fe560df7a172832d3?rik=j1GMaO4zmCqAjw&pid=ImgRaw&r=0',
    title: 'Hà Nội',
  },
];

const ItemBanner = ({item, onPress}: {item: Banner; onPress: () => void}) => {
  return (
    <Pressable onPress={onPress}>
      <Image
        source={{uri: item.image}}
        style={{
          width: Dimensions.get('screen').width * 0.7,
          height: Dimensions.get('screen').width * 0.5,
          resizeMode: 'stretch',
          borderRadius: 25,
          marginEnd: 15,
        }}
      />
      <View
        style={{
          position: 'absolute',
          right: 25,
          top: 10,
          backgroundColor: `rgba(163, 204, 227, 0.85)`,
          padding: 10,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: Colors.BLUE_SELECT,
            fontFamily: fontFamily.Bold,
            fontSize: 14,
          }}>
          {item.title}
        </Text>
      </View>
    </Pressable>
  );
};

//Tour yêu thích
export interface Tour {
  id: number;
  tourist_destinationId: number;
  provide: string;
  name: string;
  description: string;
  available_seats: number;
  duration: number;
  image: string;
  price: number;
  departure_date: string;
  departure_location: string;
  note: string;
  schedule: string;
  status: boolean;
}

export const DATATOUR: Tour[] = [
  {
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
  },
  {
    id: 2,
    tourist_destinationId: 1,
    provide: 'Vietnam Travel',
    name: 'Tour Hồ Hoàn Kiếm',
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
  },
  {
    id: 3,
    tourist_destinationId: 1,
    provide: 'Vietnam Travel',
    name: 'Tour Tết 2024: Quy Nhơn – Phú Quốc',
    description: 'Điểm đến: Hồ Hoàn Kiếm',
    available_seats: 10,
    duration: 1,
    image: 'https://i.redd.it/x8m1euew4du21.jpg',
    price: 4450000,
    departure_date: '2021-10-10',
    departure_location: 'Hồ Chí Minh, Việt Nam',
    note: 'Không được hủy',
    schedule: 'Hà Nội',
    status: true,
  },
];

const ItemTourFavorite = ({item}: {item: Tour}) => {
  return (
    <View
      style={{
        width: DimensionsStyle.width * 0.7,
        height: DimensionsStyle.width * 0.35,
        flexDirection: 'row',
        marginEnd: 15,
        backgroundColor: Colors.SOFT_BLUE,
        borderRadius: 20,
        overflow: 'hidden',
      }}>
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
    </View>
  );
};

// Địa điểm nổi bật
interface Estates {
  id: number;
  provinceId: string;
  description: string;
  name: string;
  image: string;
  status: boolean;
}

const DATAESTATES: Estates[] = [
  {
    id: 1,
    provinceId: 'Hà Nội',
    description: 'Điểm đến: Hồ Hoàn Kiếm',
    name: 'Hồ Hoàn Kiếm',
    image: 'https://i.redd.it/x8m1euew4du21.jpg',
    status: true,
  },
  {
    id: 2,
    provinceId: 'Hà Nội',
    description: 'Điểm đến: Hồ Hoàn Kiếm',
    name: 'Hồ Hoàn Kiếm',
    image: 'https://i.redd.it/x8m1euew4du21.jpg',
    status: true,
  },
  {
    id: 3,
    provinceId: 'Hà Nội',
    description: 'Điểm đến: Hồ Hoàn Kiếm',
    name: 'Hồ Hoàn Kiếm',
    image: 'https://i.redd.it/x8m1euew4du21.jpg',
    status: true,
  },
];

const ItemEstates = ({item}: {item: Estates}) => {
  return (
    <View
      style={{
        width: DimensionsStyle.width * 0.7,
        height: DimensionsStyle.width * 0.35,
        flexDirection: 'row',
        marginEnd: 15,
        backgroundColor: Colors.SOFT_BLUE,
        borderRadius: 20,
        overflow: 'hidden',
      }}>
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
              fontSize: 12,
              fontFamily: fontFamily.Medium,
            }}>
            {item.provinceId}
          </Text>
        </View>
      </View>
    </View>
  );
};

//Tour nổi bật
export const DATATOUROUTSTANDING: Tour[] = [
  {
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
  },
  {
    id: 2,
    tourist_destinationId: 1,
    provide: 'Vietnam Travel',
    name: 'Tour Hồ Hoàn Kiếm',
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
  },
  {
    id: 3,
    tourist_destinationId: 1,
    provide: 'Vietnam Travel',
    name: 'Tour Tết 2024: Quy Nhơn – Phú Quốc',
    description: 'Điểm đến: Hồ Hoàn Kiếm',
    available_seats: 10,
    duration: 1,
    image: 'https://i.redd.it/x8m1euew4du21.jpg',
    price: 4450000,
    departure_date: '2021-10-10',
    departure_location: 'Hồ Chí Minh, Việt Nam',
    note: 'Không được hủy',
    schedule: 'Hà Nội',
    status: true,
  },
  {
    id: 4,
    tourist_destinationId: 1,
    provide: 'Vietnam Travel',
    name: 'Tour Tết 2024: Quy Nhơn – Phú Quốc',
    description: 'Điểm đến: Hồ Hoàn Kiếm',
    available_seats: 10,
    duration: 1,
    image: 'https://i.redd.it/x8m1euew4du21.jpg',
    price: 4450000,
    departure_date: '2021-10-10',
    departure_location: 'Hồ Chí Minh, Việt Nam',
    note: 'Không được hủy',
    schedule: 'Hà Nội',
    status: true,
  },
];

export const ItemTourOutstanding = ({item}: {item: Tour}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.SOFT_BLUE,
        width: DimensionsStyle.width * 0.44,
        height: DimensionsStyle.width * 0.7,
        overflow: 'hidden',
        borderRadius: 20,
        padding: 7,
        marginBottom: 10,
      }}>
      <View>
        <Image
          source={{uri: item.image}}
          style={{
            width: '100%',
            height: DimensionsStyle.width * 0.5,
            resizeMode: 'stretch',
            alignSelf: 'center',
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
            top: 10,
            right: 10,
          }}
        />
        <View
          style={{
            position: 'absolute',
            right: 10,
            bottom: 10,
            backgroundColor: `rgba(163, 204, 227, 0.85)`,
            padding: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: Colors.RED,
              fontFamily: fontFamily.Bold,
              fontSize: 12,
            }}>
            {item.price.toLocaleString('vi-VN')} VNĐ
          </Text>
        </View>
      </View>
      <View>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 16,
            fontFamily: fontFamily.Bold,
            lineHeight: 18,
            color: Colors.BLUE_TEXT_HOME,
            marginTop: 10,
          }}>
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 7,
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
      </View>
    </View>
  );
};

const _HomeFull: React.FC<PropsType> = props => {
  const {navigation} = props;
  const [isFavorite, setIsFavorite] = React.useState(true);
  const [isCheck, setIsCheck] = React.useState<
    'card' | 'home' | 'review' | 'homefavorite'
  >('home');

  const [hideElement, setHideElement] = useState(false);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y + 10;
    setHideElement(offsetY > 20);
  };

  useEffect(() => {
    isFavorite ? setIsCheck('homefavorite') : setIsCheck('home');
  }, [isFavorite]);

  const [text, setText] = React.useState('');

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const ITEM_WIDTH = DimensionsStyle.width * 0.7 + 15;

  const halfwayIndex = Math.ceil(DATATOUROUTSTANDING.length / 2);
  const column1Data = DATATOUROUTSTANDING.slice(0, halfwayIndex);
  const column2Data = DATATOUROUTSTANDING.slice(halfwayIndex);

  const handleToListTourBanner = () => {
    navigation.navigate('ListTourBanner');
  };

  const renderItemBanner = React.useMemo(
    () =>
      ({item}: {item: Banner}) => {
        return (
          <ItemBanner
            onPress={() => {
              console.log(item);
              handleToListTourBanner();
            }}
            item={item}
            key={item.id}
          />
        );
      },
    [],
  );

  const renderItemTourFavorite = React.useMemo(
    () =>
      ({item}: {item: Tour}) => {
        return <ItemTourFavorite item={item} key={item.id} />;
      },
    [],
  );

  const renderItemEstates = React.useMemo(
    () =>
      ({item}: {item: Estates}) => {
        return <ItemEstates item={item} key={item.id} />;
      },
    [],
  );

  const renderItemTourOutstanding = React.useMemo(
    () =>
      ({item}: {item: Tour}) => {
        return <ItemTourOutstanding item={item} key={item.id} />;
      },
    [],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // Tăng giá trị của currentIndex lên 1
      setCurrentIndex(prevIndex => (prevIndex + 1) % DATABANNER.length);
    }, 1500);

    // Xóa interval khi component bị unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Tự động cuộn đến vị trí mới khi currentIndex thay đổi
    scrollViewRef.current?.scrollTo({
      x: currentIndex * ITEM_WIDTH,
      animated: true,
    });
  }, [currentIndex]);

  const handleToListTourFavorite = () => {
    navigation.navigate('FavoriteEmpty');
  };

  const handleToFeaturedListHome = () => {
    navigation.navigate('FeaturedListHome');
  };

  const handleToFeaturedListDetail = () => {
    navigation.navigate('FeaturedListDetail');
  };

  return (
    <BackgroundApp source={BACKGROUND_HOME}>
      <HeaderHome2
        avatar={AVT_HOME}
        checkNotify={true}
        onPressAvatar={() => {
          console.log('avatar');
        }}
      />
      <SafeAreaView style={_styles.containerScrollView}>
        {hideElement ? null : (
          <View>
            <TextPlus
              textBolds={['Thuy Ân!']}
              text={'Xin chào, Thuy Ân! \nHãy bắt đầu khám phá'}
              boldStyle={{
                fontFamily: fontFamily.Bold,
                color: Colors.GREY_DARK_1,
                fontSize: 25,
                lineHeight: 40,
                letterSpacing: 0.75,
              }}
              textStyle={{
                color: Colors.GREY_DARK_1,
                fontSize: 25,
                lineHeight: 40,
                letterSpacing: 0.75,
                width: '100%',
              }}
              numberOfLines={2}
            />
            <Input
              imageIconLeft={FIND}
              imageIconRight={FIND}
              iconRightStyle={{display: 'none'}}
              label="Tìm kiếm địa điểm, tour du lịch"
              value={text}
              onChangeText={text => setText(text)}
              viewStyle={{
                marginTop: '5%',
                marginBottom: '3%',
                marginEnd: 20,
                marginStart: 0,
              }}
              textInputStyle={{width: '90%'}}
            />
          </View>
        )}

        <TopTab
          isCheck={isCheck}
          listTabContainer={{
            marginHorizontal: 0,
            borderTopEndRadius: 0,
            borderBottomRightRadius: 0,
            marginBottom: 20,
          }}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}>
          <View
            style={{
              flex: 1,
              overflow: 'hidden',
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              ref={scrollViewRef}
              pagingEnabled
              onMomentumScrollEnd={event => {
                const contentOffset = event.nativeEvent.contentOffset.x;
                const index = Math.round(contentOffset / ITEM_WIDTH);
                setCurrentIndex(index);
              }}>
              <View style={{flexDirection: 'row'}}>
                {DATABANNER.map((item, index) => renderItemBanner({item}))}
              </View>
            </ScrollView>
          </View>

          {isFavorite ? (
            <View>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    fontFamily: fontFamily.Bold,
                    color: Colors.BLUE_TEXT_HOME,
                    fontSize: 20,
                  }}>
                  Tour Yêu thích
                </Text>
                <Pressable onPress={handleToListTourFavorite}>
                  <Text
                    style={{
                      fontFamily: fontFamily.Medium,
                      color: Colors.BLUE_TEXT_HOME,
                      marginEnd: 20,
                    }}>
                    xem tất cả
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  flex: 1,
                  overflow: 'hidden',
                  marginVertical: 20,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{flexDirection: 'row'}}>
                    {DATATOUR.map((item, index) =>
                      renderItemTourFavorite({item}),
                    )}
                  </View>
                </ScrollView>
              </View>
            </View>
          ) : null}

          <View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: fontFamily.Bold,
                  color: Colors.BLUE_TEXT_HOME,
                  fontSize: 20,
                }}>
                Địa điểm nổi bật
              </Text>
              <Pressable onPress={handleToFeaturedListDetail}>
                <Text
                  style={{
                    fontFamily: fontFamily.Medium,
                    color: Colors.BLUE_TEXT_HOME,
                    marginEnd: 20,
                  }}>
                  xem tất cả
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flex: 1,
                overflow: 'hidden',
                marginVertical: 20,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
              }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection: 'row'}}>
                  {DATAESTATES.map((item, index) => renderItemEstates({item}))}
                </View>
              </ScrollView>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontFamily: fontFamily.Bold,
                color: Colors.BLUE_TEXT_HOME,
                fontSize: 20,
              }}>
              Tour nổi bật
            </Text>
            <Pressable onPress={handleToFeaturedListHome}>
              <Text
                style={{
                  fontFamily: fontFamily.Medium,
                  color: Colors.BLUE_TEXT_HOME,
                  marginEnd: 20,
                }}>
                xem tất cả
              </Text>
            </Pressable>
          </View>

          <View
            style={{
              marginEnd: 20,
            }}>
            {
              <View style={_styles.containerFlatlist}>
                <View>
                  {column1Data.map((item, index) =>
                    renderItemTourOutstanding({item: item}),
                  )}
                </View>
                <View>
                  {column2Data.map((item, index) =>
                    renderItemTourOutstanding({item: item}),
                  )}
                </View>
              </View>
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </BackgroundApp>
  );
};

export const HomeFull = React.memo(_HomeFull);

const _styles = StyleSheet.create({
  containerScrollView: {
    flex: 1,
    flexDirection: 'column',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
    marginStart: 20,
    paddingTop: -25,
  },

  containerFlatlist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  item: {
    margin: Dimensions.get('screen').width * 0.02,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('screen').height * 0.3,
    borderRadius: 25,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('screen').height * 0.22,
    borderRadius: 25,
    margin: Dimensions.get('screen').width * 0.01,
    flexShrink: 0,
    opacity: 0.5,
    marginTop: -Dimensions.get('screen').height * 0.08,
    marginLeft: Dimensions.get('screen').width * 0.05,
    backgroundColor: Colors.BLACK,
    resizeMode: 'stretch',
  },
  text: {
    color: Colors.WHITE,
    fontFamily: fontFamily.Bold,
    fontSize: 18,
    letterSpacing: 0.54,
    marginTop: -Dimensions.get('screen').height * 0.18,
    marginLeft: Dimensions.get('screen').width * 0.1,
    width: 100,
  },
  textmini: {
    color: Colors.WHITE,
    fontFamily: fontFamily.Medium,
    fontSize: 12,
    marginTop: Dimensions.get('screen').height * 0.01,
    marginLeft: Dimensions.get('screen').width * 0.1,
  },
  gr: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -Dimensions.get('screen').height * 0.11,
    marginLeft: -Dimensions.get('screen').width * 0.333,
  },
  imageview: {
    marginTop: Dimensions.get('screen').height * 0.105,
    marginLeft: -Dimensions.get('screen').width * 0.3,
    resizeMode: 'stretch',
  },
  imagevector: {
    marginTop: Dimensions.get('screen').height * 0.102,
    marginLeft: Dimensions.get('screen').width * -0.8,
    resizeMode: 'stretch',
  },
  boxEstates: {},
  boxCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -Dimensions.get('screen').height * 0.05,
    marginVertical: -Dimensions.get('screen').height * 0.02,
  },
  boxCard1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -Dimensions.get('screen').height * 0.08,
    marginVertical: -Dimensions.get('screen').height * 0.02,
    marginBottom: Dimensions.get('screen').height * 0.04,
  },
  title: {
    fontSize: 18,
    color: Colors.GREY_DARK,
    letterSpacing: 0.54,
    fontFamily: fontFamily.Bold,
    marginLeft: Dimensions.get('screen').width * 0.07,
  },
  seeAll: {
    fontSize: 10,
    color: Colors.GREY_DARK,
    fontFamily: fontFamily.Medium,
    letterSpacing: 0.3,
    marginRight: Dimensions.get('screen').width * 0.07,
  },
  btnSeeAll: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemEstates: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 10,
    margin: Dimensions.get('screen').width * 0.02,
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('screen').height * 0.2,
    borderRadius: 25,
    backgroundColor: Colors.GREY_SOFT,
    marginTop: Dimensions.get('screen').height * 0.05,
    marginLeft: Dimensions.get('screen').width * 0.05,
    marginBottom: Dimensions.get('screen').height * 0.05,
  },
  cardEstates: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  gr1: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -Dimensions.get('screen').height * 0.08,
    marginLeft: Dimensions.get('screen').width * 0.37,
  },
  imageEstates: {
    width: Dimensions.get('screen').width * 0.43,
    height: Dimensions.get('screen').height * 0.19,
    marginTop: -Dimensions.get('screen').height * 0.03,
    marginLeft: -Dimensions.get('screen').width * 0.35,
    borderRadius: 25,
    flexShrink: 0,
    resizeMode: 'stretch',
  },
  iconheart: {
    marginTop: -Dimensions.get('screen').height * 0.16,
    marginLeft: -Dimensions.get('screen').width * 0.5,
    width: 40,
    height: 40,
    resizeMode: 'stretch',
  },
  boxname: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    borderColor: Colors.WHITE,
    backgroundColor: Colors.BLUE_2,
    width: DimensionsStyle.width * 0.22,
    height: DimensionsStyle.width * 0.11,
    marginTop: Dimensions.get('screen').height * 0.09,
    marginLeft: -Dimensions.get('screen').width * 0.09,
  },
  name: {
    marginTop: -Dimensions.get('screen').height * 0.023,
    marginLeft: Dimensions.get('screen').width * 0.02,
  },
  grEstates: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -Dimensions.get('window').height * 0.22,
    marginLeft: Dimensions.get('window').height * 0.22,
  },

  groupreview: {
    marginTop: Dimensions.get('window').height * 0.06,
    marginLeft: -Dimensions.get('window').height * 0.05,
    width: '30%',
    flexDirection: 'row',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grouplocation: {
    marginTop: Dimensions.get('window').height * 0.12,
    marginLeft: -Dimensions.get('window').height * 0.1,
    width: '80%',
    flexDirection: 'row',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupmoney: {
    marginTop: Dimensions.get('window').height * 0.25,
    marginLeft: -Dimensions.get('window').height * 0.05,
    width: '30%',
    flexDirection: 'row',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEstates: {
    width: 150,
    color: Colors.GREY_DARK,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.36,
    fontFamily: fontFamily.Bold,
  },
  textreview: {
    color: Colors.GREY_DARK,
    fontSize: 10,
    fontFamily: fontFamily.Bold,
    marginLeft: Dimensions.get('window').height * 0.01,
  },
  iconreview: {
    marginLeft: -Dimensions.get('window').height * 0.26,
    resizeMode: 'stretch',
  },
  textlocation: {
    color: Colors.GREY_DARK,
    fontSize: 10,
    fontFamily: fontFamily.Medium,
    marginLeft: Dimensions.get('window').height * 0.01,
  },
  iconlocation: {
    width: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').height * 0.02,
    marginLeft: -Dimensions.get('window').height * 0.2,
    resizeMode: 'stretch',
  },
  money: {
    color: Colors.GREY_DARK,
    fontSize: 18,
    letterSpacing: 0.48,
    fontFamily: fontFamily.Bold,
    marginLeft: -Dimensions.get('window').height * 0.34,
  },
  date: {
    color: Colors.GREY_DARK,
    fontSize: 8,
    letterSpacing: 0.24,
    fontFamily: fontFamily.Medium,
  },

  itemNearby: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 2,
    margin: Dimensions.get('screen').width * 0.05,
    width: Dimensions.get('screen').width * 0.45,
    height: Dimensions.get('screen').height * 0.35,
    borderRadius: 25,
    backgroundColor: Colors.GREY_SOFT,
    marginBottom: Dimensions.get('screen').height * 0.02,
    marginLeft: Dimensions.get('screen').width * 0.03,
  },
  cardNearby: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  grNearby1: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -Dimensions.get('screen').height * 0.08,
    marginLeft: -Dimensions.get('screen').width * 0.35,
  },
  imageNearby: {
    width: Dimensions.get('screen').width * 0.43,
    height: Dimensions.get('screen').height * 0.22,
    marginTop: -Dimensions.get('screen').height * 0.04,
    marginLeft: Dimensions.get('screen').width * 0.325,
    borderRadius: 25,
    flexShrink: 0,
    resizeMode: 'stretch',
  },
  iconheartNearby: {
    marginTop: -Dimensions.get('screen').height * 0.2,
    marginLeft: -Dimensions.get('screen').width * 0.12,
    width: 40,
    height: 40,
    resizeMode: 'stretch',
  },
  boxnameNearby: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    borderColor: Colors.WHITE,
    backgroundColor: Colors.BLUE_2,
    width: DimensionsStyle.width * 0.22,
    height: DimensionsStyle.width * 0.11,
    marginTop: Dimensions.get('screen').height * 0.09,
    marginLeft: -Dimensions.get('screen').width * 0.22,
  },
  nameNearby: {
    marginTop: -Dimensions.get('screen').height * 0.023,
    marginLeft: Dimensions.get('screen').width * 0.02,
  },
  grNearby: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -Dimensions.get('window').height * 0.05,
    marginLeft: Dimensions.get('window').height * 0.08,
  },
  boxgr: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  groupreviewNearby: {
    marginTop: -Dimensions.get('window').height * 0.02,
    marginLeft: -Dimensions.get('window').height * 0.07,
    width: '100%',
    flexDirection: 'row',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grouplocationNearby: {
    marginTop: -Dimensions.get('window').height * 0.02,
    marginLeft: -Dimensions.get('window').height * 0.05,
    width: '100%',
    flexDirection: 'row',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupmoneyNearby: {
    marginTop: -Dimensions.get('window').height * 0.08,
    marginLeft: Dimensions.get('window').height * 0.01,
    width: '80%',
    flexDirection: 'row',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNearby: {
    width: 150,
    color: Colors.GREY_DARK,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.36,
    fontFamily: fontFamily.Bold,
    marginTop: -Dimensions.get('screen').height * 0.023,
  },
  textreviewNearby: {
    color: Colors.GREY_DARK,
    fontSize: 10,
    fontFamily: fontFamily.Bold,
  },
  iconreviewNearby: {
    marginLeft: -Dimensions.get('window').height * 0.26,
    resizeMode: 'stretch',
  },
  textlocationNearby: {
    color: Colors.GREY_DARK,
    fontSize: 10,
    fontFamily: fontFamily.Medium,
    width: 100,
  },
  iconlocationNearby: {
    width: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').height * 0.02,
    marginLeft: -Dimensions.get('window').height * 0.2,
    resizeMode: 'stretch',
  },
  moneyNearby: {
    fontSize: 18,
    letterSpacing: 0.48,
    fontFamily: fontFamily.Bold,
  },
  dateNearby: {
    fontSize: 8,
    letterSpacing: 0.24,
    fontFamily: fontFamily.Medium,
  },
});
