import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaInsetsContext,
  SafeAreaView,
} from 'react-native-safe-area-context';
import {BackgroundApp, Header, Input, ModalFilter} from '@components';
import {
  BACKGROUND_WHITE,
  HEART,
  HEART_INACTIVE_2,
  ICON_BACK,
  ICON_FILTER,
  LOCATION,
  LOGO_APP,
  fontFamily,
} from '@assets';
import {Colors, DimensionsStyle} from '@resources';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SearchStackParamList} from '@navigation';
import {Tour, TourAndFavorite} from '@domain';
import {useSelector} from 'react-redux';
import {
  RootState,
  findTourByNames,
  findTourByScreenSearch,
  useAppDispatch,
} from '@shared-state';

type PropsType = NativeStackScreenProps<SearchStackParamList, 'Search'>;

const ItemTourFavorite = ({
  item,
  onPress,
}: {
  item: TourAndFavorite;
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
        marginTop: 20,
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

const _Search: React.FC<PropsType> = props => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const eventRight = () => {
    setModalVisible(true);
  };
  const eventLeft = () => {};
  const eventBack = () => {};
  const [textSearch, setTextSearch] = useState('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const handleModal = () => {
    setModalVisible(false);
    navigation.navigate('SearchResult');
  };

  const renderItemTourFavorite = React.useMemo(
    () =>
      ({item}: {item: TourAndFavorite}) => {
        return (
          <ItemTourFavorite
            item={item}
            key={item._id}
            onPress={() =>
              navigation.navigate('DetailTour', {
                tour_id: item._id,
                isFavorite: item.isFavorite,
              })
            }
          />
        );
      },
    [],
  );

  const dataSearchStore = useSelector(
    (state: RootState) => state.tour.dataSearch,
  );

  const dataFavoriteNoId = useSelector(
    (state: RootState) => state.favorite.dataFavoriteNoId,
  );

  const dataToursOutstanding = useSelector(
    (state: RootState) => state.tour.dataToursOutstanding,
  );

  const [dataSearch, setDataSearch] = useState<Tour[]>(dataToursOutstanding);

  const [dataTourAndFavorite, setDataTourAndFavorite] = useState<
    TourAndFavorite[]
  >([]);

  useEffect(() => {
    const tourAndFavorite = dataSearch.map((item: Tour) => {
      const isFavorite = dataFavoriteNoId.some(
        (check: Tour) => check._id === item._id,
      );
      return {...item, isFavorite: isFavorite};
    });

    setDataTourAndFavorite(tourAndFavorite);
  }, [dataFavoriteNoId, dataSearch]);

  let timeoutId: any = null;
  const handleSearch = (text: string) => {
    setTextSearch(text);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      dispatch(findTourByScreenSearch(text));
    }, 3000);
  };

  useEffect(() => {
    if (textSearch === '') {
      setDataSearch(dataToursOutstanding);
    } else {
      setDataSearch(dataSearchStore);
    }
  }, [dataSearchStore]);

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        <View style={_styles.header}>
          <Pressable onPress={eventBack}>
            <Image source={LOGO_APP} style={_styles.iconRight} />
          </Pressable>
          <View style={_styles.boxSearch}>
            <TextInput
              style={_styles.textInput}
              onChangeText={text => {
                handleSearch(text);
              }}
              placeholder="Tìm kiếm"
            />
            <Pressable onPress={eventRight}>
              <Image source={ICON_FILTER} style={_styles.iconRight} />
            </Pressable>
          </View>
        </View>
        <View style={_styles.title}>
          <Text style={_styles.textTitle}>Gợi ý</Text>
          <Pressable style={{display: 'none'}}>
            <Text style={_styles.textSeeAll}>Xem tất cả</Text>
          </Pressable>
        </View>

        <FlatList
          data={dataTourAndFavorite}
          renderItem={renderItemTourFavorite}
          keyExtractor={item => item._id.toString()}
          showsVerticalScrollIndicator={false}
        />

        <ModalFilter
          visible={modalVisible}
          onPress={handleModal}
          Cancel={() => {
            setModalVisible(false);
          }}
        />
      </SafeAreaView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: DimensionsStyle.width * 0.05,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconRight: {
    width: 40,
    height: 45,
    resizeMode: 'stretch',
    marginStart: 10,
  },
  inputSearch: {
    height: 50,
  },
  boxSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.GRAY_SEARCH,
    borderRadius: 50,
    paddingStart: 10,
  },
  textInput: {
    width: DimensionsStyle.width * 0.6,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: DimensionsStyle.height * 0.02,
  },
  textTitle: {
    fontFamily: fontFamily.Bold,
    fontSize: 18,
  },
  textSeeAll: {
    fontFamily: fontFamily.Light,
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});
export const Search = React.memo(_Search);
