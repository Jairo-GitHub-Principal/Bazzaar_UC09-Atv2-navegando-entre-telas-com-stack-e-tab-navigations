import * as React from 'react';
import { Button, View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import containers from '../../estilos/estilo';


/** Conteudo que sera chamado ao clicar em moda masculina */

const blusaMalha = require('../../img/modaMasculina/blusaMalha.jpg');
const jaquetaSarja = require('../../img/modaMasculina/jaquetaSarja.jpg');

const relogio = require('../../img/modaMasculina/Relogio.jpg');


// importando os produtos/modamasculina

import BlusDMalhaMasc from '../../Produdos/Masculino/blusaMalhMasc';
import JaquetMascS from'../../Produdos/Masculino/jacketMasc';
import RelogioMasc from '../../Produdos/Masculino/relogioMasc';



function ModaMasculina({navigation}){
    
        return(
            <ScrollView >
                
                
                 <View style={containers.containerSecundarios}>
                     
                <TouchableOpacity onPress={() => navigation.navigate('blusaDeMalhaM')}>
                    <ImageBackground source={blusaMalha} style={{ width: '100%', height: 165 }}>
                        <View style={{ marginTop: '20%' }}>
                        <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'700',color:'white'}}>Blusa de Malha:</Text>
                            <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'700',color:'white'}}>R$ 250,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={containers.containerSecundarios}>
                <TouchableOpacity style={{backgroundColor:'white'}} onPress = {()=>navigation.navigate('jaquetaSarjaM')}>
                    <ImageBackground source={jaquetaSarja} style={{ width: '90%', height: 165 }}>
                        <View style={{ marginTop: '20%' }}>
                        <Text style={{marginRight:0, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>Jaqueta de sarja:</Text>
                            <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>R$ 300,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={containers.containerSecundarios}>
                <TouchableOpacity onPress={()=>navigation.navigate('relogioMasc')}>
                    <ImageBackground source={relogio} style={{ width: '100%', height: 165 }}>
                        <View style={{ marginTop: '20%' }}>
                        <Text style={{marginRight:0, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>Relogion MixR:</Text>
                            <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>R$ 900,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            </ScrollView>
        )
    }



    const Stack = createNativeStackNavigator();

function NavegaProdModMasculina(){
  return(

    <Stack.Navigator initialRouteName="modaM">
    <Stack.Screen name="modaM" component={ModaMasculina}  options={{title:'Moda Masculina',headerStyle:{backgroundColor:'black'},headerTintColor:'white'}}  /> 
    <Stack.Screen name="blusaDeMalhaM" component={BlusDMalhaMasc} /> 
    <Stack.Screen name="jaquetaSarjaM" component={JaquetMascS} /> 
    <Stack.Screen name="relogioMasc" component={RelogioMasc} /> 
      
    </Stack.Navigator>

  )
}


export default NavegaProdModMasculina
    