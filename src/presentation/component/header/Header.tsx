import { Dimensions, Image, ImageSourcePropType, ImageStyle, Pressable, StyleProp, StyleSheet, Text, TextProps, View, ViewStyle } from 'react-native';
import React from 'react';
import { HEART_ACTIVE } from '@assets';
import { Colors } from '@resources';

interface HeaderProps {
    iconLeft?: ImageSourcePropType;
    textCenter?: string;
    iconRight?: ImageSourcePropType;
    textRight?: string;
    iconHeart?: ImageSourcePropType;
    eventLeft?: () => void;
    eventRight?: () => void;
    eventRightHeart?: () => void;
    styleIconLeft?: StyleProp<ImageStyle>;
    styleIconCenter?: StyleProp<ImageStyle>;
    styleIconRight?: StyleProp<ImageStyle>;
    styleTextRight?: StyleProp<TextProps>;
    isCheck?: boolean;
}

const _Header: React.FC<HeaderProps> = ({
    iconLeft,
    textCenter,
    iconRight,
    textRight,
    iconHeart,
    eventLeft,
    eventRight,
    eventRightHeart,
    styleIconLeft,
    styleIconCenter,
    styleIconRight,
    styleTextRight,
    isCheck,
}) => {
    const [heartIcon, setHeartIcon] = React.useState(iconHeart);

    const renderIconLeft = () => {
        if (iconLeft) {
            return (
                <Pressable onPress={eventLeft}>
                    <Image source={iconLeft} style={[styles.icon, styleIconLeft]} />
                </Pressable>
            );
        }
        return <View style={styles.iconPlaceholder} />;
    };

    const renderTextCenter = () => {
        if (textCenter) {
            return (
                <Pressable style={[styles.centerHeaderContainer, styleIconCenter]}>
                    <Text style={styles.textCenterHeader}>{textCenter}</Text>
                </Pressable>
            );
        }
        return <View style={styles.centerHeaderContainer} />;
    };

    const renderIconRight = () => {
        if (isCheck && iconRight) {
            return (
                <Pressable onPress={eventRight}>
                    <Image source={iconRight} style={[styles.icon, styleIconRight]} />
                </Pressable>
            );
        } else if (!isCheck && heartIcon && iconRight) {
            return (
                <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
                    <Pressable onPress={eventRight}>
                        <Image source={iconRight} style={[styles.icon, styleIconRight]} />
                    </Pressable>
                    <Pressable onPress={toggleHeartIcon}>
                        <Image source={heartIcon} style={[styles.iconHeart, styleIconRight]} />
                    </Pressable>
                </View>
            );
        } else if (!isCheck && heartIcon) {
            return (
                <Pressable onPress={toggleHeartIcon}>
                    <Image source={heartIcon} style={[styles.iconHeart, styleIconRight]} />
                </Pressable>
            );
        } else if (!isCheck && iconRight) {
            return (
                <Pressable onPress={eventRight}>
                    <Image source={iconRight} style={[styles.icon, styleIconRight]} />
                </Pressable>
            );
        } else if (textRight) {
            return (
                <Pressable style={styles.btnRight} onPress={eventRight}>
                    <Text style={[styles.textRight, styleTextRight]}>{textRight}</Text>
                </Pressable>
            );
        }
        return <View style={styles.iconPlaceholder} />;
    };

    const toggleHeartIcon = () => {
        if (heartIcon === iconHeart) {
            setHeartIcon(HEART_ACTIVE);
            eventRightHeart && eventRightHeart();
            console.log('iconHeartActive');
        } else {
            setHeartIcon(iconHeart);
            eventRightHeart && eventRightHeart();
            console.log('iconHeart');
        }
    };

    return (
        <View style={styles.container}>
            {renderIconLeft()}
            {renderTextCenter()}
            {renderIconRight()}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    icon: {
        width: 50,
        height: 50,
    },
    iconPlaceholder: {
        width: 50,
        height: 50,
        opacity: 0, // Ẩn phần tử
    },
    centerHeaderContainer: {
        flex: 1,
        alignItems: 'center',
    },
    textCenterHeader: {
        fontFamily: 'Lato',
        fontWeight: '700',
        fontSize: 14,
        color: Colors.GREY_DARK_1,
        textAlign: 'center',
    },
    btnRight:{
        borderWidth: 1,
        borderRadius:100,
        paddingHorizontal:30,
        paddingVertical:8,
        borderColor:Colors.GREY,
        backgroundColor:Colors.GREY,
    },
    textRight: {
        fontFamily: 'Montserrat',
        fontWeight: '400',
        fontSize: 12,
        color: Colors.BLACK,
        textAlign: 'center',
    },
    iconHeart: {
        width: 90,
        height: 90,
        resizeMode:'stretch',
        marginLeft: 15,
        marginTop: 23,
        marginRight:-20
    },
});
export const Header = React.memo(_Header);