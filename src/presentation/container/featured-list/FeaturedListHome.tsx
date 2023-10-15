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
} from 'react-native';
import React, {useState, useMemo, useEffect, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Input, ViewSwitcher} from '@components';
import {
  EMAIL_LOGIN,
  FIND,
  HEART_INACTIVE,
  ICON_BACK,
  ICON_LOGOUT,
  IMAGE_FEATURED_LIST,
  IMAGE_FEATURED_LIST_2,
  IMAGE_FEATURED_LIST_3,
  SETTING,
  fontFamily,
} from '@assets';
import {Colors, DimensionsStyle} from '@resources';

interface Estates {
  id: string;
  name: string;
  address: string;
  price: number;
  images: ImageSourcePropType[];
  description: string;
  isFavorite: boolean;
}

const DATA_ESTATES: Estates[] = [
  {
    id: '1',
    name: 'Sky Dandelions Apartment',
    address: 'Address 1',
    price: 250,
    images: [IMAGE_FEATURED_LIST, IMAGE_FEATURED_LIST_2, IMAGE_FEATURED_LIST_3],
    description: 'Description 1',
    isFavorite: false,
  },
  {
    id: '2',
    name: 'The laurels Villa',
    address: 'Address 2',
    price: 300,
    images: [IMAGE_FEATURED_LIST, IMAGE_FEATURED_LIST_2, IMAGE_FEATURED_LIST_3],
    description: 'Description 2',
    isFavorite: true,
  },
  {
    id: '3',
    name: 'The laurels Villa',
    address: 'Address 3',
    price: 400,
    images: [IMAGE_FEATURED_LIST, IMAGE_FEATURED_LIST_2, IMAGE_FEATURED_LIST_3],
    description: 'Description 3',
    isFavorite: false,
  },
  {
    id: '4',
    name: 'The laurels Villa',
    address: 'Address 2',
    price: 300,
    images: [IMAGE_FEATURED_LIST, IMAGE_FEATURED_LIST_2, IMAGE_FEATURED_LIST_3],
    description: 'Description 2',
    isFavorite: true,
  },
  {
    id: '5',
    name: 'The laurels Villa',
    address: 'Address 3',
    price: 400,
    images: [IMAGE_FEATURED_LIST, IMAGE_FEATURED_LIST_2, IMAGE_FEATURED_LIST_3],
    description: 'Description 3',
    isFavorite: false,
  },
  {
    id: '6',
    name: 'The laurels Villa',
    address: 'Address 3',
    price: 400,
    images: [IMAGE_FEATURED_LIST, IMAGE_FEATURED_LIST_2, IMAGE_FEATURED_LIST_3],
    description: 'Description 3',
    isFavorite: false,
  },
  {
    id: '7',
    name: 'The laurels Villa',
    address: 'Address 3',
    price: 400,
    images: [IMAGE_FEATURED_LIST, IMAGE_FEATURED_LIST_2, IMAGE_FEATURED_LIST_3],
    description: 'Description 3',
    isFavorite: false,
  },
];

type ItemProps = {
  item: Estates;
  onPress: () => void;
};

const ItemEstates = ({item, onPress}: ItemProps) => (
  <View
    style={{
      width: DimensionsStyle.width * 0.42,
      backgroundColor: Colors.GRAY,
      margin: 5,
      borderRadius: 25,
      padding: 8,
    }}>
    <Image
      style={{
        width: '100%',
        height: DimensionsStyle.width * 0.4,
        resizeMode: 'stretch',
        borderRadius: 25,
      }}
      source={item.images[0]}
    />
    <Text>{item.name}</Text>
  </View>
);

const {height: screenHeight} = Dimensions.get('window');

const _FeaturedListHome = () => {
  const [searchName, setSearchName] = useState('');
  const [listViewType, setListViewType] = useState<'list' | 'grid'>('list');

  const [hideElement, setHideElement] = useState(false);

  const renderItem = useMemo(
    () =>
      ({item}: {item: Estates}) => {
        return (
          <ItemEstates
            item={item}
            onPress={() => {
              console.log(item.name);
            }}
            key={item.id}
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
    <SafeAreaView style={_styles.container}>
      <Header
        iconLeft={ICON_BACK}
        iconRight={SETTING}
        styleIconRight={{width: 20, height: 20}}
        iconHeart={HEART_INACTIVE}
        eventLeft={() => console.log('IconLeft')}
        eventRight={() => console.log('EventRight')}
        isCheck={true}
      />
      {hideElement ? null : (
        <View style={[_styles.containerImageTop]}>
          <View style={_styles.containerImageTopLeft}>
            <Image style={_styles.image} source={IMAGE_FEATURED_LIST} />
          </View>
          <View style={_styles.containerImageTopCenter}></View>
          <View style={_styles.containerImageTopRight}>
            <View style={_styles.containerImageTopRightTop}>
              <Image style={_styles.image} source={IMAGE_FEATURED_LIST_2} />
            </View>
            <View style={_styles.containerImageTopRightBottom}>
              <Image style={_styles.image} source={IMAGE_FEATURED_LIST_3} />
            </View>
          </View>
        </View>
      )}

      <View style={_styles.containetTextCenter}>
        <Text style={_styles.textCenterTop}>Featured Estates</Text>
        <Text style={_styles.textCenterBottom}>
          Our recommended real estates exclusive for you.
        </Text>
      </View>
      <View>
        <Input
          imageIconLeft={FIND}
          imageIconRight={EMAIL_LOGIN}
          iconLeftStyle={{height: 25, width: 25}}
          label="Search in villa’s category"
          iconRightStyle={{opacity: 0}}
          value={searchName}
          onChangeText={text => setSearchName(text)}
          viewStyle={{
            borderRadius: 20,
            backgroundColor: Colors.GRAY,
          }}
        />
      </View>
      <View>
        <ViewSwitcher quantityEstates={22} onTabChange={setListViewType} />
      </View>

      <View style={_styles.containerListFeatured}>
        <Animated.FlatList
          data={DATA_ESTATES}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          style={{height: DimensionsStyle.height * 0.6}}
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
        />
      </View>
    </SafeAreaView>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingBottom: DimensionsStyle.width * 0.69,
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
});

export const FeaturedListHome = React.memo(_FeaturedListHome);
