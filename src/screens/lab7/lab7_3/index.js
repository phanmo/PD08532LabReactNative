import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./style";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

const renderLabel = (props) => props.focused ? (
    <Text style={{ color: '#FF6C22' }}>{props.children}</Text>
) : null;

const renderIcon = (icon, props) => (
    <Image source={icon} tintColor={props.color} style={styles.img} />
);

function LoveScreen() {
    return (
        <View style={styles.screen}>
            <Text>YÊU THÍCH</Text>
        </View>
    );
};
function PopularScreen() {
    return (
        <View style={styles.screen}>
            <Text>PHỔ BIẾN</Text>
        </View>
    );
};
function LiveScreen() {
    return (
        <View style={styles.screen}>
            <Text>TRỰC TIẾP</Text>
        </View>
    );
};


function HomeScreen() {
    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarStyle: { paddingTop: 45 },
                tabBarLabelPosition:'beside-icom',
            }}>
            <TopTab.Screen name="Yêu thích" component={LoveScreen}
                options={{
                    tabBarIcon: props => renderIcon(require('../../../assets/icons/heart.png'), props),
                }} />
            <TopTab.Screen name="Phổ biến" component={PopularScreen} />
            <TopTab.Screen name="Trực tiếp" component={LiveScreen} />
        </TopTab.Navigator>
    );
};

function SettingScreen() {
    return (
        <View style={styles.screen}>
            <Text>SettingScreen</Text>
        </View>
    );
};

function PhoneScreen() {
    return (
        <View style={styles.screen}>
            <Text>PhoneScreen</Text>
        </View>
    );
};


const Lab7_3 = () => {
    return (
        <NavigationContainer>

            <BottomTab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#FF6C22',
                    tabBarLabelPosition: 'beside-icon',
                }}>
                <BottomTab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarIcon: props => renderIcon(require('../../../assets/icons/home.png'), props),
                        tabBarLabel: props => renderLabel(props),
                    }} />
                <BottomTab.Screen name="Setting" component={SettingScreen}
                    options={{
                        tabBarIcon: props => renderIcon(require('../../../assets/icons/settings.png'), props),
                        tabBarLabel: props => renderLabel(props),
                    }} />
                <BottomTab.Screen name="Phone" component={PhoneScreen}
                    options={{
                        tabBarIcon: props => renderIcon(require('../../../assets/icons/phone.png'), props),
                        tabBarLabel: props => renderLabel(props),
                    }} />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}

export default Lab7_3;
