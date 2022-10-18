
import * as React from 'react';
import { Button, View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import containers from '../../estilos/estilo';



const imageLinkModaFeminina = require('../../img/modaFemininaR.jpg')
const imageLinkRedeSociais = require('../../img/redes.png')
const imageLinkCartoes = require('../../img/bandeirasCartoest_1.png')
const imageLinkModaMasculina = require('../../img/masculinaR.jpg')
const imageLinkDestaque = require('../../img/destaqueR.jpg')
const imageMenuPrincipal = require('../../img/Menu.png')
const imagePesquisa = require('../../img/pesquisa.png')
const login = require('../../img/Login.png')


// importar a pagina cartao
import StackCartao from '../cartoes/cartao';

// paginas das categorias 


import NavegaProdModFeminina from '../categorias/ModaFeminina';
import NavegaProdModMasculina from '../categorias/ModaMasculina';
import NavegaProdOferta from '../categorias/Ofertas';


// produtos moda feminina




function HomeScreen({ navigation }) {
    return (
  
      <ScrollView>
  
  
        <View style={[containers.alinhamentoVertical, containers.containerSecundarios, containers.estiloLogin]}>
  
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <Text style={[containers.coresTextoTitulos, containers.estiloLogoMarca]}>BAZZAAR</Text>
            </TouchableOpacity>
          </View>
  
  
          <View >
          <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Details')}>
              <ImageBackground source={imagePesquisa} style={{ width: 40, height: 40, marginLeft: 10 }}>
  
              </ImageBackground>
          </TouchableOpacity>
           
          </View>
  
         
         
         
          <View >
          <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Details')}>
              <ImageBackground source={imageMenuPrincipal} style={{ width: 65, height: 40, marginLeft: 10 }}>
  
              </ImageBackground>
          </TouchableOpacity>
           
          </View>
  
  
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
  
        <View style={containers.containerDaRedeECartoes}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 14, color: 'white', marginLeft: 10 }}>Siga nos</Text>
            </View>
  
            <View>
              <Text style={{ fontSize: 14, color: 'white', textAlign: 'right',marginRight:10 }}>Aceitamos todos cartões</Text>
            </View>
          </View>
  
          <View style={containers.alinhamentoVertical}>
  
  
            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('Details')}
            >
              <ImageBackground source={imageLinkRedeSociais} style={{ height: 50, margin: 5 }}>
  
              </ImageBackground>
            </TouchableOpacity>
  
            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('cartao')}
            >
              <ImageBackground source={imageLinkCartoes} style={{ height: 50, margin: 5 }}>
  
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
  
      </ScrollView>
    );
  }
  
  

 

  

  const HomeStack = createNativeStackNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        
        <HomeStack.Screen name="ofertas" component={NavegaProdOferta} />
        
        <HomeStack.Screen name="modaM" component={NavegaProdModMasculina}/>

        <HomeStack.Screen name="modaF" component={NavegaProdModFeminina}/>
        <HomeStack.Screen name="cartao" component={StackCartao}/>
      

      </HomeStack.Navigator>
    );
  }
  export default HomeStackScreen