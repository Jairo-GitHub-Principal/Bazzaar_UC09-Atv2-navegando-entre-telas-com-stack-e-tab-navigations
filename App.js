import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// pagina  inicial

import HomeStackScreen from './src/Paginas/PaginaInicial/PaginaInicial';

// Aba tab de categorias
import CategoriaStack from './src/Paginas/categorias/Categoria';

// Aba pagina Sobre

import StackSobre from './src/Paginas/PaginaInicial/SobreBazzaar';

// Aba pagina cartao

import StackCartao from './src/Paginas/cartoes/cartao';




function Cartoes(){

}



const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="categoria" component={CategoriaStack} />
         <Tab.Screen name="Sobre" component={StackSobre} />
        <Tab.Screen name="Cartões" component={StackCartao} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}







export default App