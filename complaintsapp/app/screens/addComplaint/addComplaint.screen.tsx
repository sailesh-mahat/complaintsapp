import React from 'react';
import { Alert, SafeAreaView, View, ScrollView } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { addComplaintStyle } from './addComplaint.style';
import DropdownComponent2 from '../../components/dropdown/dropdown2.component';


interface AddComplaintScreenProps {
    navigation: any;
}

    const AddComplaintScreen = (props: AddComplaintScreenProps) => {

   

    const back = () => props.navigation.navigate("Home")


    return (
        <SafeAreaView style={addComplaintStyle.content}>
            <View style={addComplaintStyle.view}>
                <ScrollView>
                <Card>
                    <Card.Title title="Add a complaint" titleStyle={addComplaintStyle.cardTitle}></Card.Title>
                    <Card.Content>
                        <TextInput label="Topic"></TextInput>
                        <DropdownComponent2  />
                        <TextInput label="Description" maxLength={200}></TextInput>
                        <Button mode="contained" style={addComplaintStyle.cardButton}>Add to basket</Button>
                        <Button onPress={back} style={addComplaintStyle.cardButton}>Back</Button>
                     </Card.Content>
                </Card>
                </ScrollView>
                
            </View>
        </SafeAreaView>
    )
}

export default AddComplaintScreen