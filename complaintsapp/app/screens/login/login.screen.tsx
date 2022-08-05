import { Formik } from 'formik';
import React from 'react';
import { Alert, SafeAreaView, View, Text } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { loginForm } from './login.form';
import { loginStyle } from './login.style';

interface LoginScreenProps {
    navigation: any;
}

const LoginScreen = (props: LoginScreenProps) => {

    const login = () => props.navigation.navigate("Home")

    const register = () => props.navigation.navigate("Register")


    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.view}>
                <Card>
                    <Card.Title title="Complainer App" titleStyle={loginStyle.cardTitle}></Card.Title>
                    <Card.Content>
                        <Formik initialValues={{email: "", password: ""}} onSubmit={login} validationSchema ={loginForm}>
                            {({handleSubmit, handleChange, errors}) => (
                                <>
                                <TextInput label="Email" keyboardType="email-address" onChangeText={handleChange('email')} />
                                <Text style={{color: "white", backgroundColor: "red"}}> {errors.email} </Text>
                                <TextInput label="Password" secureTextEntry={true} onChangeText={handleChange('password')} />
                                <Button uppercase={false} style={loginStyle.cardButton}>Forgot Email/Password</Button>
                                <Button onPress={handleSubmit} mode="contained" style={loginStyle.cardButton}>Login</Button>
                                <Button onPress={register} style={loginStyle.cardButton}>Register</Button>
                                </>
                            )}
                                
                        </Formik>
                     </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen