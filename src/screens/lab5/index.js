import React from 'react';
import { View} from 'react-native';
import Button from '../../components/button';


const Lab5 = (props) => {
  return(
    <View style={{flexDirection:'column', alignItems:'center', paddingTop: 100, paddingHorizontal: 20}}>
      <Button textColor='white' bgColor='green' btnLabel="lab5_1"
      onPress={()=>props.navigation.navigate("lab5_1")}
      ></Button>
      <Button textColor='white' bgColor='green' btnLabel="Lab5_2"
      onPress={()=>props.navigation.navigate("lab5_2")}
      ></Button>
      <Button textColor='white' bgColor='green' btnLabel="Lab5_3"
      onPress={()=>props.navigation.navigate("lab5_3")}
      ></Button>
    </View>
  );
};

export default Lab5;