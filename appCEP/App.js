import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, Pressable } from 'react-native';

import Axios from 'axios';

// import { Input } from 'react-native-elements';
import Padrao from './src/style/Padrao'

export default class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: '',
      item: [],
    }
  }

  buscarCep = () => {
    Axios.get(`https://viacep.com.br/ws/${this.state.cep}/json/`)
      .then(response => {
        this.setState({ item: response.data })
        console.log(response.data)
      })
      .catch(error => {
        return console.log(error);
      })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <Text style={styles.title}>CEP x Endereço</Text>
          <Text style={styles.line}>________________________________</Text>
          <TextInput
            placeholder=' Digite seu CEP' onChangeText={(cep) => this.setState({ cep })}
            onBlur={this.buscarCep}
            value={this.state.cep} id="cep" name="cep" 
            style={styles.cep}
            />

          <View style={styles.inputs}>
          
          <TextInput
              placeholder=' CEP' onChange={this.onChangeCep}
              
              value={this.state.item.cep} id="cep" name="cep" />
          </View>
          <View style={styles.inputs}>
          <TextInput
              placeholder=' Logradouro' onChange={this.onChangeLogradouro}
              
              value={this.state.item.logradouro} id="logradouro" name="logradouro" />
          </View>
          <View style={styles.inputs}>
          <TextInput
              placeholder=' Bairro' onChange={this.onChangeBairro}
              
              value={this.state.item.bairro} id="bairro" name="bairro" />
          </View>
                   
          <View style={styles.inputs}>
          <TextInput
              placeholder=' Localidade' onChange={this.onChangeLocalidade}
             
              value={this.state.item.localidade} id="localidade" name="localidade" />
          </View>
          
          <View style={styles.inputs}>
            <TextInput
              placeholder=' UF' onChange={this.onChangeUf}
              
              value={this.state.item.uf} id="uf" name="uf" />
          </View>
          
        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
    alignContent: 'center'
  },
  inputs: {
    marginTop: 10,
  },
  line: {
    fontWeight: "bold",
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    marginBottom: 20,
  },
  cep: {
    fontWeight: "bold",
    
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    marginBottom: 20,
    marginTop: 50
  }
})