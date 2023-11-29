
import React, { useCallback } from 'react';
import { StyleSheet, Image, Pressable, SafeAreaView, View } from 'react-native';
import { Colors, DimensionsStyle } from '@resources';
import { CHEVRON_DOWN, LOCATION, NOTIFICATION, NOTIFICATION_SELECT, SETTING, fontFamily } from '@assets';
import SelectDropdown from 'react-native-select-dropdown';

export type Location = {
  label: string;
  value: string;
  latitude: number;
  longitude: number;
};

export type HeaderEmptyProps = {
  statusNotification?: boolean;
  onPressNotification?: () => void;
  onPressAvatar?: () => void;
  onPressSetting?: () => void;
  checkNotify?: boolean;
  DATA?: Array<Location>;
  onSelectLocation?: (location: Location) => void;
};

const _HeaderEmpty: React.FC<HeaderEmptyProps> = ({
  statusNotification,
  onPressNotification,
  onPressAvatar,
  onPressSetting,
  checkNotify,
  DATA,
  onSelectLocation
}) => {

  const dropdownData =
    [
      { label: 'Hồ Chí Minh', value: '1', latitude: 10.8230989, longitude: 106.6296638 },
      { label: 'Hà Nội', value: '2', latitude: 21.028511, longitude: 105.804817 },
    ]

  const handleSelectLocation = useCallback((selectedItem: Location) => {
    if (onSelectLocation) {
      onSelectLocation(selectedItem);
    }
  }, [onSelectLocation]);

  return (
    <SafeAreaView style={_styles.container}>
      <View style={_styles.locationContainer}>
        <Image source={LOCATION} style={_styles.imageLocation} />
        <SelectDropdown
          data={dropdownData}
          buttonStyle={_styles.selectDropdown}
          buttonTextStyle={_styles.textDefault}
          rowTextStyle={_styles.textDefault}
          onSelect={handleSelectLocation}
          renderDropdownIcon={() => <Image source={CHEVRON_DOWN} style={_styles.styleDropdownIcon} />}
          dropdownIconPosition="right"
          rowTextForSelection={(item: Location) => item.label}
          buttonTextAfterSelection={(selectedItem: Location) => { return selectedItem.label }}
          defaultButtonText={"Không xác định"}
          dropdownStyle={_styles.dropdownStyle}
        />
      </View>
      {checkNotify ? (
        <View style={_styles.notificationAndAvatarContainer}>
          <Pressable onPress={onPressNotification}>
            <Image source={statusNotification ? NOTIFICATION : NOTIFICATION_SELECT} style={_styles.imageNotification} />
          </Pressable>
          <Pressable style={_styles.containerAvatar} onPress={onPressAvatar} />
        </View>
      ) : (
        <Pressable style={[_styles.containerAvatar, { backgroundColor: Colors.WHITE }]} onPress={onPressSetting}>
          <Image source={SETTING} style={_styles.iconSetting} />
        </Pressable>
      )}
    </SafeAreaView>
  );
};


export const HeaderEmpty = React.memo(_HeaderEmpty);

const _styles = StyleSheet.create({
  iconSetting: {
    width: 20,
    height: 20,
  },
  dropdownStyle: {
    width: '35%',
    marginTop: -25,
    borderRadius: 5,
    marginStart: 7,
  },
  styleDropdownIcon: {
    width: 18,
    height: 18,
    marginTop: 3,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: DimensionsStyle.height * 0.04,
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '55%',
    height: '95%',
    backgroundColor: Colors.WHITE,
    borderRadius: 25,
    shadowColor: Colors.GREY_DARK,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 15,
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
    width: 45,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 10,
    borderRadius: 50,
    shadowColor: Colors.GREY_DARK,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 15,
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
