import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  ListRenderItemInfo,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  HomeStackParamList,
  ProfileStackParamList,
  WelcomeTeamStackParamList,
} from '@navigation';
import {Header, TextPlus, ViewSwitcher} from '@components';
import {
  ALERT_SUCCESS_PLUS,
  HEART_INACTIVE,
  ICON_BACK,
  ICON_DELETE,
  LOCATION,
  SHAPE_1,
  SHAPE_2,
  SHAPE_3,
  TRASH_2,
  fontFamily,
} from '@assets';
import {Colors} from '@resources';
import StaggeredList from '@mindinventory/react-native-stagger-view';
import {SwipeListView} from 'react-native-swipe-list-view';
import { useSelector } from 'react-redux';
import { RootState, deleteFavorite, getDataFavorite, useAppDispatch } from '@shared-state';
import { Favorite } from '@domain';

type PropsType = NativeStackScreenProps<
  ProfileStackParamList,
  'FavoriteEmpty'
> &
  NativeStackScreenProps<HomeStackParamList, 'FavoriteEmpty'>;

export interface Item {
  id: number;
  image: ImageSourcePropType;
  price: number;
  name: string;
  location: string;
}

const _FavoriteEmpty: React.FC<PropsType> = props => {
  const {navigation} = props;
  const dataFavorite = useSelector((state: RootState) => state.favorite.dataFavorites);
  const dispatch = useAppDispatch();
  const dataUser = useSelector((state: RootState) => state.user.dataUsers);
  const [listViewType, setListViewType] = useState<'grid' | 'list'>('grid');
  const onDelete = (user_id : string | undefined, tour_id: string | undefined) => {
    const data = {
      user_id: user_id,
      tour_id: tour_id,
    }
    dispatch(deleteFavorite(data)).then(()  => {
      dispatch(getDataFavorite(user_id))
    })
  };
  const renderChildren = ({item}: ListRenderItemInfo<Favorite>) => {
    return (
      <Pressable
        style={_styles.getChildrenStyle}
        key={item.tour_id._id}
        onPress={() => {
          navigation.navigate('DetailTour', {tour_id: item.tour_id._id, isFavorite: true});
        }}>
        <Image
          onError={() => {}}
          style={_styles.img}
          source={{uri:item.tour_id?.image}}
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={() => onDelete(item.user_id, item.tour_id?._id)}
          style={_styles.styleHeartView}>
          <Image source={HEART_INACTIVE} style={_styles.styleHeart} />
        </TouchableOpacity>
        <View style={_styles.stylePriceView}>
          <Text style={_styles.stylePrice}>
            {item.tour_id?.price.toLocaleString('vi-VN')} VNĐ
          </Text>
        </View>
        <View style={_styles.styleView}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={_styles.styleName}>
            {item.tour_id?.name}
          </Text>
          <View style={_styles.styleLine}>
            <View style={_styles.styleStarView}>
              <Image source={LOCATION} style={_styles.styleStar} />
              <Text numberOfLines={1} style={_styles.styleLocationText}>
                {item.tour_id?.departure_location}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  const renderItem = ({item}: {item: Favorite}) => {
    return (
      <Pressable
        style={_styles.itemContainer}
        onPress={() => {
          navigation.navigate('DetailTour', {tour_id: item.tour_id._id, isFavorite: true});
        }}>
        <Image
          source={{uri: item.tour_id?.image}}
          style={_styles.itemImage}
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={() => onDelete(item.user_id, item.tour_id?._id)}
          style={_styles.heartButton}>
          <Image source={HEART_INACTIVE} style={_styles.styleHeart} />
        </TouchableOpacity>
        <View style={_styles.viewContainer}>
          <View style={_styles.detailsContainer}>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={_styles.styleName}>
              {item.tour_id?.name}
            </Text>
            <View style={_styles.locationContainer}>
              <Image source={LOCATION} style={_styles.styleStar} />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={[_styles.styleLocationText, {paddingRight: 35}]}>
                {item.tour_id?.departure_location}
              </Text>
            </View>
          </View>
          <View style={_styles.priceContainer}>
            <Text style={_styles.price}>
              {item.tour_id?.price.toLocaleString('vi-VN')} VNĐ
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };
  const renderHiddenItem = ({item}: ListRenderItemInfo<Favorite>) => (
    <View style={_styles.hiddenItem}>
      <TouchableOpacity
        style={_styles.deleteButton}
        onPress={onDelete.bind(this, item.user_id, item.tour_id?._id)}
        >
        <Image source={TRASH_2} style={_styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
  const renderNull = () => (
    <View style={_styles.nextView}>
      <TouchableOpacity>
        <Image source={ALERT_SUCCESS_PLUS} style={{height: 142, width: 142}} />
      </TouchableOpacity>
      <TextPlus
        text={'Trang yêu thích của bạn\ntrống'}
        textBolds={['trống']}
        numberOfLines={2}
        viewStyle={{flex: 0.18, justifyContent: 'center'}}
        textStyle={StyleSheet.flatten([_styles.text])}
        boldStyle={StyleSheet.flatten([_styles.textBold])}
      />
      <Text style={_styles.textMini}>
      Nhấp vào nút thêm ở trên để bắt đầu khám phá{'\n'}và chọn tour bạn yêu thích
      {' '}
      </Text>
    </View>
  );
  const renderListView = () => (
    <SwipeListView
      data={dataFavorite}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      keyExtractor={item => item.tour_id?._id}
      rightOpenValue={-90} // Điều chỉnh độ rộng của mục ẩn khi cần thiết
      showsVerticalScrollIndicator={false}
    />
  );

  const renderStaggeredList = () => (
    <View style={_styles.nextView1}>
      <StaggeredList<Favorite>
        data={dataFavorite}
        animationType="FADE_IN_FAST"
        contentContainerStyle={_styles.contentContainer}
        showsVerticalScrollIndicator={false}
        renderItem={renderChildren as any}
        LoadingView={
          <View style={_styles.activityIndicatorWrapper}>
            <ActivityIndicator color="black" size="large" />
          </View>
        }
      />
    </View>
  );
  const renderContent = () => {
    if (dataFavorite.length === 0) {
      return renderNull();
    }

    if (listViewType === 'grid') {
      return renderStaggeredList();
    }

    if (listViewType === 'list') {
      return renderListView();
    }

    return null;
  };
  return (
    <SafeAreaView style={_styles.container}>
      <Header
        iconLeft={ICON_BACK}
        eventLeft={() => navigation.goBack()}
        textCenter={'Yêu thích'}
        iconRight={ICON_DELETE}
        eventRight={() => console.log('EventRight')}
        isCheck={false}
        styleIconRight={{display: 'none'}}
      />
      <ViewSwitcher
        quantityEstates={dataFavorite.length}
        onTabChange={setListViewType}
      />
      {renderContent()}
    </SafeAreaView>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.WHITE,
  },
  nextView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 39,
  },
  text: {
    fontSize: 25,
    color: Colors.GREY_DARK,
    textAlign: 'center',
    lineHeight: 40,
    letterSpacing: 0.75,
    fontFamily: fontFamily.Semibold,
  },
  textBold: {
    fontSize: 25,
    color: Colors.BLUE_DARK,
    alignItems: 'center',
    lineHeight: 40,
    marginTop: 14,
    fontFamily: fontFamily.Black,
  },
  textMini: {
    flex: 0.1,
    fontSize: 14,
    color: Colors.GREY_MEDIUM_1,
    textAlign: 'center',
    lineHeight: 20,
    letterSpacing: 0.36,
    marginTop: 20,
    fontFamily: fontFamily.Regular,
  },

  getChildrenStyle: {
    backgroundColor: Colors.GREY_SOFT,
    margin: 7,
    borderRadius: 25,
    paddingHorizontal: 8,
    paddingBottom: 16,
    paddingTop: 8,
  },
  nextView1: {
    flex: 1,
    marginBottom: 10,
    width: '100%',
  },
  contentContainer: {
    paddingHorizontal: 12,
    paddingTop: 16,
  },
  activityIndicatorWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleHeartView: {
    position: 'absolute',
    top: 10,
    right: 5,
  },
  styleHeart: {
    width: 50,
    height: 50,
  },
  img: {
    width: 'auto',
    height: 180,
    borderRadius: 20,
  },
  stylePriceView: {
    position: 'absolute',
    top: 153,
    right: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
    didplay: 'flex',
    backgroundColor: Colors.GREEN_SOFT,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  stylePrice: {
    fontSize: 12,
    color: Colors.RED,
    fontFamily: fontFamily.Black,
    letterSpacing: 0.36,
  },
  styleMonth: {
    fontSize: 10,
    lineHeight: 16,
    color: Colors.GREY_SOFT,
    fontFamily: fontFamily.Semibold,
    letterSpacing: 0.18,
  },
  styleView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
    marginHorizontal: 8,
  },
  styleName: {
    fontSize: 16,
    color: Colors.GREY_DARK,
    fontFamily: fontFamily.Bold,
    lineHeight: 21,
    letterSpacing: 0.36,
  },
  styleLine: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    gap: 6,
  },
  styleStarView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 2,
  },
  styleStar: {
    width: 15,
    height: 15,
  },
  styleStarText: {
    fontSize: 11,
    color: Colors.GREY_MEDIUM,
    fontFamily: fontFamily.Black,
    lineHeight: 15,
  },
  styleLocationText: {
    fontSize: 11,
    color: Colors.GREY_MEDIUM,
    fontFamily: fontFamily.Semibold,
    lineHeight: 15,
  },

  itemContainer: {
    height: 160,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: Colors.GREY_SOFT,
    padding: 8,
    borderRadius: 25,
  },
  itemImage: {
    width: 180,
    height: 'auto',
    borderRadius: 18,
    marginRight: 12,
  },
  heartButton: {
    position: 'absolute',
    top: 10,
    left: 5,
  },
  typeContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: Colors.BLUE_SOFT,
    borderRadius: 8,
    padding: 7,
  },
  viewContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 12,
    paddingTop: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    display: 'flex',
    gap: 5,
    marginTop: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 16,
    paddingTop: 45,
    paddingBottom: 8,
  },
  price: {
    fontSize: 14,
    color: Colors.RED,
    fontFamily: fontFamily.Bold,
    letterSpacing: 0.48,
  },
  hiddenItem: {
    flex: 1,
    width: 120,
    height: 'auto',
    marginHorizontal: 20,
    marginBottom: 11,
    padding: 8,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: Colors.BLUE,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    borderRadius: 25,
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  deleteIcon: {
    position: 'absolute',
    right: 25,
    width: 24,
    height: 24,
  },
});
export const FavoriteEmpty = React.memo(_FavoriteEmpty);
