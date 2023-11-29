import React, { useState, useCallback, useMemo } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import {
  fontFamily, HORIZONTAL_ACTIVE,
  HORIZONTAL_INACTIVE, VERTICAL_ACTIVE,
  VERTICAL_INACTIVE, ADD_CARD
} from '@assets';
import { Colors, DimensionsStyle } from '@resources';
import { TextPlus } from '../textPlus';

type Props = {
  quantityEstates?: number;
  textProfile?: string;
  onAddCardPress?: () => void;
  showAddCard?: boolean;
};

const TabButton: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <View style={_styles.containerBtn}>
    <TouchableOpacity
      style={[_styles.tabButton, _styles.activeTabButton]}
      onPress={onPress}
    >
      <Image
        source={VERTICAL_ACTIVE}
        style={_styles.tabImage}
      />
    </TouchableOpacity>
  </View>
);

const AddCardButton: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      source={ADD_CARD}
      style={_styles.imageAdd} />
  </TouchableOpacity>
);

const _ViewSwitcherProfile: React.FC<Props> = props => {
  const { quantityEstates, textProfile, onAddCardPress, showAddCard } = props;

  const text = useMemo(() => {
    return quantityEstates ? `${quantityEstates} ${textProfile}` : 'Không tìm thấy thông tin';
  }, [quantityEstates, textProfile]);

  const handleAddCardPress = useCallback(() => {
    if (onAddCardPress) {
      onAddCardPress();
    }
  }, [onAddCardPress]);

  return (
    <View style={showAddCard ? _styles.container : _styles.containerNot}>
      <TextPlus
        text={text}
        textBolds={[`${quantityEstates}`]}
        numberOfLines={1}
        textStyle={StyleSheet.flatten([_styles.text])}
        boldStyle={StyleSheet.flatten([_styles.textBold])}
      />
      <View style={{ flexDirection: 'row' }}>
        <TabButton onPress={() => { }} />
        {showAddCard && <AddCardButton onPress={handleAddCardPress} />}
      </View>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '75%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  containerNot: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '87%',
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
    width: DimensionsStyle.width * 0.13,
    height: 40,
    backgroundColor: Colors.GRAY,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 30,
    marginRight: 8,
    justifyContent: 'space-around',
  },
  tabButton: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  activeTabButton: {
    backgroundColor: 'white',
  },
  tabImage: {
    width: 12,
    height: 12,
  },
  imageAdd: {
    width: 40,
    height: 40,
  },
});

export const ViewSwitcherProfile = React.memo(_ViewSwitcherProfile);
