import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileStackParamList, WelcomeTeamStackParamList} from '@navigation';
import {BackgroundApp, Header} from '@components';
import {
  BACKGROUND_WHITE,
  CHAT,
  ICON_BACK,
  IMAGE_TEST,
  LOCATION,
  STAR_2,
  STAR_4,
  fontFamily,
} from '@assets';
import {Colors, DimensionsStyle} from '@resources';
type ItemRating = {
  id: string;
  image: ImageSourcePropType;
  check: boolean;
  title: string;
};

type RatingItemProps = {
  item: ItemRating;
  onPress: () => void;
};
const RatingItem = ({item, onPress}: RatingItemProps) => {
  const check = item.check;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        _styles.item,
        {backgroundColor: check ? Colors.BLUE_2 : Colors.GRAY_SEARCH},
      ]}>
      <Image style={_styles.image} source={item.image}></Image>
      <Text
        style={[
          _styles.text,
          {color: check ? Colors.WHITE : Colors.GREY_DARK_1},
        ]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};
type PropsType = NativeStackScreenProps<ProfileStackParamList, 'AllReview'>;
const _AllReviews: React.FC<PropsType> = props => {
  const {navigation} = props;
  
  const [ratingdata, setRatingData] = React.useState<ItemRating[]>([
    {
      id: '1',
      image: STAR_2,
      check: false,
      title: 'All',
    },
    {
      id: '2',
      image: STAR_2,
      check: false,
      title: '1',
    },
    {
      id: '3',
      image: STAR_2,
      check: false,
      title: '2',
    },
    {
      id: '4',
      image: STAR_2,
      check: false,
      title: '3',
    },
    {
      id: '5',
      image: STAR_2,
      check: false,
      title: '4',
    },
    {
      id: '6',
      image: STAR_2,
      check: false,
      title: '5',
    },
  ]);

  const handleSelect = (index: number) => {
    const item = ratingdata[index];
    item.check = !item.check;
    const newData = [...ratingdata];
    newData[index] = item;
    setRatingData(newData);
    console.log(item.check);
  };

  const reviewData = [
    {
      id: '1',
      image: IMAGE_TEST,
      title: 'Fairview Apartment',
      rating: '4.9',
      location: 'Semarang, Indonesia',
      avatar: IMAGE_TEST,
      name: 'Jin Martin',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      time: '10 mins ago',
    },
    {
      id: '2',
      image: IMAGE_TEST,
      title: 'Schoolview House',
      rating: '4.6',
      location: 'Jakarta, Indonesia',
      avatar: IMAGE_TEST,
      name: 'Mindy Lane',
      review:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperia. ',
      time: '10 mins ago',
    },
    {
      id: '3',
      image: IMAGE_TEST,
      title: 'Fairview Apartment',
      rating: '4.9',
      location: 'Semarang, Indonesia',
      avatar: IMAGE_TEST,
      name: 'Samuel Ella',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      time: '10 mins ago',
    },
  ];
  type ReviewItemProps = {
    image: ImageSourcePropType;
    title: string;
    rating: string;
    location: string;
    avatar: ImageSourcePropType;
    name: string;
    review: string;
    time: string;
    id: string;
  };

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <SafeAreaView style={_styles.container}>
          <Header
            textCenter={'Tất cả đánh giá'}
            iconLeft={ICON_BACK}
            styleIconLeft={{marginLeft: -DimensionsStyle.width * 0.06}}
            eventLeft={() => console.log('IconLeft')}
          />
          <View
            style={[
              _styles.row,
              {height: 85, paddingLeft: 14, paddingRight: 24, marginTop: 20},
            ]}>
            <View style={_styles.row}>
              <Image style={_styles.avatar} source={IMAGE_TEST}></Image>
              <View>
                <Text style={_styles.title}>Mandella</Text>
                <Text style={_styles.content}>Owner</Text>
              </View>
            </View>
            <Image style={_styles.icon} source={CHAT}></Image>
          </View>
          <Text style={[_styles.title, {fontSize: 18, marginTop: 90}]}>
            {' '}
            Đánh giá của người dùng
          </Text>
          <View>
            {reviewData.map((item: ReviewItemProps) => (
              <View style={_styles.itemReview} key={item.id}>
                <View
                  style={[
                    _styles.row,
                    {
                      height: 67,
                      backgroundColor: Colors.WHITE,
                      justifyContent: 'flex-start',
                    },
                  ]}>
                  <Image
                    style={[
                      _styles.image,
                      {
                        width: DimensionsStyle.width * 0.2,
                        height: 36,
                        borderRadius: 8,
                      },
                    ]}
                    source={item.image}></Image>
                  <View>
                    <Text style={[_styles.title, {fontSize: 10}]}>
                      {item.title}
                    </Text>
                    <View style={_styles.row}>
                      <Image
                        style={[
                          _styles.icon,
                          {height: 10, width: 10, marginRight: 5},
                        ]}
                        source={STAR_4}></Image>
                      <Text
                        style={[_styles.title, {fontSize: 9, marginRight: 10}]}>
                        {item.rating}
                      </Text>
                      <Image
                        style={[
                          _styles.icon,
                          {height: 10, width: 10, marginRight: 5},
                        ]}
                        source={LOCATION}></Image>
                      <Text style={[_styles.content, {fontSize: 9}]}>
                        {item.location}
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={[
                    _styles.row,
                    {
                      height: 128,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                      padding: 10,
                      alignItems: 'flex-start',
                    },
                  ]}>
                  <Image
                    source={item.avatar}
                    style={[
                      _styles.avatar,
                      {width: 50, height: 50, marginRight: 10},
                    ]}></Image>
                  <View style={_styles.column}>
                    <View style={_styles.row}>
                      <Text style={[_styles.title, {fontSize: 12}]}>
                        {item.name}
                      </Text>
                      <View style={_styles.row}>
                        <Image
                          style={[_styles.icon, {height: 12, width: 12}]}
                          source={STAR_4}></Image>
                        <Image
                          style={[_styles.icon, {height: 12, width: 12}]}
                          source={STAR_4}></Image>
                        <Image
                          style={[_styles.icon, {height: 12, width: 12}]}
                          source={STAR_4}></Image>
                        <Image
                          style={[_styles.icon, {height: 12, width: 12}]}
                          source={STAR_4}></Image>
                        <Image
                          style={[_styles.icon, {height: 12, width: 12}]}
                          source={STAR_4}></Image>
                      </View>
                    </View>
                    <Text
                      style={[
                        _styles.content,
                        {letterSpacing: 0.3, lineHeight: 20},
                      ]}
                      numberOfLines={3}>
                      {item.review}
                    </Text>
                    <Text
                      style={[
                        _styles.content,
                        {color: Colors.GREY_LIGHT, fontSize: 8},
                      ]}>
                      {item.time}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </SafeAreaView>
        <View style={_styles.rating}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {ratingdata.map((item: ItemRating, index: number) => (
              <RatingItem
                item={item}
                key={item.id}
                onPress={() => handleSelect(index)}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  avatar: {
    height: 53,
    width: 53,
    resizeMode: 'stretch',
    borderRadius: 100,
    overflow: 'hidden',
    marginRight: 20,
  },
  image: {
    height: 15,
    width: 15,
    marginRight: 8,
  },
  icon: {
    height: 20,
    width: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: Colors.GRAY_SEARCH,
  },
  title: {
    fontSize: 14,
    fontFamily: fontFamily.Bold,
    color: Colors.GREY_DARK_1,
  },
  content: {
    fontSize: 10,
    fontFamily: fontFamily.Regular,
    color: Colors.BLUE_TEXT,
  },
  item: {
    borderRadius: 25,
    height: 50,
    width: DimensionsStyle.width * 0.21,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    position: 'absolute',
    top: 225,
    marginLeft: 24,
  },
  text: {
    fontSize: 10,
    fontFamily: fontFamily.Medium,
    color: Colors.GREY_DARK_1,
  },
  itemReview: {
    borderRadius: 25,
    height: 184,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.GRAY_SEARCH,
    marginVertical: 12,
  },
  column: {
    width: DimensionsStyle.width * 0.66,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export const AllReviews = React.memo(_AllReviews);
