import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { BackgroundApp, Button, ButtonArrow, Header, Input, ItemLocation, TextPlus, ViewSwitcher } from '@components';
import { ARROW_LEFT_LINE, ARROW_LEFT_LINE_2, ARROW_LEFT_LINE_BIG, BACKGROUND_WHITE, EMAIL, HOUSE, ICON_BACK, LOCATION_2, MESSAGING, SEARCH_BOTTOM_TAB, fontFamily } from '@assets';
import { Colors, DimensionsStyle } from '@resources';

type PropsType = NativeStackScreenProps<WelcomeTeamStackParamList, 'AddDetail'>;
const _AddDetail: React.FC<PropsType> = props => {
  const { navigation } = props;
  const [search, setSearch] = useState<string>('Khách sạn');
  const handleOnchangeText = (value: string) => {
    setSearch(value);
    console.log(value)
  }
  const [listViewType, setListViewType] = useState<'list' | 'grid'>('list');
  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
      <Header
          textCenter={'Thêm bài đăng'}
          iconLeft={ICON_BACK}
          eventLeft={() => console.log('IconLeft')}
          styleIconLeft={{marginLeft:-DimensionsStyle.width*0.06}}
        />
        <TextPlus text='Chào Join, hãy điền vào thông tin chuyến đi của bạn '
          textBolds={['chuyến đi của bạn']}
          boldStyle={_styles.textBold}
          textStyle={_styles.text} />
          <Input
          value={search}
          onChangeText={handleOnchangeText}
          imageIconLeft={HOUSE}
          imageIconRight={HOUSE}
          label='Tìm kiếm '
          iconRightStyle={{ opacity: 0 }}
          viewStyle={{ width: 327, alignSelf: 'center',marginTop:DimensionsStyle.height*0.025 }} ></Input>
      </SafeAreaView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
   flex: 1,
   marginHorizontal:24
  },
  text: {
    fontSize: 25,
    fontFamily: fontFamily.Regular,
    color: Colors.GREY_DARK,
    marginTop: DimensionsStyle.height * 0.04,
    lineHeight: 40
  },
  textBold: {
    fontSize: 25,
    fontFamily: fontFamily.Bold,
    color: Colors.BLUE,
  },
});

export const AddDetail = React.memo(_AddDetail);
