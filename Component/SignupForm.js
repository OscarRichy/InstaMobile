import React from 'react';
import { StyleSheet, TextInput, View, Text} from 'react-native';
import { Button } from 'react-native-elements'
import { Formik } from 'formik';
import * as yup from 'yup';
import * as axios from 'axios';

const SignupSchema = yup.object({
    email: yup.string()
        .email('Please enter a valid email')
        .required(),

    first_name: yup.string()
        .required()
        .min(1)
        .max(150),
    last_name: yup.string()
        .required()
        .min(1)
        .max(150),
    phone_number: yup.string()
        .required()
        .min(1)
        .max(128),
    password1: yup.string()
        .required('Password is required')
        .min(8),
    password2: yup.string()
        .required('You must verify the password')
        .min(8)
        .oneOf([yup.ref('password1'), null], 'Passwords must match')

})

export default function SignupForm() {
    return(
        <View style={ {marginTop: 10 } }>
            <Formik
                initialValues={{ email: '', first_name: '', last_name: '', phone_number: '', password1: '', password2: ''}}
                validationSchema={SignupSchema}
                
                onSubmit={( data, actions) => {
                    
                    const apiUrl = 'https://api.adas.app/api/v1/users/registration/';
                    //setNonFieldError("");
                    actions.setSubmitting(true); // Ceci grise le bouton du formulaire pour dire à l'utilisateur qu'on traite sa requete
                    // On dit à Axios d'aller appeler l'apiUrl avec la méthode POST, et les données du formulaire (data)
                    axios.post(apiUrl, data)
                        .then(response => {
                            console.log(response)
                            actions.resetForm();
                            navigate('Login'); // Si l'appel de l'api est une réussite, donc on s'est bien enregistré, on redirige l'utilisateur vers la page login
                        })
                        .catch(error => {
                            if (error.response) {
                                let errors = error.response.data;
                                actions.setErrors(errors);
                                if (errors.non_field_errors) {
                                    setErrorMsg(errors.non_field_errors);
                                }
                            }
                            
                            // On verra après ce qui faudra faire en cas d'erreur
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
                            placeholder='First Name'
                            onChangeText = {props.handleChange('first_name')}
                            value={props.values.first_name}
                        />
                        <Text style={styles.errortext}> {props.errors.first_name}</Text>

                        <TextInput
                            style={styles.textinput}
                            placeholder='Last Name'
                            onChangeText = {props.handleChange('last_name')}
                            value={props.values.last_name}
                        />
                        <Text style={styles.errortext} > {props.errors.last_name}</Text>

                        <TextInput
                            style={styles.textinput}
                            placeholder='Phone Number'
                            onChangeText = {props.handleChange('phone_number')}
                            value={props.values.phone_number}
                            keyboardType='numeric'
                        />   
                        <Text style={styles.errortext}> {props.errors.phone_number}</Text>

                        <TextInput
                            style={styles.textinput}
                            placeholder='Password'
                            onChangeText = {props.handleChange('password1')}
                            value={props.values.password1}
                        />  
                        <Text style={styles.errortext}> {props.errors.password1}</Text>   

                        <TextInput
                            style={styles.textinput}
                            placeholder='Repeat Password'
                            onChangeText = {props.handleChange('password2')}
                            value={props.values.password2}
                        />   
                        <Text style={styles.errortext}> {props.errors.password2}</Text> 
                        
                        <Button style={{marginTop: 20, marginLeft: 20, marginRight: 20}} title= 'Sign Up' disabled={props.isSubmitting} onPress={props.handleSubmit}  
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

