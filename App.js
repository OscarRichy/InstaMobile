import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './Component/SignUp'
import Login from './Component/Login'
//import AppNavigator from './routes/AppNavigator';



const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name ='SignUp' component={SignUp} options={{ title: 'Sign Up Page' }}/>
       <Stack.Screen name='Login' component={Login} options={{ title: 'Login Page'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
