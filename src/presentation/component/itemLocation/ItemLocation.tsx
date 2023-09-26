import {
  StyleSheet,
  View,
  ImageSourcePropType,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import {Colors} from '@resources';
import {TextPlus} from '../textPlus';

export type ItemLocationProps = {
  imageLocation: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
  imageLocationContainerStyle?: StyleProp<ViewStyle>;
  text: string;
  textStyles?: StyleProp<TextStyle>;
  textBolds?: string[];
  textBoldStyle?: StyleProp<TextStyle>;
};

const _ItemLocation: React.FC<ItemLocationProps> = props => {
  const {imageLocation, text, textBolds} = props;
  return (
    <View style={StyleSheet.flatten([_styles.container, props.containerStyle])}>
      <View
        style={StyleSheet.flatten([
          _styles.imageLocationContainer,
          props.imageLocationContainerStyle,
        ])}>
        <Image source={imageLocation} style={_styles.imageLocation} />
      </View>
      <View>
        <TextPlus
          text={text}
          textBolds={textBolds ? textBolds : []}
          numberOfLines={2}
          viewStyle={{width: '90%'}}
          textStyle={StyleSheet.flatten([props.textStyles, {lineHeight: 20}])}
          boldStyle={props.textBoldStyle}
        />
      </View>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.GRAY,
  },

  imageLocation: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },

  imageLocationContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.GRAY,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 15,
  },
});

export const ItemLocation = React.memo(_ItemLocation);
