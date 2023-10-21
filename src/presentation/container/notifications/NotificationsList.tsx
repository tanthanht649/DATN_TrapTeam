import { StyleSheet, Text } from 'react-native';
import React from 'react';


import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { Header } from '@components';
import { ICON_BACK, ICON_DELETE, fontFamily } from '@assets';
import { Colors } from '@resources';

type PropsType = NativeStackScreenProps<
    WelcomeTeamStackParamList,
    'NotificationsList'
>;

const _NotificationsList: React.FC<PropsType> = props => {
    const { navigation } = props;
    return (
        <SafeAreaView style={_styles.container}>
            <Header
                textCenter={'Thông báo'}
                iconLeft={ICON_BACK}
                iconRight={ICON_DELETE}
                eventLeft={() => navigation.goBack()}
                eventRight={() => console.log('EventRight')}
                isCheck={false}
            />
            <Text style={_styles.styleTitle}>Today</Text>
        </SafeAreaView>
    );
};

const _styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    styleTitle: {
        fontSize: 18,
        fontFamily: fontFamily.Black,
        color: Colors.GREY_DARK_1,
        marginHorizontal: 20,
        marginTop: 20,
        letterSpacing:0.54,
    },
});
export const NotificationsList = React.memo(_NotificationsList);
