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
  AVT_HOME,
  CHEVRON_DOWN,
  LOCATION,
  LOGO_HOME,
  NOTIFICATION,
  NOTIFICATION_SELECT,
  fontFamily,
} from '@assets';
import SelectDropdown from 'react-native-select-dropdown';


interface HeaderProps extends TextProps {
  leftHeader?: () => void;
  //
 
  //
  rightHeader?: () => void;
}

const _HeaderHome: React.FC<HeaderProps> = props => {
  
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.boxLeft}>
        <TouchableOpacity>
          <SafeAreaView style={styles.gr}>
            <Image source={LOGO_HOME} style={styles.imglo} />
           
          </SafeAreaView>
        </TouchableOpacity>
      </SafeAreaView>
    
      <SafeAreaView style={styles.boxRight}>
        <TouchableOpacity>
          <SafeAreaView style={styles.grimg}>
            <Image source={AVT_HOME} style={styles.img} />
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
    width: Dimensions.get('window').width * 1.0,
    height: Dimensions.get('window').height * 0.13,
    borderWidth: 0.1,
    elevation: 0.2,
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
    width: DimensionsStyle.width * 0.37,
    height: DimensionsStyle.width * 0.15,
    right: 40,
  },
  imglo: {
    width: Dimensions.get('window').width * 0.115,
    height: Dimensions.get('window').height * 0.065,
    marginLeft: 5,
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
