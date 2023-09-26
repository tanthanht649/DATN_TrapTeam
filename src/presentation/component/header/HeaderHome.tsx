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

interface HeaderProps extends TextProps {
  leftHeader?: () => void;
  //
  iconHeader?: ImageSourcePropType;
  centerHeader?: () => void;
  //
  rightHeader?: () => void;
}

const _HeaderHome: React.FC<HeaderProps> = props => {
  const {centerHeader, iconHeader} = props;
  const EvenCenter = () => {
    if (iconHeader) {
      return (
        <TouchableOpacity style={styles.button} onPress={centerHeader}>
          <Image source={iconHeader} style={styles.icon} />
        </TouchableOpacity>
      );
    }
    return null;
  };
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.boxLeft}>
        <TouchableOpacity>
          <SafeAreaView style={styles.gr}>
            <Image source={LOCATION} style={styles.imglo} />
            <SelectDropdown
              data={DATA}
              buttonStyle={styles.selectDropdown}
              buttonTextStyle={styles.textDefault}
              rowTextStyle={styles.textDropdown}
              renderDropdownIcon={isOpened => {
                return <Image source={CHEVRON_DOWN} />;
              }}
              dropdownIconPosition="right"
              onSelect={(selectedItem, index) => {}}
              defaultButtonText={'Hà Nội, Việt Nam'}
            />
          </SafeAreaView>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.boxCenter}>{EvenCenter()}</SafeAreaView>
      <SafeAreaView style={styles.boxRight}>
        <TouchableOpacity>
          <SafeAreaView style={styles.grimg}>
            <Image source={AVT} style={styles.img} />
          </SafeAreaView>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export const HeaderHome = React.memo(_HeaderHome);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 1.01,
    height: Dimensions.get('window').height * 0.15,
    borderWidth: 0.1,
    elevation: 1,
  },
  icon: {
    width: Dimensions.get('window').width * 0.145,
    height: Dimensions.get('window').height * 0.069,
  },

  button: {
    height: DimensionsStyle.width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    left: 50,
  },
  boxLeft: {
    width: DimensionsStyle.width * 0.35,
    height: DimensionsStyle.width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    top: 15,
    left: -15,
  },
  boxCenter: {
    width: DimensionsStyle.width * 0.15,
    height: DimensionsStyle.width * 0.25,
    top: 15,
    right: 10,
  },
  boxRight: {
    width: DimensionsStyle.width * 0.15,
    height: DimensionsStyle.width * 0.25,
    top: 15,
  },
  gr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 30,
    borderColor: Colors.WHITE,
    backgroundColor: Colors.WHITE,
    width: DimensionsStyle.width * 0.37,
    height: DimensionsStyle.width * 0.15,
    right: 40,
  },
  imglo: {
    width: Dimensions.get('window').width * 0.054,
    height: Dimensions.get('window').height * 0.03,
    marginLeft: 17,
    marginTop: 17,
  },

  selectDropdown: {
    width: DimensionsStyle.width * 0.37,
    height: DimensionsStyle.width * 0.15,
    borderColor: Colors.WHITE,
    backgroundColor: Colors.WHITE,
    borderRadius: 30,
  },
  textDefault: {
    color: Colors.GREY_DARK,
    fontSize: 14,
    fontFamily: fontFamily.Medium,
    lineHeight: 16.8,
    textAlign: 'left',
  },
  textDropdown: {
    color: Colors.GREY_DARK,
    fontSize: 12,
    lineHeight: 16.8,
    textAlign: 'left',
    fontFamily: fontFamily.Medium,
  },
  grimg: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: Colors.GRAY,
    backgroundColor: Colors.WHITE,
    width: DimensionsStyle.width * 0.155,
    height: DimensionsStyle.width * 0.155,
    left: 55,
    top: 23,
  },
  img: {
    width: Dimensions.get('window').width * 0.126,
    height: Dimensions.get('window').height * 0.06,
    marginLeft: 4,
    marginTop: 4,
  },
});
