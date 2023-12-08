import {Animated, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackgroundApp, Header, Loading, ViewSwitcher} from '@components';
import {
  BACKGROUND_WHITE,
  D_B,
  HEART,
  HEART_INACTIVE_2,
  ICON_BACK,
  ICON_DELETE,
  LOCATION,
  SETTING,
  SETTING_2,
  fontFamily,
} from '@assets';
import {Colors, DimensionsStyle} from '@resources';
import {ItemTourOutstanding} from '../home';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '@navigation';
import {Tour, TourAndFavorite} from '@domain';
import {useSelector} from 'react-redux';
import {RootState, getTourByProvince, useAppDispatch} from '@shared-state';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'ListTourBanner'>;

const _ListTourBanner: React.FC<PropsType> = props => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const province_id = props.route.params?.province_id;
  const image = props.route.params?.image;
  const title = props.route.params?.title;
  const [hideElement, setHideElement] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [listViewType, setListViewType] = useState<'list' | 'grid'>('grid');
  const [isLayout, setIsLayout] = useState(false);
  const [column, setColumn] = useState(2);
  useEffect(() => {
    listViewType === 'grid' ? setIsLayout(true) : setIsLayout(false);
    listViewType === 'grid' ? setColumn(2) : setColumn(1);
  }, [listViewType]);

  const dataTourByProvince = useSelector(
    (state: RootState) => state.tour.dataToursByProvince,
  );

  useEffect(() => {
    dispatch(getTourByProvince(province_id));
  }, [province_id]);

  const dataFavoriteNoId = useSelector(
    (state: RootState) => state.favorite.dataFavoriteNoId,
  );

  const loadingTour = useSelector((state: RootState) => state.tour.loadingTour);

  const [dataTourAndFavorite, setDataTourAndFavorite] = useState<
    TourAndFavorite[]
  >([]);

  useEffect(() => {
    const tourAndFavorite = dataTourByProvince.map((item: Tour) => {
      const isFavorite = dataFavoriteNoId.some(
        (check: Tour) => check._id === item._id,
      );
      return {...item, isFavorite: isFavorite};
    });

    setDataTourAndFavorite(tourAndFavorite);
  }, [dataFavoriteNoId, dataTourByProvince]);

  const ItemTourFavorite = ({
    item,
    onPress,
  }: {
    item: TourAndFavorite;
    onPress: () => void;
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

          <Image
            source={item.isFavorite ? HEART : HEART_INACTIVE_2}
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
      ({item, index}: {item: TourAndFavorite; index: number}) => {
        return (
          <ItemTourOutstanding
            item={item}
            key={item._id}
            index={index}
            onPress={() => navigation.navigate('DetailTour')}
          />
        );
      },
    [],
  );

  const renderItemTourFavorite = React.useMemo(
    () =>
      ({item}: {item: TourAndFavorite}) => {
        return (
          <ItemTourFavorite
            item={item}
            key={item._id}
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
          eventLeft={() => navigation.goBack()}
          eventRight={() => console.log('EventRight')}
          isCheck={false}
        />
        {hideElement ? null : (
          <View style={{marginHorizontal: 20, overflow: 'hidden'}}>
            <Image
              source={{uri: image}}
              style={{
                width: '100%',
                height: DimensionsStyle.width * 0.55,
                borderRadius: 25,
                marginTop: 10,
                marginBottom: 10,
              }}
            />
            <Text
              numberOfLines={1}
              style={{
                fontSize: 20,
                fontFamily: fontFamily.Bold,
                color: Colors.GREY_DARK_1,
                letterSpacing: 0.5,
                marginStart: 5,
              }}>
              {title}
            </Text>
          </View>
        )}
        <View>
          <ViewSwitcher quantityEstates={22} onTabChange={setListViewType} />
        </View>

        {loadingTour ? (
          <Loading height={300} />
        ) : (
          <View style={_styles.containerListFeatured}>
            <Animated.FlatList
              data={dataTourAndFavorite}
              renderItem={
                isLayout ? renderItemTourOutstanding : renderItemTourFavorite
              }
              keyExtractor={item => item._id.toString()}
              numColumns={column}
              key={column}
              style={{height: DimensionsStyle.height * 0.6}}
              showsVerticalScrollIndicator={false}
              onScroll={handleScroll}
            />
          </View>
        )}
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
});

export const ListTourBanner = React.memo(_ListTourBanner);
