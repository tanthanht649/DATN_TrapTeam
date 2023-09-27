import { fontFamily } from '@assets';
import { Colors } from '@resources';
import React from 'react';
import { Dimensions, Image, ImageSourcePropType, ImageStyle, Pressable, StyleProp, StyleSheet, Text, TextProps, TextStyle, View, ViewProps, ViewStyle } from 'react-native';

type Props = {
    viewStyle?: StyleProp<ViewStyle>;
    imageIcon: ImageSourcePropType;
    onPress: () => void;
    shadow: boolean;
}

const _Button: React.FC<Props> = (props) => {
    const { imageIcon, onPress, shadow } = props;
    return shadow ? (
        <Pressable onPress={onPress} style={StyleSheet.flatten([_styles.shadow, props.viewStyle])}>
            <View style={_styles.border}>
                <Image source={imageIcon} style={_styles.icon} />
            </View>
        </Pressable>

    ) : (
        <Pressable onPress={onPress}>
            <View style={_styles.border}>
                <Image source={imageIcon} style={_styles.icon} />
            </View>
        </Pressable>

    )
}


const _styles = StyleSheet.create({
    shadow: {
        width: 100,
        height: 90,
        borderRadius: 100,
        shadowColor: Colors.GREEN,
        shadowOpacity: 0.3,
        elevation: 27,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 47,
    },
    border: {
        position: 'absolute',
        borderRadius: 180,
        backgroundColor: Colors.WHITE,
        width: 54,
        height: 54,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
    },
});

export const ButtonArrow = React.memo(_Button);