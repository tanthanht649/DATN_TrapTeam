import React from 'react';
import { StyleSheet, View, Text, Image, ImageSourcePropType, Pressable, StyleProp, ImageStyle } from 'react-native';
import { Colors, DimensionsStyle } from '@resources';

type HeaderMessagerProps = {
    avatar: ImageSourcePropType;
    name: string;
    status?: string;
    isOnline: boolean;
    iconLeft?: ImageSourcePropType;
    styleIconLeft?: StyleProp<ImageStyle>;
    eventLeft?: () => void;
};

const _HeaderMessager: React.FC<HeaderMessagerProps> = ({
    avatar,
    name,
    status,
    isOnline,
    iconLeft,
    styleIconLeft,
    eventLeft
}) => {
    const renderIconLeft = () => {
        if (iconLeft) {
            return (
                <Pressable onPress={eventLeft}>
                    <Image source={iconLeft} style={[_styles.icon, styleIconLeft]} />
                </Pressable>
            );
        }
    };
    const renderAvatar = () => {
        return (
            <View style={_styles.avatarRender}>
                <View style={_styles.avatarContainer}>
                    <Image source={avatar} style={_styles.avatar} />
                    <View style={_styles.Indicator} >
                        {isOnline ? (
                            <View style={[_styles.onlineIndicator]} />
                        ) : (
                            <View style={[_styles.offlineIndicator]} />
                        )}
                    </View>
                </View>
                <View style={_styles.textContainer}>
                    <Text style={_styles.name}>{name}</Text>
                    <View style={_styles.statusContainer}>
                        {isOnline ? (
                            <Text style={_styles.status}>{status || "Online"}</Text>
                        ) : (
                            <Text style={_styles.status}>{status || "Offline"}</Text>
                        )}
                    </View>
                </View>
            </View>

        );
    };


    return (
        <View style={_styles.container}>
            {renderIconLeft()}
            {renderAvatar()}
        </View>
    );
};

const _styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        // backgroundColor:Colors.BLACK,
    },
    avatarRender: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: DimensionsStyle.width * 0.8,
        height: '100%',
    },
    avatarContainer: {
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.WHITE,
        borderWidth: 3,
        borderRadius: 30,
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 25,
    },
    textContainer: {
    },
    name: {
        color: Colors.GREY_DARK_1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Indicator: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 35,
        top: 0,
        width: 15,
        height: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.WHITE,
        borderWidth: 3,
    },
    onlineIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Colors.GREEN_1,
    },
    offlineIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Colors.GREY_LIGHT,
    },
    status: {
        fontSize: 12,
        color: Colors.GREY_MEDIUM_1,
    },
    icon: {
        width: 50,
        height: 50,
        marginLeft: 5,
    },
});

export const HeaderMessager = React.memo(_HeaderMessager);
