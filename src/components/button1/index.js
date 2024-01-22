import React from "react";
import { Alert, Button } from "react-native";
import {styles} from './styles'
const Button1 =()=>{
    return (
        <Button
        color="#fff"
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    );
};
export default React.memo(Button1);