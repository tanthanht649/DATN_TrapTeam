import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {BackgroundApp, Button} from '@components';
import {LOGO_APP, SPLASH_SCREEN, fontFamily} from '@assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, DimensionsStyle} from '@resources';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  OnboardingLoginStackParamList,
  WelcomeTeamStackParamList,
} from '@navigation';
import {useSelector} from 'react-redux';
import {RootState} from '@shared-state';

type PropsType = NativeStackScreenProps<
  OnboardingLoginStackParamList,
  'OnboardingStart'
>;

interface Point {
  id: number;
  point: number;
  name: string;
  favorite?: boolean;
}

const points: Point[] = [
  {id: 1, point: 8, name: 'An'},
  {id: 2, point: 6, name: 'Bình'},
  {id: 1, point: 8, name: 'Phú'},
  {id: 4, point: 3, name: 'An'},
];

interface Check {
  id: number;
  point: number;
}

const checkArray: Check[] = [
  {id: 1, point: 3},
  {id: 2, point: 5},
  {id: 3, point: 8},
];

const _OnboardingStart: React.FC<PropsType> = props => {
  const {navigation} = props;
  const dataUser = useSelector((state: RootState) => state.user.dataUsers);
  console.log('dataUser', dataUser);
  const [data, setData] = React.useState<Point[]>([]);

  useEffect(() => {
    const updatedPoints = points.map((point: Point) => {
      const isFavorite = checkArray.some(
        (check: Check) => check.point === point.point,
      );
      return {...point, favorite: isFavorite};
    });

    setData(updatedPoints);
  }, [points, checkArray]);

  return (
    <BackgroundApp source={SPLASH_SCREEN}>
      <SafeAreaView style={_styles.container}>
        <View>
          <Image source={LOGO_APP} style={_styles.imageLogo} />
          <Text style={_styles.textCenter}>BNB TOUR</Text>
        </View>
        <View
          style={{
            bottom: 20,
            position: 'absolute',
          }}>
          <Button
            title="Bắt đầu"
            onPress={() => {
              navigation.navigate('OnboardingNextOne');
            }}
            imageIconLeft={LOGO_APP}
            imageIconRight={LOGO_APP}
            viewStyle={{width: DimensionsStyle.width * 0.5, marginBottom: 20}}
          />
          <Text
            style={[
              _styles.textCenter,
              {fontSize: 12, fontFamily: fontFamily.Medium},
            ]}>
            Phiên bản
          </Text>
          <Text style={[_styles.textCenter, {fontSize: 12}]}>v.1.0</Text>
        </View>
      </SafeAreaView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageLogo: {
    width: DimensionsStyle.width * 0.3,
    height: DimensionsStyle.width * 0.4,
    marginTop: -DimensionsStyle.height * 0.2,
    marginStart: DimensionsStyle.width * 0.06,
    resizeMode: 'stretch',
  },

  textCenter: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: fontFamily.Bold,
    color: Colors.WHITE,
  },
});
export const OnboardingStart = React.memo(_OnboardingStart);
