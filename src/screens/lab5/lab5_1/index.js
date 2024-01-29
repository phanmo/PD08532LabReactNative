import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Lab5_1 = () => {
    return(
        <View style={styles.container}>
        <Text style={styles.text1}>
            With React Native, you style your application using JavaScript.
            All of the core components accept a prop named style.
            The style names and values usually match how CSS works on the web, except names are written using camel casing, e.g. backgroundColor rather than background-color.
        </Text>
        <Text style={styles.text2}>
            With React Native, you style your application using JavaScript.
            All of the core components accept a prop named style.
            The style names and values usually match how CSS works on the web, except names are written using camel casing, e.g. backgroundColor rather than background-color.
        </Text>
    </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        paddingTop: 70,
        paddingHorizontal: 15,
    },
    text1: {
        fontFamily:'DancingScript-Medium',
        fontSize: 20,
        color:'gray',
        textAlign:'justify',
        marginBottom: 10,
    },
    text2: {
        fontFamily:'Inconsolata_Condensed-Light',
        fontSize: 18,
        color:'gray',
        textAlign:'justify'
    }
});
export default Lab5_1;