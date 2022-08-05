import { Formik } from 'formik';
import React from 'react';
import { Alert, SafeAreaView, View, Text, ScrollView } from 'react-native';
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
            <ScrollView>
            <Card>
                    <Card.Title title="Complainer App" titleStyle={loginStyle.cardTitle}></Card.Title>
                    <Card.Content>
                        <Formik initialValues={{email: "", password: ""}} onSubmit={login} validationSchema ={loginForm}>
                            {({handleSubmit, handleChange, errors, setFieldTouched, touched, values}) => (
                                <>
                                <TextInput 
                                    label="Email" 
                                    keyboardType="email-address" 
                                    onChangeText={handleChange('email')} 
                                    onFocus={() => setFieldTouched('email')} />
                                {
                                    touched.email && errors.email?
                                    <Text style={{color: "white", backgroundColor: "red"}}> 
                                        {errors.email} 
                                    </Text>
                                    :null
                                }
                                <TextInput 
                                    label="Password" 
                                    secureTextEntry={true} 
                                    onChangeText={handleChange('password')} 
                                    onFocus={() => setFieldTouched('email')} />
                                 {
                                    touched.password && errors.password?
                                    <Text style={{color: "white", backgroundColor: "red"}}> 
                                        {errors.password} 
                                    </Text>
                                    :null
                                }    
                                <Button 
                                    uppercase={false} 
                                    style={loginStyle.cardButton}
                                    disabled={values.email == '' || errors.email ? true : false}>
                                    Forgot Email/Password
                                </Button>
                                <Button 
                                    onPress={handleSubmit} 
                                    mode="contained" 
                                    style={loginStyle.cardButton}>
                                    Login
                                </Button>
                                <Button 
                                    onPress={register} 
                                    style={loginStyle.cardButton}>
                                    Register
                                </Button>
                                </>
                            )}
                                
                        </Formik>
                     </Card.Content>
                </Card>

            </ScrollView>

                
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen