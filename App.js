// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lab5 from './src/screens/lab5';
import Lab5_1 from './src/screens/lab5/lab5_1';
import Lab5_2 from './src/screens/lab5/lab5_2';
import Lab5_3 from './src/screens/lab5/lab5_3';
import Lab6 from './src/screens/lab6';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <Lab6></Lab6>
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown:false}}>
    //     <Stack.Screen name="lab5" component={Lab5}/>
    //     <Stack.Screen name="lab5_1" component={Lab5_1}/>
    //     <Stack.Screen name="lab5_2" component={Lab5_2}/>
    //     <Stack.Screen name="lab5_3" component={Lab5_3}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};
export default App;