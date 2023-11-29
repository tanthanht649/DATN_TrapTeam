import { StyleSheet, View, StatusBar, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import GetLocation, {
    Location,
    LocationErrorCode,
    isLocationError,
} from 'react-native-get-location';
import {
    SEARCH_BOTTOM_TAB,
    LOCATION_3,
    MY_LOCATION,
    MY_NULL_LOCATION,
} from '@assets';
import { Colors, DimensionsStyle } from '@resources';
import {
    HeaderEmpty, InputPosition
} from '@components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';

type PropsType = NativeStackScreenProps<
    WelcomeTeamStackParamList,
    'EmptyExplore'
>;

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = LATITUDE_DELTA * (DimensionsStyle.width / DimensionsStyle.height);
const mapStyle = [
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]


const _EmptyExplore: React.FC<PropsType> = props => {
    const [textValue, setTextValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState<Location | null>(null);
    const [error, setError] = useState<LocationErrorCode | null>(null);
    const [markerSize, setMarkerSize] = useState(_styles.iconLocation);
    const markerRef = useRef(null);
    const [region, setRegion] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });
    const mapRef = useRef<MapView>(null);
    const initialRegionRef = useRef({
        latitude: 0,
        longitude: 0,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });

    useEffect(() => {
        requestLocation();
    }, []);

    const requestLocation = async () => {
        setLoading(true);
        setLocation(null);
        setError(null);

        try {
            const newLocation = await GetLocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 30000,
                rationale: {
                    title: 'Cấp quyền vị trí',
                    message: 'Ứng dụng cần cấp quyền để lấy vị trí của bạn.',
                    buttonPositive: 'Chấp nhận',
                },
            });

            const region = {
                latitude: newLocation.latitude,
                longitude: newLocation.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            };

            setLocation(newLocation);
            setRegion(region);
            initialRegionRef.current = region;
        } catch (ex) {
            if (isLocationError(ex)) {
                setError(ex.code);
            }
            console.warn(ex);
        } finally {
            setLoading(false);
        }
    };

    const handleResetRegion = () => {
        setRegion(initialRegionRef.current);
        if (mapRef.current) {
            mapRef.current.animateToRegion(initialRegionRef.current, 500);
        }
    };
    return (
        <View style={_styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <HeaderEmpty
                onSelectLocation={(selectedLocation) => {
                    console.log(selectedLocation);
                    // Di chuyển đến vị trí đã chọn
                    if (mapRef.current) {
                        mapRef.current.animateToRegion({
                            latitude: selectedLocation.latitude,
                            longitude: selectedLocation.longitude,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA,
                        }, 500);
                    }
                }}
            />
            <InputPosition
                label="Tìm kiếm"
                value={textValue}
                onChangeText={setTextValue}
                imageIconLeft={SEARCH_BOTTOM_TAB}
            />
            <MapView
                customMapStyle={mapStyle}
                ref={mapRef}
                style={_styles.styleMap}
                provider={PROVIDER_GOOGLE}
                region={region}
                initialRegion={region}
            >
                <Marker
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                    }}
                    title="Vị trí của bạn"
                    description="Đây là vị trí hiện tại của bạn"
                    image={
                        region.latitude === 0
                            ? MY_NULL_LOCATION
                            : MY_LOCATION
                    }
                    ref={markerRef}
                />
            </MapView>

            <TouchableOpacity
                onPress={handleResetRegion}
                style={_styles.containerButton}>
                <Image
                    source={LOCATION_3}
                    style={_styles.iconLocation} />

            </TouchableOpacity>

        </View>
    );
};
const DATA = [
    { label: 'Hồ Chí Minh', value: '1', latitude: 10.8230989, longitude: 106.6296638 },
    { label: 'Hà Nội', value: '2', latitude: 21.028511, longitude: 105.804817 },
    { label: 'Đà Nẵng', value: '3', latitude: 16.047079, longitude: 108.206230 },
    { label: 'Cần Thơ', value: '4', latitude: 10.045162, longitude: 105.746857 },
];
const _styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: DimensionsStyle.width * 0.14,
        height: DimensionsStyle.height * 0.068,
        backgroundColor: Colors.BLUE_SELECT,
        borderRadius: 100,
        bottom: DimensionsStyle.height * 0.04,
        left: DimensionsStyle.width * 0.05,
        position: 'absolute',
        shadowColor: Colors.GREY_DARK,
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation: 30,
    },
    iconLocation: {
        width: 24,
        height: 24,
    },
    styleMap: {
        flex: 1,
        width: '100%',
        zIndex: -2,
    },
});
export const EmptyExplore = React.memo(_EmptyExplore);
