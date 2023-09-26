import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {fontFamily} from '@assets';
import {Colors} from '@resources';

type Props = {
  textBolds: string[];
  text: string;
  boldStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const _TextPlus: React.FC<Props> = props => {
  const {textBolds, text} = props;
  const getTextWithBoldAndUpper = (text: string, boldTexts: string[]) => {
    const regex = new RegExp(`(${boldTexts.join('|')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) => {
      const isBoldAndUpper = boldTexts.includes(part);
      return isBoldAndUpper ? (
        <Text
          key={index}
          style={StyleSheet.flatten([_styles.textBold, props.boldStyle])}>
          {part}
        </Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };

  return (
    <View style={StyleSheet.flatten([_styles.container, props.viewStyle])}>
      <Text style={StyleSheet.flatten([_styles.text, props.textStyle])}>
        {getTextWithBoldAndUpper(text, textBolds)}
      </Text>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBold: {
    fontFamily: fontFamily.Bold,
    fontSize: 25,
    color: Colors.BLUE,
  },
  text: {
    fontSize: 25,
    fontFamily: fontFamily.Medium,
    color: Colors.BLACK,
  },
});

export const TextPlus = React.memo(_TextPlus);
