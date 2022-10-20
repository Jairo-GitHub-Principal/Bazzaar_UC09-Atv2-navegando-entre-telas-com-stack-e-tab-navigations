import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icones from 'react-native-vector-icons/Ionicons';
import  Mi from 'react-native-vector-icons/MaterialIcons';


// pagina  inicial

import HomeStackScreen from './src/Paginas/PaginaInicial/PaginaInicial';

// Aba tab de categorias
import CategoriaStack from './src/Paginas/categorias/Categoria';

// Aba pagina Sobre

import StackSobre from './src/Paginas/PaginaInicial/SobreBazzaar';

// Aba pagina cartao

import StackCartao from './src/Paginas/cartoes/cartao';


const iconHome = <Icones name="home-outline" size={30} color="black"/>
const iconCategoria = <Mi name="category" size={30} color="black"/>
const iconSobre = <Icones name="information-circle" size={30} color="black"/>
const iconCard = <Icones name="card" size={30} color="black"/>

function Cartoes(){
  

}



const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} options={{tabBarIcon: ({color,size}) => (iconHome),tabBarActiveTintColor: 'red',tabBarInactiveTintColor: 'black'}} />
        <Tab.Screen  name="categoria" component={CategoriaStack} options={{tabBarIcon: ({color,size}) => (iconCategoria),tabBarActiveTintColor: 'red',tabBarInactiveTintColor: 'black'}}/>
         <Tab.Screen name="Sobre" iconSobre component={StackSobre} options={{tabBarIcon: ({color,size}) => (iconSobre),tabBarActiveTintColor: 'red',tabBarInactiveTintColor: 'black'}}/> 
        <Tab.Screen name="Cartões" component={StackCartao} options={ {tabBarIcon: ({color,size}) => (iconCard),tabBarActiveTintColor: 'red',tabBarInactiveTintColor: 'black'}}  />

      </Tab.Navigator>
    </NavigationContainer>
  );
}







export default App