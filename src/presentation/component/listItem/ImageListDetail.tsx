import React, { useState, useCallback } from 'react';
import { Image, TouchableOpacity, FlatList, Text, View } from 'react-native';

export type ImageItemProps = {
    item: string;
    index: number;
    showAll: boolean;
    setShowAll: (showAll: boolean) => void;
    images: string[];
    setBackground: (image: string) => void;
};

const ImageItem: React.FC<ImageItemProps> = React.memo(({ item, index, showAll, setShowAll, images, setBackground }) => {
    if (index > 2 && !showAll) {
        return (
            <TouchableOpacity onPress={() => setShowAll(true)}>
                <View style={{ width: 100, height: 100, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>{`+${images.length - 3}`}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity onPress={() => setBackground(item)}>
            <Image source={{ uri: item }} style={{ width: 60, height: 60 }} />
        </TouchableOpacity>
    );
});

export type ImageListProps = {
    images: string[];
    setBackground: (image: string) => void;
};

const _ImageListDetail: React.FC<ImageListProps> = ({ images, setBackground }) => {
    const [showAll, setShowAll] = useState(false);

    const data = showAll ? images : images.slice(0, 4);

    const renderItem = useCallback(({ item, index }: any) => (
        <ImageItem item={item} index={index} showAll={showAll} setShowAll={setShowAll} images={images} setBackground={setBackground} />
    ), [showAll, setShowAll, images]);

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            extraData={showAll}
            horizontal
        />
    );
};

export const ImageListDetail = React.memo(_ImageListDetail);
