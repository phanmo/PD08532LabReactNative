import { Image, Modal, ScrollView, TextInput } from 'react-native';
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import React, { useEffect, useState } from "react";


const ListUser = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(undefined);

    const getAPI = async () => {
        const url = 'http://localhost:3000/users';
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result);
        }
    };

    const handleDelete = async id => {
        const url = 'http://localhost:3000/users';
        let result = await fetch(`${url}/${id}`, {
            method: 'Delete',
        });
        result = await result.json();
        if (result) {
            getAPI();
        }
    };

    const handleUpdate = data => {
        setOpenDialog(true);
        setSelectedUser(data);
        console.log('update');

    };

    React.useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            getAPI();
        });
        return focusHandler;
    }, [navigation]);

    return (
        <ScrollView>
            <TouchableOpacity
                style={styles.buttonNew}
                onPress={() => navigation.navigate('AddUser')}>
                <Text style={styles.buttonNew}>Add New</Text>
            </TouchableOpacity>
            {data.length
                ? data.map((item, index) => (
                    <View style={styles.container} key={index}>
                            <Image style={styles.img} src={item.image}/>
                        <View style={styles.containerText}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.birthday}>{item.birthday}</Text>
                        </View>
                        <View style={styles.containerButton}>
                            <TouchableOpacity style={styles.button}>
                                <Text
                                    style={styles.buttonText}
                                    onPress={() => handleUpdate(item)}>
                                    Update
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text
                                    style={styles.buttonText}
                                    onPress={() => handleDelete(item.id)}>
                                    Delete
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )) : null}
            <Modal visible={openDialog} transparent={true}>
                <UpdateModel
                    setOpenDialog={setOpenDialog}
                    selectedUser={selectedUser}
                    getAPI={getAPI}>
                </UpdateModel>
            </Modal>
        </ScrollView>
    );
};

// Update
const UpdateModel = props => {
    const [name, setName] = useState(undefined);
    const [birthday, setBirthday] = useState(undefined);
    const [image, setImage] = useState(undefined);
    useEffect(() => {
        if (props.selectedUser) {
            setName(props.selectedUser.name);
            setBirthday(props.selectedUser.birthday);
            setBirthday(props.selectedUser.image);
        }
    }, [props.selectedUser]);
    const updateUser = async () => {
        const url = 'http://localhost:3000/users';
        const id = props.selectedUser.id;
        let result = await fetch(`${url}/${id}`, {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, birthday, image }),
        });
        result = await result.json();
        if (result) {
            props.getAPI();
            props.setOpenDialog(false);

        }
    };
    return (
        <View style={styles.modelContent}>
            <TextInput
                style={styles.input}
                placeholder='Enter name'
                value={name}
                onChangeText={text => setName(text)}></TextInput>
            <TextInput
                style={styles.input}
                placeholder='Enter birthday'
                value={birthday}
                onChangeText={text => setBirthday(text)}></TextInput>
            <TextInput
                style={styles.input}
                placeholder='Enter imagePath'
                value={birthday}
                onChangeText={text => setImage(text)}></TextInput>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button} onPress={updateUser}>
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={updateUser}>
                    <Text style={styles.buttonText}
                        onPress={() => props.setOpenDialog(false)} >Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ListUser;