import { fontFamily } from '@assets';
import { Colors } from '@resources';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  ImageStyle,
  Modal,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ModalSuccessful } from '../dialog';

type Props = {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
  imageIconRight: ImageSourcePropType;
  imageIconLeft: ImageSourcePropType;
  viewIconRight?: StyleProp<ImageStyle>;
  viewIconLeft?: StyleProp<ImageStyle>;
  showmodal?: boolean;
  textModal: string;
  textBoldModal: string;
  contentModal?:string
  titleButtonModal: string;

  onPress?: () => void;
  onPressModal?: () => void;

};

const _Button: React.FC<Props> = props => {
  const { title, imageIconLeft, imageIconRight, onPress, showmodal, onPressModal,textModal,
    textBoldModal,
    contentModal,
    titleButtonModal } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
    onPress && onPress();
    console.log('hh')
  };
  const handleModalPress = () => {
    setModalVisible(false);
    onPressModal && onPressModal();
    console.log('hkljdbdb')
  };
  return showmodal?(
    <SafeAreaView>
      <Pressable
        onPress={handlePress}
        style={StyleSheet.flatten([_styles.button, props.viewStyle])}>
        <Image
          source={imageIconLeft}
          style={StyleSheet.flatten([_styles.iconLeft, props.viewIconLeft])}
        />
        <Text style={StyleSheet.flatten([_styles.title, props.textStyle])}>
          {title}
        </Text>
        <Image
          source={imageIconRight}
          style={StyleSheet.flatten([_styles.iconRight, props.viewIconRight])}
        />
      </Pressable>
      <ModalSuccessful visible={modalVisible} titleButton={titleButtonModal} text={textModal} textBold={textBoldModal} onPress={handleModalPress} content={contentModal} ></ModalSuccessful>

    </SafeAreaView>


  ):(
    <SafeAreaView>
      <Pressable
        onPress={onPress}
        style={StyleSheet.flatten([_styles.button, props.viewStyle])}>
        <Image
          source={imageIconLeft}
          style={StyleSheet.flatten([_styles.iconLeft, props.viewIconLeft])}
        />
        <Text style={StyleSheet.flatten([_styles.title, props.textStyle])}>
          {title}
        </Text>
        <Image
          source={imageIconRight}
          style={StyleSheet.flatten([_styles.iconRight, props.viewIconRight])}
        />
      </Pressable>

    </SafeAreaView>
  )
};

const _styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width * 1,
    height: 63,
    backgroundColor: Colors.GREEN,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
  title: {
    color: Colors.WHITE,
    fontFamily: fontFamily.Bold,
    fontSize: 16,
  },
  iconLeft: {
    width: 20,
    height: 20,
    marginRight: 7,
    display: 'none',
  },
  iconRight: {
    width: 20,
    height: 20,
    marginLeft: 10,
    display: 'none',
  },
});

export const Button = React.memo(_Button);
