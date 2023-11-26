import { StyleSheet, Text, Image, ScrollView, Pressable, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  BACKGROUND_HOME,
  FIND,
  HEART,
  LOCATION,
  NOTIFICATION,
  NOTIFICATION_SELECT,
  START_SMALL,
  fontFamily,
} from '@assets';
import { Colors, DimensionsStyle } from '@resources';
import {
  BackgroundApp,
  HeaderHome,
  HeaderHome2,
  TopTab,
  Header,
  HeaderMessager,
  Button,
  TextPlus,
  Input

} from '@components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';

type PropsType = NativeStackScreenProps<
  WelcomeTeamStackParamList,
  'HomeFull'
>;

const _HomeFull: React.FC<PropsType> = props => {
  const { navigation } = props;
  const [check, setCheck] = React.useState(false)
  

  const go = () => {
    setCheck(check);
  };
  const [text, setText] = React.useState('')

  // interface Item {
  //   id: number;
  //   title: string;
  //   titlemini: string;
  //   image: any;
  //   imageview: any;
  //   iamgevector: any;

  // }
  // const DATA: Item[] = [
  //   { id: 1, title: "Ưu đãi vào Tháng Mười!", titlemini: 'Giảm giá đến 20%', image: require("../../../../assets/images/sale.png"), imageview: require("../../../../assets/images/bogoc.png"), iamgevector: require("../../../../assets/images/vector.png") },
  //   { id: 2, title: "Ưu đãi vào Tháng Mười!", titlemini: 'Giảm giá đến 20%', image: require("../../../../assets/images/sale.png"), imageview: require("../../../../assets/images/bogoc.png"), iamgevector: require("../../../../assets/images/vector.png") },
  //   { id: 3, title: "Ưu đãi vào Tháng Mười!", titlemini: 'Giảm giá đến 20%', image: require("../../../../assets/images/sale.png"), imageview: require("../../../../assets/images/bogoc.png"), iamgevector: require("../../../../assets/images/vector.png") },
  //   { id: 4, title: "Ưu đãi vào Tháng Mười!", titlemini: 'Giảm giá đến 20%', image: require("../../../../assets/images/sale.png"), imageview: require("../../../../assets/images/bogoc.png"), iamgevector: require("../../../../assets/images/vector.png") },
  //   { id: 5, title: "Ưu đãi vào Tháng Mười!", titlemini: 'Giảm giá đến 20%', image: require("../../../../assets/images/sale.png"), imageview: require("../../../../assets/images/bogoc.png"), iamgevector: require("../../../../assets/images/vector.png") },
  //   { id: 6, title: "Ưu đãi vào Tháng Mười!", titlemini: 'Giảm giá đến 20%', image: require("../../../../assets/images/sale.png"), imageview: require("../../../../assets/images/bogoc.png"), iamgevector: require("../../../../assets/images/vector.png") },
  //   { id: 7, title: "Ưu đãi vào Tháng Mười!", titlemini: 'Giảm giá đến 20%', image: require("../../../../assets/images/sale.png"), imageview: require("../../../../assets/images/bogoc.png"), iamgevector: require("../../../../assets/images/vector.png") },
  //   { id: 8, title: "Ưu đãi vào Tháng Mười!", titlemini: 'Giảm giá đến 20%', image: require("../../../../assets/images/sale.png"), imageview: require("../../../../assets/images/bogoc.png"), iamgevector: require("../../../../assets/images/vector.png") },
  //   { id: 9, title: "Ưu đãi vào Tháng Mười!", titlemini: 'Giảm giá đến 20%', image: require("../../../../assets/images/sale.png"), imageview: require("../../../../assets/images/bogoc.png"), iamgevector: require("../../../../assets/images/vector.png") },
  //   { id: 10, title: "Ưu đãi vào Tháng Mười!", titlemini: 'Giảm giá đến 20%', image: require("../../../../assets/images/sale.png"), imageview: require("../../../../assets/images/bogoc.png"), iamgevector: require("../../../../assets/images/vector.png") },
  // ]

  // const renderItem = ({ item }: { item: Item }) => (
  //   <SafeAreaView style={_styles.item}>
  //     <SafeAreaView style={_styles.card}>
  //       <SafeAreaView>
  //         <Image source={item.image} style={_styles.image} />
  //         <Text style={_styles.text}>{item.title}</Text>
  //         <Text style={_styles.textmini}>{item.titlemini}</Text>
  //       </SafeAreaView>
  //     </SafeAreaView>
  //     <SafeAreaView style={_styles.gr}>
  //       <Image source={item.imageview} style={_styles.imageview} />
  //       <Image source={item.iamgevector} style={_styles.imagevector} />
  //     </SafeAreaView>
  //   </SafeAreaView>
  // );

  interface ItemEstates {
    id: number;
    title: string;
    location: string;
    money: string;
    image: any;


  }
  const DATAESTATES: ItemEstates[] = [
    { id: 1, title: "Hồ Hoàn Kiếm", location: "Hà Nội, Việt Nam", money: "$ 290", image: require("../../../../assets/images/apartment.png")},
    { id: 2, title: "Hồ Hoàn Kiếm", location: "Hà Nội, Việt Nam", money: "$ 290", image: require("../../../../assets/images/apartment.png")},
    { id: 3, title: "Hồ Hoàn Kiếm", location: "Hà Nội, Việt Nam", money: "$ 290", image: require("../../../../assets/images/apartment.png")},
    { id: 4, title: "Hồ Hoàn Kiếm", location: "Hà Nội, Việt Nam", money: "$ 290", image: require("../../../../assets/images/apartment.png")},
    { id: 5, title: "Hồ Hoàn Kiếm", location: "Hà Nội, Việt Nam", money: "$ 290", image: require("../../../../assets/images/apartment.png")},
    { id: 6, title: "Hồ Hoàn Kiếm", location: "Hà Nội, Việt Nam", money: "$ 290", image: require("../../../../assets/images/apartment.png")},
    { id: 7, title: "Hồ Hoàn Kiếm", location: "Hà Nội, Việt Nam", money: "$ 290", image: require("../../../../assets/images/apartment.png")},
    { id: 8, title: "Hồ Hoàn Kiếm", location: "Hà Nội, Việt Nam", money: "$ 290", image: require("../../../../assets/images/apartment.png")},
    { id: 9, title: "Hồ Hoàn Kiếm", location: "Hà Nội, Việt Nam", money: "$ 290", image: require("../../../../assets/images/apartment.png")},
    { id: 10, title: "Hồ Hoàn Kiếm", location: "Hà Nội, Việt Nam", money: "$ 290", image: require("../../../../assets/images/apartment.png")},
  ]

  const renderItemEstates = ({ item }: { item: ItemEstates }) => (
    <SafeAreaView style={_styles.itemEstates}>
      <SafeAreaView style={_styles.cardEstates}>
        <SafeAreaView style={_styles.gr1}>
          <Image source={item.image} style={_styles.imageEstates} />
          <Image source={HEART} style={_styles.iconheart} />
         
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={_styles.grEstates}>
        <Text style={_styles.textEstates}>{item.title}</Text>
        {/* <SafeAreaView style={_styles.groupreview}>
          <Image source={START_SMALL} style={_styles.iconreview} />
          <Text style={_styles.textreview}>{item.review}</Text>
        </SafeAreaView> */}
        <SafeAreaView style={_styles.grouplocation}>
          <Image source={LOCATION} style={_styles.iconlocation} />
          <Text style={_styles.textlocation}>{item.location}</Text>
        </SafeAreaView>
        <SafeAreaView style={_styles.groupmoney}>
          <Text style={_styles.money}>{item.money}</Text>
         
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );

  interface ItemNearby {
    id: number;
    title: string;
   
    location: string;
    image: any;
    money: string;
    date: string;

  }

  const DATANEARBY: ItemNearby[] = [
    { id: 1, title: "Đền Ngọc Sơn", location: "Hà Nội, Việt Nam", image: require("../../../../assets/images/tower.png"), money: "$ 290", date: "/tour" },
    { id: 2, title: "Cầu Long Biên", location: "Hà Nội, Việt Nam", image: require("../../../../assets/images/tower.png"), money: "$ 271", date: "/tour" },
    { id: 3, title: "Chùa Hương", location: "Hà Nội, Việt Nam", image: require("../../../../assets/images/tower.png"), money: "$ 235", date: "/tour" },
    { id: 4, title: "Chợ Đồng Xuân", location: "Hà Nội, Việt Nam", image: require("../../../../assets/images/tower.png"), money: "$ 290", date: "/tour" },
    { id: 5, title: "Đền Ngọc Sơn",  location: "Hà Nội, Việt Nam", image: require("../../../../assets/images/tower.png"), money: "$ 290", date: "/tour" },
    { id: 6, title: "Cầu Long Biên",  location: "Hà Nội, Việt Nam", image: require("../../../../assets/images/tower.png"), money: "$ 271", date: "/tour" },
    { id: 7, title: "Chùa Hương",  location: "Hà Nội, Việt Nam", image: require("../../../../assets/images/tower.png"), money: "$ 235", date: "/tour" },
    { id: 8, title: "Chợ Đồng Xuân",  location: "Hà Nội, Việt Nam", image: require("../../../../assets/images/tower.png"), money: "$ 290", date: "/tour" },
    { id: 9, title: "Đền Ngọc Sơn",  location: "Hà Nội, Việt Nam", image: require("../../../../assets/images/tower.png"), money: "$ 290", date: "/tour" },
    { id: 10, title: "Cầu Long Biên",  location: "Hà Nội, Việt Nam", image: require("../../../../assets/images/tower.png"), money: "$ 271", date: "/tour" },
    
  ]

  const renderItemNearby = ({ item }: { item: ItemNearby }) => (
    <SafeAreaView style={_styles.itemNearby}>
      <SafeAreaView style={_styles.cardNearby}>
        <SafeAreaView style={_styles.grNearby1}>
          <Image source={item.image} style={_styles.imageNearby} />
          <Image source={HEART} style={_styles.iconheartNearby} />
          <SafeAreaView style={_styles.boxnameNearby}>
            <SafeAreaView style={_styles.groupmoneyNearby}>
              <Text style={_styles.moneyNearby}>{item.money}</Text>
              <Text style={_styles.dateNearby}>{item.date}</Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={_styles.grNearby}>
        <Text style={_styles.textNearby}>{item.title}</Text>
        <SafeAreaView style={_styles.boxgr}>
          {/* <SafeAreaView style={_styles.groupreviewNearby}>
            <Image source={START_SMALL} style={_styles.iconreviewNearby} />
            <Text style={_styles.textreviewNearby}>{item.review}</Text>
          </SafeAreaView> */}
          <SafeAreaView style={_styles.grouplocationNearby}>
            <Image source={LOCATION} style={_styles.iconlocationNearby} />
            <Text style={_styles.textlocationNearby}>{item.location}</Text>
          </SafeAreaView>
        </SafeAreaView>

      </SafeAreaView>
    </SafeAreaView>
  );


  return (
    <BackgroundApp source={BACKGROUND_HOME}>
      <HeaderHome
         />
      <ScrollView style={_styles.container}>
        <TextPlus
          textBolds={['Thuy Ân!']}
          text={"Xin chào, Thuy Ân! \nHãy bắt đầu khám phá"}
          boldStyle={{ fontFamily: fontFamily.Bold, color: Colors.GREY_DARK_1, fontSize: 25, lineHeight: 40, letterSpacing: 0.75, }}
          textStyle={
            {
              color: Colors.GREY_DARK_1, fontSize: 25, lineHeight: 40,
              letterSpacing: 0.75, marginLeft: '7%', marginTop: '4%', width: '100%'
            }
          }
          numberOfLines={2}
        />
        <Input
          imageIconLeft={FIND}
          imageIconRight={FIND}
          iconRightStyle={{ opacity:0}}
          label='Tìm kiếm địa điểm, tour'
          value={text}
          onChangeText={(text) => setText(text)}
          viewStyle={{ marginTop: '7%', marginBottom: '3%', width: '85%'}}
        />
        <TopTab
          isCheck="home"
        />
        {/* <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false} /> */}
        <SafeAreaView style={_styles.boxEstates}>
          <SafeAreaView style={_styles.boxCard}>
            <Text style={_styles.title}>Địa Điểm Yêu Thích</Text>
            <TouchableOpacity style={_styles.btnSeeAll}>
              <Text style={_styles.seeAll}>xem tất cả</Text>
            </TouchableOpacity>
          </SafeAreaView>
          <FlatList
            data={DATAESTATES}
            renderItem={renderItemEstates}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false} />
        </SafeAreaView>
        <SafeAreaView style={_styles.boxEstates}>
          <SafeAreaView style={_styles.boxCard}>
            <Text style={_styles.title}>Địa Điểm Phổ Biến</Text>
            <TouchableOpacity style={_styles.btnSeeAll}>
              <Text style={_styles.seeAll}>xem tất cả</Text>
            </TouchableOpacity>
          </SafeAreaView>
          <FlatList
            data={DATAESTATES}
            renderItem={renderItemEstates}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false} />
        </SafeAreaView>
        <SafeAreaView style={_styles.boxEstates}>
          <SafeAreaView style={_styles.boxCard1}>
            <Text style={_styles.title}>Tour  Nổi Bật</Text>
           
          </SafeAreaView>
          <FlatList
            data={DATANEARBY}
            renderItem={renderItemNearby}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
          />
        </SafeAreaView>
      </ScrollView>
    </BackgroundApp>
  )
}

export const HomeFull = React.memo(_HomeFull);

const _styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
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
    marginTop: - Dimensions.get('screen').height * 0.08,
    marginLeft: Dimensions.get('screen').width * 0.05,
    backgroundColor: Colors.BLACK,
    resizeMode:'stretch'

  },
  text: {
    color: Colors.WHITE,
    fontFamily: fontFamily.Bold,
    fontSize: 18,
    letterSpacing: 0.54,
    marginTop: - Dimensions.get('screen').height * 0.18,
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
    marginTop: - Dimensions.get('screen').height * 0.11,
    marginLeft: - Dimensions.get('screen').width * 0.333,


  },
  imageview: {
    marginTop: Dimensions.get('screen').height * 0.105,
    marginLeft: - Dimensions.get('screen').width * 0.3,
    resizeMode:'stretch'


  },
  imagevector: {
    marginTop: Dimensions.get('screen').height * 0.102,
    marginLeft: Dimensions.get('screen').width * - 0.8,
    resizeMode:'stretch'


  },
  boxEstates: {},
  boxCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: - Dimensions.get('screen').height * 0.05,
    marginVertical: - Dimensions.get('screen').height * 0.02,
  },
  boxCard1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: - Dimensions.get('screen').height * 0.08,
    marginVertical: - Dimensions.get('screen').height * 0.02,
    marginBottom:  Dimensions.get('screen').height * 0.04,
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
    marginTop: - Dimensions.get('screen').height * 0.08,
    marginLeft: Dimensions.get('screen').width * 0.37,
  },
  imageEstates: {
    width: Dimensions.get('screen').width * 0.43,
    height: Dimensions.get('screen').height * 0.19,
    marginTop: - Dimensions.get('screen').height * 0.03,
    marginLeft: - Dimensions.get('screen').width * 0.35,
    borderRadius: 25,
    flexShrink: 0,
    resizeMode:'stretch'

  },
  iconheart: {
    marginTop: - Dimensions.get('screen').height * 0.16,
    marginLeft: - Dimensions.get('screen').width * 0.5,
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
    marginLeft: - Dimensions.get('screen').width * 0.09,
  },
  name: {
    marginTop: - Dimensions.get('screen').height * 0.023,
    marginLeft: Dimensions.get('screen').width * 0.02,

  },
  grEstates: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: - Dimensions.get('window').height * 0.22,
    marginLeft: Dimensions.get('window').height * 0.22,
  },

  groupreview: {
    marginTop: Dimensions.get('window').height * 0.06,
    marginLeft: - Dimensions.get('window').height * 0.05,
    width: '30%',
    flexDirection: 'row',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grouplocation: {
    marginTop: Dimensions.get('window').height * 0.12,
    marginLeft: - Dimensions.get('window').height * 0.1,
    width: '80%',
    flexDirection: 'row',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupmoney: {
    marginTop: Dimensions.get('window').height * 0.25,
    marginLeft: - Dimensions.get('window').height * 0.05,
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
    marginLeft: - Dimensions.get('window').height * 0.26,
    resizeMode:'stretch'

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
    marginLeft: - Dimensions.get('window').height * 0.2,
    resizeMode:'stretch'

  },
  money: {
    color: Colors.GREY_DARK,
    fontSize: 18,
    letterSpacing: 0.48,
    fontFamily: fontFamily.Bold,
    marginLeft: - Dimensions.get('window').height * 0.34,


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
    marginBottom:  Dimensions.get('screen').height * 0.02,
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
    marginTop: - Dimensions.get('screen').height * 0.08,
    marginLeft: - Dimensions.get('screen').width * 0.35,
  },
  imageNearby: {
    width: Dimensions.get('screen').width * 0.43,
    height: Dimensions.get('screen').height * 0.22,
    marginTop: - Dimensions.get('screen').height * 0.04,
    marginLeft: Dimensions.get('screen').width * 0.325,
    borderRadius: 25,
    flexShrink: 0,
    resizeMode:'stretch'

  },
  iconheartNearby: {
    marginTop: - Dimensions.get('screen').height * 0.2,
    marginLeft: - Dimensions.get('screen').width * 0.12,
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
    marginLeft: - Dimensions.get('screen').width * 0.22
  },
  nameNearby: {
    marginTop: - Dimensions.get('screen').height * 0.023,
    marginLeft: Dimensions.get('screen').width * 0.02,

  },
  grNearby: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: - Dimensions.get('window').height * 0.05,
    marginLeft: Dimensions.get('window').height * 0.08,
  },
  boxgr:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  groupreviewNearby: {
    marginTop: - Dimensions.get('window').height * 0.02,
    marginLeft: - Dimensions.get('window').height * 0.07,
    width: '100%',
    flexDirection: 'row',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grouplocationNearby: {
    marginTop: - Dimensions.get('window').height * 0.02,
    marginLeft: - Dimensions.get('window').height * 0.05,
    width: '100%',
    flexDirection: 'row',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupmoneyNearby: {
    marginTop: - Dimensions.get('window').height * 0.08,
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
    marginTop: - Dimensions.get('screen').height * 0.023,
  },
  textreviewNearby: {
    color: Colors.GREY_DARK,
    fontSize: 10,
    fontFamily: fontFamily.Bold,

  },
  iconreviewNearby: {
    marginLeft: - Dimensions.get('window').height * 0.26,
    resizeMode:'stretch'

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
    marginLeft: - Dimensions.get('window').height * 0.2,
    resizeMode:'stretch'

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





})
