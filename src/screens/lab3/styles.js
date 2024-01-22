import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#91AC9A',
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        padding: 15,
    },

    baseText: {
        fontFamily:'Cochin',
        color:'white',
        fontSize: 16,
        marginTop: 10,
    },

    boldText: {
        fontWeight: 'bold',
    },

    italicText:{
        fontStyle:'italic',
    },
    button: {
        margin: 20,
        backgroundColor: '#f194ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
});