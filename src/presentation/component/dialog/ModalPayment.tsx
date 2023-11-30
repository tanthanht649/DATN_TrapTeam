import { EMAIL, LINE, MOMO, VIETTEL_PAY, ZALO_PAY, fontFamily } from '@assets';
import { Colors } from '@resources';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from '../button';
type ItemData = {
  id: string;
  image: ImageSourcePropType,
  title: string
};
type Props = {
  visible?: boolean;
  onPress: (data: {}) => void;
  Cancel: () => void;

};

const _Modal: React.FC<Props> = props => {
  const { onPress, visible, Cancel} = props;


  const DATA: ItemData[] = [
    {
      id: '1',
      image: MOMO,
      title: 'MoMo'
    },
    {
      id: '2',
      image: ZALO_PAY,
      title: 'ZaloPay'

    },
    {
      id: '3',
      image: VIETTEL_PAY,
      title: 'ViettelPay'

    },
  ];

  type ItemProps = {
    item: ItemData;
    onPress: () => void;
    borderColor: string;
    borderWidth: number;

  };

  const Item = ({ item, onPress, borderColor, borderWidth }: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={[_styles.item, { borderColor, borderWidth }]}>
      <Image style={_styles.image} source={item.image}></Image>
    </TouchableOpacity>
  );

  const [selectedId, setSelectedId] = useState<string>();
  const [selected, setSelected] = useState<ItemData>();
  const handleIndex = (item:ItemData) => {
    setSelectedId(item.id);
    setSelected(item)   
    console.log('Phương thức đc chọn',selected)
  }

 
  const renderItem = ({ item }: { item: ItemData }) => {
    const borderColor = item.id === selectedId ? Colors.GREEN : Colors.WHITE;
    const borderWith = item.id === selectedId ? 4 : 1;
  
   
    return (

      <Item
        item={item}
        onPress={()=>handleIndex(item)}
        borderColor={borderColor}
        borderWidth={borderWith}
      />
    );
  };
 
  
  const handleDateChange = () => {
    if (selected != null) {
      onPress(selected);
    }
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
            <Image style={_styles.line} source={LINE}></Image>
            <Text style={_styles.textBold}>Thay đổi phương thức</Text>
            <FlatList
              horizontal
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              extraData={selected}
            />
          </View>
          <View style={_styles.row}>
            <Button
              title="Thay đổi"
              imageIconLeft={EMAIL}
              imageIconRight={EMAIL}
              onPress={handleDateChange}
              viewStyle={{
                width: '40%',


              }}
            />
            <Button
              title="Hủy"
              imageIconLeft={EMAIL}
              imageIconRight={EMAIL}
              onPress={Cancel}
              viewStyle={{
                width: '40%',

                // bottom: 70
              }}
            />
          </View>

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
    height: Dimensions.get('window').height * 0.6,
    backgroundColor: 'white',
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

  textBold: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontFamily: fontFamily.Medium,
    color: Colors.BLUE,

  },
  item: {
    margin: 5,
    height: 73,
    borderRadius: 15
  },

  line: {
    height: 2,
    width: 50,
    alignSelf: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 70,
    width: '100%',
    position: 'absolute',

  },
  image: {
    height: 65,
    width: 65
  }
});

export const ModalPayment = React.memo(_Modal);
