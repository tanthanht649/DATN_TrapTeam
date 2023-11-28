import { ALERT_SUCCESS_TICK, EMAIL, LINE, fontFamily } from '@assets';
import { Colors, DimensionsStyle } from '@resources';
import React, { useState } from 'react';
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
import { Button } from '../button';
import { TextPlus } from '../textPlus';

type Props = {
  ModalStyle?: StyleProp<ViewStyle>;
  visible?: boolean;
  onPress: () => void;
};

const _Modal: React.FC<Props> = props => {
  const {  onPress, visible } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        { !visible }
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
            <Text style={_styles.textBold}>Bộ lọc</Text>
            <Text style={_styles.textBold}>Địa điểm</Text>
          

          </View>
          <Button
            title='Tìm kiếm'
            imageIconLeft={EMAIL}
            imageIconRight={EMAIL}
            onPress={onPress}
            viewStyle={{
              width: 278,
              position: 'absolute',
              bottom: 70
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
    position: 'absolute'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 1,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 30,
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
  },
  textBold: {
    marginTop:20,
    marginBottom:10,
    fontSize: 20,
    fontFamily: fontFamily.Bold,
    color: Colors.BLUE,

  },
  textReady: {
    marginTop:20,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: 142,
    width: 142
  },
  line: {
    height: 2,
    width: 50,
    alignSelf:'center'
  }
});

export const ModalFilter = React.memo(_Modal);
