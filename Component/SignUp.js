import React from 'react'
import { View,Image, TextInput, Text, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { Button } from 'react-native-elements'
import SignupForm from './SignupForm'


export default function SignUp({navigation}) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={ {marginTop: 20 } }>
                
                <Text style={{marginTop: 0, fontSize: 40, textAlign: 'center', fontWeight: 'bold'}}> Instamobile </Text>

                <Text style={{ marginTop:10,fontSize: 17, textAlign: 'center'}}> Sign up to see photos and videos from your friends </Text>

                <Button //Login with FB
                    style={{marginTop: 20, marginLeft: 20, marginRight: 20}}
                    title="Login with Facebook"
                        
                    onPress ={ () => navigation.navigate('Login')}
                />
                <Text style={{ marginTop: 10, fontSize: 17, textAlign: 'center'}}>____________           ____________</Text>
                <Text style={{ marginTop: -10, fontSize: 17, textAlign: 'center'}}>OR</Text>
            
                <SignupForm/>
            
                <Text style={{ marginTop:10,fontSize: 12, textAlign: 'center'}}> By signing up, you agree to our Terms & Privacy Policy </Text>
            </View>
        </TouchableWithoutFeedback>

    )
      
}


const styles = {
    textinput: {
        marginTop: 35, 
        marginLeft: 20, 
        marginRight: 20, 
        height: 40, 
        borderColor: '#a9a9a9', 
        backgroundColor: '#f5f5f5', 
        borderTopStartRadius: 5, 
        borderTopEndRadius: 5, 
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5 ,
        borderWidth: 1, 
        paddingLeft: 10

    }
}




