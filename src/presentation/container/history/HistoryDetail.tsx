import { StyleSheet, Text, Image, ScrollView, Pressable, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  BACKGROUND_HOME,
  BACKGROUND_WHITE,
  EMAIL,
  FIND,
  HEART,
  ICON_BACK,
  ICON_CALENDAR,
  ICON_CLOCK,
  ICON_PROFILE,
  LOCATION,
  MESSAGING,
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
  'HistoryDetail'
>;



const _HistoryDetail: React.FC<PropsType> = props => {
  const { navigation } = props;

  interface Item {
    id: number;
    title: string;
    location: string;
    people: string;
    time: string;
    date: string;
    image: any;
    money: string;

  }
  const DATA: Item[] = [
    { id: 1, title: "Sun World Fansipan Legend", location: "Lào Cai, Việt Nam", people: "10 người", time: "2 ngày 1 đêm", date: "04/12/2023 - 06/12/2023", image: require("../../../../assets/images/sapa.png"), money: "30,000,000 VND" },
    { id: 2, title: "Sun World Fansipan Legend", location: "Lào Cai, Việt Nam", people: "10 người", time: "2 ngày 1 đêm", date: "04/12/2023 - 06/12/2023", image: require("../../../../assets/images/sapa.png"), money: "30,000,000 VND" },
    { id: 3, title: "Sun World Fansipan Legend", location: "Lào Cai, Việt Nam", people: "10 người", time: "2 ngày 1 đêm", date: "04/12/2023 - 06/12/2023", image: require("../../../../assets/images/sapa.png"), money: "30,000,000 VND" },
    { id: 4, title: "Sun World Fansipan Legend", location: "Lào Cai, Việt Nam", people: "10 người", time: "2 ngày 1 đêm", date: "04/12/2023 - 06/12/2023", image: require("../../../../assets/images/sapa.png"), money: "30,000,000 VND" },
    { id: 5, title: "Sun World Fansipan Legend", location: "Lào Cai, Việt Nam", people: "10 người", time: "2 ngày 1 đêm", date: "04/12/2023 - 06/12/2023", image: require("../../../../assets/images/sapa.png"), money: "30,000,000 VND" },
    { id: 6, title: "Sun World Fansipan Legend", location: "Lào Cai, Việt Nam", people: "10 người", time: "2 ngày 1 đêm", date: "04/12/2023 - 06/12/2023", image: require("../../../../assets/images/sapa.png"), money: "30,000,000 VND" },
    { id: 7, title: "Sun World Fansipan Legend", location: "Lào Cai, Việt Nam", people: "10 người", time: "2 ngày 1 đêm", date: "04/12/2023 - 06/12/2023", image: require("../../../../assets/images/sapa.png"), money: "30,000,000 VND" },
    { id: 8, title: "Sun World Fansipan Legend", location: "Lào Cai, Việt Nam", people: "10 người", time: "2 ngày 1 đêm", date: "04/12/2023 - 06/12/2023", image: require("../../../../assets/images/sapa.png"), money: "30,000,000 VND" },
    { id: 9, title: "Sun World Fansipan Legend", location: "Lào Cai, Việt Nam", people: "10 người", time: "2 ngày 1 đêm", date: "04/12/2023 - 06/12/2023", image: require("../../../../assets/images/sapa.png"), money: "30,000,000 VND" },
    { id: 10, title: "Sun World Fansipan Legend", location: "Lào Cai, Việt Nam", people: "10 người", time: "2 ngày 1 đêm", date: "04/12/2023 - 06/12/2023", image: require("../../../../assets/images/sapa.png"), money: "30,000,000 VND" },

  ]

  const renderItem = ({ item }: { item: Item }) => (
    <SafeAreaView style={_styles.item}>
      <SafeAreaView style={_styles.card}>
        {/* <SafeAreaView style={_styles.gr1}> */}
        <Image source={item.image} style={_styles.image} />
        {/* </SafeAreaView> */}
      </SafeAreaView>
      <SafeAreaView style={_styles.gr}>

        <Text style={_styles.text}>{item.title}</Text>


        <SafeAreaView style={_styles.grouplocation}>
          <Image source={LOCATION} style={_styles.iconlocation} />
          <Text style={_styles.textlocation}>{item.location}</Text>
        </SafeAreaView>
        <SafeAreaView>
          <SafeAreaView style={_styles.grouppeople}>
            <Image source={ICON_PROFILE} style={_styles.iconpeople} />
            <Text style={_styles.textpeople}>{item.people}</Text>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView>
        <SafeAreaView style={_styles.grouptime}>
            <Image source={ICON_CLOCK} style={_styles.icontime} />
            <Text style={_styles.texttime}>{item.time}</Text>
          </SafeAreaView>
          </SafeAreaView>
          <SafeAreaView>
          <SafeAreaView style={_styles.groupdate}>
            <Image source={ICON_CALENDAR} style={_styles.icondate} />
            <Text style={_styles.textdate}>{item.date}</Text>
          </SafeAreaView>
          </SafeAreaView>

      </SafeAreaView>

      <SafeAreaView style={_styles.groupmoney}>
        <SafeAreaView style={_styles.groupmoney1}>
          <Text style={_styles.money}>{item.money}</Text>
          <Text style={_styles.textt}>Thành tiền:</Text>

        </SafeAreaView>
        <Button title='Đánh giá' onPress={() => { }} viewStyle={{ width: 115, height: 50, marginRight: '120%' }} imageIconLeft={EMAIL} imageIconRight={MESSAGING}></Button>

      </SafeAreaView>
    </SafeAreaView>
  );


  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <Header
        iconLeft={ICON_BACK}
        textCenter='Chi tiết lịch sử tour'
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false} />
    </BackgroundApp>
  )
}

export const HistoryDetail = React.memo(_HistoryDetail);

const _styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 10,
    margin: Dimensions.get('screen').width * 0.02,
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').height * 0.37,
    borderRadius: 25,
    backgroundColor: Colors.GRAY_SEARCH,
    marginTop: Dimensions.get('screen').height * 0.02,
    marginLeft: Dimensions.get('screen').width * 0.05,
    marginBottom: Dimensions.get('screen').height * 0.02,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('screen').width * 0.43,
    height: Dimensions.get('screen').height * 0.19,
    marginTop: - Dimensions.get('screen').height * 0.15,
    marginLeft: Dimensions.get('screen').width * 0.85,
    borderRadius: 25,
    flexShrink: 0,
    resizeMode: 'stretch'

  },
  gr: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: - Dimensions.get('window').height * 0.4,
    marginLeft: - Dimensions.get('window').height * 0.13,
  },
  text: {
    width: 150,
    color: Colors.GREY_DARK,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.36,
    fontFamily: fontFamily.Bold,

  },
  grouplocation: {
    marginTop: Dimensions.get('window').height * 0.06,
    marginLeft: - Dimensions.get('window').height * 0.1,
    width: '80%',
    flexDirection: 'row',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginLeft: - Dimensions.get('window').height * 0.45,
    resizeMode: 'stretch'

  },
  grouppeople: {
    marginTop: Dimensions.get('window').height * 0.06,
    marginLeft: - Dimensions.get('window').height * 0.45,
    width: '80%',
    flexDirection: 'row',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textpeople: {
    color: Colors.GREY_DARK,
    fontSize: 10,
    fontFamily: fontFamily.Medium,
    marginLeft: Dimensions.get('window').height * 0.01,
    marginTop: Dimensions.get('window').height * 0.07,
    width: Dimensions.get('window').width * 0.3,

  },
  iconpeople: {
    width: Dimensions.get('window').width * 0.039,
    height: Dimensions.get('window').height * 0.022,
    marginLeft:  Dimensions.get('window').height * 0.07,
    marginTop: Dimensions.get('window').height * 0.07,
    resizeMode: 'stretch'

  },
  grouptime: {
    marginTop: Dimensions.get('window').height * 0.25,
    marginLeft: - Dimensions.get('window').height * 0.45,
    width: '80%',
    flexDirection: 'row',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texttime: {
    color: Colors.GREY_DARK,
    fontSize: 10,
    fontFamily: fontFamily.Medium,
    marginLeft: Dimensions.get('window').height * 0.01,
    width: Dimensions.get('window').width * 0.3,
  },
  icontime: {
    width: Dimensions.get('window').width * 0.04,
    height: Dimensions.get('window').height * 0.022,
    marginLeft:  Dimensions.get('window').height * 0.05,
    resizeMode: 'stretch'

  },
  groupdate: {
    marginTop: Dimensions.get('window').height * 0.36,
    marginLeft: - Dimensions.get('window').height * 0.45,
    width: '80%',
    flexDirection: 'row',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textdate: {
    color: Colors.GREY_DARK,
    fontSize: 10,
    fontFamily: fontFamily.Medium,
    marginLeft: Dimensions.get('window').height * 0.01,
    width: Dimensions.get('window').width * 0.5,
  },
  icondate: {
    width: Dimensions.get('window').width * 0.042,
    height: Dimensions.get('window').height * 0.021,
    marginLeft:  Dimensions.get('window').height * 0.13,
    resizeMode: 'stretch'

  },

  bill: {
    width: 345,
    height: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e0e0e0',
    order: 3,
    flexGrow: 0,
    marginTop: 10,

  },

  groupmoney: {
    marginTop: Dimensions.get('window').height * 0.23,
    marginLeft: - Dimensions.get('window').height * 0.05,
    width: '30%',
    flexDirection: 'row',
    // borderTopStartRadius: 5,
    // borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',



  },
  groupmoney1: {
    marginTop: - Dimensions.get('window').height * 0.03,
    //marginLeft: - Dimensions.get('window').height * 0.05,
    //width: '30%',
    flexDirection: 'row',
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  money: {
    color: '#ff0000',
    fontSize: 12,
    fontFamily: fontFamily.Bold,
    marginLeft: - Dimensions.get('window').height * 0.36,


  },
  textt: {
    color: Colors.GREY_DARK,
    fontSize: 13,
    fontFamily: fontFamily.Bold,
    marginLeft: - Dimensions.get('window').height * 0.21,
  },
})