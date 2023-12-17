import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Colors, DimensionsStyle } from '@resources';
import { BACKGROUND_WHITE, EMAIL, FAVORITE_BLUE, ICON_BACK, LOCATION, MESSAGING, MOMO, TOWER, VIETTEL_PAY, ZALO_PAY, fontFamily, } from '@assets';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { BackgroundApp, Button, ButtonArrow, Header, Input, TextPlus } from '@components';

type PropsType = NativeStackScreenProps<
    WelcomeTeamStackParamList,
    'Review'
>;

const [text, setText] = React.useState('')
const [textNote, setTextNote] = React.useState('')


const _Review: React.FC<PropsType> = props => {
    const { navigation } = props;




    return (
        <BackgroundApp source={BACKGROUND_WHITE}>
            <Header
                iconLeft={ICON_BACK}
                textCenter='Đặt tour'
            />
            <ScrollView style={_styles.container}>
                <SafeAreaView style={_styles.itemEstates}>
                    <SafeAreaView style={_styles.cardEstates}>
                        <SafeAreaView style={_styles.gr1}>
                            <Image source={TOWER} style={_styles.imageEstates} />
                            <Image source={FAVORITE_BLUE} style={_styles.iconheart} />
                            {/* <SafeAreaView style={_styles.boxname}>
                                <Text style={_styles.name}>Phổ biến</Text>
                            </SafeAreaView> */}
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
                {/* <SafeAreaView style={_styles.boxCalender}>
                    <SafeAreaView style={_styles.boxCard}>
                        <Text style={_styles.title}>Kế Hoạch Chuyến Đi</Text>
                        <SafeAreaView style={_styles.card}>
                            <Input
                                imageIconLeft={CALENDAR}
                                imageIconRight={CALENDAR}
                                iconRightStyle={{ opacity: 0 }}
                                label='Ngày bắt đầu'
                                value={text}
                                onChangeText={(text) => setText(text)}
                                viewStyle={{
                                    marginTop: '5%', marginBottom: '3%', width: '30%', marginVertical: 8,
                                    marginHorizontal: 8, borderRadius: 25, marginLeft: '15%'
                                }}
                            />
                            <Input
                                imageIconLeft={CALENDAR}
                                imageIconRight={CALENDAR}
                                iconRightStyle={{ opacity: 0 }}
                                label='Ngày kết thúc'
                                value={text}
                                onChangeText={(text) => setText(text)}
                                viewStyle={{
                                    marginTop: '5%', marginBottom: '3%', width: '30%', marginVertical: 8,
                                    marginHorizontal: 2, borderRadius: 25, marginRight: '20%'
                                }}
                            />

                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView> */}
                <SafeAreaView style={_styles.boxNote}>
                    <Text style={_styles.title}>Ghi chú</Text>
                    <SafeAreaView style={_styles.cardNote}>
                        <Input
                            imageIconLeft={MESSAGING}
                            imageIconRight={MESSAGING}
                            iconRightStyle={{ opacity: 0 }}
                            label='Viết ghi chú vào đây'
                            value={textNote}
                            onChangeText={(textNote) => setTextNote(textNote)}
                            viewStyle={{ marginTop: '7%', marginBottom: '3%', width: '80%', borderRadius: 25, }}

                        />
                    </SafeAreaView>

                </SafeAreaView>

                <Text style={_styles.titlePay}>Thanh toán</Text>
                <SafeAreaView style={_styles.groupreview}>
                <Image source={MOMO}  style={_styles.momo}/>
                <Image source={ZALO_PAY}   style={_styles.zalo}/>
                <Image source={VIETTEL_PAY}   style={_styles.viettel}/>
                </SafeAreaView>

                <SafeAreaView style={_styles.boxButton}>
                <Button title='Tiếp' onPress={() => { }} viewStyle={{ width: 200, marginTop: '20%', marginRight:'10%' }} imageIconLeft={EMAIL} imageIconRight={MESSAGING}></Button>
                {/* <ButtonArrow imageIcon={ARROW_RIGHT_LINE} onPress={() => { }} shadow={true} viewStyle={{ marginTop: '20%' }}></ButtonArrow> */}
                </SafeAreaView>
            </ScrollView>

        </BackgroundApp>
    )
}

export const Review = React.memo(_Review);

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
    boxCalender: {},
    boxCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: - Dimensions.get('screen').height * 0.08,
        marginVertical: - Dimensions.get('screen').height * 0.02,
    },
    title: {
        fontSize: 18,
        color: Colors.GREY_DARK,
        letterSpacing: 0.54,
        fontFamily: fontFamily.Bold,
        marginLeft: Dimensions.get('screen').width * 0.07,
    },

    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: - Dimensions.get('screen').width * 0.35,
    },
    boxNote: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Dimensions.get('screen').height * 0.02,
        marginVertical: - Dimensions.get('screen').height * 0.02,
    },
    cardNote: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: - Dimensions.get('screen').width * 0.22,
    },
    titlePay: {
        fontSize: 18,
        color: Colors.GREY_DARK,
        letterSpacing: 0.54,
        fontFamily: fontFamily.Bold,
        marginLeft: Dimensions.get('screen').width * 0.07,
        marginTop: Dimensions.get('screen').height * 0.02,
    },
    itemPay: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 8,
        margin: Dimensions.get('screen').width * 0.02,
        width: Dimensions.get('screen').width * 0.55,
        height: Dimensions.get('screen').height * 0.25,
        borderRadius: 25,
        marginTop: - Dimensions.get('screen').height * 0.01,
        marginLeft: - Dimensions.get('screen').width * 0.02,
        marginBottom: Dimensions.get('screen').height * 0.1,

    },
    cardPay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    grPay1: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: - Dimensions.get('screen').height * 0.08,
        marginLeft: - Dimensions.get('screen').width * 0.5,
    },
    bogocPay: {
        width: Dimensions.get('window').width * 0.48,
        height: Dimensions.get('window').height * 0.26,
        marginTop: - Dimensions.get('screen').height * 0.05,
        marginLeft: Dimensions.get('screen').width * 0.1,
        flexShrink: 0,
        resizeMode: 'stretch'

    },
    iconPay: {
        marginTop: - Dimensions.get('screen').height * 0.32,
        marginLeft: - Dimensions.get('screen').width * 1.2,
        width: 40,
        height: 40,
        resizeMode: 'stretch',
    },
    imagePay: {
        width: Dimensions.get('window').width * 0.37,
        height: Dimensions.get('window').height * 0.2,
        resizeMode: 'stretch',
        marginTop: - Dimensions.get('screen').height * 0.235,
        marginLeft: Dimensions.get('screen').width * 0.38,
    },
    grPay: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: - Dimensions.get('window').height * 0.05,
        marginLeft: Dimensions.get('window').height * 0.08,
    },

    groupreview: {
        marginTop: Dimensions.get('window').height * 0.02,
        marginLeft: Dimensions.get('window').height * 0.02,
        width: '100%',
        flexDirection: 'row',
        borderTopStartRadius: 5,
        borderBottomStartRadius: 5,
       
    },

    iconPayment: {
        resizeMode: 'stretch',
        marginTop: - Dimensions.get('window').height * 0.215,
        width: Dimensions.get('window').width * 0.02,
        height: Dimensions.get('window').height * 0.01,
        marginHorizontal: 2,

    },
    textPay: {
        marginTop: - Dimensions.get('window').height * 0.22,
        marginHorizontal: 10,
        color: Colors.WHITE,
        fontSize: 18,
        fontFamily: fontFamily.Medium,
        marginRight: - Dimensions.get('screen').width * 0.03,

    },
    groupmini: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: - Dimensions.get('window').height * 0.04,
        marginLeft: - Dimensions.get('window').height * 0.21,
    },
    textmini: {
        fontSize: 10,
        color: Colors.WHITE,
        fontFamily: fontFamily.Medium,
        marginLeft: Dimensions.get('screen').width * 0.05,
        marginTop: - Dimensions.get('screen').height * 0.01,
        marginVertical: 2
    },
    textPrice: {
        fontSize: 14,
        color: Colors.WHITE,
        fontFamily: fontFamily.Medium,
        marginLeft: Dimensions.get('screen').width * 0.1,
        marginVertical: 2,
        marginBottom: Dimensions.get('screen').height * 0.05,
    },
    imageview: {
        marginTop: - Dimensions.get('screen').height * 0.04,
        marginLeft: Dimensions.get('screen').width * 0.13,
        width: 30,
        height: 30,
        resizeMode: 'stretch',
    },
    boxVoucher: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: - Dimensions.get('screen').height * 0.08,
        marginVertical: - Dimensions.get('screen').height * 0.02,
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
    momo:{
        marginLeft:  Dimensions.get('screen').width * 0.03,
    },
    zalo:{
        marginLeft: Dimensions.get('screen').width * 0.05,
    },
    viettel:{
        marginLeft: Dimensions.get('screen').width * 0.05,
    },
})
