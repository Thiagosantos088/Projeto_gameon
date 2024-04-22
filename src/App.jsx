import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Login from "./components/Login";
import Teladeregistro from "./components/Teladeregistro";



const Stack = createNativeStackNavigator();

export default props =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="GAMEON" component={Home}></Stack.Screen>
                    <Stack.Screen name="Login" component={Login}></Stack.Screen>
                    <Stack.Screen name="Registro" component={Teladeregistro}></Stack.Screen>                    
                    
                    
                </Stack.Navigator>
                
            </NavigationContainer>
        </SafeAreaView>
        
    )
}