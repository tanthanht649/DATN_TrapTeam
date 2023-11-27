import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeTeamStackParamList } from '@navigation';
import { BackgroundApp, Header, TextPlus, } from '@components';
import {
  BACKGROUND_WHITE,
  ICON_BACK,
  LOGO_RULE,
  fontFamily,
} from '@assets';
import { Colors, DimensionsStyle } from '@resources';

type PropsType = NativeStackScreenProps<
  WelcomeTeamStackParamList,
  'Rule'
>;
const _Rule: React.FC<PropsType> = props => {
  const { navigation } = props;

  return (
    <BackgroundApp source={BACKGROUND_WHITE}>
      <SafeAreaView style={_styles.container}>

        <Header
          textCenter={'Điều khoản và chính sách'}
          iconLeft={ICON_BACK}
          eventLeft={() => console.log('IconLeft')}
          styleIconLeft={{ marginLeft: -DimensionsStyle.width * 0.06 }}
        />
        <Image source={LOGO_RULE} style={_styles.image}></Image>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TextPlus text='Dưới đây là một mô tả tổng quan về điều khoản và chính sách cho ứng dụng đặt tour du lịch của chúng tôi. Lưu ý rằng đây chỉ là một ví dụ và nên được sửa đổi và tuỳ chỉnh phù hợp với ứng dụng của bạn. Để đảm bảo tính pháp lý của nội dung, khuyến nghị bạn tham khảo ý kiến ​​của luật sư chuyên về lĩnh vực này.
1. Điều khoản sử dụng:
&bull; Mô tả quyền và trách nhiệm của người dùng khi sử dụng ứng dụng.
&bull; Quy định về tuổi tối thiểu để sử dụng ứng dụng (nếu có).
&bull; Điều khoản về việc sử dụng và truy cập vào nội dung của ứng dụng.
2. Điều khoản thanh toán:
&bull; Mô tả các phương thức thanh toán được chấp nhận (ví dụ: thẻ tín dụng, PayPal, chuyển khoản ngân hàng, vv).
&bull; Quy định về việc thanh toán, hủy đặt tour và hoàn tiền.
3. Chính sách bảo mật:
&bull; Mô tả cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin cá nhân của người dùng.
&bull; Quy định về việc chia sẻ thông tin cá nhân với bên thứ ba và cơ quan chức năng (nếu cần thiết).
&bull; Thông tin về việc sử dụng cookie và công nghệ theo dõi tương tự.
4. Chính sách hủy đặt tour:
&bull; Quy định về việc hủy đặt tour từ phía người dùng và từ phía nhà cung cấp tour.
&bull; Thông tin về chính sách hoàn tiền và các khoản phí liên quan đến việc hủy đặt tour.
5. Quyền sở hữu trí tuệ:
&bull; Mô tả quyền sở hữu trí tuệ liên quan đến nội dung và thiết kế của ứng dụng.
&bull; Điều khoản về việc cấp phép sử dụng ứng dụng và nội dung cho người dùng.
6. Quyền và trách nhiệm của bên sử dụng:
&bull; Mô tả quyền và trách nhiệm của cả người dùng và nhà cung cấp tour.
&bull; Điều khoản về việc xử lý khiếu nại và tranh chấp giữa bên sử dụng và nhà cung cấp tour.
7. Thay đổi và chấm dứt:
&bull; Quy định về quyền của chúng tôi để thay đổi hoặc chấm dứt điều khoản và chính sách.
&bull; Thông tin về việc thông báo cho người dùng về các thay đổi quan trọng.
Lưu ý rằng điều khoản và chính sách cần phải được viết một cách rõ ràng, dễ hiểu và tuân thủ quy định pháp luật hiện hành. Nếu bạn không chắc chắn về việc viết điều khoản và chính sách một cách chính xác, khuyến nghị nên tìm sự tư vấn từ một luật sư chuyên về lĩnh vực này.'
            textBolds={['1. Điều khoản sử dụng:', '2. Điều khoản thanh toán:', '3. Chính sách bảo mật:', '4. Chính sách hủy đặt tour:', '5. Quyền sở hữu trí tuệ:', '6. Quyền và trách nhiệm của bên sử dụng:', '7. Thay đổi và chấm dứt:']}
            boldStyle={_styles.textBold}
            textStyle={_styles.text} />
        </ScrollView>



      </SafeAreaView>

    </BackgroundApp>
  );
};

const _styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
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
    marginBottom:350
  },
  textBold: {
    fontSize: 14,
    fontFamily: fontFamily.Bold,
    color: Colors.BLUE,
  },

});

export const Rule = React.memo(_Rule);
