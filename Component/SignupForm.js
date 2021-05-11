import React from 'react';
import { StyleSheet, TextInput, View, Text} from 'react-native';
import { Button } from 'react-native-elements'
import { Formik } from 'formik';
import * as yup from 'yup';

const SignupSchema = yup.object({
    email: yup.string()
        .email('Please enter a valid email')
        .required(),

    firstName: yup.string()
        .required()
        .min(1)
        .max(150),
    lastName: yup.string()
        .required()
        .min(1)
        .max(150),
    phoneNumber: yup.string()
        .required()
        .min(1)
        .max(128),
    password1: yup.string()
        .required('Password is required')
        .min(1),
    password2: yup.string()
        .required('You must verify the password')
        .min(1)
        .oneOf([yup.ref('password1'), null], 'Passwords must match')

})

export default function SignupForm() {
    return(
        <View style={ {marginTop: 10 } }>
            <Formik
                initialValues={{ email: '', firstName: '', lastName: '', phoneNumber: '', password1: '', password2: ''}}
                validationSchema={SignupSchema}
                onSubmit={( values, actions) => {
                    actions.resetForm();
                    console.log(values);
                    
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
                            onChangeText = {props.handleChange('firstName')}
                            value={props.values.firstName}
                        />
                        <Text style={styles.errortext}> {props.errors.firstName}</Text>
                        <TextInput
                            style={styles.textinput}
                            placeholder='Last Name'
                            onChangeText = {props.handleChange('lastName')}
                            value={props.values.lastName}
                        />
                        <Text style={styles.errortext} > {props.errors.lastName}</Text>
                        <TextInput
                            style={styles.textinput}
                            placeholder='Phone Number'
                            onChangeText = {props.handleChange('phoneNumber')}
                            value={props.values.phoneNumber}
                            keyboardType='numeric'
                        />   
                        <Text style={styles.errortext}> {props.errors.phoneNumber}</Text>
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
                        <Button style={{marginTop: 20, marginLeft: 20, marginRight: 20}} title= 'Sign Up' onPress={props.handleSubmit}  
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

