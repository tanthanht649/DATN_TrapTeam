import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackgroundApp, Header, Input, ViewSwitcher} from '@components';
import {
  BACKGROUND_WHITE,
  DL,
  EMAIL_LOGIN,
  FIND,
  FTL_1,
  HEART_ACTIVE,
  HEART_INACTIVE,
  ICON_BACK,
  IMAGE_FEATURED_LIST,
  IMAGE_FEATURED_LIST_2,
  IMAGE_FEATURED_LIST_3,
  ONBOARDING_1,
  SETTING,
  SETTING_BG,
  VHL,
  VHL_FL_1,
  VHL_FL_2,
  VHL_FL_3,
  fontFamily,
} from '@assets';
import {Colors, DimensionsStyle} from '@resources';

const _FeaturedListDetail = () => {
  const [hideElement, setHideElement] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [listViewType, setListViewType] = useState<'list' | 'grid'>('list');

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        {hideElement ? null : (
          <View>
            <View style={[_styles.containerImageTop]}>
              <View style={_styles.containerImageTopLeft}>
                <Image
                  style={[
                    _styles.image,
                    {
                      opacity: 0.4,
                    },
                  ]}
                  source={VHL_FL_1}
                />

                <Image
                  style={[
                    _styles.image,
                    {
                      width: '93%',
                      height: '93%',
                      position: 'absolute',
                      resizeMode: 'stretch',
                      alignSelf: 'center',
                      top: 12,
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 12,
                      borderTopRightRadius: 12,
                      borderTopLeftRadius: 30,
                    },
                  ]}
                  source={VHL_FL_1}
                />
              </View>
              <View style={_styles.containerImageTopCenter}></View>
              <View style={[_styles.containerImageTopRight]}>
                <View style={_styles.containerImageTopRightBottom}>
                  <Image
                    style={[
                      _styles.image,
                      {
                        opacity: 0.6,
                      },
                    ]}
                    source={VHL_FL_3}
                  />
                  <Image
                    style={[
                      _styles.image,
                      {
                        width: '85%',
                        height: '78%',
                        position: 'absolute',
                        resizeMode: 'stretch',
                        alignSelf: 'center',
                        top: 13,
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 30,
                        borderTopRightRadius: 12,
                        borderTopLeftRadius: 12,
                      },
                    ]}
                    source={VHL_FL_3}
                  />
                </View>
                <View style={[_styles.containerImageTopRightTop]}>
                  <Image
                    style={[
                      _styles.image,
                      {
                        opacity: 0.75,
                      },
                    ]}
                    source={VHL_FL_2}
                  />
                  <Image
                    style={[
                      _styles.image,
                      {
                        width: '85%',
                        height: '90%',
                        position: 'absolute',
                        resizeMode: 'stretch',
                        alignSelf: 'center',
                        top: 12,
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 12,
                      },
                    ]}
                    source={VHL_FL_2}
                  />
                </View>
              </View>
            </View>
          </View>
        )}
        <Header
          iconLeft={ICON_BACK}
          iconRight={SETTING_BG}
          iconHeart={HEART_INACTIVE}
          eventLeft={() => console.log('IconLeft')}
          eventRight={() => console.log('EventRight')}
          isCheck={true}
          styleView={_styles.viewHeder}
          styleIconRight={{display: 'none'}}
        />
        <View style={_styles.containetTextCenter}>
          <Text style={_styles.textCenterTop}>Bali</Text>
          <Text style={_styles.textCenterBottom}>
            Our recommended real estates in Jakarta
          </Text>
        </View>

        <View>
          <ViewSwitcher quantityEstates={22} onTabChange={setListViewType} />
        </View>
      </SafeAreaView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: DimensionsStyle.width * 0.69,
  },

  viewHeder: {
    position: 'absolute',
    top: 15,
    left: 0,
    right: 0,
  },

  containerImageTop: {
    height: DimensionsStyle.width * 0.8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
  },

  containerImageTopLeft: {
    width: '72%',
    borderRadius: 30,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    overflow: 'hidden',
  },

  containerImageTopCenter: {
    width: '2%',
  },
  containerImageTopRight: {
    width: '30.5%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    right: 0,
  },

  containerImageTopRightTop: {
    width: '100%',
    height: '70%',
    borderTopRightRadius: 30,
    borderRadius: 12,
    overflow: 'hidden',
  },
  containerImageTopRightBottom: {
    width: '100%',
    height: '34%',
    borderRadius: 12,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },

  containetTextCenter: {
    width: '100%',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  textCenterTop: {
    fontSize: 25,
    color: Colors.BLACK,
    fontFamily: fontFamily.Bold,
  },
  textCenterBottom: {
    fontSize: 15,
    color: Colors.BLACK,
    fontFamily: fontFamily.Regular,
  },
});

export const FeaturedListDetail = React.memo(_FeaturedListDetail);
