import React from 'react'
import { View, TextInput, Text, StyleSheet, Alert} from 'react-native'
import { Button } from 'react-native-elements'
class Login extends React.Component {
    render() {
        return (
            <View style={ {marginTop: 25 } }>

                <Text style={{marginTop: 120, fontSize: 40, textAlign: 'center', fontWeight: 'bold'}}> Instamobile </Text>

                <TextInput style={styles.textinput} placeholder="Username"/>

                <TextInput style={[styles.textinput,{marginTop: 10}]} placeholder="Password"/> 

                <Button //Login
                    style={{marginTop: 10, marginLeft: 10, marginRight: 10}}
                    title="Login" 
                    type='solid'
                    onPress ={ () => {Alert.alert("Login Completed")} }
                    
                />

                <Button //Login with FB
                    style={{marginTop: 10}}
                    title="Login with Facebook"
                    type = 'clear' 
                    onPress ={ () => {} }
                />


            </View>

        )
    }
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

export default Login