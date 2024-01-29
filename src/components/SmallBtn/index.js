import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const SmallBtn = ({bgColor, btnLabel, textColor, onPress})=> {
    return (
        <TouchableOpacity style ={{backgroundColor: bgColor, ...styles.container}}
        onPress={onPress}>
            <Text style={{color: textColor, ...styles.btnText}}>{btnLabel}</Text>
        </TouchableOpacity>
    );
}
export default SmallBtn;