import * as React from 'react';
import { ScrollView, View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeStackScreen from './PaginaInicial';


const imgSobre = require('../../img/sobre/ondeEstamos.png')
// quebrar linha em um texto {'\n'}
function Sobre({navigation}) {

   
    
    return (
        <ScrollView >

            <View  style={{flexDirection:'column',alignItems:'center',margin:10}}>
                <Text  style={{color:'black',fontSize:20,fontWeight:'700'}}>SOBRE BAZZAAR</Text>
                <View>
                    <Text style={{color:'black',fontSize:15,fontWeight:'500'}}>      Bazzaar é uma empresa que atua no seguimento de vestuarios e acessorios, em geral.{'\n'}
                        Atuando no mercado da moda, ha  20 anos, com cede em São Paulo, Centro, e diversas filiais por todo o brasil.{'\n'} {'\n'}

                        {'\n            '}O nosso objetivo é fazer você se sentir melhor consigo mesmo, disponibilizando nossos produtos, para servir você em  quanquer situação do dia a dia, trabalho e lazer.{'\n'}
                        {'\n            '}

                        Iniciamos nossa trajetoria em 2002, em São Paulo SP, no Centro da cidade, onde temos nossa loja principal (Sede)  até os dias de hoje.{'\n'}{'\n            '}
                        Também temos mais de 30 filiais espalhadas por varios estados do Brasil, com mais lojas fisicas concentrada em São Paulo SP, tambem atendemos todo o brasil por meio de nossa loja online
                        {'\n'}
                        {'\n'}

                    </Text>

                </View>

                < View style={{width:'100%'}}>
                    <Text style={{color:'black',fontSize:20,fontWeight:'500',width:'100%',textAlign:'center'}}>Onde estamos:</Text>

                    <Text style={{color:'black',fontSize:15,fontWeight:'500'}}>
                        Temos varias lojas fisicas espalhadas pelo brasil, com o maior numero de lojas concentrada em São Paulo SP, nossa Sede, esta localizada  na Rua dos Monts, 450 Sp Centro{'\n'}
                    </Text>

                    <View style={{margin:10}}>
                        <ImageBackground source={imgSobre} style={{height:300,width:'100%'}}></ImageBackground>
                    </View>
                </View>


            </View>

            <View style={{width:'100%', alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.navigate("Home")}
                                  style={{backgroundColor:'orange',padding:10,borderRadius:30,borderWidth:1,borderColor:'red',margin:20}}
                >
                    <Text style={{fontSize:17,fontWeight:'800',color:'white'}}>Voltar para pagina inicial</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>


    )
}


const Stack = createNativeStackNavigator();
function StackSobre() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SobreBazzaar" component={Sobre} options={{title:'Sobre Nós',headerStyle:{backgroundColor:'darkred'},headerTintColor:'orange'}} />
            <Stack.Screen name="Home" component={HomeStackScreen}/>
        </Stack.Navigator>
    )
}



export default StackSobre