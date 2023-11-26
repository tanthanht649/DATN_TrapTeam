import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Colors, DimensionsStyle } from '@resources';
import { APARTMENT, ARROW_LEFT_LINE, ARROW_RIGHT_LINE, BACKGROUND_WHITE, CALENDAR, EMAIL, FAVORITE_BLUE, HEART, ICON_BACK, ICON_LOGOUT, LOCATION, MESSAGING, MOMO, OVAN, PAYPAL, SALE, TICKET, TICKET_2, TOWER, fontFamily, } from '@assets';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { BackgroundApp, Button, ButtonArrow, Header, Input, TextPlus } from '@components';

type PropsType = NativeStackScreenProps<
    WelcomeTeamStackParamList,
    'Summary'
>;

const [text, setText] = React.useState('***********123')


const _Summary: React.FC<PropsType> = props => {
    const { navigation } = props;

    return (
        <BackgroundApp source={BACKGROUND_WHITE}>
            <Header
                iconLeft={ICON_BACK}
                textCenter='Thanh toán'
            />
            <ScrollView style={_styles.container}>
                <SafeAreaView style={_styles.itemEstates}>
                    <SafeAreaView style={_styles.cardEstates}>
                        <SafeAreaView style={_styles.gr1}>
                            <Image source={TOWER} style={_styles.imageEstates} />
                            <Image source={FAVORITE_BLUE} style={_styles.iconheart} />
                           
                        </SafeAreaView>
                    </SafeAreaView>
                    <SafeAreaView style={_styles.grEstates}>
                        <Text style={_styles.textEstates}>Hồ Hoàn Kiếm</Text>
                        <SafeAreaView style={_styles.grouplocation}>
                            <Image source={LOCATION} style={_styles.iconlocation} />
                            <Text style={_styles.textlocation}>Hà Nội, Việt Nam</Text>
                        </SafeAreaView>
                       
                    </SafeAreaView>
                </SafeAreaView>
                <Text style={_styles.titlePay}>Chi Tiết Thanh Toán</Text>
                <SafeAreaView style={_styles.boxOrder}>
                    <SafeAreaView style={_styles.cardOrder}>
                        <SafeAreaView style={_styles.information}>
                            <Text style={_styles.time}>    Người lớn x2</Text>
                            <SafeAreaView>
                                <Text style={_styles.month}>  13, 380, 000 VND</Text>
                            </SafeAreaView>
                        </SafeAreaView>
                        <SafeAreaView style={_styles.information1}>
                            <Text style={_styles.payment}> Trẻ em x3</Text>
                            <SafeAreaView>
                                <Text style={_styles.tien}> 1, 800, 000 VND</Text>
                            </SafeAreaView>
                        </SafeAreaView>
                        <SafeAreaView style={_styles.information2}>
                            <Text style={_styles.discount}> Giảm Giá</Text>
                            <SafeAreaView>
                                <Text style={_styles.tienam}>    - 380, 000 VND </Text>
                            </SafeAreaView>
                        </SafeAreaView>
                        <SafeAreaView style={_styles.bill}>
                            <SafeAreaView style={_styles.information2}>
                                <Text style={_styles.total}>Tổng</Text>
                                <SafeAreaView>
                                    <Text style={_styles.tiensave}>14, 800, 000 VND</Text>
                                </SafeAreaView>
                            </SafeAreaView>
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
             
                <SafeAreaView style={_styles.boxVoucher}>
                    <Text style={_styles.titleVoucher}>Phương thức thanh toán</Text>
                    <TouchableOpacity style={_styles.btnSeeAll}>
                        <Text style={_styles.seeAll}>thay đổi</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <Input
                 imageIconLeft={MOMO}
                 imageIconRight={MESSAGING}
                 iconRightStyle={{ opacity: 0 }}
                 label=''
                 value={text}
                 onChangeText={(text) => setText(text)}
                 viewStyle={{ marginTop: '6%', width: '90%', borderRadius: 25, marginLeft:'5%' }}

                />
                 <SafeAreaView style={_styles.boxButton}>
                <Button title='Thanh toán' onPress={() => { }} viewStyle={{ width: 200, marginTop: '7%',  marginRight:'10%'}} imageIconLeft={EMAIL} imageIconRight={MESSAGING}></Button>
                {/* <ButtonArrow imageIcon={ARROW_RIGHT_LINE} onPress={() => { }} shadow={true} viewStyle={{ marginTop: '7%' }}></ButtonArrow> */}
                </SafeAreaView>

            </ScrollView>
        </BackgroundApp>
    )
}

export const Summary = React.memo(_Summary);

const _styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    itemEstates: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 8,
        margin: Dimensions.get('screen').width * 0.02,
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.2,
        borderRadius: 25,
        backgroundColor: Colors.GREY_SOFT,
        marginTop: Dimensions.get('screen').height * 0.02,
        marginLeft: Dimensions.get('screen').width * 0.05,
        marginBottom: Dimensions.get('screen').height * 0.02,
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
        marginLeft: Dimensions.get('screen').width * 0.22,
    },
    imageEstates: {
        width: Dimensions.get('screen').width * 0.43,
        height: Dimensions.get('screen').height * 0.19,
        marginTop: - Dimensions.get('screen').height * 0.03,
        marginLeft: - Dimensions.get('screen').width * 0.06,
        borderRadius: 25,
        flexShrink: 0,
        resizeMode: 'stretch'

    },
    iconheart: {
        marginTop: - Dimensions.get('screen').height * 0.16,
        marginLeft: - Dimensions.get('screen').width * 0.42,
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
        marginLeft: - Dimensions.get('screen').width * 0.1,
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
        marginLeft: Dimensions.get('window').height * 0.1,
    },

    grouplocation: {
        marginTop: Dimensions.get('window').height * 0.05,
        marginLeft: - Dimensions.get('window').height * 0.23,
        width: '100%',
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
        marginLeft:  Dimensions.get('window').height * 0.2,
    },
    textlocation: {
        color: Colors.GREY_DARK,
        fontSize: 10,
        fontFamily: fontFamily.Medium,

    },
    iconlocation: {
        width: Dimensions.get('window').width * 0.05,
        height: Dimensions.get('window').height * 0.02,
        marginLeft: - Dimensions.get('window').height * 0.23,
        resizeMode: 'stretch'

    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
        borderColor: Colors.WHITE,
        backgroundColor: Colors.WHITE,
        width: DimensionsStyle.width * 0.15,
        height: DimensionsStyle.width * 0.15,
        marginTop: Dimensions.get('screen').height * 0.25,
        marginLeft: - Dimensions.get('screen').width * 0.55,
    },
    nameR: {
        color: Colors.GREY_DARK,
        fontSize: 10,
        marginTop: - Dimensions.get('screen').height * 0.015,
        marginLeft: Dimensions.get('screen').width * 0.05,
    },
    titlePay: {
        fontSize: 18,
        color: Colors.GREY_DARK,
        letterSpacing: 0.54,
        fontFamily: fontFamily.Bold,
        marginLeft: Dimensions.get('screen').width * 0.07,
        marginTop: Dimensions.get('screen').height * 0.01,
    },
   
   
    
      month: {
        fontFamily: fontFamily.Medium,
        fontSize: 12,
        color: Colors.GREY_MEDIUM,
        marginTop: - Dimensions.get('screen').height * 0.01,
        marginLeft:  Dimensions.get('screen').width * 0.32,
      },
    
      time: {
        marginTop:  Dimensions.get('screen').height * 0.02,
        marginLeft: -Dimensions.get('screen').width * 0.01,
        fontFamily: fontFamily.Medium,
        fontSize: 12,
        color: Colors.GREY_MEDIUM,
      },
      payment:{
        fontFamily: fontFamily.Medium,
        fontSize: 12,
        color: Colors.GREY_MEDIUM,
        marginLeft: Dimensions.get('screen').width * 0.01,
        marginTop: - Dimensions.get('screen').height * 0.03,
      },
      tien: {
        fontFamily: fontFamily.Medium,
        fontSize: 12,
        color: Colors.GREY_MEDIUM,
        marginTop: - Dimensions.get('screen').height * 0.06,
        marginLeft:  Dimensions.get('screen').width * 0.4,
      },
      discount:{ 
      marginTop: - Dimensions.get('screen').height * 0.07,
      marginLeft: Dimensions.get('screen').width * 0.02,
      fontFamily: fontFamily.Medium,
      fontSize: 12,
      color: Colors.GREY_MEDIUM,
    },
      tienam:{ fontFamily: fontFamily.Medium,
        fontSize: 12,
        color: Colors.GREY_MEDIUM,
        marginTop: - Dimensions.get('screen').height * 0.1,
        marginLeft:  Dimensions.get('screen').width * 0.4,
    },
      information: {
        flexDirection: 'row',
        justifyContent: 'space-between',
       // marginTop: Dimensions.get('screen').height * 0.1,
       // marginLeft: - Dimensions.get('screen').width * 0.05,
       marginVertical: 4,
    
      },
      information1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
       // marginTop: Dimensions.get('screen').height * 0.1,
       // marginLeft: - Dimensions.get('screen').width * 0.05,
       marginVertical: 4,
    
      },
      information2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
       // marginTop: Dimensions.get('screen').height * 0.1,
       // marginLeft: - Dimensions.get('screen').width * 0.05,
       marginVertical: 4,
    
      },
    
      cardOrder: {
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.18,
        justifyContent:'center',
        alignItems:'center',
        flexShrink:0,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Colors.GREY_SOFT_2,
        backgroundColor: Colors.WHITE,
        borderTopLeftRadius:25,
        borderTopRightRadius: 25,

    
      },
      boxOrder: {
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.35,
        flexShrink:0,
        marginLeft: Dimensions.get('screen').width * 0.05,
       
    
      },
      bill: {
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.08,
        justifyContent:'center',
        alignItems:'center',
        flexShrink:0,
        backgroundColor: Colors.GRAY_SEARCH,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginTop: -Dimensions.get('screen').height * 0.06,
    
    
      },
      total: {
        fontSize: 14,
        color: Colors.GREY_DARK,
        fontFamily: fontFamily.Bold,
        marginLeft:  Dimensions.get('screen').width * 0.05,
        marginTop: -Dimensions.get('screen').height * 0.025,
    },
    tiensave: {
        fontSize: 14,
        color: Colors.GREY_DARK,
        fontFamily: fontFamily.Bold,
        marginLeft: Dimensions.get('screen').width * 0.37,
        marginTop: -Dimensions.get('screen').height * 0.055,
      },
      boxVoucher: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: - Dimensions.get('screen').height * 0.08,
        marginVertical: - Dimensions.get('screen').height * 0.02,
        marginBottom: Dimensions.get('screen').height * 0.01,
    },

    titleVoucher: {
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
    boxButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: Dimensions.get('screen').width * 0.15,
        marginVertical: 8,
        marginHorizontal: 8,

    },
})