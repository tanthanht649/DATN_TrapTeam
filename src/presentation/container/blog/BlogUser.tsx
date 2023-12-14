import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BlogStackParamList, ProfileStackParamList} from '@navigation';
import {BackgroundApp, Header, Loading} from '@components';
import {
  ADD_BLOG,
  BACKGROUND_WHITE,
  LINE_BLOG,
  LOGO_APP,
  fontFamily,
} from '@assets';
import {Colors, DimensionsStyle} from '@resources';
import {
  RootState,
  getAllBlogs,
  getBlogUser,
  useAppDispatch,
} from '@shared-state';
import {useSelector} from 'react-redux';
import {Blog} from '@domain';
import moment from 'moment';

const Item = ({item}: {item: Blog}) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentDate = moment();
      const createdAt = moment(item.created_at);
      const daysAgo = currentDate.diff(createdAt, 'days');
      if (daysAgo < 1) {
        setTimeAgo(`Cập nhập vào hôm nay`);
      } else {
        setTimeAgo(`${daysAgo} ngày trước`);
      }
    };

    calculateTimeAgo();
  }, [item.created_at]);

  return (
    <View style={_styles.item}>
      <View style={_styles.row}>
        <Image
          style={_styles.avatar}
          source={{uri: item.user_id.avatar}}></Image>
        <View>
          <Text style={_styles.name}>{item.user_id.name}</Text>
          <Text style={_styles.time}>{timeAgo}</Text>
        </View>
      </View>
      <Text style={_styles.title}>{item.content}</Text>
      <Image style={_styles.image} source={{uri: item.image}}></Image>
      <Image style={_styles.line} source={LINE_BLOG}></Image>
    </View>
  );
};

export default Item;

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'BlogUser'>;
const _BlogUser: React.FC<PropsType> = props => {
  const {navigation} = props;
  const dataUser = useSelector((state: RootState) => state.user.dataUsers);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBlogUser(dataUser?._id));
    const interval = setInterval(() => {
      dispatch(getBlogUser(dataUser?._id));
    }, 60000); // Tải lại dữ liệu sau mỗi 1 phút (60000 milliseconds)
    return () => {
      clearInterval(interval); // Hủy cơ chế tải lại định kỳ khi component bị unmount
    };
  }, []);

  const loadingBlog = useSelector((state: RootState) => state.blog.loadingBlog);
  const dataBlogs = useSelector((state: RootState) => state.blog.dataBlogUser);
  const renderItemBlog = React.useMemo(
    () =>
      ({item}: {item: Blog}) => {
        return <Item item={item} key={item._id} />;
      },
    [],
  );

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        <Header
          textCenter={'Bài viết'}
          iconLeft={LOGO_APP}
          iconRight={ADD_BLOG}
          eventLeft={() => console.log('IconLeft')}
          styleIconLeft={{
            marginLeft: -DimensionsStyle.width * 0.06,
            width: 40,
            height: 45,
            resizeMode: 'stretch',
          }}
          styleIconRight={{marginRight: -DimensionsStyle.width * 0.06}}
          eventRight={() => console.log(navigation.navigate('CreateBlog'))}
          styleView={{marginTop: 10}}
        />

        {loadingBlog ? (
          <View
            style={{
              height: DimensionsStyle.height * 0.8,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Loading height={DimensionsStyle.height * 1} />
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dataBlogs}
            renderItem={renderItemBlog}
            keyExtractor={item => item._id}
          />
        )}
      </SafeAreaView>
    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingBottom: 70,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontFamily: fontFamily.Regular,
    color: Colors.BLUE_TEXT,
    lineHeight: 35,
    textAlign: 'justify',
  },
  avatar: {
    height: 55,
    width: 55,
    alignSelf: 'center',
    marginBottom: 12,
    borderWidth: 3,
    borderColor: Colors.GREEN,
    borderRadius: 100,
    resizeMode: 'contain',
    marginRight: 15,
  },
  image: {
    height: DimensionsStyle.height * 0.5,
    width: DimensionsStyle.width * 0.86,
    resizeMode: 'stretch',
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 25,
  },
  time: {
    fontSize: 12,
    fontFamily: fontFamily.Regular,
    color: Colors.BLUE_TEXT,
    textAlign: 'justify',
  },
  name: {
    fontSize: 13,
    fontFamily: fontFamily.Bold,
    color: Colors.GREY_DARK_1,
  },
  line: {
    height: 2,
    width: DimensionsStyle.width * 0.86,
  },
});

export const BlogUser = React.memo(_BlogUser);
