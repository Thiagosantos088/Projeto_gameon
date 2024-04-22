import React from "react";
import { Pressable, Text, View, Image } from "react-native";
import Login from "./Login";



export default props => {
    return(
        <View style={{flex:1,justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            
            <Image style={{width:350, height: 300,marginBottom: 100}}source={require('../../image/videogames.png')} />
            <Pressable  onPress={() => props.navigation.navigate('Login')}>
              <Text style={{backgroundColor: '#D862BC', borderRadius: 7, width: 200,padding:13,color: 'white'}}>Let's Begin</Text>
            </Pressable>
        </View>
    )
}