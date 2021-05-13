import React, { useEffect } from 'react';
import { StyleSheet,View, Text} from 'react-native';
import { Button } from 'react-native-elements'
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
        <View style={styles.container}>
            <View style={ {marginTop: 200} }>
                <Text style={{marginTop: 10, fontSize: 40, textAlign: 'center', fontWeight: 'bold'}}> Instamobile </Text>
                <Button   
                style={{marginTop: 50,marginLeft: 20, marginRight: 20}}
                title="Login" 
                onPress ={ () => navigation.navigate('Login') }
                />
                <Button   
                style={{marginTop: 20}}
                title="Sign Up" 
                type= 'clear'
                onPress ={ () => navigation.navigate('SignUp') }
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
});