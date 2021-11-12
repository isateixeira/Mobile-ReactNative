import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
 
export default function Experiencia() {
 const navigation = useNavigation();
 
 return (
   <View>
      <Image
          source={{ uri: 'https://steelcase-res.cloudinary.com/image/upload/v1594808802/www.steelcase.com/eu-en/2020/07/15/Accenture-Logo.png'}}
          style={{ width: 400, height: 300, marginTop: 70}}
        />  
        <Text style={{fontSize: 20}}>
          Experiencia:
        </Text>
        <Text>
          Analista Service Now
        </Text>
        <Text>
          Anos de experiencia: 1
        </Text>
        <Text>
          Empresa: Accenture
        </Text>

     <Button
     title="Voltar tela Formação"
     onPress={ () => navigation.goBack() }
     />
     <Button
     title="Voltar para tela Pessoal"
     onPress={ () => navigation.dispatch(StackActions.popToTop())  }  
     />
   </View>
  );
}
