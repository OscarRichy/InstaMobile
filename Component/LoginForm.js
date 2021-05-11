import React from 'react';
import { StyleSheet, TextInput, View, Text} from 'react-native';
import { Button } from 'react-native-elements'
import { Formik } from 'formik';
import * as yup from 'yup';
import * as axios from 'axios';



const LoginSchema = yup.object({
    email: yup.string()
        .email('Please enter a valid email')
        .required(),

    password1: yup.string()
        .required('Password is required'),
        

})

export default function LoginForm() {
    return(
        <View style={ {marginTop: 10 } }>
            <Formik
                initialValues={{email: '', password1: ''}}
                validationSchema={LoginSchema}
                
                onSubmit={( data, actions) => {
                    
                    const apiUrl = 'https://api.adas.app/api/v1/users/registration/login/';
                    //setNonFieldError("");
                    actions.setSubmitting(true); // Ceci grise le bouton du formulaire pour dire à l'utilisateur qu'on traite sa requete
                    // On dit à Axios d'aller appeler l'apiUrl avec la méthode POST, et les données du formulaire (data)
                    axios.post(apiUrl, data)
                        .then(response => {
                            console.log(response)
                            actions.resetForm();
                           // navigate('Login'); // Si l'appel de l'api est une réussite, donc on s'est bien enregistré, on redirige l'utilisateur vers la page login
                        })
                        .catch(error => {
                            if (error.response) {
                                let errors = error.response.data;
                                actions.setErrors(errors);
                                if (errors.non_field_errors) {
                                    setErrorMsg(errors.non_field_errors);
                                }
                            }
                            
                        }).finally(() => {
                            actions.setSubmitting(false); // On finit par remettre le bouton à la normale
                        
                            
                        });                    
        
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.textinput}
                            placeholder='Email'
                            onChangeText = {props.handleChange('email')}
                            value={props.values.email}
                        />
                        <Text style={styles.errortext}> {props.errors.email}</Text>

                        <TextInput
                            style={styles.textinput}
                            placeholder='Password'
                            onChangeText = {props.handleChange('password1')}
                            value={props.values.password1}
                        />  
                        <Text style={styles.errortext}> {props.errors.password1}</Text>   

                        
                        <Button style={{marginTop: 20, marginLeft: 20, marginRight: 20}} title= 'Login' disabled={props.isSubmitting} onPress={props.handleSubmit}  
                        />

                    </View>
                
                )}
        
            </Formik>
        </View>
    )
}

const styles = {
    textinput: {
        marginTop: 10, 
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

    },

    errortext: {
        marginTop: 0,
        marginLeft: 20,
        color: '#f00',
        fontSize: 10,
        

    }
}
