import React, { useState, useCallback, useMemo } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import {
  fontFamily, HORIZONTAL_ACTIVE,
  HORIZONTAL_INACTIVE, VERTICAL_ACTIVE,
  VERTICAL_INACTIVE
} from '@assets';
import { Colors, DimensionsStyle } from '@resources';
import { TextPlus } from '../textPlus';

type Props = {
  quantityEstates?: number;
  onTabChange: (tab: 'list' | 'grid') => void;
};

const TabButton: React.FC<{ onPress: () => void; source: any; isActive: boolean }> = ({ onPress, source, isActive }) => (
  <TouchableOpacity
    style={[_styles.tabButton, isActive && _styles.activeTabButton]}
    onPress={onPress}
  >
    <Image
      source={source}
      style={_styles.tabImage}
    />
  </TouchableOpacity>
);

const _ViewSwitcher: React.FC<Props> = props => {
  const { quantityEstates, onTabChange } = props;

  const text = useMemo(() => {
    return quantityEstates ? `Found ${quantityEstates} estates` : 'Không tìm thấy thông tin';
  }, [quantityEstates]);

  const [activeTab, setActiveTab] = useState<'horizontal' | 'vertical'>('horizontal');

  const handlePress = useCallback((tab: 'horizontal' | 'vertical') => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab === 'horizontal' ? 'list' : 'grid');
    }
  }, [onTabChange]);

  return (
    <View style={_styles.container}>
      <TextPlus
        text={text}
        textBolds={[`${quantityEstates}`]}
        numberOfLines={1}
        textStyle={StyleSheet.flatten([_styles.text])}
        boldStyle={StyleSheet.flatten([_styles.textBold])}
      />
      <View style={_styles.containerBtn}>
        <TabButton
          onPress={() => handlePress('vertical')}
          source={activeTab === 'vertical' ? VERTICAL_ACTIVE : VERTICAL_INACTIVE}
          isActive={activeTab === 'vertical'}
        />
        <TabButton
          onPress={() => handlePress('horizontal')}
          source={activeTab === 'horizontal' ? HORIZONTAL_ACTIVE : HORIZONTAL_INACTIVE}
          isActive={activeTab === 'horizontal'}
        />
      </View>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '75%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontFamily: fontFamily.Regular,
    color: Colors.GREY_DARK,
  },
  textBold: {
    fontSize: 18,
    fontFamily: fontFamily.Bold,
    color: Colors.BLUE,
  },
  containerBtn: {
    width: DimensionsStyle.width * 0.25,
    height: 40,
    backgroundColor: Colors.GRAY,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 30,
    justifyContent: 'space-around',
  },
  tabButton: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  activeTabButton: {
    backgroundColor: 'white',
  },
  tabImage: {
    width: 12,
    height: 12,
  },
});

export const ViewSwitcher = React.memo(_ViewSwitcher);
