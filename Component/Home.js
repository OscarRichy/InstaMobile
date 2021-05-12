import React, { useEffect } from 'react';
import { StyleSheet, TextInput, View, Text} from 'react-native';
import { Button } from 'react-native-elements'
import { getJwt } from '../utils/jwt';
import Login from './Login'
import SignUp from './SignUp';
import { useNavigation } from '@react-navigation/native';
import axiosInterceptor from '../utils/AxiosInterceptor';

export default function Home(){
    const navigation = useNavigation();

    useEffect( (data, actions) => {

        const apiUrl = 'https://api.adas.app/api/v1/users/me/';
        axiosInterceptor.get(apiUrl)
        .then(response => {
            console.log(response.data)
            navigation.navigate('MyProfile'); // Si l'appel de l'api est une réussite, donc on s'est bien enregistré, on redirige l'utilisateur vers la page profile
        })
        .catch(error => {  
        })
        .finally(() => {
        });          
    })
    return( 
        <View style={ {marginTop: 50 } }>
            <Text style={{marginTop: 0, fontSize: 40, textAlign: 'center', fontWeight: 'bold'}}> Instamobile </Text>
            <Button   
            style={{marginTop: 50,marginLeft: 20, marginRight: 20}}
            title="Login" 
            onPress ={ () => navigation.navigate('Login') }
            />
             <Button   
            style={{marginTop: 10}}
            title="Sign Up" 
            type= 'clear'
            onPress ={ () => navigation.navigate('SignUp') }
            />

       

        </View>
    )
}