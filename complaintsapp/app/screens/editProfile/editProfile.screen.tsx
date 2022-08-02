import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, TextInput, List } from "react-native-paper";
import DropdownComponent from '../../components/dropdown/dropdown.component';
import { HeaderComponent } from "../../components/header/header.component";
import { editProfileStyle } from './editProfile.style';

interface EditProfileScreenProps {
    navigation: any;
}

const EditProfileScreen = (props: EditProfileScreenProps) => {

    const save = () => props.navigation.navigate("Home")


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={editProfileStyle.content}>
                    <TextInput label="Name" />
                    <TextInput label="Email" keyboardType="email-address" />
                    <TextInput label="Change Password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" color={editProfileStyle.icon.color } />} />
                    <TextInput label="Confirm password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" color={editProfileStyle.icon.color } />} />
                    <TextInput label="Phone number" keyboardType="phone-pad" />
                    <DropdownComponent />
                    <Button mode="contained" style={editProfileStyle.button} onPress={save}>Save</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditProfileScreen;