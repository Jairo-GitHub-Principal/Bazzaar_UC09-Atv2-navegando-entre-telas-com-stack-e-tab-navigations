import * as React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Touchable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'



const visaimg = require('../../img/cartao/Visa.png')
const celoimg = require('../../img/cartao/Oelo.png')
const mastercardimg = require('../../img/cartao/mastercard.png')
const hipercardimg = require('../../img/cartao/Hipercard.png')
const hiperimg = require('../../img/cartao/Hiper.png')
const dinnersclubimg = require('../../img/cartao/DinersClub.png')
const americanexpreximg = require('../../img/cartao/americanExpress.png')
const boletoimg = require('../../img/cartao/boleto.png')


import HomeStackScreen from '../PaginaInicial/PaginaInicial';

// const que chama a função do pacote responsive screenn
const Cardwp = wp('50')
const cardhp = hp('25')
function Cartao( {navigation}) {
    return (
        <ScrollView>
            <View style={{ backgroundColor: 'black' }}>

                <Text style={{ color: 'white', margin: 10, fontSize: 15 }}>Click na imagem correspondente ao seu cartão,{'\n'} para cadastra-lo na nossa loja, e parcele suas compras, em até 10x sem juros</Text>

                <View >
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}

                        style={{ borderColor: 'orange', borderWidth: 2, margin: 10, padding: 10, alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: 'white' }}>Volte para pagina inicial</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center',backgroundColor:'black',borderColor:'white',borderWidth:1 }}>





                <View style={{ margin: 10, alignItems: 'center' }} >
                    <TouchableOpacity style={{ alignItems: 'center' }} >
                        <Text style={{color:'white'}}>Cartão Visa</Text>
                        <Image source={visaimg} style={{ width: Cardwp, height: cardhp }}></Image>
                    </TouchableOpacity>
                </View>


                <View style={{ margin: 10, alignItems: 'center' }}>
                    <TouchableOpacity style={{ alignItems: 'center' }} >
                        <Text style={{color:'white'}}>Cartão Master Card</Text>
                        <Image source={mastercardimg} style={{ width: Cardwp, height: cardhp }}></Image>
                    </TouchableOpacity>
                </View>


                <View style={{ margin: 10, alignItems: 'center' }}>
                    <TouchableOpacity style={{ alignItems: 'center' }} >
                        <Text style={{color:'white'}}>Cartão American Express</Text>
                        <Image source={americanexpreximg} style={{ width: Cardwp, height: cardhp }}></Image>
                    </TouchableOpacity>
                </View>


                <View style={{ margin: 10, alignItems: 'center' }}>
                    <TouchableOpacity style={{ alignItems: 'center' }} >
                        <Text style={{color:'white'}}>Cartão Dinners Club</Text>
                        <Image source={dinnersclubimg} style={{ width: Cardwp, height: cardhp }}></Image>
                    </TouchableOpacity>
                </View  >


                <View style={{ margin: 10, alignItems: 'center' }}>
                <Text style={{color:'white'}}>Cartão Celo</Text>
                    <TouchableOpacity style={{ alignItems: 'center',borderColor:'white',borderWidth:1 }} >
                       
                        <Image source={celoimg} style={{ width: Cardwp, height: cardhp }}></Image>
                    </TouchableOpacity>

                </View>


                <View style={{ margin: 10, alignItems: 'center' }}>
                    <TouchableOpacity style={{ alignItems: 'center' }} >
                        <Text style={{color:'white'}}>Cartão Hipercard</Text>
                        <Image source={hipercardimg} style={{ width: Cardwp, height: cardhp }}></Image>
                    </TouchableOpacity>
                </View>


                <View style={{ margin: 10, alignItems: 'center' }}>
                    <TouchableOpacity style={{ alignItems: 'center' }} >
                        <Text style={{color:'white'}}>Cartão Hiper</Text>
                        <Image source={hiperimg} style={{ width: Cardwp, height: cardhp }}></Image>
                    </TouchableOpacity>
                </View>


                <View style={{ margin: 10, alignItems: 'center' }}>
                    <Text style={{color:'white'}}>Boleto Bancario</Text>
                   
                    <Image source={boletoimg} style={{ width: Cardwp, height: cardhp }}></Image>

                </View>
                <View>
                <Text style={{fontSize:17, fontWeight:'500', margin:20}}>Pague avista no boleto e recebe até 15% de descontos</Text>
                </View>


            </View>
        </ScrollView>
    )
}

const Stack = createNativeStackNavigator();
function StackCartao() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="cartao" component={Cartao} options={{title:'Cartões ',headerStyle:{backgroundColor:'darkred'},headerTintColor:'orange'}} />
            <Stack.Screen name="Home" component={HomeStackScreen}/>
            
           
        </Stack.Navigator>
    )
}



export default StackCartao