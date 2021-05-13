import React from 'react'
import { ScrollView,View, TextInput, Text, StyleSheet, Alert,TouchableWithoutFeedback, Keyboard} from 'react-native'
import { Button } from 'react-native-elements'
import LoginForm from './LoginForm'



export default function Login({navigation}) {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={ {marginTop: 25 } }>

                <Text style={{marginTop: 120, fontSize: 40, textAlign: 'center', fontWeight: 'bold'}}> Instamobile </Text>

                <LoginForm/>

                <Text style={{ marginTop:10,fontSize: 12, textAlign: 'center'}}> You don't have an account yet ? Sign Up by clicking bellow </Text>
                <Button //Sign Up
                    style={{marginTop: 10}}
                    title="Sign Up"
                    type = 'clear' 
                    onPress ={ () => navigation.navigate('SignUp') }
                />


            </View>
        </TouchableWithoutFeedback>

    )
    
}

const styles = {
    textinput: {
        marginTop: 35, 
        marginLeft: 10, 
        marginRight: 10, 
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
