import React from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Input from "../../../components/input2";
import Button from "../../../components/button";
import { styles } from "./styles";
import Separator from "../../../components/Separator";

const Lab4_3 = () => {
    return (
        <KeyboardAvoidingView behavior={Platform === 'ios' ? 'padding' : 'height'}>
            <ScrollView>
                <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.text1}>Welcome back</Text>
                <Text style={styles.text2}>Login to your account</Text>
                <Image
                style={styles.avt}
                source={require('../../../assets/images/avt3.jpeg')}/>
                <Input label="Email" placeholder="Email" />
                <Input isPassword label="Password" placeholder="Password" />
                <View style={styles.forgotContainer}>
                    <Text style={styles.urlText}>Forgot password ?</Text>
                </View>
                <Button textColor='white' bgColor='green' btnLabel="Login"
                    onPress={() => Alert.alert("Logged in")} />
                <Separator text="Login with"></Separator>

                <View style={styles.registerView}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Don't have an account ? </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
                        <Text style={styles.urlText}>Register</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    );
};
export default Lab4_3;