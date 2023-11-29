import { ImageBackground, StyleSheet, View, Image, TouchableOpacity, FlatList, Text, ScrollView, TextInput } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { Colors } from '@resources';
import { BackgroundApp, Header, ImageListDetail, TextPlus, ItemLocation, Button } from '@components';
import { BACKGROUND_WHITE, ICON_BACK, IMAGE_DETAIL, HEART_INACTIVE, LOCATION, LOCATION_2, ELLIPSE, SEND_REVIEW } from '@assets';

type PropsType = NativeStackScreenProps<WelcomeTeamStackParamList, 'DetailFull'>;

const DATA = [
    { id: 1, name: 'Thành', content: 'Phong cảnh rất đẹp, khí hậu mùa thu mát mẻ. Tour rất vui, và chuyên nghiệp.' },
    { id: 2, name: 'Thành', content: 'Phong cảnh rất đẹp, khí hậu mùa thu mát mẻ. Tour rất vui, và chuyên nghiệp.' },
    { id: 3, name: 'Thành', content: 'Phong cảnh rất đẹp, khí hậu mùa thu mát mẻ. Tour rất vui, và chuyên nghiệp.' },
    { id: 4, name: 'Thành', content: 'Phong cảnh rất đẹp, khí hậu mùa thu mát mẻ. Tour rất vui, và chuyên nghiệp.' },
];
const _DetailFull: React.FC<PropsType> = props => {
    const { navigation } = props;
    const [price, setPrice] = useState('6,999,000');
    const [priceChill, setPriceChill] = useState('1,400,000');
    const [notereview, setNotereview] = useState<string>('');
    const [showAll, setShowAll] = useState(false);
    const schedule = [
        '4 ngày 3 đêm',
        'Ngày 1: Đà Nẵng - Sơn Trà - Mỹ Khê',
        'Ngày 2: KHÁM PHÁ CAO NGUYÊN BÀ BÀ – TẮM BIỂN - MỸ KHÊ',
        'Ngày 3: CÙ LAO CHÀM – PHỐ CỔ HỘI AN.',
        'Ngày 4: KHÁM PHÁ ĐÀ NẴNG.'
    ];


    return (
        <ScrollView>
            <BackgroundApp source={BACKGROUND_WHITE}>
                <ImageBackground source={IMAGE_DETAIL} style={{
                    width: '100%', height: 600, borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    overflow: 'hidden',
                    paddingTop: 20
                }} resizeMode="cover">
                    <Header
                        iconLeft={ICON_BACK}
                        iconHeart={HEART_INACTIVE}
                        eventLeft={() => console.log('IconLeft')}
                        eventRight={() => console.log('EventRight')}
                        isCheck={false}
                    />
                </ImageBackground>

                <View style={{
                    flexDirection: 'column', padding: 10
                }}>
                    < TextPlus
                        textBolds={['Tour Tết 2024: Đà Nẵng - Hội An']}
                        text='Tour Tết 2024: Đà Nẵng - Hội An'
                        boldStyle={{ color: '#252B5C', fontSize: 18 }}
                        viewStyle={{ padding: 10 }}
                        textStyle={{ color: '#252B5C' }}
                        numberOfLines={2}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>
                        <Image source={LOCATION} style={{ width: 18, height: 18 }} />
                        < TextPlus
                            textBolds={['']}
                            viewStyle={{ paddingHorizontal: 10, paddingVertical: 5, alignItems: 'center' }}
                            text='Đà Nẵng - Quảng Nam, Việt Nam'
                            textStyle={{ fontSize: 12, color: '#252B5C' }}
                            numberOfLines={1}
                        />
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: 'red', padding: 10 }}>
                        Giá: {`${price}`} VND
                    </Text>
                </View>
                <View style={{ flexDirection: 'column', paddingHorizontal: 20, marginBottom: 10 }}>
                    <TextPlus
                        textBolds={['Mô tả']}
                        text=' Mô tả'
                        textStyle={{ fontSize: 18, color: '#252B5C' }}
                        boldStyle={{ color: '#252B5C', fontSize: 18 }}
                        numberOfLines={1} />
                    <Text style={{ fontSize: 12, padding: 3 }}>
                        Người lớn: {`${price}`} VND
                    </Text>
                    <Text style={{ fontSize: 12, padding: 3 }}>
                        Trẻ em: {`${priceChill}`} VND
                    </Text>
                </View>
                <View style={{ flexDirection: 'column', paddingHorizontal: 20 }}>
                    <TextPlus
                        textBolds={['Lịch trình']}
                        text=' Lịch trình'
                        textStyle={{ fontSize: 16, color: '#252B5C' }}
                        boldStyle={{ color: '#252B5C', fontSize: 18 }}
                        numberOfLines={1} />
                    {schedule.map((item, index) => (
                        <Text key={index} style={{ fontSize: 12, padding: 3 }}>
                            {item}
                        </Text>
                    ))}
                </View>
                <View style={{ width: '90%', borderBottomWidth: 1, borderBottomColor: '#00000033', alignSelf: 'center', paddingTop: 10, }} />
                <View style={{ flexDirection: 'column', paddingHorizontal: 20, paddingVertical: 10, }}>
                    <TextPlus
                        textBolds={['Vị trí']}
                        text='Vị trí'
                        textStyle={{ fontSize: 16, color: '#252B5C' }}
                        boldStyle={{ color: '#252B5C', fontSize: 18 }}
                        numberOfLines={1} />
                </View>
                <ItemLocation
                    imageLocation={LOCATION_2}
                    text="Bà Nà Hills, Đà Nẵng - Hội An, Quảng Nam, Việt Nam"
                    textBolds={['2.5 km']}
                    statusOnPress={true}
                />
                <View
                    style={{
                        width: '90%', height: 150,
                        backgroundColor: '#F5F4F8', alignSelf: 'center',
                        borderRadius: 25, marginVertical: 10,
                        flexDirection: 'column'
                    }}>
                    <View style={{ flexDirection: 'row', zIndex: 0, marginTop: 5, marginLeft: 5 }}>
                        <Image
                            source={ELLIPSE}
                            style={{ width: 50, height: 50, alignSelf: 'flex-start', margin: 5 }}
                        />
                        <TextPlus
                            textBolds={['Thành']}
                            text={'Thành'}
                            textStyle={{ fontSize: 14, color: '#252B5C' }}
                            boldStyle={{ color: '#252B5C', fontSize: 14 }}
                            numberOfLines={1} />
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, backgroundColor: 'while', zIndex: 1 }}>
                        <TextInput
                            style={{ height: 'auto', width: '90%', alignSelf: 'center', textAlignVertical: 'top', backgroundColor: '#F5F4F8', borderRadius: 25, padding: 10 }}
                            placeholder="Viết vào đây đánh giá của bạn"
                            value={notereview}
                            multiline={true} />
                        <TouchableOpacity style={{ alignSelf: 'flex-start', margin: 5 }}>
                            <Image source={SEND_REVIEW} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TextPlus
                    textBolds={['Đánh giá']}
                    text='Đánh giá'
                    textStyle={{ fontSize: 16, color: '#252B5C' }}
                    boldStyle={{ color: '#252B5C', fontSize: 18 }}
                    viewStyle={{ paddingHorizontal: 20 }}
                    numberOfLines={1} />
                <FlatList
                    data={showAll ? DATA : DATA.slice(0, 2)}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                width: '90%', height: 150,
                                backgroundColor: '#F5F4F8', alignSelf: 'center',
                                borderRadius: 25, marginVertical: 5,
                                flexDirection: 'column'
                            }}>
                            <View style={{ flexDirection: 'row', zIndex: 0, marginTop: 5, marginLeft: 5 }}>
                                <Image
                                    source={ELLIPSE}
                                    style={{ width: 50, height: 50, alignSelf: 'flex-start', margin: 5 }}
                                />
                                <TextPlus
                                    textBolds={[item.name]}
                                    text={item.name}
                                    textStyle={{ fontSize: 14, color: '#252B5C' }}
                                    boldStyle={{ color: '#252B5C', fontSize: 14 }}
                                    numberOfLines={1} />
                            </View>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 10, backgroundColor: 'while', zIndex: 1 }}>
                                <Text style={{ paddingLeft: 55, fontSize: 14 }}>
                                    {item.content}
                                </Text>
                            </View>
                        </View>
                    )}
                />
                <TouchableOpacity
                    onPress={() => setShowAll(true)}
                    style={{ width: '90%', height: 50, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5F4F8', borderRadius: 25, marginTop: 10, marginBottom: 60 }}>
                    <Text style={{ fontSize: 14, color: '#252B5C', textAlign: 'center', alignItems: 'center', fontWeight: '700' }} onPress={() => setShowAll(!showAll)}>
                        {showAll ? "Thu gọn bài viết" : "Hiển thị tất cả"}
                    </Text>
                </TouchableOpacity>
                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, marginTop: 70 }}>
                    <Button viewStyle={{ width: '60%' }} title="Đặt Tour" onPress={() => console.log('Nút được nhấn')} />
                </View>
            </BackgroundApp >
        </ScrollView >

    );
};

const _styles = StyleSheet.create({
});

export const DetailFull = React.memo(_DetailFull);
