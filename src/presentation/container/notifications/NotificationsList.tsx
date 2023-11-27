import { Image, ImageSourcePropType, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';


import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { Header } from '@components';
import { AVT, HEART_ACTIVE, ICON_BACK, ICON_DELETE, LOCATION, SHAPE_1, SHAPE_2, SHAPE_3, START_3, TRASH_2, fontFamily } from '@assets';
import { Colors } from '@resources';
import { SwipeListView } from 'react-native-swipe-list-view';

type PropsType = NativeStackScreenProps<
    WelcomeTeamStackParamList,
    'NotificationsList'
>;

export interface Item {
    id: number;
    image?: ImageSourcePropType;
    name: string;
    content: string;
    avatar: ImageSourcePropType;
    time: string;
}


const _NotificationsList: React.FC<PropsType> = props => {
    const { navigation } = props;
    const [data, setData] = useState<Item[]>([
        { id: 1, image: SHAPE_1, name: "Emmett Perry", content: "Just messaged you. Check the message\nin message tab.", time: "10 phút trước", avatar: AVT, },
        { id: 2, image: SHAPE_2, name: "Emmett Perry", content: "Just giving 5 Star review on your listing\nFairview Apartment", time: "10 phút trước", avatar: AVT, },
        { id: 3, image: SHAPE_3, name: "Emmett Perry", content: "Just messaged you. Check the message\nin message tab.", time: "10 phút trước", avatar: AVT, },
    ]);
    const onDelete = (itemId: number) => {
        console.log("Id: " + itemId);
        const updatedData = data.filter((item) => item.id !== itemId);
        setData(updatedData);
    };
    const renderItem = ({ item }: { item: Item }) => {
        return (
            <View style={_styles.itemContainer}>
                <View style={_styles.ViewAvatar}>
                    <Image
                        source={item.avatar}
                        style={_styles.avatar}
                        resizeMode='cover'
                    />
                </View>
                <View style={_styles.ViewItem}>
                    <View style={_styles.Viewcontent}>
                        <Text style={_styles.name}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                            <Text style={_styles.content}>{item.content}</Text>
                        </View>
                        <Text style={_styles.time}>{item.time}</Text>
                    </View>
                    {item.image && (
                        <View style={_styles.ViewImage}>
                            <Image
                                source={item.image}
                                style={_styles.image}
                                resizeMode='cover'
                            />
                        </View>
                    )}
                </View>
            </View>
        );
    };
    const renderHiddenItem = ({ item }: ListRenderItemInfo<Item>) => (
        <View style={_styles.hiddenItem}>
            <TouchableOpacity
                style={_styles.deleteButton}
                onPress={onDelete.bind(this, item.id)}
            >
                <Image source={TRASH_2} style={_styles.deleteIcon} />
            </TouchableOpacity>
        </View>
    );
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
            <SwipeListView
                data={data}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                keyExtractor={(item) => item.id.toString()}
                rightOpenValue={-80} // Điều chỉnh độ rộng của mục ẩn khi cần thiết
                showsVerticalScrollIndicator={false}
            />
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
        marginVertical: 20,
        letterSpacing: 0.54,
    },
    ViewItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginBottom: 10,
        backgroundColor: Colors.GREY_SOFT,
        paddingVertical: 10,
        borderRadius: 25,
    },
    ViewAvatar: {
        borderRadius: 25,
        borderWidth: 3,
        borderColor: Colors.WHITE,
        marginRight: 15,
    },
    avatar: {
        width: 50,
        height: 50,
    },
    Viewcontent: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 8,
        gap: 4,
        marginRight: 15,
    },
    name: {
        fontSize: 14,
        fontFamily: fontFamily.Bold,
        color: Colors.GREY_DARK_1,
        letterSpacing: 0.36,
    },
    content: {
        fontSize: 12,
        fontFamily: fontFamily.Medium,
        color: Colors.GREY_MEDIUM_1,
        letterSpacing: 0.3,
        lineHeight: 20,
        flexWrap: 'wrap',
    },
    time: {
        fontSize: 10,
        fontFamily: fontFamily.Regular,
        color: Colors.GREY_BARELY_MEDIUM,
        letterSpacing: -0.16,
        lineHeight: 17,
    },
    ViewImage: {
        borderRadius: 10,
        borderWidth: 3,
        borderColor: Colors.WHITE,
        overflow: 'hidden',
    },
    image: {
        width: 60,
        height: 50,
    },
    hiddenItem: {
        flex: 1,
        width: 120,
        height: 'auto',
        marginHorizontal: 20,
        marginBottom: 11,
        padding: 8,
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: Colors.BLUE,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        borderRadius: 25,
    },
    deleteButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    deleteIcon: {
        position: 'absolute',
        right: 20,
        width: 24,
        height: 24,
    },
});
export const NotificationsList = React.memo(_NotificationsList);
