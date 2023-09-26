import { fontFamily } from '@assets';
import { Colors } from '@resources';
import React from 'react';
import { Dimensions, Image, ImageSourcePropType, ImageStyle, Pressable, StyleProp, StyleSheet, Text, TextInput, TextProps, TextStyle, View, ViewProps, ViewStyle } from 'react-native';

type Props = {
    imageIconLeft: ImageSourcePropType;
    imageIconRight: ImageSourcePropType;
    label: string;
    viewStyle?: StyleProp<ViewStyle>;
    iconRightStyle?: StyleProp<ImageStyle>;
    onPress?: () => void;
    onPressLeft?: () => void;
    onPressRight?: () => void;
    value: string;
    onChangeText?: (value: string) => void;
}

const _Input: React.FC<Props> = (props) => {
    const { imageIconLeft, value, imageIconRight, label, onChangeText, onPress, onPressLeft, onPressRight } = props;
    return (
        <Pressable onPress={onPress} style={StyleSheet.flatten([_styles.container, props.viewStyle])}>
            <View style={_styles.row}>
                <Pressable onPress={onPressLeft} >
                    <Image source={imageIconLeft} style={_styles.iconLeft} />
                </Pressable>
                <TextInput placeholder={label} value={value} style={[_styles.input, {fontFamily: value.length == 0 ? fontFamily.Regular: fontFamily.Bold, color:value.length==0?Colors.GRAY:Colors.GREY_DARK, fontSize:value.length==0? 12: 14}]} onChangeText={onChangeText} ></TextInput>
            </View>
            <Pressable onPress={onPressRight} >
                <Image source={imageIconRight} style={StyleSheet.flatten([_styles.iconRight, props.iconRightStyle])} />
            </Pressable>
        </Pressable>
    )
}


const _styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: Colors.GRAY_SEARCH,
        marginHorizontal: 20,
        paddingHorizontal: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        lineHeight: 25,
        width: Dimensions.get('window').width * 0.4
    },
    iconLeft: {
        width: 20,
        height: 20,
        marginRight: 10,
        opacity: 1
    },
    iconRight: {
        width: 20,
        height: 20,
        marginLeft: 10,
        opacity: 1
    }
});

export const Input = React.memo(_Input);