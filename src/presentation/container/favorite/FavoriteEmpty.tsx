import { StyleSheet, View, Image, Text } from 'react-native';
import React, { useState } from 'react';


import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { Header, TextPlus, ViewSwitcher } from '@components';
import { ALERT_SUCCESS_PLUS, ICON_DELETE, fontFamily } from '@assets';
import { Colors } from '@resources';

type PropsType = NativeStackScreenProps<
    WelcomeTeamStackParamList,
    'FavoriteEmpty'
>;

const _FavoriteEmpty: React.FC<PropsType> = props => {
    const { navigation } = props;
    const [listViewType, setListViewType] = useState<'list' | 'grid'>('list');

    return (
        <SafeAreaView style={_styles.container}>
            <Header
                textCenter={'My favorite'}
                iconRight={ICON_DELETE}
                eventRight={() => console.log('EventRight')}
                isCheck={false}
            />
            <ViewSwitcher
                quantityEstates={0}
                onTabChange={setListViewType} />
            <View style={_styles.nextView}>
                <Image source={ALERT_SUCCESS_PLUS} style={{ height: 142, width: 142 }} />
                <TextPlus
                    text={"Your favorite page is\nempty"}
                    textBolds={["empty"]}
                    numberOfLines={2}
                    viewStyle={{flex: 0.15, justifyContent: 'center'}}
                    textStyle={StyleSheet.flatten([_styles.text])}
                    boldStyle={StyleSheet.flatten([_styles.textBold])}
                />
                <Text style={_styles.textMini}>Click add button above to start exploring and choose{'\n'}your favorite estates. </Text>
            </View>
        </SafeAreaView>
    );
};

const _styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    nextView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 39,
    },
    text: {
        fontSize: 25,
        color: Colors.GREY_DARK,
        textAlign: 'center',
        lineHeight: 40,
        letterSpacing: 0.75,
        // marginTop: 14,
        fontFamily: fontFamily.Semibold,
    },
    textBold: {
        fontSize: 25,
        color: Colors.BLUE_DARK,
        alignItems: 'center',
        lineHeight: 40,
        marginTop: 14,
        fontFamily: fontFamily.Black,
    },
    textMini: {
        flex: 0.1,
        fontSize: 14,
        color: Colors.GREY_MEDIUM_1,
        textAlign: 'center',
        lineHeight: 20,
        letterSpacing: 0.36,
        marginTop: 20,
        fontFamily: fontFamily.Regular,
    },
});
export const FavoriteEmpty = React.memo(_FavoriteEmpty);
