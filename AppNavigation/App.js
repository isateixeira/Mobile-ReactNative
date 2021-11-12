import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';
 
const Stack = createStackNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen
        name="Pessoal"
        component={Pessoal}
        options={{
          title:'Início',
          headerStyle:{
            backgroundColor: 'orange'
          },
          headerTintColor: '#FFF',
          //headerShown: false,
        }}
        />
        
        <Stack.Screen
        name="Formacao"
        component={Formacao}
        />
 
        <Stack.Screen
        name="Experiencia"
        component={Experiencia}
        />
 
      </Stack.Navigator>
    </NavigationContainer>
  )
}
