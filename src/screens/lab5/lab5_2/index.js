import React from "react";
import { ImageBackground, StatusBar, Text, View } from "react-native";
import { styles } from "./styles";
import SmallBtn from "../../../components/SmallBtn";

const Lab5_2 = () => {
    return (
        <ImageBackground
            style={styles.bgr}
            source={require('../../../assets/images/l5_bgr.jpeg')}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"></StatusBar>
            <View style={styles.details}>
                <Text style={styles.title}>Discover world with us</Text>
                <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                <SmallBtn bgColor='#fff' textColor='gray' btnLabel='Get Started'></SmallBtn>
            </View>
        </ImageBackground>
    );
};
export default Lab5_2

