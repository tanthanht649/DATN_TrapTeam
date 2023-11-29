import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Image } from 'react-native'
import React, {useState} from 'react'
import { BackgroundApp, Header, Input } from '@components'
import { BACKGROUND_WHITE, ICON_BACK, ICON_FILTER, fontFamily } from '@assets'
import { Colors, DimensionsStyle } from '@resources'

const _SearchResult = () => {

    const [textSearch, setTextSearch] = useState('');

    const eventRight = () => { };
    const eventLeft = () => { };
    const eventBack = () => { };

    return (
        <BackgroundApp source={BACKGROUND_WHITE}>
            <SafeAreaView style={_styles.container}>
                <Header
                    iconLeft={ICON_BACK}
                    iconRight={ICON_FILTER}
                    eventLeft={eventBack}
                    eventRight={eventRight}
                    textCenter='Kết quả tìm kiếm'
                />
                <View style={_styles.body}>
                    <View style={_styles.boxSearch}>
                        <TextInput
                            style={_styles.textInput}
                            onChangeText={(text) => { setTextSearch(text) }}
                            placeholder='Tìm kiếm' />
                        <Pressable onPress={eventRight}>
                            <Image source={ICON_FILTER} style={_styles.iconRight} />
                        </Pressable>
                    </View>
                    <Text style = { _styles.textTitle}>
                        Tìm thấy <Text style={_styles.textCount}>
                            0
                        </Text> tour
                    </Text>
                </View>
            </SafeAreaView>
        </BackgroundApp>
    )
}

const _styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: DimensionsStyle.width * 0.05
    },
    iconRight: {
        width: 50,
        height: 50,
      },
      body: {},
      inputSearch: {
        height: 50
      },
      boxSearch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.GRAY_SEARCH,
        borderRadius: 10,
        paddingStart: 10,
        marginTop: DimensionsStyle.width * 0.05,
        marginHorizontal: DimensionsStyle.width * 0.05,
      },
      textInput: {
        width: DimensionsStyle.width * 0.6,
      },
      textTitle: {
        marginTop: DimensionsStyle.width * 0.05,
        marginHorizontal: DimensionsStyle.width * 0.05,
        fontFamily: fontFamily.Medium,
        fontSize: 18
      },
      textCount: {
        fontFamily: fontFamily.Bold,
      },
})

export const SearchResult = React.memo(_SearchResult);
