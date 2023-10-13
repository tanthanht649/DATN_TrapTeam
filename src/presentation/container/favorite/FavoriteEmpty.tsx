import { StyleSheet, View, Image, Text, ImageSourcePropType, ListRenderItem, Pressable, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';


import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { Header, TextPlus, ViewSwitcher } from '@components';
import { ALERT_SUCCESS_PLUS, HEART_ACTIVE, ICON_DELETE, LOCATION, SHAPE_1, SHAPE_2, SHAPE_3, START_3, STAR_4, fontFamily } from '@assets';
import { Colors } from '@resources';
import StaggeredList from '@mindinventory/react-native-stagger-view';

type PropsType = NativeStackScreenProps<
    WelcomeTeamStackParamList,
    'FavoriteEmpty'
>;

export interface Item {
    id: number;
    image: ImageSourcePropType;
    price: string;
    monthday: string;
    name: string;
    star: string;
    location: string;
}

const _FavoriteEmpty: React.FC<PropsType> = props => {
    const { navigation } = props;
    const [listViewType, setListViewType] = useState<'list' | 'grid'>('list');

    const data: Item[] = [
        { id: 1, image: SHAPE_1, price: "3.200.000", monthday: "/tháng", name: "The Laurels Villa", star: "4.9", location: "Quận 1, Hồ Chí Minh" },
        { id: 2, image: SHAPE_2, price: "2.200.000", monthday: "/tháng", name: "Wayside Modern House", star: "4.4", location: "Bình Thạnh, Hồ Chí Minh" },
        { id: 3, image: SHAPE_3, price: "2.200.000", monthday: "/tháng", name: "Wings Tower", star: "4.9", location: "Nhà Bè, Hồ Chí Minh" },
        { id: 4, image: SHAPE_1, price: "3.200.000", monthday: "/ngày", name: "The Laurels Villa", star: "4.9", location: "Quận 3, Hồ Chí Minh" },
        { id: 5, image: SHAPE_2, price: "2.200.000", monthday: "/tháng", name: "Wayside Modern House", star: "4.4", location: "Bình Chánh, Hồ Chí Minh" },
        { id: 6, image: SHAPE_3, price: "2.200.000", monthday: "/ngày", name: "Wings Tower", star: "4.9", location: "Quận 12, Hồ Chí Minh" },
        { id: 7, image: SHAPE_1, price: "3.200.000", monthday: "/tháng", name: "The Laurels Villa", star: "4.9", location: "Quận 4, Hồ Chí Minh" },
        { id: 8, image: SHAPE_2, price: "2.200.000", monthday: "/đêm", name: "Wayside Modern House", star: "4.4", location: "Thủ Đức, Hồ Chí Minh" },
    ];
    const [hiddenItems, setHiddenItems] = useState<number[]>([]);
    const onHeart = (itemId: number) => {
        console.log("Id: " + itemId);
        if (hiddenItems.includes(itemId)) {
            setHiddenItems(hiddenItems.filter(id => id !== itemId));
        } else {
            setHiddenItems([...hiddenItems, itemId]);
        }
    }

    const renderChildren: ListRenderItem<Item> = ({ item }) => {
        if (hiddenItems.includes(item.id)) {
            return null;
        }
        return (
            <View style={getChildrenStyle()} key={item.id}>
                <Image
                    onError={() => { }}
                    style={_styles.img}
                    source={item.image}
                    resizeMode='cover'
                />
                <Pressable onPress={() => onHeart(item.id)} style={_styles.styleHeartView}>
                    <Image source={HEART_ACTIVE} style={_styles.styleHeart} />
                </Pressable>
                <View style={_styles.stylePriceView}>
                    <Text style={_styles.stylePrice}>{item.price}</Text>
                    <Text style={_styles.styleMonth}>{item.monthday}</Text>
                </View>
                <View style={_styles.styleView}>
                    <Text style={_styles.styleName}>{item.name}</Text>
                    <View style={_styles.styleLine}>
                        <View style={_styles.styleStarView}>
                            <Image source={START_3} style={_styles.styleStar} />
                            <Text style={_styles.styleStarText}>{item.star}</Text>
                        </View>
                        <View style={_styles.styleStarView}>
                            <Image source={LOCATION} style={_styles.styleStar} />
                            <Text numberOfLines={2} style={_styles.styleLocationText}>{item.location}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    const getChildrenStyle = () => {
        return {
            backgroundColor: Colors.GREY_SOFT,
            margin: 7,
            borderRadius: 25,
            paddingHorizontal: 8,
            paddingBottom: 16,
            paddingTop: 8,
        };
    };


    return (
        <SafeAreaView style={_styles.container}>
            <Header
                textCenter={'My favorite'}
                iconRight={ICON_DELETE}
                eventRight={() => console.log('EventRight')}
                isCheck={false}
            />
            <ViewSwitcher
                quantityEstates={data.length}
                onTabChange={setListViewType} />
            <View style={_styles.nextView1}>
                <StaggeredList<Item>
                    data={data.filter(item => !hiddenItems.includes(item.id))}
                    animationType='FADE_IN_FAST'
                    contentContainerStyle={_styles.contentContainer}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderChildren as any}
                    LoadingView={
                        <View style={_styles.activityIndicatorWrapper}>
                            <ActivityIndicator color='black' size='large' />
                        </View>
                    }
                />
            </View>
            {/* <View style={_styles.nextView}>
                <Image source={ALERT_SUCCESS_PLUS} style={{ height: 142, width: 142 }} />
                <TextPlus
                    text={"Your favorite page is\nempty"}
                    textBolds={["empty"]}
                    numberOfLines={2}
                    viewStyle={{flex: 0.18, justifyContent: 'center'}}
                    textStyle={StyleSheet.flatten([_styles.text])}
                    boldStyle={StyleSheet.flatten([_styles.textBold])}
                />
                <Text style={_styles.textMini}>Click add button above to start exploring and choose{'\n'}your favorite estates. </Text>
            </View> */}

        </SafeAreaView>
    );
};

const _styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.WHITE,
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

    nextView1: {
        flex: 1,
        marginBottom: 10,
        width: '100%',
    },
    contentContainer: {
        paddingHorizontal: 8,
        paddingTop: 16,
    },
    activityIndicatorWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    styleHeartView: {
        position: 'absolute',
        top: 10,
        right: 5,
    },
    styleHeart: {
        width: 50,
        height: 50,
    },
    img: {
        width: 'auto',
        height: 180,
        borderRadius: 20,
    },
    stylePriceView: {
        position: 'absolute',
        top: 153,
        right: 16,
        flexDirection: 'row',
        alignItems: 'flex-end',
        didplay: 'flex',
        backgroundColor: Colors.GREEN_SOFT,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 5,
    },
    stylePrice: {
        fontSize: 12,
        color: Colors.GREY_SOFT,
        fontFamily: fontFamily.Black,
        letterSpacing: 0.36,
    },
    styleMonth: {
        fontSize: 10,
        lineHeight: 16,
        color: Colors.GREY_SOFT,
        fontFamily: fontFamily.Semibold,
        letterSpacing: 0.18,
    },
    styleView: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 10,
        marginTop: 10,
        marginHorizontal: 8,
    },
    styleName: {
        fontSize: 17,
        color: Colors.GREY_DARK,
        fontFamily: fontFamily.Bold,
        lineHeight: 21,
        letterSpacing: 0.36,
    },
    styleLine: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        gap: 6,
    },
    styleStarView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 2,
    },
    styleStar: {
        width: 15,
        height: 15,
    },
    styleStarText: {
        fontSize: 11,
        color: Colors.GREY_MEDIUM,
        fontFamily: fontFamily.Black,
        lineHeight: 15,
    },
    styleLocationText: {
        fontSize: 11,
        color: Colors.GREY_MEDIUM,
        fontFamily: fontFamily.Semibold,
        lineHeight: 15,
        paddingRight: 65,
    },

});
export const FavoriteEmpty = React.memo(_FavoriteEmpty);
