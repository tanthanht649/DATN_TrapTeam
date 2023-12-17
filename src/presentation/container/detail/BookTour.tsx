import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackgroundApp, Button, Header } from '@components';
import {
  ARROW_DOWN,
  BACKGROUND_WHITE,
  DT_1,
  FULL_NAME,
  HEART,
  ICON_BACK,
  ICON_FILTER,
  LOCATION,
  MOMO,
  ORDER_BT,
  VHL,
  VHL_FL_1,
  VIETTEL_PAY,
  ZALO_PAY,
  fontFamily,
} from '@assets';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList, SearchStackParamList } from '@navigation';
import { Colors, DimensionsStyle } from '@resources';
import SelectDropdown from 'react-native-select-dropdown';
import {
  AppContext,
  RootState,
  getQuantityBookingTour,
  useAppDispatch,
} from '@shared-state';
import { useSelector } from 'react-redux';
import { DetailTour } from './DetailTour';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'BookTour'> &
  NativeStackScreenProps<SearchStackParamList, 'BookTour'>;

const _BookTour: React.FC<PropsType> = props => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const [adult, setAdult] = React.useState<number>(0);
  const [child, setChild] = React.useState<number>(0);
  const eventRight = () => { };
  const eventLeft = () => { };
  const eventBack = () => {
    navigation.goBack();
  };
  const [noteUI, setNoteUI] = useState<string>('');

  const locationByProvince = useSelector(
    (state: RootState) => state.location.locationByProvince,
  );

  const dataTourDetail = useSelector(
    (state: RootState) => state.tour.tourDetail,
  );

  const [priceShow, setPriceShow] = React.useState<number>(0);
  const quantity = useSelector(
    (state: RootState) => state.bookingTour.quantity,
  );

  useEffect(() => {
    if (dataTourDetail) {
      if (quantity > 30) {
        setPriceShow(dataTourDetail.price * 0.8);
      } else {
        setPriceShow(dataTourDetail.price);
      }
    }
  }, [
    quantity, dataTourDetail
  ]);


  console.log('quantity', priceShow);
  interface LocationInBookTour {
    _id: string;
    name: string;
  }

  const [dataLocationDefault, setDataLocationDefault] = React.useState<
    LocationInBookTour[]
  >([]);

  const array = useRef<LocationInBookTour[]>([]);

  useEffect(() => {
    // tạo mảng mới từ dataDetail chỉ có 2 thuộc tính là _id và name
    const dataLocation = dataTourDetail?.locations.map(item => {
      return {
        _id: item._id,
        name: item.name,
      };
    });
    setDataLocationDefault(dataLocation);

    const dataLocation2 = dataTourDetail?.locations.map(item => {
      return {
        _id: item._id,
        name: item.name,
      };
    });

    array.current = dataLocation2;
  }, []);

  const [dataLocationOption, setDataLocationOption] = React.useState<
    LocationInBookTour[]
  >([]);

  useEffect(() => {
    // tạo mảng mới từ dataDetail chỉ có 2 thuộc tính là _id và name
    const dataLocation = locationByProvince?.map(item => {
      return {
        _id: item._id,
        name: item.name,
      };
    });
    setDataLocationOption(dataLocation);
  }, []);

  const renderDropdownIcon = () => {
    return (
      <Image
        source={ARROW_DOWN}
        style={{
          position: 'absolute',
          right: 20,
        }}
      />
    );
  };

  const ItemLocation = ({
    item,
    data,
    indexRender,
  }: {
    item: LocationInBookTour;
    data: LocationInBookTour[];
    indexRender: number;
  }) => {
    return (
      <SelectDropdown
        key={item._id}
        showsVerticalScrollIndicator={false}
        renderDropdownIcon={renderDropdownIcon}
        dropdownIconPosition="right"
        defaultButtonText={item.name}
        buttonStyle={_styles.containerSelect}
        buttonTextStyle={[
          _styles.textSelect,
          {
            fontSize: 13,
            color: Colors.BLUE_TEXT,
            marginVertical: 0,
            textAlign: 'left',
          },
        ]}
        dropdownStyle={_styles.modalViewLocation}
        selectedRowStyle={[_styles.item, { backgroundColor: Colors.GREEN }]}
        selectedRowTextStyle={[_styles.textSelect, { color: Colors.WHITE }]}
        rowStyle={_styles.item}
        rowTextStyle={_styles.textSelect}
        data={dataLocationOption}
        onSelect={selectedItem => {
          array.current[indexRender] = selectedItem;
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // Hiển thị giá trị của thuộc tính 'title' sau khi một mục được chọn
          return selectedItem.name;
        }}
        rowTextForSelection={(item, index) => {
          // Hiển thị giá trị của thuộc tính 'title' cho mỗi mục trong dropdown
          return item.name;
        }}
      />
    );
  };

  const renderItemLocation = ({
    item,
    data,
    indexRender,
  }: {
    item: LocationInBookTour;
    data: LocationInBookTour[];
    indexRender: number;
  }) => {
    return (
      <ItemLocation
        item={item}
        data={data}
        key={item._id}
        indexRender={indexRender}
      />
    );
  };

  const [widthMomo, setWidthMomo] = React.useState<number>(52);
  const [widthZaloPay, setWidthZaloPay] = React.useState<number>(60);
  const [widthViettelPay, setWidthViettelPay] = React.useState<number>(60);
  const [heightMomo, setHeightMomo] = React.useState<number>(52);
  const [heightZaloPay, setHeightZaloPay] = React.useState<number>(60);
  const [heightViettelPay, setHeightViettelPay] = React.useState<number>(60);

  const { setPay } = React.useContext(AppContext);

  const handleSelectMomo = () => {
    setWidthMomo(52);
    setHeightMomo(52);
    setWidthZaloPay(60);
    setHeightZaloPay(60);
    setWidthViettelPay(60);
    setHeightViettelPay(60);
    setPay('Momo');
  };
  const handleSelectZaloPay = () => {
    setWidthMomo(60);
    setHeightMomo(60);
    setWidthZaloPay(52);
    setHeightZaloPay(52);
    setWidthViettelPay(60);
    setHeightViettelPay(60);
    setPay('ZaloPay');
  };
  const handleSelectViettelPay = () => {
    setWidthMomo(60);
    setHeightMomo(60);
    setWidthZaloPay(60);
    setHeightZaloPay(60);
    setWidthViettelPay(52);
    setHeightViettelPay(52);
    setPay('ViettelPay');
  };

  const compareArrays = (
    dataLocationDefault: LocationInBookTour[],
    dataLocationBookTourRef: React.MutableRefObject<LocationInBookTour[]>,
  ) => {
    let differences = 0;

    const aIds = dataLocationDefault.map(item => item._id);
    const bIds = dataLocationBookTourRef.current.map(item => item._id);

    for (let i = 0; i < aIds.length; i++) {
      if (!bIds.includes(aIds[i])) {
        differences++;
      }
    }
    return differences;
  };

  const hasDuplicates = (dataLocationBookTour: LocationInBookTour[]) => {
    const uniqueValues = new Set(
      dataLocationBookTour.map(item => JSON.stringify(item)),
    );
    return uniqueValues.size !== dataLocationBookTour.length;
  };



  const [quantityUI, setQuantityUI] = useState<number>(quantity);
  const [priceUI, setPriceUI] = useState<number>(0);

  const dataUser = useSelector((state: RootState) => state.user.dataUsers);

  const discountTour = (adult: number) => {
    if (adult > 20) {
      return dataTourDetail.price * (adult - 20) * 0.1;
    } else {
      return 0;
    }
  };
  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            iconLeft={ICON_BACK}
            eventLeft={eventBack}
            eventRight={eventRight}
            textCenter="Đặt tour"
          />
          <View
            style={{
              height: DimensionsStyle.width * 0.35,
              flexDirection: 'row',
              marginHorizontal: 20,
              backgroundColor: Colors.SOFT_BLUE,
              borderRadius: 20,
              overflow: 'hidden',
              marginTop: 10,
            }}>
            <View
              style={{
                width: '50%',
                padding: 7,
              }}>
              <Image
                source={{ uri: dataTourDetail.image }}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'stretch',
                  borderRadius: 20,
                }}
              />

              <Image
                source={HEART}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'stretch',
                  position: 'absolute',
                  top: 15,
                  left: 15,
                }}
              />
            </View>
            <View
              style={{
                width: '50%',
                padding: 20,
                paddingStart: 5,
                paddingEnd: 15,
              }}>
              <Text
                numberOfLines={2}
                style={{
                  fontSize: 16,
                  fontFamily: fontFamily.Bold,
                  lineHeight: 18,
                  color: Colors.BLUE_TEXT_HOME,
                }}>
                {dataTourDetail?.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 11,
                }}>
                <Image
                  source={LOCATION}
                  style={{ width: 12, height: 12, marginEnd: 2 }}
                />
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 10,
                    fontFamily: fontFamily.Medium,
                  }}>
                  {dataTourDetail?.departure_location}
                </Text>
              </View>
              <Text
                numberOfLines={1}
                style={{
                  color: Colors.RED,
                  position: 'absolute',
                  bottom: 20,
                  left: 10,
                  fontSize: 17,
                }}>
                {priceShow.toLocaleString('vi-VN')} VNĐ
              </Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={[
                  _styles.text,
                  {
                    marginVertical: 10,
                  },
                ]}>
                Yêu cầu
              </Text>

              <Text
                style={{
                  fontFamily: fontFamily.Medium,
                  fontSize: 14,
                  color: Colors.BLUE_TEXT,
                }}>
                Còn lại: {50 - quantityUI} chỗ
              </Text>
            </View>

            <View style={_styles.viewRequet}>
              <Text
                style={[
                  _styles.text,
                  { fontSize: 14, fontFamily: fontFamily.Bold },
                ]}>
                Số người lớn
              </Text>
              <View style={_styles.viewNumberic}>
                <TouchableOpacity
                  style={_styles.buttonNumberic}
                  onPress={() => {
                    adult > 0 ? setAdult(adult - 1) : setAdult(0);
                    adult > 0 ? setQuantityUI(quantityUI - 1) : null;
                    adult > 0
                      ? setPriceUI(priceUI - priceShow)
                      : null;
                  }}>
                  <Text
                    style={[
                      _styles.textNumberic,
                      {
                        marginBottom: 2,
                      },
                    ]}>
                    –
                  </Text>
                </TouchableOpacity>
                <Text
                  style={[
                    _styles.text,
                    {
                      fontSize: 14,
                    },
                  ]}>
                  {adult}
                </Text>
                <TouchableOpacity
                  style={_styles.buttonNumberic}
                  onPress={() => {
                    setAdult(adult + 1);
                    setQuantityUI(quantityUI + 1);
                    setPriceUI(priceUI + priceShow);
                  }}>
                  <Text style={[_styles.textNumberic]}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={_styles.viewRequet}>
              <Text
                style={[
                  _styles.text,
                  { fontSize: 14, fontFamily: fontFamily.Bold },
                ]}>
                Số trẻ em
              </Text>
              <View style={_styles.viewNumberic}>
                <TouchableOpacity
                  style={_styles.buttonNumberic}
                  onPress={() => {
                    child > 0 ? setChild(child - 1) : setChild(0);
                    child > 0 ? setQuantityUI(quantityUI - 1) : null;
                    child > 0
                      ? setPriceUI(priceUI - priceShow * 0.6)
                      : null;
                  }}>
                  <Text
                    style={[
                      _styles.textNumberic,
                      {
                        marginBottom: 2,
                      },
                    ]}>
                    –
                  </Text>
                </TouchableOpacity>
                <Text
                  style={[
                    _styles.text,
                    {
                      fontSize: 14,
                    },
                  ]}>
                  {child}
                </Text>
                <TouchableOpacity
                  style={_styles.buttonNumberic}
                  onPress={() => {
                    setChild(child + 1);
                    setQuantityUI(quantityUI + 1);
                    setPriceUI(priceUI + priceShow * 0.6);
                  }}>
                  <Text style={[_styles.textNumberic]}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={[_styles.text]}>Giá dự kiến</Text>
            <View style={[_styles.viewRequet, { marginTop: 15 }]}>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 14,
                    fontFamily: fontFamily.Bold,
                    color: Colors.GREY_BAREL,
                  },
                ]}>
                {priceUI.toLocaleString('vi-VN')}
              </Text>
              <Text
                style={[
                  _styles.text,
                  { fontSize: 14, fontFamily: fontFamily.Bold },
                ]}>
                VNĐ
              </Text>
            </View>
            <Text style={[_styles.text]}>Địa điểm tham quan</Text>
            {dataLocationDefault.map((item, index) => {
              return renderItemLocation({
                item,
                data: dataLocationOption,
                indexRender: index,
              });
            })}
            <Text
              style={[
                _styles.text,
                {
                  marginVertical: 15,
                },
              ]}>
              Yêu cầu riêng
            </Text>
            <TextInput
              placeholder="Bạn có thể ghi ra những yêu cầu riêng ở đây nếu có, nhân viên của chúng tôi sẽ liên hệ thông báo với bạn nếu có phát sinh."
              placeholderTextColor={Colors.GREY_BAREL}
              style={{
                height: 100,
                backgroundColor: Colors.GRAY_SEARCH,
                borderRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 10,
                textAlignVertical: 'top',
                textAlign: 'justify',
                fontSize: 14,
                lineHeight: 18,
              }}
              multiline={true}
              value={noteUI}
              onChangeText={text => setNoteUI(text)}
            />
            <Text
              style={{
                marginHorizontal: 15,
                fontFamily: fontFamily.Medium,
                marginVertical: 10,
                color: Colors.RED,
                textAlign: 'justify',
                fontSize: 14,
                lineHeight: 18,
                marginTop: 30,
              }}>
              ** Chi phí của tour có thể thay đổi tuỳ vào thời điểm mà bạn tạo
              tour, nhân viên ở công ty sẽ liên hệ nếu chi phí tour thay đổi
            </Text>
            <Text
              style={[
                _styles.text,
                {
                  marginVertical: 15,
                },
              ]}>
              Thanh toán
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Pressable
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: Colors.GREEN,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginEnd: 15,
                }}
                onPress={handleSelectMomo}>
                <Image
                  source={MOMO}
                  style={{
                    width: widthMomo,
                    height: heightMomo,
                    resizeMode: 'stretch',
                    alignSelf: 'center',
                  }}
                />
              </Pressable>
              <Pressable
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: Colors.GREEN,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginEnd: 15,
                }}
                onPress={handleSelectZaloPay}>
                <Image
                  source={ZALO_PAY}
                  style={{
                    width: widthZaloPay,
                    height: heightZaloPay,
                    resizeMode: 'stretch',
                    alignSelf: 'center',
                  }}
                />
              </Pressable>
              <Pressable
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: Colors.GREEN,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginEnd: 15,
                }}
                onPress={handleSelectViettelPay}>
                <Image
                  source={VIETTEL_PAY}
                  style={{
                    width: widthViettelPay,
                    height: heightViettelPay,
                    resizeMode: 'stretch',
                    alignSelf: 'center',
                  }}
                />
              </Pressable>
            </View>
            <Button
              title="Tiếp"
              imageIconLeft={FULL_NAME}
              imageIconRight={ORDER_BT}
              onPress={() => {
                dispatch(getQuantityBookingTour(dataTourDetail._id)).then(
                  () => {
                    if (quantity > 30) {
                      if (adult == 0) {
                        if (child > 0) {
                          Alert.alert(
                            'Thông báo',
                            'Bạn phải chọn số người lớn',
                            [
                              {
                                text: 'OK',
                                onPress: () => console.log('OK Pressed'),
                                style: 'cancel',
                              },
                            ],
                            { cancelable: false },
                          );
                          return false;
                        }
                      }

                      if (adult == 0 && child == 0) {
                        Alert.alert(
                          'Thông báo',
                          'Bạn phải chọn số lượng đặt',
                          [
                            {
                              text: 'OK',
                              onPress: () => console.log('OK Pressed'),
                              style: 'cancel',
                            },
                          ],
                          { cancelable: false },
                        );
                        return false;
                      }

                      if (adult + child > 50 - quantity) {
                        Alert.alert(
                          'Thông báo',
                          'Số lượng đặt không được vượt quá số lượng còn lại',
                          [
                            {
                              text: 'OK',
                              onPress: () => console.log('OK Pressed'),
                              style: 'cancel',
                            },
                          ],
                          { cancelable: false },
                        );
                        return false;
                      }

                      const resulthasDuplicates = hasDuplicates(array.current);
                      if (resulthasDuplicates) {
                        console.log('Có trùng');
                        Alert.alert(
                          'Thông báo',
                          'Bạn không được chọn trùng địa điểm',
                          [
                            {
                              text: 'OK',
                              onPress: () => console.log('OK Pressed'),
                              style: 'cancel',
                            },
                          ],
                          { cancelable: false },
                        );
                        return false;
                      } else {
                        const resultcompareArrays = compareArrays(
                          dataLocationDefault,
                          array,
                        );
                        if (resultcompareArrays == 0) {
                          console.log('Không có thay đổi');
                          const user_id = dataUser?._id;
                          const tour_id = dataTourDetail?._id;
                          const discount: number = discountTour(adult);
                          const adult_account = adult;
                          const child_account = child;
                          const price = priceUI - discount;
                          const note = noteUI;
                          const role = false;
                          const location_custom: LocationInBookTour[] = array.current;
                          navigation.replace('Pay', {
                            user_id: user_id,
                            tour_id: tour_id,
                            discount: discount,
                            adult_account: adult_account,
                            child_account: child_account,
                            price: price,
                            note: note,
                            role: role,
                            location_custom: location_custom,
                            priceService: 0,
                          });

                        } else {
                          console.log(`Có ${resultcompareArrays} thay đổi`);
                          const user_id = dataUser?._id;
                          const tour_id = dataTourDetail?._id;
                          const discount: number = discountTour(adult);
                          const adult_account = adult;
                          const child_account = child;
                          const priceService = (adult + child) * resultcompareArrays * 300000;
                          const price =
                            priceUI - discount + priceService;
                          const note = noteUI;
                          const role = true;
                          const location_custom: LocationInBookTour[] = array.current;
                          navigation.replace('Pay', {
                            user_id: user_id,
                            tour_id: tour_id,
                            discount: discount,
                            adult_account: adult_account,
                            child_account: child_account,
                            price: price,
                            note: note,
                            role: role,
                            location_custom: location_custom,
                            priceService: priceService,
                          });
                        }
                      }
                    } else {
                      if (adult == 0) {
                        if (child > 0) {
                          Alert.alert(
                            'Thông báo',
                            'Bạn phải chọn số người lớn',
                            [
                              {
                                text: 'OK',
                                onPress: () => console.log('OK Pressed'),
                                style: 'cancel',
                              },
                            ],
                            { cancelable: false },
                          );
                          return false;
                        }
                      }

                      if (adult == 0 && child == 0) {
                        Alert.alert(
                          'Thông báo',
                          'Bạn phải chọn số lượng đặt',
                          [
                            {
                              text: 'OK',
                              onPress: () => console.log('OK Pressed'),
                              style: 'cancel',
                            },
                          ],
                          { cancelable: false },
                        );
                        return false;
                      }

                      if (adult + child > 50 - quantity) {
                        Alert.alert(
                          'Thông báo',
                          'Số lượng đặt không được vượt quá số lượng còn lại',
                          [
                            {
                              text: 'OK',
                              onPress: () => console.log('OK Pressed'),
                              style: 'cancel',
                            },
                          ],
                          { cancelable: false },
                        );
                        return false;
                      }

                      const resulthasDuplicates = hasDuplicates(array.current);
                      if (resulthasDuplicates) {
                        console.log('Có trùng');
                        Alert.alert(
                          'Thông báo',
                          'Bạn không được chọn trùng địa điểm',
                          [
                            {
                              text: 'OK',
                              onPress: () => console.log('OK Pressed'),
                              style: 'cancel',
                            },
                          ],
                          { cancelable: false },
                        );
                        return false;
                      } else {
                        const resultcompareArrays = compareArrays(
                          dataLocationDefault,
                          array,
                        );
                        if (resultcompareArrays == 0) {
                          console.log('Không có thay đổi');
                          const user_id = dataUser?._id;
                          const tour_id = dataTourDetail?._id;
                          const discount: number = discountTour(adult);
                          const adult_account = adult;
                          const child_account = child;
                          const price = priceUI - discount;
                          const note = noteUI;
                          const role = false;
                          const location_custom: LocationInBookTour[] = array.current;
                          navigation.replace('Pay', {
                            user_id: user_id,
                            tour_id: tour_id,
                            discount: discount,
                            adult_account: adult_account,
                            child_account: child_account,
                            price: price,
                            note: note,
                            role: role,
                            location_custom: location_custom,
                            priceService: 0,
                          });

                        } else {
                          console.log(`Có ${resultcompareArrays} thay đổi`);
                          const user_id = dataUser?._id;
                          const tour_id = dataTourDetail?._id;
                          const discount: number = discountTour(adult);
                          const adult_account = adult;
                          const child_account = child;
                          const priceService = (adult + child) * resultcompareArrays * 300000;
                          const price =
                            priceUI - discount + priceService;
                          const note = noteUI;
                          const role = true;
                          const location_custom: LocationInBookTour[] = array.current;
                          navigation.replace('Pay', {
                            user_id: user_id,
                            tour_id: tour_id,
                            discount: discount,
                            adult_account: adult_account,
                            child_account: child_account,
                            price: price,
                            note: note,
                            role: role,
                            location_custom: location_custom,
                            priceService: priceService,
                          });
                        }
                      }
                    }

                  },
                );

              }}
              viewStyle={{
                width: DimensionsStyle.width * 1 - 40,
                backgroundColor: Colors.GREEN,
                borderRadius: 10,
                marginVertical: 20,
                marginTop: 40,
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    fontFamily: fontFamily.Black,
    fontSize: 18,
    color: Colors.BLUE_DARK,
  },

  buttonNumberic: {
    width: 25,
    height: 25,
    borderRadius: 8,
    backgroundColor: Colors.GREY_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  textNumberic: {
    fontSize: 16,
    fontFamily: fontFamily.Bold,
    marginBottom: 2,
    color: Colors.WHITE,
  },

  viewNumberic: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: DimensionsStyle.width * 0.22,
  },

  viewRequet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.GRAY_SEARCH,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 15,
  },

  modalViewLocation: {
    width: DimensionsStyle.width * 1 - 40,
    height: DimensionsStyle.height * 0.28,
    borderColor: Colors.GREEN,
    borderWidth: 1,
    backgroundColor: Colors.GRAY_SEARCH,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },

  item: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: Colors.WHITE,
    borderTopColor: Colors.WHITE,
    borderRadius: 10,
  },

  containerSelect: {
    marginTop: 15,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.GRAY_SEARCH,
    paddingHorizontal: 20,
    width: '100%',
  },

  textSelect: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: fontFamily.Bold,
    color: Colors.BLUE,
    marginVertical: 10,
  },
});

export const BookTour = React.memo(_BookTour);
