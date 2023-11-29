import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { BackgroundApp, Button, ButtonArrow, Input, ItemLocation, ViewSwitcher, ViewSwitcherProfile, HeaderHome2 } from '@components';
import { ARROW_LEFT_LINE, ARROW_LEFT_LINE_2, ARROW_LEFT_LINE_BIG, BACKGROUND_WHITE, EMAIL, LOCATION_2, MESSAGING, SEARCH_BOTTOM_TAB } from '@assets';

type PropsType = NativeStackScreenProps<WelcomeTeamStackParamList, 'Test'>;
const _Test: React.FC<PropsType> = props => {
  const { navigation } = props;
  const [search, setSearch] = useState<string>('');
  const handleOnchangeText = (value: string) => {
    setSearch(value);
    console.log(value)
  }
  const testAddCard = () => {
    console.log('testAddCard')
  }
  const [listViewType, setListViewType] = useState<'list' | 'grid'>('list');
  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </Pressable>

        <ItemLocation
          imageLocation={LOCATION_2}
          text="2.5 km from Srengseng, Kembangan, West Jakarta City, Jakarta 11630"
          textBolds={['2.5 km']}
          statusOnPress={true}
        />
        <Button title='Next' onPress={() => { }} viewStyle={{ width: 278 }} imageIconLeft={EMAIL} imageIconRight={MESSAGING}></Button>
        <ButtonArrow imageIcon={ARROW_LEFT_LINE} onPress={() => { }} shadow={true}></ButtonArrow>
        <Input label='search' value={search} onChangeText={handleOnchangeText} imageIconLeft={SEARCH_BOTTOM_TAB} imageIconRight={ARROW_LEFT_LINE_2} iconRightStyle={{ opacity: 0 }} ></Input>
        <ViewSwitcher
          quantityEstates={22}
          onTabChange={setListViewType} />
        <ViewSwitcherProfile
          onAddCardPress={() => {
            testAddCard()
          }}
          quantityEstates={73}
          textProfile='listings'
          showAddCard={true}
        />
        <ViewSwitcherProfile
          quantityEstates={21}
          textProfile='transactions'
          showAddCard={false}
        />
        <HeaderHome2
          avatar={BACKGROUND_WHITE}
          statusNotification={true}
          onPressNotification={() => { }}
          onPressAvatar={() => { }}
          onPressSetting={() => { }}
        />

      </SafeAreaView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export const Test = React.memo(_Test);
