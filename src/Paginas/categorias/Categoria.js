import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View,Text,ScrollView,TouchableOpacity,ImageBackground } from 'react-native';

import containers from '../../estilos/estilo';



const imageLinkModaFeminina = require('../../img/modaFemininaR.jpg')
const imageLinkRedeSociais = require('../../img/redes.png')
const imageLinkCartoes = require('../../img/bandeirasCartoest_1.png')
const imageLinkModaMasculina = require('../../img/masculinaR.jpg')
const imageLinkDestaque = require('../../img/destaqueR.jpg')
const imageMenuPrincipal = require('../../img/Menu.png')
const imagePesquisa = require('../../img/pesquisa.png')
const login = require('../../img/Login.png')


function Categoria({navigation}){
    return(
        <ScrollView>
    
        <View style={containers.containerSecundarios}>
          <TouchableOpacity onPress={() => navigation.navigate('modaM')}
          >
            <ImageBackground source={imageLinkModaMasculina} style={{ width: '100%', height: 150 }}>
              <View style={{ marginTop: '30%' }}>
                <Text style={[containers.testoTituloLinkProdutos, containers.textosCentralizados]}>moda masculina</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
  


          
        <View style={[containers.containerSecundarios]}>
          <TouchableOpacity onPress={() => navigation.navigate('modaF')}
          >
            <ImageBackground source={imageLinkModaFeminina} style={{ width: '100%', height: 150, }}>
              <View style={{ marginTop: '28%' }}>
                <Text style={{ fontSize: 30, fontWeight: '700', textAlign: 'center', color: '#1e90ff', textShadow: 1, textShadowColor: 'black' }}>moda feminina</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
  
        <View style={containers.containerSecundarios} >
          <TouchableOpacity onPress={() => navigation.navigate('ofertas')}
          >
  
            <ImageBackground source={imageLinkDestaque} style={{ width: '100%', height: 150, flexDirection: 'row', justifyContent: 'space-between' }}>
  
  
              <View  >
                <Text style={containers.testoTituloLinkProdutos}>Principais </Text>
                <Text style={containers.testoTituloLinkProdutos}>     Ofertas</Text>
              </View>
  
  
              <View style={{ marginTop: '30%' }} >
                <Text style={containers.testoTituloLinkProdutos}>50% OFF </Text>
  
              </View>
  
            </ImageBackground>
          </TouchableOpacity>
        </View>
  
  
      </ScrollView>
    )
}





const CategoStack = createNativeStackNavigator();

function CategoriaStack(){
    return(
        <CategoStack.Navigator>
            <CategoStack.Screen name = "categoria" component={Categoria} options={{title:'Categorias',headerStyle:{backgroundColor:'darkred'},headerTintColor:'orange'}}/>
        </CategoStack.Navigator>
       
    )
}

export default CategoriaStack