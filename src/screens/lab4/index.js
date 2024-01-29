import React from 'react';
import { View} from 'react-native';
import Button from '../../components/button';


const MyLab4 = (props) => {
  return(
    <View style={{flexDirection:'column', alignItems:'center', paddingTop: 100,  paddingHorizontal: 20}}>
      <Button textColor='white' bgColor='green' btnLabel="Lab4_1"
      onPress={()=>props.navigation.navigate("lab4_1")}
      ></Button>
      <Button textColor='white' bgColor='green' btnLabel="Lab4_2"
      onPress={()=>props.navigation.navigate("lab4_2")}
      ></Button>
      <Button textColor='white' bgColor='green' btnLabel="Lab4_3"
      onPress={()=>props.navigation.navigate("lab4_3")}
      ></Button>
    </View>
  );
};

export default MyLab4;