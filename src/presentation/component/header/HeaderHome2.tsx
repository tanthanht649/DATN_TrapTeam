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
import { Colors, DimensionsStyle } from '@resources';
import {
  AVT,
  CHEVRON_DOWN,
  LOADINGIMAGE,
  LOCATION,
  LOGO_APP,
  NOTIFICATION,
  NOTIFICATION_SELECT,
  SETTING,
  fontFamily,
} from '@assets';
import SelectDropdown from 'react-native-select-dropdown';

const DATA = ['Hà Nội, Việt Nam', 'Đà Nẵng, Việt Nam', 'Hồ Chí Minh, Việt Nam'];

export type HeaderHomeProps = {
  // statusNotification: boolean;
  avatar: string;
  // onPressNotification?: () => void;
  onPressAvatar?: () => void;
  // onPressSetting?: () => void;
  checkNotify?: boolean;
};

const _HeaderHome2: React.FC<HeaderHomeProps> = props => {
  const {
    // statusNotification,
    avatar,
    // onPressNotification,
    onPressAvatar,
    // onPressSetting,
    checkNotify,
  } = props;
  return (
    <SafeAreaView style={_styles.container}>
      {/* <View style={_styles.locationContainer}>
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
      </View> */}
      <View>
        <Image source={LOGO_APP} style={_styles.imageLogo} />
      </View>
      <View style={_styles.notificationAndAvatarContainer}>
        {/* <Pressable
          onPress={onPressNotification}
          style={{
            display: checkNotify ? 'flex' : 'none',
          }}>
          <Image
            source={statusNotification ? NOTIFICATION : NOTIFICATION_SELECT}
            style={_styles.imageNotification}
          />
        </Pressable> */}
        <Pressable
          style={[
            _styles.containerAvatar,
            {
              display: checkNotify ? 'flex' : 'none',
            },
          ]}
          onPress={onPressAvatar}>
          <Image
            source={avatar == '' ? LOADINGIMAGE : { uri: avatar }}
            style={{
              width: 45,
              height: 45,
              resizeMode: 'stretch',
              borderRadius: 50,
            }}
          />
        </Pressable>
        {/* <Pressable
          style={[
            _styles.containerAvatar,
            {
              display: checkNotify ? 'none' : 'flex',
            },
          ]}
          onPress={onPressSetting}>
          <Image
            source={SETTING}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'stretch',
            }}
          />
        </Pressable> */}
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
    marginTop: 35,
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

  imageLogo: {
    width: 40,
    height: 45,
    resizeMode: 'stretch',
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
    borderColor: Colors.GREY,
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
