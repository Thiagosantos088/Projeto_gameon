import React from "react";
import { Text, View, Image, TextInput, Pressable} from "react-native";


export default props => {
    return(
        <View style={{flex:1, backgroundColor: 'white'}}> 
            <Image style={{width:300, height: 200,marginLeft:40}}source={require('../../image/videogames2.png')} />
               <Text style={{textAlign: 'center'}}>Register</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 40}}>
               <Image source={require('../../image/gmail48.png')}/>
               <Image source={require('../../image/icons8-facebook-novo-48.png')} />
               <Image source={require('../../image/icons8-twitter-48.png')} />
            </View>
            <Text style={{textAlign: 'center'}}>Or register with email...</Text>
            <TextInput placeholder="Fist Name"/>
            <TextInput placeholder="Email ID"/>
            <TextInput placeholder="Passaword" secureTextEntry={true} />
            <TextInput placeholder="Confirm Passaword" secureTextEntry={true} />
            <TextInput placeholder="Dath of Birth"  />
            <Pressable style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}} onPress={() => props.navigation.navigate('Login')}>
              <Text style={{backgroundColor: '#D862BC', borderRadius: 7, width: 200,padding:13,color: 'white', textAlign: 'center'}}>Cadastrar</Text>
            </Pressable>

        </View>
    )
}
