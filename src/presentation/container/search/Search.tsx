import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import {
  SafeAreaInsetsContext,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { BackgroundApp, Header, Input } from '@components';
import { BACKGROUND_WHITE, ICON_BACK, ICON_FILTER, fontFamily } from '@assets';
import { Colors, DimensionsStyle } from '@resources';

const _Search = () => {

  const eventRight = () => { };
  const eventLeft = () => { };
  const eventBack = () => { };
  const [textSearch, setTextSearch] = useState('');

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        <View style={_styles.header}>
          <Pressable onPress={eventBack}>
            <Image source={ICON_BACK} style={_styles.iconRight} />
          </Pressable>
          <View style={_styles.boxSearch}>
            <TextInput
              style={_styles.textInput}
              onChangeText={(text) => { setTextSearch(text) }}
              placeholder='Tìm kiếm' />
            <Pressable onPress={eventRight}>
              <Image source={ICON_FILTER} style={_styles.iconRight} />
            </Pressable>
          </View>
        </View>
        <View style={_styles.title}>
          <Text style={_styles.textTitle}>Gợi ý</Text>
          <Pressable>
            <Text style={_styles.textSeeAll}>Xem tất cả</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: DimensionsStyle.width * 0.05,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconRight: {
    width: 50,
    height: 50,
  },
  inputSearch: {
    height: 50
  },
  boxSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.GRAY_SEARCH,
    borderRadius: 50,
    paddingStart: 10
  },
  textInput: {
    width: DimensionsStyle.width * 0.6,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: DimensionsStyle.height * 0.02
  },
  textTitle: {
    fontFamily: fontFamily.Bold,
    fontSize: 18
  },
  textSeeAll: {
    fontFamily: fontFamily.Light,
    fontSize: 12,
    textDecorationLine: 'underline'
  },

});
export const Search = React.memo(_Search);