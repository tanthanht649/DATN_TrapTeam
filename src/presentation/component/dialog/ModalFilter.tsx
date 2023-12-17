import { ARROW_DOWN, CALENDAR_FILTER, EMAIL, LINE, fontFamily } from '@assets';
import { Colors } from '@resources';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TouchableOpacity,
  FlatList,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Button } from '../button';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectDropdown from 'react-native-select-dropdown';
import { useSelector } from 'react-redux';
import { RootState, findTourByFilter, useAppDispatch } from '@shared-state';
import moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = {
  ModalStyle?: StyleProp<ViewStyle>;
  visible?: boolean;
  onPress: (
    locationProvinces: string,
    is_popular: boolean,
    minPrice: string,
    maxPrice: string,
    dayFind: string,
  ) => void;
  Cancel: () => void;
};
type ItemLocation = {
  id: string;
  title: string;
};

type ItemCountry = {
  id: string;
  title: string;
};

const _Modal: React.FC<Props> = props => {
  const dispatch = useAppDispatch();
  const dataProvince = useSelector(
    (state: RootState) => state.province.dataProvince,
  );

  const { onPress, Cancel, visible } = props;
  const [dataCountry, setDataCountry] = React.useState<ItemCountry[]>([
    {
      id: '1',
      title: 'Việt Nam',
    },
  ]);
  const renderDropdownIcon = () => {
    return (
      <Image
        source={ARROW_DOWN}
      // style={_styles.iconLeft}
      />
    );
  };

  type ItemData = {
    id: string;
    title: string;
  };

  const DATA: ItemData[] = [
    {
      id: '1',
      title: 'Nổi bật',
    },
    {
      id: '2',
      title: 'Không nổi bật',
    },
  ];

  type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    color: string;
  };

  const Item = ({ item, onPress, backgroundColor, color }: ItemProps) => (
    <TouchableOpacity
      onPress={onPress}
      style={[_styles.category, { backgroundColor }]}>
      <Text style={[_styles.text, { color, fontSize: 13 }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const [is_popular, setIsPopular] = useState<string>('Nổi bật');

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor =
      item.title === is_popular ? Colors.BLUE : Colors.GRAY_SEARCH;
    const color = item.title === is_popular ? Colors.WHITE : Colors.BLUE;
    return (
      <Item
        item={item}
        onPress={() => setIsPopular(item.title)}
        backgroundColor={backgroundColor}
        color={color}
      />
    );
  };
  const [locationProvinces, setLocationProvinces] = useState<string>(
    dataProvince[0].name,
  );
  const [minPrice, setMinPrice] = useState<string>('');
  const handleOnchangePrice = (value: string) => {
    setMinPrice(value);
  };
  const [maxPrice, setMaxPrice] = useState<string>('');
  const handleOnchangeHight = (value: string) => {
    setMaxPrice(value);
  };
  const inputDateFormat = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
  const outputDateFormat = 'DD/MM/YYYY';
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dayFind, setDayFind] = useState<string>(
    moment(new Date(), inputDateFormat).format(outputDateFormat),
  );
  const [showPicker, setShowPicker] = useState(false);
  const formattedDate = selectedDate.toLocaleDateString('en-GB');
  const handleDateChange = (event: any, date?: Date) => {
    if (date) {
      setSelectedDate(date);
      setDayFind(moment(date, inputDateFormat).format(outputDateFormat));
    }
    setShowPicker(Platform.OS === 'ios');
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        {
          !visible;
        }
      }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'rgba(31, 76, 107, 0.9)'}
        translucent
      />

      <View style={_styles.background}>
        <View style={_styles.centeredView}>
          <View style={_styles.modalView}>
            <KeyboardAvoidingView
              enabled
              style={{ flex: 1 }}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <ScrollView
                style={_styles.scroll}
                showsVerticalScrollIndicator={false}>
                <Image style={_styles.line} source={LINE}></Image>
                <Text style={_styles.textBold}>Bộ lọc</Text>
                <Text style={_styles.textBold}>Địa điểm</Text>
                <View style={_styles.row}>
                  <SelectDropdown
                    showsVerticalScrollIndicator={false}
                    renderDropdownIcon={renderDropdownIcon}
                    dropdownIconPosition="left"
                    defaultButtonText={dataProvince[0].name}
                    buttonStyle={_styles.container}
                    buttonTextStyle={[
                      _styles.text,
                      {
                        fontSize: 13,
                        color: Colors.BLUE_TEXT,
                        marginVertical: 0,
                      },
                    ]}
                    dropdownStyle={_styles.modalViewLocation}
                    selectedRowStyle={[
                      _styles.item,
                      { backgroundColor: Colors.GREEN },
                    ]}
                    selectedRowTextStyle={[_styles.text, { color: Colors.WHITE }]}
                    rowStyle={_styles.item}
                    rowTextStyle={_styles.text}
                    data={dataProvince}
                    onSelect={(selectedItem, index) => {
                      setLocationProvinces(selectedItem.name);
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
                  <SelectDropdown
                    showsVerticalScrollIndicator={false}
                    renderDropdownIcon={renderDropdownIcon}
                    dropdownIconPosition="left"
                    defaultButtonText="Việt Nam"
                    buttonStyle={_styles.container}
                    buttonTextStyle={[
                      _styles.text,
                      {
                        fontSize: 13,
                        color: Colors.BLUE_TEXT,
                        marginVertical: 0,
                      },
                    ]}
                    dropdownStyle={_styles.modalViewLocation}
                    selectedRowStyle={[
                      _styles.item,
                      { backgroundColor: Colors.GREEN },
                    ]}
                    selectedRowTextStyle={[_styles.text, { color: Colors.WHITE }]}
                    rowStyle={_styles.item}
                    rowTextStyle={_styles.text}
                    data={dataCountry}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      // Hiển thị giá trị của thuộc tính 'title' sau khi một mục được chọn
                      return selectedItem.title;
                    }}
                    rowTextForSelection={(item, index) => {
                      // Hiển thị giá trị của thuộc tính 'title' cho mỗi mục trong dropdown
                      return item.title;
                    }}
                  />
                </View>
                <Text style={_styles.textBold}>Loại</Text>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  extraData={setIsPopular}
                />
                <Text style={_styles.textBold}>Giá thấp nhất</Text>
                <View style={_styles.input}>
                  <TextInput
                    value={minPrice}
                    keyboardType="numeric"
                    onChangeText={handleOnchangePrice}
                    style={[
                      _styles.text,
                      {
                        marginVertical: 5,
                        fontSize: 15,
                        textAlign: 'left',
                        width: '85%',
                      },
                    ]}
                    placeholder="Giá thấp nhất"
                  />
                  <Pressable onPress={() => { }}>
                    <Text style={[_styles.text, { fontSize: 13 }]}>VND</Text>
                  </Pressable>
                </View>

                <Text style={_styles.textBold}>Giá cao nhất</Text>

                <View style={_styles.input}>
                  <TextInput
                    value={maxPrice}
                    keyboardType="numeric"
                    onChangeText={handleOnchangeHight}
                    style={[
                      _styles.text,
                      {
                        marginVertical: 5,
                        fontSize: 15,
                        textAlign: 'left',
                        width: '85%',
                      },
                    ]}
                    placeholder="Giá cao nhất"></TextInput>
                  <Pressable onPress={() => { }}>
                    <Text style={[_styles.text, { fontSize: 13 }]}>VND</Text>
                  </Pressable>
                </View>

                <Text style={_styles.textBold}>Ngày khởi hành từ</Text>

                <View style={_styles.input}>
                  <Text
                    style={[
                      _styles.text,
                      {
                        marginVertical: 5,
                        fontSize: 15,
                        textAlign: 'left',
                        width: '85%',
                      },
                    ]}>
                    {formattedDate}
                  </Text>
                  {showPicker && (
                    <DateTimePicker
                      value={selectedDate}
                      mode="date"
                      display="default"
                      onChange={handleDateChange}
                    />
                  )}
                  <Pressable onPress={showDatePicker}>
                    <Image source={CALENDAR_FILTER} style={_styles.iconLeft} />
                  </Pressable>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </View>
        <View style={_styles.rowbutton}>
          <Button
            title="Tìm kiếm"
            imageIconLeft={EMAIL}
            imageIconRight={EMAIL}
            onPress={() => {
              const data = {
                locationProvinces: locationProvinces,
                is_popular: is_popular === 'Nổi bật' ? true : false,
                minPrice: minPrice,
                maxPrice: maxPrice,
                dayFind: dayFind,
              };
              dispatch(findTourByFilter(data));
              setDayFind(
                moment(new Date(), inputDateFormat).format(outputDateFormat),
              );
              setLocationProvinces(dataProvince[0].name);
              setMinPrice('');
              setMaxPrice('');
              setIsPopular('Nổi bật');
              onPress(
                locationProvinces,
                is_popular === 'Nổi bật' ? true : false,
                minPrice,
                maxPrice,
                dayFind,
              );
            }}
            viewStyle={{
              width: '40%',
              height: 50,
            }}
          />
          <Button
            title="Hủy"
            imageIconLeft={EMAIL}
            imageIconRight={EMAIL}
            onPress={Cancel}
            viewStyle={{
              width: '40%',
              height: 50,
              // bottom: 70
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const _styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(31, 76, 107, 0.9)',
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 1,
    position: 'absolute',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.8,
    backgroundColor: Colors.WHITE,
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  rowbutton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    bottom: 40,
    width: '100%',
    position: 'absolute',
  },
  // centeredViewLocation: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // marginTop: 100
  // },
  scroll: {
    marginBottom: 80,
  },
  modalViewLocation: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.28,
    borderColor: Colors.GREEN,
    borderWidth: 1,
    backgroundColor: Colors.GRAY_SEARCH,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    // alignItems:'center',
    // justifyContent:'center'
    // padding: 30,
    //   shadowColor: '#000',
    //   shadowOffset: {
    //     width: 0,
    //     height: 2,
    //   },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 4,
    //   elevation: 5,
  },

  textBold: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontFamily: fontFamily.Bold,
    color: Colors.BLUE,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: fontFamily.Bold,
    color: Colors.BLUE,
    marginVertical: 10,
  },
  line: {
    height: 2,
    width: 50,
    alignSelf: 'center',
  },
  container: {
    marginTop: 15,
    height: 70,
    width: Dimensions.get('window').width * 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.GRAY_SEARCH,
    paddingHorizontal: 20,
  },
  input: {
    marginTop: 15,
    height: 70,
    width: Dimensions.get('window').width * 0.84,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.GRAY_SEARCH,
    paddingHorizontal: 20,
  },
  category: {
    marginTop: 15,
    height: 47,
    width: Dimensions.get('window').width * 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: Colors.GRAY_SEARCH,
    paddingHorizontal: 20,
    marginRight: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconLeft: {
    width: 20,
    height: 20,
    marginRight: 10,
    opacity: 1,
  },
  item: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: Colors.WHITE,
    borderTopColor: Colors.WHITE,
    borderRadius: 10,
  },
});

export const ModalFilter = React.memo(_Modal);
