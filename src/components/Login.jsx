import React from "react";
import { Text, TextInput, View, Pressable, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';




export default props => {
    return(
        <View style={{flex:1, backgroundColor: 'white'}}>
            <Image style={{width:300, height: 200,marginLeft:40}}source={require('../../image/videogames2.png')} />
            <Text style={{fontSize: 25, color: 'black'}}>Login</Text>
            <TextInput placeholder="Email ID"/>
            <TextInput placeholder="Senha"  />
            <Pressable  onPress={() => props.navigation.navigate('Login')}>
              <Text style={{backgroundColor: '#D862BC', borderRadius: 7, width: 200,padding:13,color: 'white', marginLeft: 100, marginTop: 25}}>Entrar</Text>
            </Pressable>
            <Text style={{textAlign:'center', marginTop: 20}}>Or login with...</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 40}}>
            <Image source={require('../../image/gmail48.png')}/>
            <Image source={require('../../image/icons8-facebook-novo-48.png')} />
            <Image source={require('../../image/icons8-twitter-48.png')} />
            </View>
            <Text style={{textAlign: 'center', marginTop: 20}} onPress={() => props.navigation.navigate('Registro')}>New to the app? Register</Text>
           
            

            
        </View>
    )
}
