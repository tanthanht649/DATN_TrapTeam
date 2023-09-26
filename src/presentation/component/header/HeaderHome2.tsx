import {
  StyleSheet,
  Text,
  ImageSourcePropType,
  TextProps,
  TouchableOpacity,
  Image,
  Pressable,
  SafeAreaView,
  Dimensions,
  Button,
  View,
} from 'react-native';
import React from 'react';
import {Colors, DimensionsStyle} from '@resources';
import {
  AVT,
  CHEVRON_DOWN,
  LOCATION,
  NOTIFICATION,
  NOTIFICATION_SELECT,
  fontFamily,
} from '@assets';
import SelectDropdown from 'react-native-select-dropdown';

const DATA = ['Hà Nội, Việt Nam', 'Đà Nẵng, Việt Nam', 'Hồ Chí Minh, Việt Nam'];

export type HeaderHomeProps = {
  statusNotification: boolean;
  avatar: ImageSourcePropType;
  onPressNotification: () => void;
  onPressAvatar: () => void;
};

const _HeaderHome2: React.FC<HeaderHomeProps> = props => {
  const {statusNotification, avatar, onPressNotification, onPressAvatar} =
    props;
  return (
    <SafeAreaView style={_styles.container}>
      <View style={_styles.locationContainer}>
        <Image source={LOCATION} style={_styles.imageLocation} />
        <SelectDropdown
          data={DATA}
          buttonStyle={_styles.selectDropdown}
          buttonTextStyle={_styles.textDefault}
          rowTextStyle={_styles.textDefault}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          renderDropdownIcon={isOpened => {
            return <Image source={CHEVRON_DOWN} />;
          }}
          dropdownIconPosition="right"
          defaultButtonText={'Hà Nội, Việt Nam'}
          dropdownStyle={{
            width: '35%',
            marginTop: -25,
            borderRadius: 5,
            marginStart: 7,
          }}
        />
      </View>
      <View style={_styles.notificationAndAvatarContainer}>
        <Pressable onPress={onPressNotification}>
          <Image
            source={statusNotification ? NOTIFICATION : NOTIFICATION_SELECT}
            style={_styles.imageNotification}
          />
        </Pressable>
        <Pressable style={_styles.containerAvatar} onPress={onPressAvatar}>
          <Image source={avatar} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export const HeaderHome2 = React.memo(_HeaderHome2);

const _styles = StyleSheet.create({
  container: {
    width: DimensionsStyle.width,
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '55%',
    height: '100%',
    backgroundColor: Colors.WHITE,
    borderRadius: 25,
  },

  notificationAndAvatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },

  imageLocation: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },

  imageNotification: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },

  containerAvatar: {
    width: 50,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.BLACK,
  },

  imageAvatar: {
    width: 44,
    height: 44,
    resizeMode: 'stretch',
  },

  selectDropdown: {
    width: '95%',
    height: 50,
    borderColor: Colors.WHITE,
    backgroundColor: 'transparent',
    borderRadius: 25,
  },

  textDefault: {
    color: Colors.GREY_DARK,
    fontSize: 14,
    fontFamily: fontFamily.Medium,
    textAlign: 'left',
  },
});
