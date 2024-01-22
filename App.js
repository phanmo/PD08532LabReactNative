// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyLab4 from './src/screens/lab4';
import Lab4_1 from './src/screens/lab4/lab4_1';
import Lab4_2 from './src/screens/lab4/lab4_2';
import Lab4_3 from './src/screens/lab4/lab4_3';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="lab4" component={MyLab4}/>
        <Stack.Screen name="lab4_1" component={Lab4_1}/>
        <Stack.Screen name="lab4_2" component={Lab4_2}/>
        <Stack.Screen name="lab4_3" component={Lab4_3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;