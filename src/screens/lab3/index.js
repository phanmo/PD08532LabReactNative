import React, { useState } from 'react';
import { styles } from './styles';
import { View, Text } from 'react-native';
import Input from '../../components/input1';
import Button1 from '../../components/button1';

const colorText = (color) => ({
  color: color,
});

const sizeText = (size) => ({
  fontSize: size,
});

const styleText = (styles) => styles;

const lab3 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const nameProps ={
    value: name,
    onChangeText: setName,
    placeholder: 'Nhập họ tên',
  }

  const phoneProps ={
    value: phone,
    onChangeText: setPhone,
    placeholder: 'Nhập số điện thoại',
  }

  const passwordProps ={
    value: password,
    onChangeText: setPassword,
    placeholder: 'Nhập mật khẩu',
  }

  return (
    <View>
      <Input {...nameProps} />
      <Input {...phoneProps} />
      <Input {...passwordProps} />
      <View style={styles.container}>
        {/* Line 1 */}
        <Text style={styles.baseText}>
          Em vào đời bằng{' '}
          <Text style={[styles.boldText, colorText('red')]}> vang đỏ </Text>
          Anh vào đời bằng{' '}
          <Text style={[styles.boldText, colorText('yellow')]}> nước trà </Text>
        </Text>
        {/* Line 2 */}
        <Text style={styles.baseText}>
          Bằng cơn mưa thơm{' '}
          <Text style={[styles.boldText, sizeText(20), styles.italicText]}>
            mùi đất{' '}
          </Text>{' '}
          và{' '}
          <Text style={[sizeText(10), styles.italicText]}>
            bằng hoa dại mọc trước nhà
          </Text>
        </Text>

        {/* Line 3 */}
        <Text
          style={[
            styles.baseText,
            styles.italicText,
            styles.boldText,
            colorText('gray'),
          ]}>
          Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
        </Text>

        {/* Line 4 */}
        <Text style={[styles.baseText]}>
          Lý trí em là{' '}
          <Text style={styleText({
            textDecorationLine: 'underline',
            letterSpacing: 20,
            fontWeight: 'bold',
          })}>
            {' '}
            công cụ{' '}
          </Text>
          còn trái tim anh là
          <Text
            style={styleText({
              textDecorationLine: 'underline',
              letterSpacing: 20,
              fontWeight: 'bold',
            })}>
            {' '}
            động cơ{' '}
          </Text>
        </Text>

        {/* Line 5 */}
        <Text style={[styles.baseText, styleText({ textAlign: 'right' })]}>
          Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
        </Text>

        {/* Line 6 */}
        <Text style={[
          styles.baseText,
          styleText({
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'orange',
          }),
        ]}>
          Anh chỉ muốn chân mình đạp đất không muốn ai đạp dưới chân mình
        </Text>

        {/* Line 7 */}
        <Text style={[
          styles.baseText,
          styleText({
            fontWeight: 'bold',
            color: 'black',
          }),
        ]}>
          Em vào đời bằng <Text style={colorText('white')}> mây trắng </Text>
          em vào đời bằng <Text style={colorText('yellow')}> nắng xanh </Text>
        </Text>

        {/* Line 8 */}
        <Text
          style={[
            styles.baseText,
            styleText({
              fontWeight: 'bold',
              color: 'black',
            }),
          ]}>
          Em vào đời bằng <Text style={colorText('yellow')}> đại lộ </Text>
          và con đường đó giờ <Text style={colorText('white')}> vắng anh </Text>
        </Text>
      </View>
      <View style={styles.button}>
        <Button1></Button1>
      </View>
    </View>
  );
};
export default lab3;