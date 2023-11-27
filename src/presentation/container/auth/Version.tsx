import { Image, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { BackgroundApp, Header, TextPlus, } from '@components';
import {
  BACKGROUND_WHITE,
  ICON_BACK,
  LOGO_HOME,
  LOGO_VERSION,
  fontFamily,
} from '@assets';
import { Colors, DimensionsStyle } from '@resources';

type PropsType = NativeStackScreenProps<
  WelcomeTeamStackParamList,
  'Version'
>;
const _Version: React.FC<PropsType> = props => {
  const { navigation } = props;

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>
        <Header
          textCenter={'Phiên bản hiện tại'}
          iconLeft={ICON_BACK}
          eventLeft={() => console.log('IconLeft')}
          styleIconLeft={{ marginLeft: -DimensionsStyle.width * 0.06 }}
        />
        <Image source={LOGO_VERSION} style={_styles.image}></Image>

        <ScrollView showsVerticalScrollIndicator={false} >
          <TextPlus text='Xin chào và xin cảm ơn vì đã cho tôi cơ hội giới thiệu phiên bản mới của ứng dụng đặt tour du lịch  Phiên bản v.1.0. Với ứng dụng này, chúng tôi mong muốn mang đến cho bạn trải nghiệm du lịch tuyệt vời và tiện lợi hơn bao giờ hết.
1. Phiên bản mới của chúng tôi đã được nâng cấp và cải thiện với những tính năng độc đáo, giúp bạn dễ dàng tìm kiếm, đặt và quản lý tour du lịch một cách thuận tiện. Dưới đây là những điểm nổi bật của phiên bản mới:
2. Tìm kiếm tour đa dạng: Với bộ sưu tập tour đa dạng và phong phú, bạn có thể dễ dàng tìm kiếm và khám phá những tour du lịch phù hợp với sở thích và ngân sách của mình. Từ du lịch mạo hiểm đến tham quan văn hóa, chúng tôi sẽ đáp ứng mọi nhu cầu du lịch của bạn.
3. Đặt tour nhanh chóng: Với giao diện đơn giản và trực quan, việc đặt tour trở nên dễ dàng hơn bao giờ hết. Chỉ cần một vài cú nhấp chuột, bạn có thể chọn tour, chọn ngày khởi hành và hoàn tất thanh toán một cách nhanh chóng.
4. Tùy chỉnh linh hoạt: Chúng tôi hiểu rằng mỗi người du lịch có những yêu cầu riêng. Vì vậy, chúng tôi cung cấp các tùy chọn tùy chỉnh linh hoạt để bạn có thể điều chỉnh tour theo ý muốn. Bạn có thể thêm hoặc loại bỏ các hoạt động, điểm đến, và chọn loại hình chỗ ở phù hợp với mong muốn của mình.
5. Thông tin chi tiết và đánh giá: Trước khi đặt tour, bạn có thể xem thông tin chi tiết về điểm đến, lịch trình, chỗ ở, và hoạt động kèm theo. Bên cạnh đó, đánh giá và nhận xét từ khách hàng trước sẽ giúp bạn có cái nhìn chân thực về tour mà bạn quan tâm.
6. Quản lý tour dễ dàng: Khi tour đã được đặt, bạn có thể dễ dàng quản lý thông tin tour, xem lịch trình, cập nhật thông tin hành khách và liên lạc với đội ngũ hỗ trợ của chúng tôi thông qua ứng dụng.
Với phiên bản mới của ứng dụng đặt tour du lịch, chúng tôi cam kết mang đến cho bạn trải nghiệm du lịch tuyệt vời và tiện lợi. Hãy tải ứng dụng của chúng tôi ngay hôm nay và khám phá thế giới với một cách hoàn toàn mới!'
            textBolds={['Phiên bản v.1.0']}
            boldStyle={_styles.textBold}
            textStyle={_styles.text} />
        </ScrollView>
      </SafeAreaView>

    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    marginHorizontal: 34,
  },
  avatar: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginBottom: 12,
    marginTop: 30,
  },
  image: {
    height: 230,
    width: 176,
    resizeMode: 'stretch',
    overflow: 'hidden',
    alignSelf: 'center'
  },
  text: {
    fontSize: 14,
    fontFamily: fontFamily.Regular,
    color: Colors.BLUE_TEXT,
    marginTop: DimensionsStyle.height * 0.002,
    lineHeight: 30,
    marginBottom: 350
  },
  textBold: {
    fontSize: 14,
    fontFamily: fontFamily.Bold,
    color: Colors.BLUE,
  },
});

export const Version = React.memo(_Version);
