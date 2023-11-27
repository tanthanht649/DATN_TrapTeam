import { FlatList, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { BackgroundApp, Header } from '@components';
import {
    ADD_BLOG,
    BACKGROUND_WHITE,
    ICON_BACK,
    IMAGE_FEATURED_LIST,
    LINE,
    LINE_BLOG,
    LINE_ONBOARDING,
    fontFamily,
} from '@assets';
import { Colors, DimensionsStyle } from '@resources';


type ItemProps = {
    id: string;
    image: ImageSourcePropType;
    title: string;
    time: string,
    name: string,
    avatar: ImageSourcePropType
};
const DATA = [
    {
        id: '1',
        image: IMAGE_FEATURED_LIST,
        title: 'Đây là cảnh đẹp',
        time: '4',
        name: 'Thuy Ân',
        avatar: IMAGE_FEATURED_LIST
    },
    {
        id: '2',
        image: IMAGE_FEATURED_LIST,
        title: 'Đây là cảnh đẹp',
        time: '4',
        name: 'Thuy Ân',
        avatar: IMAGE_FEATURED_LIST
    },
    {
        id: '3',
        image: IMAGE_FEATURED_LIST,
        title: 'Đây là cảnh đẹp',
        time: '4',
        name: 'Thuy Ân',
        avatar: IMAGE_FEATURED_LIST
    },
];



const Item = ({ id, title, avatar, image, name, time }: ItemProps) => (
    <View style={_styles.item}>
        <View style={_styles.row}>
            <Image style={_styles.avatar} source={avatar}></Image>
            <View>
                <Text style={_styles.name}>{name}</Text>
                <Text style={_styles.time}>{time} giờ trước</Text>
            </View>
        </View>
        <Text style={_styles.title}>{title}</Text>
        <Image style={_styles.image} source={image}></Image>
        <Image style={_styles.line} source={LINE_BLOG}></Image>

    </View>
);
type PropsType = NativeStackScreenProps<WelcomeTeamStackParamList, 'Blogs'>;
const _Blog: React.FC<PropsType> = props => {
    const { navigation } = props;
    return (
        <BackgroundApp source={BACKGROUND_WHITE}>
            <SafeAreaView style={_styles.container}>
                <Header
                    textCenter={'Bài viết'}
                    iconLeft={ICON_BACK}
                    iconRight={ADD_BLOG}
                    eventLeft={() => console.log('IconLeft')}
                    styleIconLeft={{ marginLeft: -DimensionsStyle.width * 0.06 }}
                    styleIconRight={{ marginRight: -DimensionsStyle.width * 0.06 }}
                    eventRight={() => console.log(navigation.navigate('CreateBlog'))}

                />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} name={item.name} avatar={item.avatar} image={item.image} time={item.time} id={item.id} />}
                    keyExtractor={item => item.id}
                />

            </SafeAreaView>
        </BackgroundApp>
    );
};

const _styles = StyleSheet.create({
    container: {
        marginHorizontal: 34,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    item: {
        marginTop: 20
    },
    title: {
        fontSize: 14,
        fontFamily: fontFamily.Regular,
        color: Colors.BLUE_TEXT,
        lineHeight: 35,
        textAlign: 'justify',
    },
    avatar: {
        height: 55,
        width: 55,
        alignSelf: 'center',
        marginBottom: 12,
        borderWidth: 3,
        borderColor: Colors.GREEN,
        borderRadius: 100,
        resizeMode: 'contain',
        marginRight: 15
    },
    image: {
        height: DimensionsStyle.height * 0.5,
        width: DimensionsStyle.width * 0.86,
        resizeMode: 'stretch',
        overflow: 'hidden',
        alignSelf: 'center',
        marginBottom: 25
    },
    time: {
        fontSize: 12,
        fontFamily: fontFamily.Regular,
        color: Colors.BLUE_TEXT,
        textAlign: 'justify',
    },
    name: {
        fontSize: 13,
        fontFamily: fontFamily.Bold,
        color: Colors.GREY_DARK_1,
    },
    line: {
        height: 2,
        width: DimensionsStyle.width * 0.86,


    }
});

export const Blogs = React.memo(_Blog);
