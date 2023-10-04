import { StyleSheet, Text } from 'react-native';
import React from 'react';


import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';

type PropsType = NativeStackScreenProps<
    WelcomeTeamStackParamList,
    'FavoriteHorizontal'
>;

const _FavoriteHorizontal: React.FC<PropsType> = props => {
    const { navigation } = props;
    return (
        <SafeAreaView style={_styles.container}>
            <Text>FavoriteHorizontal</Text>
        </SafeAreaView>
    );
};

const _styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
export const FavoriteHorizontal = React.memo(_FavoriteHorizontal);
