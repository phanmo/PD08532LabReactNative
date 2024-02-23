import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#B0E0E0',
        borderRadius: 4,
        padding: 16,
        margin: 10,
    },
    containerText: {
        marginLeft: 30,
        width: 135,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    containerButton: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonNew: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        padding: 4,
        marginHorizontal: 8,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'tomato',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    name: {
        marginRight: 'auto',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    birthday: {
        marginRight: 'auto',
        fontSize: 16,
        fontWeight: 'bold',
    },
    img:{
        width: 80,
        height: 80,
        borderRadius: 80,
    },
   
    buttonText:{
        color:'#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    // model styles
    modelContent:{
        backgroundColor:'white',
        padding: 15,
        marginTop: 100,
        borderRadius: 8,
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    buttonGroup:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button:{
        width: 80,
        backgroundColor: 'tomato',
        padding: 8,
        borderRadius: 4,
        marginLeft: 8,
        marginBottom: 8,
    },
    buttonText:{
        textAlign: 'center',
        color:'#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
