import { ARROW_DOWN, EMAIL, LINE, fontFamily } from '@assets';
import { Colors, DimensionsStyle } from '@resources';
import React, { useState } from 'react';
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
  TextInput
} from 'react-native';
import { Button } from '../button';

type Props = {
  ModalStyle?: StyleProp<ViewStyle>;
  visible?: boolean;
  onPress: () => void;
};
type ItemLocation = {
  id: string;
  title: string
};

type ItemLocationProps = {
  item: ItemLocation;
  onPress: () => void;
};

type ItemCountry = {
  id: string;
  title: string
};

type ItemCountryProps = {
  item: ItemCountry;
  onPress: () => void;
};

const _Modal: React.FC<Props> = props => {
  const { onPress, visible } = props;
  const [location, setLocation] = useState<string>('Hà nội');
  const [modalVisibleLocation, setModalVisibleLocation] = useState(false);
  const [selectedId, setSelectedId] = useState<string>();
  const ItemDay = ({ item, onPress }: ItemLocationProps) => (
    <TouchableOpacity onPress={onPress} style={[_styles.item, { backgroundColor: item.id === selectedId ? Colors.GREEN : Colors.GRAY_SEARCH }]}>
      <Text style={[_styles.text, { color: item.id === selectedId ? Colors.WHITE : Colors.BLUE_TEXT }]}>{item.title}</Text>
    </TouchableOpacity>
  );
  const handleSelectLocation = (item: ItemLocation) => {
    setLocation(item.title)
    setSelectedId(item.id);
    console.log(item.title)
    setModalVisibleLocation(false)
  }
  const [dataLocation, setDataLocation] = React.useState<ItemLocation[]>(
    [{
      id: '1',
      title: 'Hà Nội'
    },
    {
      id: '2',
      title: 'Hồ Chí Minh'
    },
    {
      id: '3',
      title: 'Đà nẵng'
    },
    {
      id: '4',
      title: 'Sóc trăng'
    },
    {
      id: '5',
      title: 'Đắk Lắk'
    },
    ]

  );
  const [country, setCountry] = useState<string>('Việt Nam');
  const [modalVisibleCountry, setModalVisibleCountry] = useState(false);
  const [selected, setSelected] = useState<string>();
  const ItemCountry = ({ item, onPress }: ItemCountryProps) => (
    <TouchableOpacity onPress={onPress} style={[_styles.item, { backgroundColor: item.id === selected ? Colors.GREEN : Colors.GRAY_SEARCH }]}>
      <Text style={[_styles.text, { color: item.id === selected ? Colors.WHITE : Colors.BLUE_TEXT }]}>{item.title}</Text>
    </TouchableOpacity>
  );
  const handleSelectCountry = (item: ItemCountry) => {
    setCountry(item.title)
    setSelected(item.id);
    console.log(item.title)
    setModalVisibleCountry(false)
  }

  const [dataCountry, setDataCountry] = React.useState<ItemCountry[]>(
    [{
      id: '1',
      title: 'Việt Nam'
    },
    {
      id: '2',
      title: 'Lào'
    },
    {
      id: '3',
      title: 'Thái Lan'
    },
    ]
  );


  type ItemData = {
    id: string;
    title: string
  };

  const DATA: ItemData[] = [
    {
      id: '1',
      title: 'Yêu thích'
    },
    {
      id: '2',
      title: 'Phổ biến'

    },
    {
      id: '3',
      title: 'Nổi bật'

    },
  ];

  type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    color:string

  };

  const Item = ({ item, onPress, backgroundColor, color }: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={[_styles.category, { backgroundColor }]}>
      <Text style={[_styles.text, { color,fontSize:11 }]} >{item.title}</Text>
    </TouchableOpacity>
  );

  const [selectedCategory, setSelectedCategory] = useState<string>();


  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.title === selectedCategory ? Colors.BLUE : Colors.GRAY_SEARCH;
    const color = item.title === selectedCategory ?  Colors.WHITE :  Colors.BLUE;

    return (
      <Item
        item={item}
        onPress={() => setSelectedCategory(item.title)}
        backgroundColor={backgroundColor}
        color={color}
      />
    );
  };
  console.log(selectedCategory)


  const [price, setPrice] = useState<string>('');
  const handleOnchangePrice = (value: string) => {
    setPrice(value);
    console.log(value)
  }
  const [hight, setHight] = useState<string>('');
  const handleOnchangeHight = (value: string) => {
    setHight(value);
    console.log(value)
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        { !visible }
      }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'rgba(31, 76, 107, 0.9)'}
        translucent
      />
      <View style={_styles.background}>
        <View style={_styles.centeredView}>
          <View style={_styles.modalView}>
            <ScrollView style={_styles.scroll} showsVerticalScrollIndicator={false}>
              <Image style={_styles.line} source={LINE}></Image>
              <Text style={_styles.textBold}>Bộ lọc</Text>
              <Text style={_styles.textBold}>Địa điểm</Text>
              <View style={_styles.row}>
                <View
                  style={_styles.container}>
                  <Pressable onPress={() => setModalVisibleLocation(true)}>
                    <Image
                      source={ARROW_DOWN}
                      style={_styles.iconLeft}
                    />
                  </Pressable>
                  <Text >{location}</Text>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisibleLocation}
                    onRequestClose={() => {
                      setModalVisibleLocation(!modalVisibleLocation);
                    }}>
                    <View style={_styles.centeredViewLocation}>
                      <View style={_styles.modalViewLocation}>
                        <ScrollView
                          showsVerticalScrollIndicator={false}>
                          {dataLocation.map((item: ItemLocation) => (
                            <ItemDay item={item} key={item.id} onPress={() => handleSelectLocation(item)} />
                          ))}
                        </ScrollView>
                      </View>
                    </View>
                  </Modal>
                </View>
                <View
                  style={_styles.container}>
                  <Pressable onPress={() => setModalVisibleCountry(true)}>
                    <Image
                      source={ARROW_DOWN}
                      style={_styles.iconLeft}
                    />
                  </Pressable>
                  <Text >{country}</Text>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisibleCountry}
                    onRequestClose={() => {
                      setModalVisibleLocation(!modalVisibleCountry);
                    }}>
                    <View style={[_styles.centeredViewLocation, { alignItems: 'flex-end', marginEnd: 34 }]}>
                      <View style={_styles.modalViewLocation}>
                        <ScrollView
                          showsVerticalScrollIndicator={false}>
                          {dataCountry.map((item: ItemCountry) => (
                            <ItemCountry item={item} key={item.id} onPress={() => handleSelectCountry(item)} />
                          ))}
                        </ScrollView>
                      </View>
                    </View>
                  </Modal>
                </View>
              </View>
              <Text style={_styles.textBold}>Loại</Text>
                <FlatList
                showsHorizontalScrollIndicator={false}
                  horizontal
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  extraData={selectedCategory}
                />
              <Text style={_styles.textBold}>Giá thấp nhất</Text>
              <View
                  style={_styles.input}>                 
                  <TextInput  value={price} onChangeText={handleOnchangePrice} style={[_styles.text,{marginVertical:5,fontSize:15,textAlign:'left',width:'85%'}]} placeholder='Giá thấp nhất' ></TextInput>                 
                  <Pressable onPress={() => {}}>
                  <Text style={[_styles.text,{fontSize:13,}]}>VND</Text>
                  </Pressable>
                </View>
              <Text style={_styles.textBold}>Giá cao nhất</Text>
              <View
                  style={_styles.input}>                 
                  <TextInput  value={hight} onChangeText={handleOnchangeHight} style={[_styles.text,{marginVertical:5,fontSize:15,textAlign:'left',width:'85%'}]} placeholder='Giá cao nhất' ></TextInput>                 
                  <Pressable onPress={() => {}}>
                  <Text style={[_styles.text,{fontSize:13,}]}>VND</Text>
                  </Pressable>
                </View>
              <Text style={_styles.textBold}>Ngày khởi hành</Text>

              
              <View
                  style={_styles.container}>
                  <Pressable onPress={() => setModalVisibleLocation(true)}>
                    <Image
                      source={ARROW_DOWN}
                      style={_styles.iconLeft}
                    />
                  </Pressable>
                  <Text >{location}</Text>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisibleLocation}
                    onRequestClose={() => {
                      setModalVisibleLocation(!modalVisibleLocation);
                    }}>
                    <View style={_styles.centeredViewLocation}>
                      <View style={_styles.modalViewLocation}>
                        <ScrollView
                          showsVerticalScrollIndicator={false}>
                          {dataLocation.map((item: ItemLocation) => (
                            <ItemDay item={item} key={item.id} onPress={() => handleSelectLocation(item)} />
                          ))}
                        </ScrollView>
                      </View>
                    </View>
                  </Modal>
                </View>


            </ScrollView>
          </View>
        </View>
        <Button
          title='Tìm kiếm'
          imageIconLeft={EMAIL}
          imageIconRight={EMAIL}
          onPress={onPress}
          viewStyle={{
            width: 278,
            position: 'absolute',
            bottom: 70
          }}
        />
      </View>

    </Modal >
  );
};

const _styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(31, 76, 107, 0.9)',
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 1,
    position: 'absolute'
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
  centeredViewLocation: {
    flex: 1,
    justifyContent: 'flex-end',
    marginStart: 34,
    marginBottom: 20
  },
  scroll:{
    marginBottom:110
  },
  modalViewLocation: {
    width: Dimensions.get('window').width * 0.38,
    height: Dimensions.get('window').height * 0.25,
    backgroundColor: Colors.GRAY_SEARCH,
    borderRadius: 10,
    paddingVertical: 10
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
    textAlign:'center',
    fontSize: 15,
    fontFamily: fontFamily.Bold,
    color: Colors.BLUE,
    marginVertical:10,

  },
  line: {
    height: 2,
    width: 50,
    alignSelf: 'center'
  }
  ,
  container: {
    marginTop:15,

    height: 70,
    width: Dimensions.get('window').width * 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.GRAY_SEARCH,
    paddingHorizontal: 20,
  },
  input: {
    marginTop:15,
    height: 70,
    width: Dimensions.get('window').width * 0.84,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.GRAY_SEARCH,
    paddingHorizontal: 20,
  },
  category: {
    marginTop:15,
    height: 47,
    width: Dimensions.get('window').width * 0.23,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 20,
    backgroundColor: Colors.GRAY_SEARCH,
    paddingHorizontal: 20,
    marginRight:30
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
    borderRadius: 10
  }
});

export const ModalFilter = React.memo(_Modal);
