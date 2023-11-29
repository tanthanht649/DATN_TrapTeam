import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BackgroundApp,
  Header,
  Input,
  TextPlus,
  ViewSwitcher,
} from '@components';
import {
  ALERT_DANGER,
  BACKGROUND_WHITE,
  CLOSE_ITEM,
  HEART,
  ICON_BACK,
  ICON_FILTER,
  LOCATION,
  LOGO_APP,
  fontFamily,
} from '@assets';
import {Colors, DimensionsStyle} from '@resources';
import {Tour} from '../home';
import {ItemTourOutstanding} from '../home';
import {DATATOUROUTSTANDING, DATATOUR} from '../home';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SearchStackParamList} from '@navigation';

type PropsType = NativeStackScreenProps<SearchStackParamList, 'SearchResult'>;

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
  const [textSearch, setTextSearch] = useState('');
  const [isFound, setIsFound] = useState(true);
  const [listViewType, setListViewType] = useState<'list' | 'grid'>('grid');

  const [isLayout, setIsLayout] = useState(false);
  const [column, setColumn] = useState(2);

  const DATAFIND: string[] = ['Phổ biến', 'Hà Nội', '200.000 - 500.000'];

  //   const DATAFIND: string[] = [];

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

  const ItemTourFavorite = ({item}: {item: Tour}) => {
    return (
      <View
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
      </View>
    );
  };

  const renderItemTourOutstanding = React.useMemo(
    () =>
      ({item, index}: {item: Tour; index: number}) => {
        return <ItemTourOutstanding item={item} key={item.id} index={index} />;
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

  const eventRight = () => {};
  const eventLeft = () => {};
  const eventBack = () => {
    navigation.goBack();
  };

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        <Header
          iconLeft={ICON_BACK}
          iconRight={ICON_FILTER}
          eventLeft={eventBack}
          eventRight={eventRight}
          textCenter="Kết quả tìm kiếm"
        />

        {isFound ? (
          <View
            style={{
              flex: 1,
              width: '100%',
            }}>
            <View>
              <ViewSwitcher
                quantityEstates={22}
                onTabChange={setListViewType}
              />
            </View>

            {DATAFIND.length > 0 ? (
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
            <View style={_styles.containerListFeatured}>
              <FlatList
                data={DATATOUROUTSTANDING}
                renderItem={
                  isLayout ? renderItemTourOutstanding : renderItemTourFavorite
                }
                keyExtractor={item => item.id.toString()}
                numColumns={column}
                key={column}
                style={{
                  height: DimensionsStyle.height * 1,
                  marginBottom: 40,
                }}
                showsVerticalScrollIndicator={false}
              />
            </View>
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
        )}
      </SafeAreaView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
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
