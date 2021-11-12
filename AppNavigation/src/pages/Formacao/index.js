import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
export default function Formacao({ route }) {
 const navigation = useNavigation();
 
 navigation.setOptions({
   title: `Formação`
 })
 
 return (
   <View>
     <Image
          source={{ uri: 'https://www.oabsv.org.br/wp-content/uploads/2020/03/logo-UNIP-1024x683.png'}}
          style={{ width: 400, height: 300, marginTop: 70}}
        />  
        <Text style={{fontSize: 20}}>
          Formação:
        </Text>
        <Text>
          Analise e Desenvolvimento de Sistemas
        </Text>
        <Text>
          Ano: 2021
        </Text>
        <Text>
          Universidade: UNIP
        </Text>
     <Button
     title="Voltar para tela Pessoal"
     onPress={ () => navigation.goBack() }
     />
 
     <Button
     title="Ir para tela Experiencia"
     onPress={ () => navigation.navigate('Experiencia') }
     />
   </View>
  );
}
