import * as React from 'react';
import { Button, View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import containers from '../../estilos/estilo';


// importando os  produtos para categoria/ofertas

import BlazerMasc from '../../Produdos/ofertas/blazerM';
import ConjuntoFem from '../../Produdos/ofertas/conjuntoF';
import VestidoFem from '../../Produdos/ofertas/vestidoF';

const blaze = require('../../img/imgProdDestaques/blaze.jpg')
const shortBlusa = require('../../img/imgProdDestaques/shortBlusa.jpg')
const vestido = require('../../img/imgProdDestaques/vestido.jpg')



function Ofertas({navigation}) {
    return (
        <ScrollView>
            <View style={containers.containerSecundarios}>
                <TouchableOpacity onPress={()=> navigation.navigate('vestidoFOferta')}>
                    <ImageBackground source={vestido} style={{ width: '100%', height: 165 }}>
                        <View style={{ marginTop: '20%' }}>
                        <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>Vestido:</Text>
                            <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>R$ 200,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={[containers.containerSecundarios]}>
                <TouchableOpacity  onPress={()=> navigation.navigate('conjuntoFOferta')}>
                    <ImageBackground source={shortBlusa} style={{ width: '100%', height: 165, }}>
                        <View style={{ marginTop: '20%' }}>
                           
                            <Text style={{marginLeft:10, textAlign:'left',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>Conjunto:</Text>
                            <Text style={{marginLeft:10, textAlign:'left',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>R$ 200,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={[containers.containerSecundarios]}>
                <TouchableOpacity  onPress={()=> navigation.navigate('blazerMasculino')}>
                    <ImageBackground source={blaze} style={{ width: '100%', height: 165, }}>
                        <View style={{ marginTop: '20%' }}>
                        <Text style={{marginLeft:10, textAlign:'left',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>Blazer:</Text>
                            <Text style={{marginLeft:10, textAlign:'left',alignItems:'center',fontSize:20, fontWeight:'700',color:'black'}}>R$ 200,00</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}





const Stack = createNativeStackNavigator();

function NavegaProdOferta(){
  return(

    <Stack.Navigator initialRouteName="ofertas">
    <Stack.Screen name="ofertas" component={Ofertas} options={{title:'Pagina de ofertas',headerStyle:{backgroundColor:'black'},headerTintColor:'white'}} /> 
    <Stack.Screen name="vestidoFOferta" component={VestidoFem} options={{title:'Vestido em oferta',headerStyle:{backgroundColor:'pink'},headerTintColor:'red'}}/> 
    <Stack.Screen name="conjuntoFOferta" component={ConjuntoFem}  options={{title:'Conjunto Camisa e short',headerStyle:{backgroundColor:'blue'},headerTintColor:'white'}}/> 
    <Stack.Screen name="blazerMasculino" component={BlazerMasc}  options={{title:'Blazer '}}/> 
      
    </Stack.Navigator>

  )
}

export default NavegaProdOferta