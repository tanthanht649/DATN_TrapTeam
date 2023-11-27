import { StyleSheet, Text, View, Dimensions, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Colors, DimensionsStyle } from '@resources';
import { BACKGROUND_WHITE, CALENDAR, ICON_BACK, ICON_LOGOUT, SALE, TICKET, TICKET_2, fontFamily, } from '@assets';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { BackgroundApp, Button, Header, TextPlus } from '@components';





type PropsType = NativeStackScreenProps<
    WelcomeTeamStackParamList,
    'HomePromotion'
>;

const _HomePromotion: React.FC<PropsType> = props => {
    const { navigation } = props;

    return (
        <BackgroundApp source={BACKGROUND_WHITE}>
            <Header
                iconLeft={ICON_BACK}
                iconRight={ICON_LOGOUT}
            />
            <SafeAreaView style={_styles.container}>
                <SafeAreaView >
                    <Image source={SALE} style={_styles.image} />
                    <Text style={_styles.text}>Halloween Sale!</Text>
                    <Text style={_styles.textmini}>All disccount up to 60%</Text>
                </SafeAreaView>

                <TextPlus
                    textBolds={['Halloween Sale']}
                    text={"Limited time Halloween \nSale is coming back!"}
                    boldStyle={{ fontFamily: fontFamily.Bold, color: Colors.GREY_DARK_1, fontSize: 25, lineHeight: 40, letterSpacing: 0.75, }}
                    textStyle={
                        {
                            color: Colors.GREY_DARK_1, fontSize: 25, lineHeight: 40,
                            letterSpacing: 0.75, marginLeft: '10%', marginTop: '35%', width: '100%'
                        }
                    }
                    numberOfLines={2}
                />
                <SafeAreaView style={_styles.grDate}>
                    <Image source={CALENDAR} style={_styles.iconDate} />
                    <Text style={_styles.textDate}>October 27, 2022</Text>
                </SafeAreaView>
                <SafeAreaView style={_styles.item}>
                    <SafeAreaView style={_styles.card}>
                        <SafeAreaView style={_styles.box}>
                            <Image source={TICKET} style={_styles.iconTicket} />
                        </SafeAreaView>
                        <Text style={_styles.titleTicket}>HLWN40</Text>
                        <Text style={_styles.textTicket}>Use this coupon to get 40% off on your transaction</Text>
                    </SafeAreaView>

                </SafeAreaView>
                <ScrollView style={_styles.grtitle}>
                    <Text style={_styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</Text>
                    <Text style={_styles.title1}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</Text>
                </ScrollView>
                <Button
                    title='Tìm hiểu thêm'
                    textStyle={{ color: Colors.WHITE }}
                    viewStyle={{ width: '70%', marginTop: '15%', marginVertical: 40, }}
                    imageIconLeft={ICON_BACK}
                    imageIconRight={ICON_BACK}
                    viewIconLeft={{ opacity: 0 }}
                    viewIconRight={{ opacity: 0 }}
                    onPress={() => navigation.navigate('Test')}
                />
            </SafeAreaView>

        </BackgroundApp>
    )
}

export const HomePromotion = React.memo(_HomePromotion);

const _styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },


    image: {
        width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').height * 0.22,
        borderRadius: 25,
        margin: Dimensions.get('screen').width * 0.01,
        flexShrink: 0,
        opacity: 0.5,
        marginTop: - Dimensions.get('screen').height * 0.04,
        marginLeft: Dimensions.get('screen').width * 0.1,
        marginVertical: - Dimensions.get('screen').height * 0.02,
        backgroundColor: Colors.BLACK,
        resizeMode: 'stretch'

    },
    text: {
        color: Colors.WHITE,
        fontFamily: fontFamily.Bold,
        fontSize: 18,
        letterSpacing: 0.54,
        marginTop: - Dimensions.get('screen').height * 0.18,
        marginLeft: Dimensions.get('screen').width * 0.15,
        width: '100%',
    },
    textmini: {
        color: Colors.WHITE,
        fontFamily: fontFamily.Medium,
        fontSize: 12,
        marginTop: Dimensions.get('screen').height * 0.01,
        marginLeft: Dimensions.get('screen').width * 0.15,

    },
    grDate: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: - Dimensions.get('screen').height * 0.02,
    },
    iconDate: {
        resizeMode: 'stretch',
        width: Dimensions.get('window').width * 0.05,
        height: Dimensions.get('window').height * 0.02,
        marginLeft: - Dimensions.get('window').height * 0.27,
    },
    textDate: {
        fontSize: 8,
        letterSpacing: 0.24,
        fontFamily: fontFamily.Medium,
        color: Colors.GREY_DARK,
        marginLeft: - Dimensions.get('window').height * 0.62,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 10,
        margin: Dimensions.get('screen').width * 0.02,
        width: Dimensions.get('screen').width * 0.85,
        height: Dimensions.get('screen').height * 0.08,
        borderRadius: 25,
        backgroundColor: Colors.GREY_SOFT,
        marginTop: Dimensions.get('screen').height * 0.05,
        marginLeft: Dimensions.get('screen').width * 0.07,
        marginBottom: Dimensions.get('screen').height * 0.05,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
        borderColor: Colors.WHITE,
        backgroundColor: Colors.GREEN_1,
        width: DimensionsStyle.width * 0.14,
        height: DimensionsStyle.width * 0.14,
        marginTop: - Dimensions.get('screen').height * 0.075,
        marginLeft: Dimensions.get('screen').width * 0.07
    },
    iconTicket: {
        resizeMode: 'stretch',
        width: Dimensions.get('window').width * 0.08,
        height: Dimensions.get('window').height * 0.04,
        marginLeft: Dimensions.get('screen').width * 0.03,
        marginTop: - Dimensions.get('screen').height * 0.025,

    },

    titleTicket: {
        color: Colors.GREY_DARK,
        fontFamily: fontFamily.Bold,
        fontSize: 18,
        marginLeft: Dimensions.get('window').height * 0.14,
        marginTop: - Dimensions.get('screen').height * 0.1,
        width: '100%',
    },
    textTicket: {
        color: Colors.GREY_MEDIUM_1,
        fontFamily: fontFamily.Medium,
        fontSize: 9,
        marginTop: - Dimensions.get('screen').height * 0.03,
        marginLeft: - Dimensions.get('screen').width * 0.44,
        width: '100%',
    },
    title: {
        color: Colors.GREY_MEDIUM_1,
        fontFamily: fontFamily.Medium,
        fontSize: 12,
        lineHeight: 20,
        marginTop: Dimensions.get('screen').height * 0.01,
        width: '80%',
        marginHorizontal: 40,

    },
    title1: {
        color: Colors.GREY_MEDIUM_1,
        fontFamily: fontFamily.Medium,
        fontSize: 12,
        lineHeight: 20,
        marginTop: Dimensions.get('screen').height * 0.02,
        width: '80%',
        marginHorizontal: 40,
        marginVertical: 10,

    },
    grtitle: {
        height: '70%',
        marginVertical: -5,
    },

})