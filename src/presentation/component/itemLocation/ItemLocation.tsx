import {
  StyleSheet,
  View,
  ImageSourcePropType,
  Image,
  StyleProp,
  TextStyle,
  Pressable,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Colors} from '@resources';
import {TextPlus} from '../textPlus';
import {LOCATION_3} from '@assets';

export type ItemLocationProps = {
  containerStyles?: StyleProp<ViewStyle>;
  imageLocation: ImageSourcePropType;
  text: string;
  textStyles?: StyleProp<TextStyle>;
  textBolds?: string[];
  textBoldStyle?: StyleProp<TextStyle>;
  statusOnPress: boolean;
};

const _ItemLocation: React.FC<ItemLocationProps> = props => {
  const {imageLocation, text, textBolds, statusOnPress} = props;
  const [status, setStatus] = React.useState(false);

  return (
    <Pressable
      style={[
        _styles.container,
        {backgroundColor: status ? Colors.BLUE : 'transparent'},
        props.containerStyles,
      ]}
      onPress={statusOnPress ? () => setStatus(!status) : () => {}}>
      <View
        style={[
          _styles.imageLocationContainer,
          {backgroundColor: status ? Colors.OVAN : Colors.GRAY},
        ]}>
        <Image
          source={status ? LOCATION_3 : imageLocation}
          style={_styles.imageLocation}
        />
      </View>
      <View>
        <TextPlus
          text={text}
          textBolds={textBolds ? textBolds : []}
          numberOfLines={2}
          textStyle={StyleSheet.flatten([
            props.textStyles,
            {
              lineHeight: 20,
              width: '90%',
              color: status ? Colors.WHITE : Colors.BLACK,
            },
          ])}
          boldStyle={StyleSheet.flatten([
            props.textBoldStyle,
            {color: status ? Colors.WHITE : Colors.BLUE},
          ])}
        />
      </View>
    </Pressable>
  );
};

const _styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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

    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 15,
  },
});

export const ItemLocation = React.memo(_ItemLocation);
