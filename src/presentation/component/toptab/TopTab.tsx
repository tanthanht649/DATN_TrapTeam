import React, { useState, useEffect, useRef } from "react";
import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    StyleSheet,
    StyleProp,
    ViewStyle,
    Dimensions,
    Image,
    ImageSourcePropType,
} from "react-native";
import { Colors } from '@resources';
import {
    MASTERCARD,
    MASTERCARD_SELECT,
    PAYPAL,
    PAYPAL_SELECT,
    STAR_2,
    VISA,
    VISA_SELECT,
    fontFamily,
} from '@assets';

interface ItemTab {
    id: number;
    title: string;
    activeImage?: ImageSourcePropType;
    inactiveImage?: ImageSourcePropType;
    onPress?: () => void;
}

type TopTabProps = {
    containerStyle?: StyleProp<ViewStyle>;
    isCheck?: 'card' | 'home' | 'review';
    children?: React.ReactNode;
};

const _TopTab: React.FC<TopTabProps> = (props) => {
    const { containerStyle, isCheck, children } = props;
    const scrollViewRef = useRef<ScrollView>(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [status, setStatus] = useState(DATACARD[0].title);

    useEffect(() => {
        if (scrollViewRef.current && selectedIndex >= 0) {
            const itemWidth = Dimensions.get("window").width / 3 - 40;
            const screenWidth = Dimensions.get("window").width;
            let data: ItemTab[] = [];

            switch (isCheck) {
                case 'card':
                    data = DATACARD;
                    break;
                case 'home':
                    data = DATAHOME;
                    break;
                case 'review':
                    data = DATAREVIEW;
                    break;
                default:
                    break;
            }
            const itemCount = data.length;
            const maxScrollX = itemWidth * (itemCount - 1);
            let scrollToX = itemWidth * selectedIndex;
            scrollToX = Math.min(scrollToX, maxScrollX);
            const offsetX = Math.max(0, scrollToX - (screenWidth - itemWidth) / 2);

            scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
        }
    }, [selectedIndex]);

    const setStatusFilter = (status: string) => {
        setStatus(status);
    };

    interface ItemCardProps {
        item: ItemTab;
    }

    const ItemTab: React.FC<ItemCardProps> = ({ item }) => {
        return (
            <TouchableOpacity
                style={[
                    _styles.btnTab,
                    status === item.title && _styles.btnTabActive,
                ]}
                onPress={() => {
                    setStatusFilter(item.title);
                    setSelectedIndex(item.id);
                }}
            >
                {item.activeImage && status === item.title && (
                    <Image source={item.activeImage} style={_styles.tabImage} />
                )}
                {item.inactiveImage && status !== item.title && (
                    <Image source={item.inactiveImage} style={_styles.tabImage} />
                )}
                <Text style={[_styles.textTab, status === item.title && _styles.textActive]}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        );
    };
    let data: ItemTab[] = [];

    switch (isCheck) {
        case 'card':
            data = DATACARD;
            break;
        case 'home':
            data = DATAHOME;
            break;
        case 'review':
            data = DATAREVIEW;
            break;
        default:
            break;
    }
    return (
        <View style={containerStyle}>
            <View style={_styles.container}>
                <View style={_styles.listTab}>
                    <ScrollView
                        ref={scrollViewRef}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {data.map((item) => (
                            <ItemTab item={item} key={item.id} />
                        ))}
                    </ScrollView>
                </View>
                {children}
            </View>
        </View>
    );
};
const _styles = StyleSheet.create({
    container: {
        height: "auto",
    },
    listTab: {
        flexDirection: "row",
        alignSelf: "center",
        marginVertical: 15,
    },
    btnTab: {
        flexDirection: "row",
        borderWidth: 0.5,
        borderColor: Colors.SOFT_BLUE,
        backgroundColor: Colors.SOFT_BLUE,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        marginHorizontal: 5,
        paddingHorizontal: 25,
        paddingVertical: 15,
    },
    textTab: {
        fontSize: 15,
        color: Colors.BLUE_TEXT,
        fontFamily: fontFamily.Medium,

    },
    btnTabActive: {
        backgroundColor: Colors.BLUE_SELECT,
    },
    textActive: {
        color: Colors.WHITE,
        fontFamily: fontFamily.Bold,

    },
    tabImage: {
        width: 25,
        height: 20,
        marginRight: 8,
        resizeMode: "contain"
    },
});

const DATACARD: ItemTab[] = [
    {
        id: 0,
        title: "Paypal",
        activeImage: PAYPAL_SELECT,
        inactiveImage: PAYPAL,
    },
    {
        id: 1,
        title: "Mastercard",
        activeImage: MASTERCARD_SELECT,
        inactiveImage: MASTERCARD,
    },
    {
        id: 2,
        title: "Visa",
        activeImage: VISA_SELECT,
        inactiveImage: VISA,
    },
];

const DATAHOME: ItemTab[] = [
    {
        id: 0,
        title: "All",
        onPress: () => { },
    },
    {
        id: 1,
        title: "House",
    },
    {
        id: 2,
        title: "Apartment",
    },
    {
        id: 3,
        title: "Villa",
    },
];

const DATAREVIEW: ItemTab[] = [
    {
        id: 0,
        title: "All",
        activeImage: STAR_2,
        inactiveImage: STAR_2,
    },
    {
        id: 1,
        title: "1",
        activeImage: STAR_2,
        inactiveImage: STAR_2,
    },
    {
        id: 2,
        title: "2",
        activeImage: STAR_2,
        inactiveImage: STAR_2,
    },
    {
        id: 3,
        title: "3",
        activeImage: STAR_2,
        inactiveImage: STAR_2,
    },
    {
        id: 4,
        title: "4",
        activeImage: STAR_2,
        inactiveImage: STAR_2,
    },
    {
        id: 5,
        title: "5",
        activeImage: STAR_2,
        inactiveImage: STAR_2,
    },
];

export const TopTab = React.memo(_TopTab);