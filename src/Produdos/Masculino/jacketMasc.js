import * as React from 'react';



import {View,Text,TouchableOpacity,ScrollView,ImageBackground} from 'react-native'

import containers from "../../estilos/estilo";



const jaquetaSarja = require('../../img/modaMasculina/jaquetaSarja.jpg');

const relogio = require('../img/modaMasculina/Relogio.jpg');




 function JaquetMascS(){
    
        return(
            <ScrollView>
                 <View style={containers.containerSecundarios}>
                <TouchableOpacity  >
                    <ImageBackground source={jaquetaSarja} style={{ width: '100%', height: 320 }}>
                        <View style={{ marginTop: '10%' }}>
                        <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'900',color:'black'}}>Jaqueta de sarja:</Text>
                            <Text style={{marginRight:10, textAlign:'right',alignItems:'center',fontSize:20, fontWeight:'900',color:'black'}}>Tamanhos P M G</Text>
                        </View>
                    </ImageBackground>
                    <View>
                    <Text  style={{marginRight:10, textAlign:'center',fontSize:17, fontWeight:'900',color:'white'}}> descrição: </Text>
                    <Text style={{margin:10, textAlign:'left',alignItems:'center',fontSize:12, fontWeight:'900',color:'white'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </View>
                </TouchableOpacity>
            </View>

            
            </ScrollView>
        )
    
}

  





export default JaquetMascS