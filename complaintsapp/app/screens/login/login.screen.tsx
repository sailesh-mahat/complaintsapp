import { bindActionCreators } from '@reduxjs/toolkit';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, View, Text, ScrollView } from 'react-native';
import { Button, Card, Snackbar, TextInput } from 'react-native-paper';
import { connect } from "react-redux";
import AuthService from '../../services/AuthService';
import { AppState } from '../../store/AppState';
import { hide, show } from '../../store/loading/loading.actions';
import { LoadingState } from '../../store/loading/LoadingState';
import { recoverPassword, recoverPasswordFail, recoverPasswordReset, recoverPasswordSuccess } from '../../store/login/login.actions';
import { LoginState } from '../../store/login/LoginState';
import { loginForm } from './login.form';
import { loginStyle } from './login.style';

interface LoginScreenProps {
    navigation: any;

    loadingState: LoadingState;
    loginState: LoginState;

    recoverPassword: Function;
    recoverPasswordReset: Function;
    recoverPasswordSuccess: Function;
    recoverPasswordFail: Function;
    hideLoading: Function;
    showLoading: Function;
}

const LoginScreen = (props: LoginScreenProps) => {

    const [recoveryEmail, setRecoveryEmail] = useState("");

    useEffect(() => {
        if (props.loginState.isRecoveringPassword){
            props.showLoading();

            AuthService.recoverPassword(recoveryEmail).then(() => {
                props.recoverPasswordSuccess();
            }).catch(error => {
                props.recoverPasswordFail(error);
            })
        } else { 
            props.hideLoading();
        }
    }, [props.loginState.isRecoveringPassword])

    const forgotEmailPassword = (email: string) => {
        setRecoveryEmail(email);
        props.recoverPassword();
    };

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
                                    onPress={() => forgotEmailPassword(values.email)}
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
            {
                props.loginState.isRecoveredPassword ?
                <Snackbar 
                    duration={5000}
                    visible={true}
                    onDismiss={() => props.recoverPasswordReset()}>
                    Recovery email sent
                </Snackbar>
                : null
            }
            {
                props.loginState.error ?
                <Snackbar 
                    duration={5000}
                    visible={true}
                    onDismiss={() => props.recoverPasswordReset()}>
                    {props.loginState.error.message}
                </Snackbar>
                : null
            }
            
        </SafeAreaView>
    )
}

const mapStateToProps = (store: AppState) => ({
    loadingState: store.loading,
    loginState: store.login
});

const mapDispatchToProps = ( dispatch: any) => (
    bindActionCreators({
        recoverPassword: recoverPassword,
        recoverPasswordSuccess: recoverPasswordSuccess,
        recoverPasswordFail: recoverPasswordFail,
        recoverPasswordReset: recoverPasswordReset,
        hideLoading: hide,
        showLoading: show
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps) (LoginScreen);