import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 2,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    item: {
        backgroundColor: 'rgb(220, 220, 220)',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avata: {
        width: 60,
        height: 60,
        borderRadius: 60,
        marginRight: 20,
    },
    infor: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '50%',
        alignItems: 'center',
        marginRight: 20,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    prof:{
        fontSize: 14,
        color: 'gray'
    },
    call:{
        color: 'green',
        fontWeight: 'bold',
        fontSize: 18,
    },
});