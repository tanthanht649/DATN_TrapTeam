import { StyleSheet, Text, Image, ScrollView, Pressable, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import {
    BACKGROUND_HOME,
    BACKGROUND_WHITE,
    EMAIL,
    FIND,
    HEART,
    ICON_BACK,
    LOCATION,
    MESSAGING,
    NOTIFICATION,
    NOTIFICATION_SELECT,
    PLUS,
    START_SMALL,
    STAR_5,
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
    'AddReview'
>;
const [textNote, setTextNote] = React.useState('')

const _AddReview: React.FC<PropsType> = props => {
    const { navigation } = props;
    return (
        <BackgroundApp source={BACKGROUND_WHITE}>
            <Header
                iconLeft={ICON_BACK}
                textCenter='Add Review'
            />
            <SafeAreaView style={_styles.container}>
                <TextPlus
                    textBolds={["Hi","overall experience?"]}
                    text={"Hi, how was your overall \nexperience?"}
                    boldStyle={{ fontFamily: fontFamily.Bold, color: Colors.GREY_DARK_1, fontSize: 25, lineHeight: 40, letterSpacing: 0.75, }}
                    textStyle={
                        {
                            color: Colors.GREY_DARK_1, fontSize: 25, lineHeight: 40,
                            letterSpacing: 0.75, marginLeft: '10%', marginTop: '5%', width: '100%'
                        }
                    }
                    numberOfLines={2}
                />

                <Text style={_styles.text}>lorem ipsum dolor sit amet</Text>
                <SafeAreaView  style={_styles.group}>
                    <Image source={STAR_5} style={_styles.imagereview} />
                    <Image source={STAR_5} style={_styles.imagereview} />
                    <Image source={STAR_5} style={_styles.imagereview} />
                    <Image source={STAR_5} style={_styles.imagereview} />
                    <Image source={STAR_5} style={_styles.imagereview} />
                    <Text style={_styles.title}>0.0</Text>


                </SafeAreaView>
                <Input
                    imageIconLeft={MESSAGING}
                    imageIconRight={MESSAGING}
                    iconRightStyle={{ opacity: 0 }}
                    label='Write your experience in here (optional)'
                    value={textNote}
                    onChangeText={(textNote) => setTextNote(textNote)}
                    viewStyle={{ marginTop: '8%', marginBottom: '3%', width: '82%',height:'15%', borderRadius: 25, marginLeft:'9%' }}

                />
                <SafeAreaView style={_styles.box}>
                    <Image source={PLUS} style={_styles.add} />
                </SafeAreaView>

                <Button title='Submit' onPress={() => { }} viewStyle={{ width: 250, marginTop: '40%' }} imageIconLeft={EMAIL} imageIconRight={MESSAGING}></Button>

            </SafeAreaView>


        </BackgroundApp>
    )
}

export const AddReview = React.memo(_AddReview);

const _styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    text: {
        color: Colors.GREY_MEDIUM,
        fontFamily: fontFamily.Medium,
        fontSize: 12,
        marginTop: Dimensions.get('screen').height * 0.03,
        marginLeft: Dimensions.get('screen').width * 0.11,

    },
    group: {
        marginTop: Dimensions.get('window').height * 0.08,
        marginLeft: Dimensions.get('window').height * 0.04,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    imagereview: {
        resizeMode: 'stretch',
        marginTop: - Dimensions.get('window').height * 0.03,
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').height * 0.05,
        marginHorizontal: 6,

    },
    title: {
        fontSize: 24,
        color: Colors.BLACK,
        letterSpacing: 0.54,
        fontFamily: fontFamily.Bold,
        marginLeft: Dimensions.get('screen').width * 0.035,
        marginTop: - Dimensions.get('window').height * 0.025,
      },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 25,
        borderColor: Colors.GRAY_SEARCH,
        backgroundColor: Colors.GRAY_SEARCH,
        width: DimensionsStyle.width * 0.18,
        height: DimensionsStyle.width * 0.18,
        marginTop: Dimensions.get('screen').height * 0.02,
        marginLeft: Dimensions.get('screen').width * 0.1,
    },
    add: {
        resizeMode: 'stretch',
        marginTop: - Dimensions.get('screen').height * 0.01,
        marginLeft: Dimensions.get('screen').width * 0.06,
        width: Dimensions.get('window').width * 0.05,
        height: Dimensions.get('window').height * 0.025,
    },
})