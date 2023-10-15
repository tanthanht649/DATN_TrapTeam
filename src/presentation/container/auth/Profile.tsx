import { Image, ImageSourcePropType, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { BackgroundApp, Header, ViewSwitcherProfile } from '@components';
import { BACKGROUND_WHITE, CLOCK, EDIT, EDITITEM, FAVORITE, FAVORITE_BLUE, IMAGE_TEST, LOCATION, SETTING_PROFILE, STAR_4, fontFamily } from '@assets';
import { Colors, DimensionsStyle } from '@resources';
type Item = {
  id: string;
  image: ImageSourcePropType,
  price: string,
  heart: boolean;
  title: string,
  time: string,
  star: string,
  location: string,
  type: string
};
type PropsType = NativeStackScreenProps<WelcomeTeamStackParamList, 'Profile'>;
const _Profile: React.FC<PropsType> = props => {
  const [selectTab, setSelectTab] = useState(0);

  const [data, setData] = React.useState<Item[]>(
    [{
      id: '1',
      image: IMAGE_TEST,
      price: '$370/month',
      heart: false,
      title: 'Wings Tower',
      time: 'November 21, 2021',
      star: '4.9',
      location: 'Jakarta, Indonesia',
      type: 'Rent'
    },
    {
      id: '2',
      image: IMAGE_TEST,
      price: '$370/month',
      heart: false,
      title: 'Wings Tower',
      time: 'November 21, 2021',
      star: '4.9',
      location: 'Jakarta, Indonesia',
      type: 'Rent'
    },
    {
      id: '3',
      image: IMAGE_TEST,
      price: '$370/month',
      heart: false,
      title: 'Wings Tower',
      time: 'November 21, 2021',
      star: '4.9',
      location: 'Jakarta, Indonesia',
      type: 'Rent'
    },
    {
      id: '4',
      image: IMAGE_TEST,
      price: '$370/month',
      heart: false,
      title: 'Wings Tower',
      time: 'November 21, 2021',
      star: '4.9',
      location: 'Jakarta, Indonesia',
      type: 'Rent'
    }]
  );

  const handleItemClick = (itemId: string) => {
    // Xử lý sự kiện khi phần tử được click
    console.log(`Item clicked: ${itemId}`);
  };
  const renderTopTab = (selectTab: number) => {
    if (selectTab == 0) {
      return (
        <View style={_styles.tab}>
          <ViewSwitcherProfile
            onAddCardPress={() => {
            }}
            quantityEstates={30}
            textProfile='Yêu thích'
            showAddCard={true}
          />
          <ScrollView contentContainerStyle={_styles.row}>
            <View style={_styles.column}>
              {data.slice(0, Math.ceil(data.length / 2)).map(item => (
                <View style={_styles.item} key={item.id}>
                  <Image source={item.image} style={_styles.imageItem}></Image>
                  <Image source={item.heart ? FAVORITE : FAVORITE_BLUE} style={_styles.heart}></Image>
                  <Text style={[_styles.name, { fontSize: 12, textAlign: 'left', marginTop: 10 }]}>{item.title}</Text>
                  <View style={[_styles.row, { justifyContent: 'flex-start' }]}>
                    <Image style={_styles.icon} source={CLOCK}></Image>
                    <Text style={_styles.textItem}>{item.time}</Text>
                  </View>
                </View>
              ))}
            </View>
            <View style={_styles.column}>
              {data.slice(Math.ceil(data.length / 2)).map(item => (
                <View style={_styles.item} key={item.id}>
                  <Image source={item.image} style={_styles.imageItem}></Image>
                  <Image source={item.heart ? FAVORITE : FAVORITE_BLUE} style={_styles.heart}></Image>
                  <Text style={[_styles.name, { fontSize: 12, textAlign: 'left', marginTop: 10 }]}>{item.title}</Text>
                  <View style={[_styles.row, { justifyContent: 'flex-start' }]}>
                    <Image style={_styles.icon} source={CLOCK}></Image>
                    <Text style={_styles.textItem}>{item.time}</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      );
    } else if (selectTab == 1) {
      return (
        <View style={_styles.tab}>
          <ViewSwitcherProfile
            onAddCardPress={() => {
            }}
            quantityEstates={2}
            textProfile='Đã tham gia'
            showAddCard={false}
          />
          <ScrollView contentContainerStyle={_styles.row}>
            <View style={_styles.column}>
              {data.slice(0, Math.ceil(data.length / 2)).map(item => (

                <View style={_styles.item} key={item.id}>

                  <Image source={item.image} style={_styles.imageItem}></Image>
                  <TouchableOpacity  style={_styles.editItem} onPress={() => handleItemClick(item.id)} >
                    <Image source={EDITITEM}></Image>
                  </TouchableOpacity>
                  <Image source={item.heart ? FAVORITE : FAVORITE_BLUE} style={_styles.heart}></Image>
                  <Text style={[_styles.name, { fontSize: 12, textAlign: 'left', marginTop: 10 }]}>{item.title}</Text>
                  <View style={[_styles.row, { justifyContent: 'flex-start' }]}>
                    <Image style={_styles.icon} source={STAR_4}></Image>
                    <Text style={[_styles.email, { fontFamily: fontFamily.Regular, marginRight: 10 }]}>{item.star}</Text>
                    <Image style={_styles.icon} source={LOCATION} ></Image>
                    <Text style={[_styles.email, { fontFamily: fontFamily.Regular }]}>{item.location}</Text>
                  </View>
                </View>
              ))}
            </View>
            <View style={_styles.column}>
              {data.slice(Math.ceil(data.length / 2)).map(item => (
                <View style={_styles.item} key={item.id}>

                  <Image source={item.image} style={_styles.imageItem}></Image>
                  <Image source={item.heart ? FAVORITE : FAVORITE_BLUE} style={_styles.heart}></Image>
                  <TouchableOpacity style={_styles.editItem} onPress={() => handleItemClick(item.id)} >
                    <Image source={EDITITEM} ></Image>
                  </TouchableOpacity>
                  <Text style={[_styles.name, { fontSize: 12, textAlign: 'left', marginTop: 10 }]}>{item.title}</Text>
                  <View style={[_styles.row, { justifyContent: 'flex-start' }]}>
                    <Image style={_styles.icon} source={STAR_4}></Image>
                    <Text style={_styles.textItem}>{item.star}</Text>
                    <Image style={_styles.icon} source={LOCATION} ></Image>
                    <Text style={_styles.textItem}>{item.location}</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return <View style={_styles.tab}>
        <ViewSwitcherProfile
          onAddCardPress={() => {
          }}
          quantityEstates={10}
          textProfile='Đánh giá'
          showAddCard={false}
        />
        <ScrollView contentContainerStyle={_styles.row}>
          <View style={_styles.column}>
            {data.slice(0, Math.ceil(data.length / 2)).map(item => (
              <View style={_styles.item} key={item.id}>
                <Image source={item.image} style={_styles.imageItem}></Image>
                <Image source={item.heart ? FAVORITE : FAVORITE_BLUE} style={_styles.heart}></Image>
                <Text style={[_styles.name, { fontSize: 12, textAlign: 'left', marginTop: 10 }]}>{item.title}</Text>
                <View style={[_styles.row, { justifyContent: 'flex-start' }]}>
                  <Image style={_styles.icon} source={CLOCK}></Image>
                  <Text style={_styles.textItem}>{item.time}</Text>
                </View>
              </View>
            ))}
          </View>
          <View style={_styles.column}>
            {data.slice(Math.ceil(data.length / 2)).map(item => (
              <View style={_styles.item} key={item.id}>
                <Image source={item.image} style={_styles.imageItem}></Image>
                <Image source={item.heart ? FAVORITE : FAVORITE_BLUE} style={_styles.heart}></Image>
                <Text style={[_styles.name, { fontSize: 12, textAlign: 'left', marginTop: 10 }]}>{item.title}</Text>
                <View style={[_styles.row, { justifyContent: 'flex-start' }]}>
                  <Image style={_styles.icon} source={CLOCK}></Image>
                  <Text style={_styles.textItem}>{item.time}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    }

  };
  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <SafeAreaView style={_styles.container}>
          <Header textCenter='Trang cá nhân' iconRight={SETTING_PROFILE} styleIconRight={{ height: 50, width: 50 }}></Header>
          <View style={_styles.avatar}>
            <Image style={_styles.image} source={IMAGE_TEST}></Image>
            <Pressable>
              <Image style={_styles.edit} source={EDIT}></Image>
            </Pressable>
          </View>
          <View>
            <Text style={_styles.name}>Mathew Adam</Text>
            <Text style={_styles.email}>mathew@email.com</Text>
          </View>
          <View style={_styles.row}>
            <View style={_styles.border}>
              <Text style={_styles.name}>30</Text>
              <Text style={[_styles.email, { fontFamily: fontFamily.Medium, color: Colors.GREY_DARK_1, }]}>Yêu thích</Text>
            </View>
            <View style={_styles.border}>
              <Text style={_styles.name}>12</Text>
              <Text style={[_styles.email, { fontFamily: fontFamily.Medium, color: Colors.GREY_DARK_1, }]}>Đã tham gia</Text>
            </View>
            <View style={_styles.border}>
              <Text style={_styles.name}>28</Text>
              <Text style={[_styles.email, { fontFamily: fontFamily.Medium, color: Colors.GREY_DARK_1, }]}>Đánh giá</Text>
            </View>
          </View>

          <View style={_styles.switchButton}>
            <View style={_styles.bordertab}>
              <TouchableOpacity onPress={() => setSelectTab(0)} style={[_styles.button, { backgroundColor: selectTab == 0 ? Colors.WHITE : Colors.GRAY_SEARCH }]}>
                <Text style={[_styles.text, { color: selectTab == 0 ? Colors.GREY_DARK_1 : Colors.GREY_LIGHT }]}>Yêu Thích</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectTab(1)} style={[_styles.button, { backgroundColor: selectTab == 1 ? Colors.WHITE : Colors.GRAY_SEARCH }]}>
                <Text style={[_styles.text, { color: selectTab == 1 ? Colors.GREY_DARK_1 : Colors.GREY_LIGHT }]}>Đã tham gia</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectTab(2)} style={[_styles.button, { backgroundColor: selectTab == 2 ? Colors.WHITE : Colors.GRAY_SEARCH }]}>
                <Text style={[_styles.text, { color: selectTab == 2 ? Colors.GREY_DARK_1 : Colors.GREY_LIGHT }]}>Đánh giá</Text>
              </TouchableOpacity>
            </View>
            <View>
              {renderTopTab(selectTab)}
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>

    </BackgroundApp >
  );
};

const _styles = StyleSheet.create({
  container: {
    marginHorizontal: 24
  },
  avatar: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginBottom: 12,
    marginTop: 18
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'stretch',
    borderRadius: 100,
    overflow: 'hidden'
  },
  edit: {
    height: 30,
    width: 30,
    position: 'absolute',
    right: -5,
    top: -30,
  },
  icon: {
    height: 10,
    width: 10,
    marginRight: 3
  },
  name: {
    fontFamily: fontFamily.Bold,
    fontSize: 14,
    color: Colors.GREY_DARK_1,
    textAlign: 'center',
    lineHeight: 20
  },
  email: {
    fontFamily: fontFamily.Semibold,
    fontSize: 10,
    color: Colors.BLUE_TEXT,
    textAlign: 'center',
    lineHeight: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  border: {
    borderRadius: 15,
    borderWidth: 1,
    height: DimensionsStyle.width * 0.2,
    width: DimensionsStyle.width * 0.27,
    marginTop: 19,
    borderColor: Colors.GREY_SOFT,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  switchButton: {
    height: '100%',
    width: DimensionsStyle.width * 0.88,
    marginTop: 20,
  },
  bordertab: {
    width: DimensionsStyle.width * 0.88,
    height: 50,
    borderColor: Colors.GRAY_SEARCH,
    backgroundColor: Colors.GRAY_SEARCH,
    borderWidth: 1,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  button: {
    width: '33%',
    height: 32,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    fontFamily: fontFamily.Semibold
  },
  tab: {
    width: DimensionsStyle.width * 0.88,
    height: '100%',
    marginTop: 9,

  },
  heart: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 16,
    right: 16
  },
  item: {
    width: DimensionsStyle.width * 0.41,
    backgroundColor: Colors.GRAY_SEARCH,
    height: 232,
    borderRadius: 25,
    paddingBottom: 16,
    paddingHorizontal: 8,
    paddingTop: 8,
    marginTop: 10
  },
  column: {
    flex: 1,
  },
  imageItem: {
    width: DimensionsStyle.width * 0.37,
    height: 160,
    borderRadius: 15
  },
  textItem: {
    fontFamily: fontFamily.Regular,
    fontSize: 10,
    color: Colors.GREY_DARK_1,
    lineHeight: 20
  },
  editItem: {
    height: 25,
    width: 25,
    position: 'absolute',
    top: 16,
    left: 8
  }
});

export const Profile = React.memo(_Profile);