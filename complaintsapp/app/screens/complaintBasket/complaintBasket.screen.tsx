import React from 'react';
import { Alert, SafeAreaView, View, ScrollView } from 'react-native';
import { Button, Card, TextInput, Text } from 'react-native-paper';
import { complaintBasketStyle } from './complaintBasket.style';


interface complaintBasketScreenProps {
    navigation: any;
}

    const ComplaintBasketScreen = (props: complaintBasketScreenProps) => {

   

    const back = () => props.navigation.navigate("Home")


    return (
        <SafeAreaView style={complaintBasketStyle.content}>
            <View style={complaintBasketStyle.view}>
                <ScrollView>
                <Card>
                    <Card.Title title="Complaint Basket" titleStyle={complaintBasketStyle.cardTitle}></Card.Title>
                    <Card.Content>
                        <Text style={complaintBasketStyle.cardButton} >You have no complaints in the basket.</Text> 
                        <Button onPress={back} style={complaintBasketStyle.cardButton}>Back</Button>
                     </Card.Content>
                </Card>
                </ScrollView>
                
            </View>
        </SafeAreaView>
    )
}

export default ComplaintBasketScreen