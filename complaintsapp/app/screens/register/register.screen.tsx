import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, TextInput, List } from "react-native-paper";
import DropdownComponent from '../../components/dropdown/dropdown.component';
import { HeaderComponent } from "../../components/header/header.component";
import { registerStyle } from './register.style';

interface RegisterScreenProps {
    navigation: any;
}

const RegisterScreen = (props: RegisterScreenProps) => {

    const register = () => props.navigation.navigate("Login")
   
    


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={registerStyle.content}>
                    <TextInput label="Name" />
                    <TextInput label="Email" keyboardType="email-address" />
                    <TextInput label="Password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" color={registerStyle.icon.color } />} />
                    <TextInput label="Confirm password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" color={registerStyle.icon.color } />} />
                    <TextInput label="Phone number" keyboardType="phone-pad" />
                    <DropdownComponent />
                    <Button mode="contained" style={registerStyle.button} onPress={register}>Register</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterScreen;