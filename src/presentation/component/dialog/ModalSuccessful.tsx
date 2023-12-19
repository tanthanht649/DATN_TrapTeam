import {ALERT_SUCCESS_TICK, EMAIL, LINE, fontFamily} from '@assets';
import {Colors, DimensionsStyle} from '@resources';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Modal,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Button} from '../button';
import {TextPlus} from '../textPlus';

type Props = {
  titleButton: string;
  titleStyle?: StyleProp<TextStyle>;
  visible: boolean;
  text: string;
  textBold: string;
  content?: string;
  onPress: () => void;
};

const _Modal: React.FC<Props> = props => {
  const {titleButton, text, textBold, onPress, visible, content} = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        {
          !visible;
        }
      }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'rgba(31, 76, 107, 0.9)'}
        translucent
      />
      <View style={_styles.background}>
        <View style={_styles.centeredView}>
          <View style={_styles.modalView}>
            <Image style={_styles.line} source={LINE}></Image>
            <Image style={_styles.image} source={ALERT_SUCCESS_TICK}></Image>
            <TextPlus
              text={text}
              textBolds={[textBold]}
              boldStyle={_styles.textBold}
              textStyle={_styles.text}
              viewStyle={_styles.textReady}
            />
            <Text
              style={[
                _styles.textBold,
                {fontSize: 14, fontFamily: fontFamily.Medium, marginTop: 20},
              ]}>
              {content}
            </Text>
          </View>
          <Button
            title={titleButton}
            imageIconLeft={EMAIL}
            imageIconRight={EMAIL}
            onPress={onPress}
            viewStyle={{
              width: 278,
              position: 'absolute',
              bottom: 40,
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const _styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(31, 76, 107, 0.9)',
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 1,
    position: 'absolute',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.6,
    backgroundColor: 'white',
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  text: {
    fontSize: 25,
    fontFamily: fontFamily.Regular,
    color: Colors.GREY_DARK,
    lineHeight: 40,
    marginHorizontal: 24,
    textAlign: 'center',
  },
  textBold: {
    fontSize: 25,
    fontFamily: fontFamily.Bold,
    color: Colors.BLUE,
  },
  textReady: {
    marginTop: 20,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: 142,
    width: 142,
  },
  line: {
    height: 2,
    width: 50,
  },
});

export const ModalSuccessful = React.memo(_Modal);
