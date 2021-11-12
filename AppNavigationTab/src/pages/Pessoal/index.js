import React from 'react';
import { View, Text, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
 
export default function Pessoal() {
  const navigation = useNavigation();
 return (
   <View>
     <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/66499233?v=4'}}
          style={{ width: 300, height: 300, margin: 50, marginTop: 40}}
        />
        <Text style={{fontSize: 20}}>
          Dados Pessoais:
        </Text>
        <Text>
          Nome: Vinicius Galvao de Franca
        </Text>
        <Text>
          Idade: 23
        </Text>
        <Text>
          Cidade: São Vicente
        </Text>
     
   </View>
  );
}
