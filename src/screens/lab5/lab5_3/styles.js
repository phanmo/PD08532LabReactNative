import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgr: {
        flex: 6,
    },
    menuView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginTop: 60,
    },
    nameView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: '70%',
    }, 
    name:{
        color:'#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    starView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    star: {
        width: 30,
        height: 30,
        marginRight: 5,
    },
    starText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
    },
    detailsContainer: {
        flex: 5,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#fff',
    },
    locationView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        marginLeft: 15,
        marginBottom: 15,
    },
    locationIcon: {
        width: 35,
        height: 35,
        marginRight: 5,
    },
    locationText: {
        color: '#01A6FF',
        fontSize: 25,
        fontWeight: 'bold',
    },
    inforTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10,
    },
    inforHoiAn:{
        color: 'gray',
        fontSize: 16,
        paddingHorizontal: 15,
        textAlign: 'justify'
    },
    footer: {
        height: 80,
        backgroundColor: '#01A6FF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        bottom: 0,
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    footerText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    footerPrice: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
    },

    footerTime: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },

    heartcontainer: {
        width: 70,
        height: 70,
        borderRadius: 70,
        position: 'absolute',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        right: 40,
        top: '50%',
        zIndex: 1,
        shadowColor: '#000'
        ,
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    },
    hearticon: {
        width: 40,
        height: 40,
    },
});


