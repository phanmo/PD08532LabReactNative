// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lab5 from './src/screens/lab5';
import Lab5_1 from './src/screens/lab5/lab5_1';
import Lab5_2 from './src/screens/lab5/lab5_2';
import Lab5_3 from './src/screens/lab5/lab5_3';
import Lab6 from './src/screens/lab6';
import Lab7_2 from './src/screens/lab7/lab7_2';
import Lab7_3 from './src/screens/lab7/lab7_3';
import Crud from './src/screens/lab8/CRUD';
import Lab7_1 from './src/screens/lab7/lab7_1';
import Lab4_1 from './src/screens/lab4/lab4_1';



const Stack = createNativeStackNavigator();

function App() {
  return (
    
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown:false}}>
    //     <Stack.Screen name="lab5" component={Lab5}/>
    //     <Stack.Screen name="lab5_1" component={Lab5_1}/>
    //     <Stack.Screen name="lab5_2" component={Lab5_2}/>
    //     <Stack.Screen name="lab5_3" component={Lab5_3}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Lab6></Lab6>
    // <Lab7_1></Lab7_1>
    // <Lab7_2></Lab7_2>
    // <Lab7_3></Lab7_3>
    <Crud></Crud>
  );
};
export default App;