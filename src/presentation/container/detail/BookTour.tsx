import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackgroundApp, Button, Header} from '@components';
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
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList, SearchStackParamList} from '@navigation';
import {Colors, DimensionsStyle} from '@resources';
import SelectDropdown from 'react-native-select-dropdown';
import {AppContext} from '@shared-state';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'BookTour'>;

interface Location {
  id: number;
  name: string;
  image: any;
  address: string;
}

const DATALOCATION: Location[] = [
  {
    id: 1,
    name: 'Bà Nà Hills',
    image: VHL,
    address: 'Đà Nẵng, Việt Nam',
  },
  {
    id: 2,
    name: 'Hội An',
    image: DT_1,
    address: 'Quảng Nam, Việt Nam',
  },
  {
    id: 3,
    name: 'Cù Lao Chàm',
    image: DT_1,
    address: 'Quảng Nam, Việt Nam',
  },
  {
    id: 4,
    name: 'Cầu Rồng',
    image: VHL_FL_1,
    address: 'Đà Nẵng, Việt Nam',
  },
];

const _BookTour: React.FC<PropsType> = props => {
  const {navigation} = props;
  const [adult, setAdult] = React.useState<number>(1);
  const [child, setChild] = React.useState<number>(1);
  const eventRight = () => {};
  const eventLeft = () => {};
  const eventBack = () => {
    navigation.goBack();
  };

  const itemTour: Tour = {
    id: 1,
    tourist_destinationId: 1,
    provide: 'Vietnam Travel',
    name: 'Tour Tết 2024: Quy Nhơn – Phú Quốc',
    description: 'Điểm đến: Hồ Hoàn Kiếm',
    available_seats: 10,
    duration: 1,
    image: 'https://i.redd.it/x8m1euew4du21.jpg',
    price: 4450000,
    departure_date: '2021-10-10',
    departure_location: 'Hà Nội, Việt Nam',
    note: 'Không được hủy',
    schedule: 'Hà Nội',
    status: true,
  };

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

  const ItemLocation = ({item, data}: {item: Location; data: Location[]}) => {
    return (
      <SelectDropdown
        key={item.id}
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
        selectedRowStyle={[_styles.item, {backgroundColor: Colors.GREEN}]}
        selectedRowTextStyle={[_styles.textSelect, {color: Colors.WHITE}]}
        rowStyle={_styles.item}
        rowTextStyle={_styles.textSelect}
        data={data}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
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
  }: {
    item: Location;
    data: Location[];
  }) => {
    return <ItemLocation item={item} data={DATALOCATION} key={item.id} />;
  };

  const [widthMomo, setWidthMomo] = React.useState<number>(52);
  const [widthZaloPay, setWidthZaloPay] = React.useState<number>(60);
  const [widthViettelPay, setWidthViettelPay] = React.useState<number>(60);
  const [heightMomo, setHeightMomo] = React.useState<number>(52);
  const [heightZaloPay, setHeightZaloPay] = React.useState<number>(60);
  const [heightViettelPay, setHeightViettelPay] = React.useState<number>(60);

  const {setPay} = React.useContext(AppContext);

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
                source={{uri: itemTour.image}}
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
                {itemTour.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 11,
                }}>
                <Image
                  source={LOCATION}
                  style={{width: 12, height: 12, marginEnd: 2}}
                />
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 10,
                    fontFamily: fontFamily.Medium,
                  }}>
                  {itemTour.departure_location}
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
                {itemTour.price.toLocaleString('vi-VN')} VNĐ
              </Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 20,
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
            <View style={_styles.viewRequet}>
              <Text
                style={[
                  _styles.text,
                  {fontSize: 14, fontFamily: fontFamily.Bold},
                ]}>
                Số người lớn
              </Text>
              <View style={_styles.viewNumberic}>
                <TouchableOpacity
                  style={_styles.buttonNumberic}
                  onPress={() => {
                    adult > 1 ? setAdult(adult - 1) : setAdult(1);
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
                  }}>
                  <Text style={[_styles.textNumberic]}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={_styles.viewRequet}>
              <Text
                style={[
                  _styles.text,
                  {fontSize: 14, fontFamily: fontFamily.Bold},
                ]}>
                Số trẻ em
              </Text>
              <View style={_styles.viewNumberic}>
                <TouchableOpacity
                  style={_styles.buttonNumberic}
                  onPress={() => {
                    child > 1 ? setChild(child - 1) : setChild(1);
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
                  }}>
                  <Text style={[_styles.textNumberic]}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={[_styles.text]}>Giá dự kiến</Text>
            <View style={[_styles.viewRequet, {marginTop: 15}]}>
              <Text
                style={[
                  _styles.text,
                  {
                    fontSize: 14,
                    fontFamily: fontFamily.Bold,
                    color: Colors.GREY_BAREL,
                  },
                ]}>
                30.000.000
              </Text>
              <Text
                style={[
                  _styles.text,
                  {fontSize: 14, fontFamily: fontFamily.Bold},
                ]}>
                VNĐ
              </Text>
            </View>
            <Text style={[_styles.text]}>Địa điểm tham quan</Text>
            {DATALOCATION.map((item, index) => {
              return renderItemLocation({item, data: DATALOCATION});
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
                navigation.navigate('Pay');
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
