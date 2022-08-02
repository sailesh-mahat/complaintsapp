import React from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { homeStyle } from './home.style';

interface HomeScreenProps {
    navigation: any;
}

const HomeScreen = (props: HomeScreenProps) => {

    const addComplaint = () => props.navigation.navigate("addComplaint")

    const editProfile = () => props.navigation.navigate("Edit Profile")

    const logout = () => props.navigation.navigate("Login")

    const complaintBasket = () => props.navigation.navigate("complaintBasket")

    return (
        <SafeAreaView style={homeStyle.content}>
            <View style={homeStyle.view}>
                <Card>
                    <Card.Title title="Hello User" titleStyle={homeStyle.cardTitle}></Card.Title>
                    <Card.Content>
                        <Button onPress={addComplaint} mode="contained" uppercase={false} style={homeStyle.cardButton}>Add Complaint</Button>
                        <Button onPress={complaintBasket} uppercase={false} style={homeStyle.cardButton}>Complaint Basket</Button>
                        <Button onPress={editProfile} style={homeStyle.cardButton}>Edit Profile</Button>
                        <Button onPress={logout} style={homeStyle.cardButton}>Logout</Button>
                     </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen