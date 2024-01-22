import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 60,
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    title: {
        color: 'darkgreen',
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 30,
    },
    text1: {
        fontSize: 35,
        color: 'green',
        fontWeight: "bold",
    },
    text2: {
        color: 'grey',
        fontSize: 19,
        marginBottom: 20,
        fontWeight: "bold",
    },
    avt:{
        width:300,
        height:300,
    },
    forgotContainer:{
        alignItems: 'flex-end',
        width: '100%',
        paddingRight: 16,
        marginBottom: 30,
    },
    urlText: {
        color: 'green',
        fontWeight:'bold',
        fontSize: 16,
    },
    registerView:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
    },
});