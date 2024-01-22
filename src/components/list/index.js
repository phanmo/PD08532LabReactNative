import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./styles";

const DATA = [
    {
        id: '1',
        name: 'Miyah Myles',
        prof: 'Data Entry Cleck',
        avt: require('../../assets/images/avt1.jpeg'),
    },
    {
        id: '2',
        name: 'June Cha',
        prof: 'Sales Manager',
        avt: require('../../assets/images/avt2.jpeg'),
    },
    {
        id: '3',
        name: 'Lida Niskanen',
        prof: 'Sales Manager',
        avt: require('../../assets/images/avt3.jpeg'),
    },
    {
        id: '4',
        name: 'Renne Sims',
        prof: 'Medical Assistant',
        avt: require('../../assets/images/avt4.jpeg'),
    },
    {
        id: '5',
        name: 'Jonathan Nune',
        prof: 'Clerical',
        avt: require('../../assets/images/avt5.jpeg'),
    },
    {
        id: '6',
        name: 'Sasha Ho',
        prof: 'Administative Asssitant',
        avt: require('../../assets/images/avt6.jpeg'),
    },
    {
        id: '7',
        name: 'Abdullah Hadley',
        prof: 'Marketing',
        avt: require('../../assets/images/avt7.jpeg'),
    },
];
const Item = ({ avt, name, prof }) => {
    return (
        <View style={styles.item}>
            <Image source={avt} style={styles.avata}></Image>
            <View style={styles.infor}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.prof}>{prof}</Text>
            </View>
            <Text style={styles.call}>Call</Text>
        </View>
    );
};
const renderItem=({item})=>(
    <Item avt={item.avt} name={item.name} prof={item.prof}></Item>
);
const List =()=>{
    return(
        <View style={styles.container}>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}>
            </FlatList>

        </View>
    );
};
export default List;
