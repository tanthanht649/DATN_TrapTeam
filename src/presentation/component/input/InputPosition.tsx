import { fontFamily } from '@assets';
import { Colors } from '@resources';
import React, { useCallback } from 'react';
import { Dimensions, Image, ImageSourcePropType, ImageStyle, Pressable, StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native';

type Props = {
    imageIconLeft: ImageSourcePropType;
    label: string;
    viewStyle?: StyleProp<ViewStyle>;
    iconLeftStyle?: StyleProp<ImageStyle>;
    onPress?: () => void;
    onPressLeft?: () => void;
    onPressRight?: () => void;
    value: string;
    onChangeText?: (value: string) => void;
    hidePassword?: boolean;
}

const _InputPosition: React.FC<Props> = (props) => {
    const { imageIconLeft, value, hidePassword, label, onChangeText, onPress, onPressLeft } = props;
    const renderTextInput = useCallback(() => (
        <TextInput
            secureTextEntry={hidePassword}
            placeholder={label}
            value={value}
            style={[_styles.input,
            {
                fontFamily: value.length == 0 ? fontFamily.Regular : fontFamily.Bold,
                color: value.length == 0 ? Colors.GRAY : Colors.GREY_DARK,
            }]}
            onChangeText={onChangeText}
        />
    ), [hidePassword, label, value, onChangeText]);

    return (
        <Pressable onPress={onPress} style={StyleSheet.flatten([_styles.container, props.viewStyle])}>
            <View style={_styles.row}>
                <Pressable onPress={onPressLeft} >
                    <Image source={imageIconLeft} style={StyleSheet.flatten([_styles.iconLeft, props.iconLeftStyle])} />
                </Pressable>
                {renderTextInput()}
            </View>

        </Pressable>
    )
}

const _styles = StyleSheet.create({
    container: {
        marginTop: Dimensions.get('window').height * 0.125,
        height: Dimensions.get('window').height * 0.07,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        backgroundColor: Colors.WHITE,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        shadowColor: Colors.GREY_DARK,
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation: 15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        lineHeight: 25,
        fontSize: 14,
    },
    iconLeft: {
        width: 20,
        height: 20,
        marginRight: 10,
        opacity: 1
    },
});

export const InputPosition = React.memo(_InputPosition);