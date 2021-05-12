import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, ImageBackground, Image} from 'react-native';
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { deleteJwt } from '../utils/jwt';
import axiosInterceptor from '../utils/AxiosInterceptor';
import{ IconButton, Colors } from 'react-native-paper';




const imageBg = require ('C:/Users/draze/Desktop/Test/utils/ImageBg.png');



export default function MyProfile(){
    const navigation = useNavigation();
    const [profile, setProfile] = useState({ "email": '', "first_name": '', "id": 0 , "last_name": '', "phone_number": '', "profile_img": null });

    useEffect( () => {
        const apiUrl = 'https://api.adas.app/api/v1/users/me/';
        axiosInterceptor.get(apiUrl)

        .then(response => {
            setProfile(response.data)
        })

    }, [])

    return( 
        <ImageBackground source={imageBg} style={styles.imageBg}>

        <View style={ {marginTop: 0} }>
                <IconButton
                    style={{marginLeft: 330, marginTop: 50}}
                    icon = "bell-outline"
                    color={Colors.white}
                    size={30}
                    onPress={() => {}}
                />
                <View style={styles.shadow}>
                    <Text style={styles.text}> Hi, {profile.first_name} {profile.last_name}  </Text>
                </View>
              
                <Text style={{marginTop: -80,alignSelf: 'center', fontSize: 13,fontWeight: 'bold', color: '#a9a9a9'}}> Good Morning</Text>   

                <View style={styles.shadow}>
                    <Image source={{uri: "https://i.pinimg.com/736x/fd/b6/de/fdb6dea1b13458837c6e56361d2c2771.jpg"} } style={styles.image}></Image>
                </View>
            

                <Text style={{marginTop: 100, marginLeft:30, fontSize: 17, fontWeight: 'bold', color: 'grey'}}>Popular Group</Text>

                <View style={[styles.shadow2]}>
                    <Text style={styles.text2}> Iron Yard  </Text>
                </View>

                <Image source={{uri: "https://i.pinimg.com/736x/fd/b6/de/fdb6dea1b13458837c6e56361d2c2771.jpg"} } style={styles.image2}></Image>

                <Text style={{marginTop: -40, marginLeft:270, fontSize: 17, fontWeight: 'bold', color: 'royalblue'}}>$1,295</Text>


                <Text style={{marginTop: 80, marginLeft:30, fontSize: 17, fontWeight: 'bold', color: 'grey'}}>Activity</Text>
                
                <View style={[styles.shadow2]}>
                    <Text style={styles.textActivity}>  </Text>
                </View>
                
                <Button 
                    style={{marginTop: 50, marginLeft : 110, marginRight: 110,}}
                    title="Log Out"
                    type = 'solid' 
                    onPress ={ () => {deleteJwt(), navigation.navigate('Home')}
                    }
                />
            

        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    shadow :{
        shadowOpacity : 0.5,
        shadowColor : 'mediumturquoise',
        shadowRadius: 10,
        shadowOffset: {height: 10, width: 0}

    },
    shadow2 :{
        shadowOpacity : 0.5,
        shadowColor : 'grey',
        shadowRadius: 10,
        shadowOffset: {height: 10, width: 0}

    },
    imageBg: {
     
      width : '100%',
      height: '100%',
     // resizeMode: "cover",
      //justifyContent: "center"
    },
    image:{
       // flex:1,
        marginTop: -190,
        alignSelf: 'center',
        width : 110 ,
        height : 110,
        borderColor: '#f8f8f8',
        borderWidth: 4,
        borderRadius: 40
    },
    image2:{
        // flex:1,
         marginTop: -75,
         marginLeft: 50,
         width : 60 ,
         height : 60,
         borderColor: '#f8f8f8',
         borderRadius: 15
     },
    text: {
        fontWeight: 'bold',
        overflow: 'hidden',
        marginTop:60,
        borderColor:'#dcdcdc',
        backgroundColor: '#f8f8ff',
        borderRadius: 30,
        fontSize: 20,
        alignSelf: 'center',
        textAlign:'center',
        paddingVertical: 90,
        height:200 ,
        width: 320
    },
    text2: {
        fontWeight: 'bold',
        overflow: 'hidden',
        marginTop:10,
        borderColor:'#dcdcdc',
        backgroundColor: '#f8f8ff',
        borderRadius: 20,
        fontSize: 17,
        alignSelf: 'center',
        paddingLeft: 100,
        paddingVertical: 20,
        height:90 ,
        width: 320
    },
    textActivity: {
        fontWeight: 'bold',
        overflow: 'hidden',
        marginTop:10,
        borderColor:'#dcdcdc',
        borderWidth : 2,
        borderRadius: 20,
        fontSize: 20,
        alignSelf: 'center',
        textAlign:'center',
        height:120 ,
        width: 320
    },

  });