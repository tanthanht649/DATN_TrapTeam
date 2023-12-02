import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Animated,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import React, {useState, useMemo, useEffect, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackgroundApp, Header, Input, ViewSwitcher} from '@components';
import {
  BACKGROUND_WHITE,
  EMAIL_LOGIN,
  FAVORITE,
  FIND,
  HEART,
  HEART_ACTIVE,
  HEART_INACTIVE,
  ICON_BACK,
  ICON_LOGOUT,
  IMAGE_FEATURED_LIST,
  IMAGE_FEATURED_LIST_2,
  IMAGE_FEATURED_LIST_3,
  IMG_FL_1,
  IMG_FL_2,
  IMG_FL_3,
  LOCATION,
  SETTING,
  START_SMALL,
  fontFamily,
} from '@assets';
import {Colors, DimensionsStyle} from '@resources';
import {Tour} from '../home';
import {ItemTourOutstanding} from '../home';
import {DATATOUROUTSTANDING, DATATOUR} from '../home';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList, SearchStackParamList} from '@navigation';

type PropsType = NativeStackScreenProps<
  HomeStackParamList,
  'FeaturedListHome'
> &
  NativeStackScreenProps<SearchStackParamList, 'FeaturedListHome'>;

const {height: screenHeight} = Dimensions.get('window');

const _FeaturedListHome: React.FC<PropsType> = props => {
  const {navigation} = props;
  const [searchName, setSearchName] = useState('');
  const [listViewType, setListViewType] = useState<'list' | 'grid'>('grid');

  const [isLayout, setIsLayout] = useState(false);
  const [column, setColumn] = useState(2);

  useEffect(() => {
    listViewType === 'grid' ? setIsLayout(true) : setIsLayout(false);
    listViewType === 'grid' ? setColumn(2) : setColumn(1);
  }, [listViewType]);

  const [hideElement, setHideElement] = useState(false);

  const ItemTourFavorite = ({
    item,
    onPress,
  }: {
    item: Tour;
    onPress: () => void;
  }) => {
    return (
      <Pressable
        onPress={onPress}
        style={{
          width: '100%',
          height: DimensionsStyle.width * 0.35,
          flexDirection: 'row',
          marginEnd: 15,
          backgroundColor: Colors.SOFT_BLUE,
          borderRadius: 20,
          overflow: 'hidden',
          marginBottom: 10,
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
      </Pressable>
    );
  };

  const renderItemTourOutstanding = React.useMemo(
    () =>
      ({item, index}: {item: Tour; index: number}) => {
        return (
          <ItemTourOutstanding
            item={item}
            key={item.id}
            index={index}
            onPress={() => navigation.navigate('DetailTour')}
          />
        );
      },
    [],
  );

  const renderItemTourFavorite = React.useMemo(
    () =>
      ({item}: {item: Tour}) => {
        return (
          <ItemTourFavorite
            item={item}
            key={item.id}
            onPress={() => navigation.navigate('DetailTour')}
          />
        );
      },
    [],
  );

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y + 10;
    setHideElement(offsetY > 20);
  };

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        <Header
          iconLeft={ICON_BACK}
          iconRight={SETTING}
          styleIconRight={{width: 20, height: 20, display: 'none'}}
          iconHeart={HEART_INACTIVE}
          eventLeft={() => navigation.goBack()}
          eventRight={() => console.log('EventRight')}
          isCheck={true}
        />
        {hideElement ? null : (
          <View style={[_styles.containerImageTop]}>
            <View style={_styles.containerImageTopLeft}>
              <Image style={_styles.image} source={IMG_FL_1} />
            </View>
            <View style={_styles.containerImageTopCenter}></View>
            <View style={_styles.containerImageTopRight}>
              <View style={_styles.containerImageTopRightTop}>
                <Image style={_styles.image} source={IMG_FL_2} />
              </View>
              <View style={_styles.containerImageTopRightBottom}>
                <Image style={_styles.image} source={IMG_FL_3} />
              </View>
            </View>
          </View>
        )}

        <View style={_styles.containetTextCenter}>
          <Text style={_styles.textCenterTop}>Tour nổi bật</Text>
          <Text style={_styles.textCenterBottom}>
            Các tour du lịch chúng tôi đề xuất riêng cho bạn
          </Text>
        </View>
        <View>
          <ViewSwitcher quantityEstates={10} onTabChange={setListViewType} />
        </View>

        <View style={_styles.containerListFeatured}>
          <Animated.FlatList
            data={DATATOUROUTSTANDING}
            renderItem={
              isLayout ? renderItemTourOutstanding : renderItemTourFavorite
            }
            keyExtractor={item => item.id.toString()}
            numColumns={column}
            key={column}
            style={{height: DimensionsStyle.height * 0.6}}
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
    backgroundColor: Colors.WHITE,
    paddingBottom: DimensionsStyle.width * 0.5,
  },

  containerImageTop: {
    height: DimensionsStyle.width * 0.6,
    marginTop: 20,
    marginStart: DimensionsStyle.width * 0.05,
    marginEnd: DimensionsStyle.width * 0.01,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  containerImageTopLeft: {
    width: '58%',
    height: DimensionsStyle.width * 0.5,
    borderRadius: 12,
    overflow: 'hidden',
  },

  containerImageTopCenter: {
    width: '3.5%',
  },
  containerImageTopRight: {
    width: '38%',
    height: '100%',
    flexDirection: 'column',

    alignItems: 'center',
  },

  containerImageTopRightTop: {
    width: '100%',
    height: '50%',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: DimensionsStyle.width * 0.02,
  },
  containerImageTopRightBottom: {
    width: '100%',
    height: '45%',
    borderRadius: 12,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },

  containetTextCenter: {
    width: '100%',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  textCenterTop: {
    fontSize: 25,
    color: Colors.BLACK,
    fontFamily: fontFamily.Bold,
  },
  textCenterBottom: {
    fontSize: 15,
    color: Colors.BLACK,
    fontFamily: fontFamily.Regular,
  },
  containerListFeatured: {
    marginHorizontal: 20,
    alignSelf: 'center',
  },

  containerStarLocation: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  imageStar: {
    width: 15,
    height: 15,
    resizeMode: 'stretch',
    marginEnd: 3,
  },

  containerItem: {
    width: DimensionsStyle.width * 0.42,
    backgroundColor: Colors.GRAY,
    margin: 5,
    borderRadius: 25,
    padding: 8,
  },

  imageEstates: {
    width: '100%',
    height: DimensionsStyle.width * 0.4,
    resizeMode: 'stretch',
    borderRadius: 25,
  },

  nameEstates: {
    fontFamily: fontFamily.Bold,
    fontSize: 15,
    color: Colors.BLACK,
    lineHeight: 21,
  },

  textStart: {
    fontFamily: fontFamily.Bold,
    fontSize: 11,
    color: Colors.BLACK,
  },

  imageHeart: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export const FeaturedListHome = React.memo(_FeaturedListHome);
