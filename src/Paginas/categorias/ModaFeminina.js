import * as React from 'react';
import { Button, View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import containers from '../../estilos/estilo';


// importando os produtos para categoria/modafeminina

import MoletonFem from '../../Produdos/Feminino/moletonF';
import CamizaoFem from '../../Produdos/Feminino/camizaoF';
import BolsaFem from '../../Produdos/Feminino/bolsaF';

/** Conteudo que sera chamado ao clicar em moda feminina */


const moleton = require('../../img/modaFeminina/moleton.jpg');
const camisao = require('../../img/modaFeminina/camizao.jpg');

const bolsaCouro = require('../../img/modaFeminina/bolsaCouto.jpg');





function ModaFeminina({navigation}){
    
        return(
            <ScrollView>
                 <View style={containers.containerSecundarios}>
                <TouchableOpacity  onPress ={()=>navigation.navigate('moletomFeminino')} >
                    <ImageBackground source={moleton} style={{ width: '100%', height: 165 }}>
                        <View style={{ marginTop: '20%' }}>
                        <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'900',color:'white'}}>Moleton:</Text>
                            <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'900',color:'white'}}>R$ 250,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={containers.containerSecundarios}>
                <TouchableOpacity style={{backgroundColor:'white'}}  onPress ={()=>navigation.navigate('camisaoFeminino')} >
                    <ImageBackground source={camisao} style={{ width: '100%', height: 165 }}>
                        <View style={{ marginTop: '12%' }}>
                        <Text style={{marginRight:10, textAlign:'center',alignItems:'center',fontSize:20, fontWeight:'900',color:'black'}}>Camisão:</Text>
                            <Text style={{marginRight:10, textAlign:'center',alignItems:'center',fontSize:20, fontWeight:'900',color:'black'}}>R$ 300,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={containers.containerSecundarios}>
                <TouchableOpacity  onPress ={()=>navigation.navigate('bolsaFeminina')} >
                    <ImageBackground source={bolsaCouro} style={{ width: '100%', height: 165 }} >
                        <View style={{ marginTop: '20%' }}>
                        <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'900',color:'white'}}>Bolsa F:</Text>
                            <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'900',color:'white'}}>R$ 900,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            </ScrollView>
        )
    
}






const Stack = createNativeStackNavigator();

function NavegaProdModFeminina(){
  return(

    <Stack.Navigator initialRouteName="modaF">
    <Stack.Screen name="modaF" component={ModaFeminina} options={{title:'Moda feminina',headerStyle:{backgroundColor:'black'},headerTintColor:'white'}} /> 
    <Stack.Screen name="moletomFeminino" component={MoletonFem} /> 
    <Stack.Screen name="camisaoFeminino" component={CamizaoFem} /> 
    <Stack.Screen name="bolsaFeminina" component={BolsaFem} /> 
      
    </Stack.Navigator>

  )
}


export default NavegaProdModFeminina