import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text} from 'react-native';
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { deleteJwt } from '../utils/jwt';
import axiosInterceptor from '../utils/AxiosInterceptor';



export default function MyProfile(){
    const navigation = useNavigation();
    const [profile, setProfile] = useState({ "email": '', "first_name": '', "id": 0 , "last_name": '', "phone_number": '', "profile_img": null });
    console.log('1')
    console.log(profile)
    console.log('2')
    const apiUrl = 'https://api.adas.app/api/v1/users/me/';
    useEffect( () => {
        axiosInterceptor.get(apiUrl)
        .then(response => {
            setProfile(response.data.user)
            //console.log(response.data)
        })
        .catch(error => {  
        })
        .finally(() => {
        });      

    }, [])
    console.log('3')
    console.log(profile)
    return( 
        <View style={ {marginTop: 20 } }>
            <Text style={{marginTop: 0, fontSize: 40, textAlign: 'center', fontWeight: 'bold'}}> Instamobile </Text>
            <Text style={{ marginTop:10,fontSize: 17, textAlign: 'left'}}> Username :  </Text> 
           <Text style={{ marginTop:10,fontSize: 17, textAlign: 'center'}}> {toString(profile)} </Text> 
           <Button 
                style={{marginTop: 80, marginLeft : 40, marginRight: 40}}
                title="Log Out"
                type = 'solid' 
                onPress ={ () => {deleteJwt(), navigation.navigate('Home')}
                }
           />
        </View>
    )
}