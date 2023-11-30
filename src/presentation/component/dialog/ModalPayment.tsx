import {EMAIL, LINE, MOMO, VIETTEL_PAY, ZALO_PAY, fontFamily} from '@assets';
import {Colors} from '@resources';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from '../button';
import {AppContext} from '@shared-state';
type ItemData = {
  id: string;
  image: ImageSourcePropType;
  title: string;
};
type Props = {
  visible?: boolean;
  onPress: () => void;
  Cancel: () => void;
};

const _Modal: React.FC<Props> = props => {
  const {onPress, visible, Cancel} = props;

  const [widthMomo, setWidthMomo] = React.useState<number>(52);
  const [widthZaloPay, setWidthZaloPay] = React.useState<number>(60);
  const [widthViettelPay, setWidthViettelPay] = React.useState<number>(60);
  const [heightMomo, setHeightMomo] = React.useState<number>(52);
  const [heightZaloPay, setHeightZaloPay] = React.useState<number>(60);
  const [heightViettelPay, setHeightViettelPay] = React.useState<number>(60);
  const {pay, setPay} = React.useContext(AppContext);
  const [selected, setSelected] = useState<string>(pay);

  useEffect(() => {
    if (selected === 'Momo') {
      setWidthMomo(52);
      setHeightMomo(52);
      setWidthZaloPay(60);
      setHeightZaloPay(60);
      setWidthViettelPay(60);
      setHeightViettelPay(60);
    } else if (selected === 'ZaloPay') {
      setWidthMomo(60);
      setHeightMomo(60);
      setWidthZaloPay(52);
      setHeightZaloPay(52);
      setWidthViettelPay(60);
      setHeightViettelPay(60);
    } else if (selected === 'ViettelPay') {
      setWidthMomo(60);
      setHeightMomo(60);
      setWidthZaloPay(60);
      setHeightZaloPay(60);
      setWidthViettelPay(52);
      setHeightViettelPay(52);
    }
  }, [selected]);

  const handleSelectMomo = () => {
    setWidthMomo(52);
    setHeightMomo(52);
    setWidthZaloPay(60);
    setHeightZaloPay(60);
    setWidthViettelPay(60);
    setHeightViettelPay(60);
    setSelected('Momo');
  };
  const handleSelectZaloPay = () => {
    setWidthMomo(60);
    setHeightMomo(60);
    setWidthZaloPay(52);
    setHeightZaloPay(52);
    setWidthViettelPay(60);
    setHeightViettelPay(60);
    setSelected('ZaloPay');
  };
  const handleSelectViettelPay = () => {
    setWidthMomo(60);
    setHeightMomo(60);
    setWidthZaloPay(60);
    setHeightZaloPay(60);
    setWidthViettelPay(52);
    setHeightViettelPay(52);
    setSelected('ViettelPay');
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
            <Image style={_styles.line} source={LINE}></Image>
            <Text style={_styles.textBold}>Thay đổi phương thức</Text>
            {/* <FlatList
              horizontal
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              extraData={selected}
            /> */}
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
          </View>
          <View style={_styles.row}>
            <Button
              title="Thay đổi"
              imageIconLeft={EMAIL}
              imageIconRight={EMAIL}
              onPress={() => {
                setPay(selected);
                onPress();
              }}
              viewStyle={{
                width: '40%',
              }}
            />
            <Button
              title="Hủy"
              imageIconLeft={EMAIL}
              imageIconRight={EMAIL}
              onPress={() => {
                setSelected(pay);
                Cancel();
              }}
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
    borderRadius: 15,
  },

  line: {
    height: 2,
    width: 50,
    alignSelf: 'center',
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
    width: 65,
  },
});

export const ModalPayment = React.memo(_Modal);
