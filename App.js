import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './Component/SignUp'
import Login from './Component/Login'
import MyProfile from './Component/MyProfile';
import Home from './Component/Home';
import { getJwt } from './utils/jwt';
import axios from 'axios';
import axiosInterceptor from './utils/AxiosInterceptor';


const Stack = createStackNavigator();


export default function App() {
    return(

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component={Home} options={{headerShown: false}}/> 
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name ='SignUp' component={SignUp} options={{ headerShown: false}}/>
        <Stack.Screen name='MyProfile' component={MyProfile} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
