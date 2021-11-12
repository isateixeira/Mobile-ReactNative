import React, { Component } from 'react';
import { View, StyleSheet, Text, Switch, TextInput, ScrollView } from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
 
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: 0,
      sexo: "",
      escolaridade: '',
      valor: 0,
      status: false
    };
  };
 
 render(){
 
  return (
    <View style={styles.container}>
    <ScrollView>
     <Text style={styles.header}>Abertura de Conta</Text>
      
     <TextInput
      style={styles.input}
      onChangeText={ (texto) => this.setState({nome: texto})}
      >Nome: </TextInput>
      <TextInput
      style={styles.input}
      onChangeText={ (useridade) => this.setState({idade: useridade})}
      >Idade: </TextInput>

      <Text style={styles.input} >Sexo: </Text>
      <Picker
        selectedValue={this.state.sexo}
        onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemValue}) }
      >
        <Picker.Item key={0} value={''} label="" />
        <Picker.Item key={1} value={'Masculino'} label="Masculino" />
        <Picker.Item key={2} value={"Feminino"} label="Feminino" />
        <Picker.Item key={3} value={"Outros"} label="Outros" />
      </Picker>

      
      <Text style={styles.input} >Escolaridade: </Text>
      <Picker
        selectedValue={this.state.escolaridade}
        onValueChange={ (itemValue, itemIndex) => this.setState({escolaridade: itemValue}) }
      >
        <Picker.Item key={0} value={''} label="" />
        <Picker.Item key={1} value={"Ensino medio Completo"} label="Ensino medio Completo" />
        <Picker.Item key={2} value={"Ensino Superior Completo"} label="Ensino Superior Completo" />
        <Picker.Item key={3} value={"Pos Graduado"} label="Pos Graduado" />
      </Picker>

      
      <Text style={styles.input} >Limite: </Text>
      <Slider
      minimumValue={0}
      maximumValue={5000}
      onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado})}
      value={this.state.valor}
      />

      <Text style={styles.input} >Brasileiro: </Text>
      <Switch 
      value={this.state.status}
      onValueChange={ (valorSwitch) => this.setState({status: valorSwitch})}
      thumbColor='orange'
      />

 
      
      <Text style={styles.texto}><Text style={styles.texto}> Nome:  </Text> {this.state.nome} </Text>
      <Text style={styles.texto}><Text style={styles.texto}> Idade:  </Text> {this.state.idade} </Text>
      <Text style={styles.texto}><Text style={styles.texto}> Sexo:  </Text>
      {this.state.sexo}</Text>
      
      <Text style={styles.texto}><Text style={styles.texto}> Escolaridade:  </Text>
      {this.state.escolaridade}</Text>
      
      <Text style={styles.texto}>
      <Text style={styles.texto}> Limite:  </Text>
      {this.state.valor.toFixed(0)}
       </Text>
       <Text style={styles.texto}>
       <Text style={styles.texto}> Nacionalidade:  </Text>
        {(this.state.status) ? "Brasileiro" : ""}
      </Text>
       </ScrollView>
    </View>
   );
 }
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 100,
   
  },
  header:{
    marginTop: 30,
    fontSize: 30,
    marginBottom: 30,
    textAlign: 'center'
  },
  input:{
    fontSize: 30,
    marginTop: 30,
    color: 'black'
  },
  texto:{
    fontSize: 18,
    marginTop: 5,
    color: 'black'
  }
});
