import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen  from "./screens/login/login.screen";
import RegisterScreen  from "./screens/register/register.screen";
import HomeScreen from "./screens/Home/home.screen";
import AddComplaintScreen from "./screens/addComplaint/addComplaint.screen";
import ComplaintBasketScreen from "./screens/complaintBasket/complaintBasket.screen";
import EditProfileScreen from "./screens/editProfile/editProfile.screen";

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName="Login">
            <Screen name="Login" component={LoginScreen} options={{ headerShown: false}}></Screen>
            <Screen name="Register" component={RegisterScreen} options= {{ headerTintColor: 'white', headerStyle: { backgroundColor: "rgb(0, 92, 179)" }}}></Screen>
            <Screen name="Home" component={HomeScreen} options={{ headerShown: false}}></Screen>
            <Screen name="addComplaint" component={AddComplaintScreen} options={{ headerShown: false}}></Screen>
            <Screen name="complaintBasket" component={ComplaintBasketScreen} options={{ headerShown: false}}></Screen>
            <Screen name="Edit Profile" component={EditProfileScreen} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: "rgb(0, 92, 179)" }}}></Screen>

        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;