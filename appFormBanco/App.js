import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, Switch, Pressable } from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { styles } from './styles';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      exibirNome: '',
      idade: '',
      exibirIdade: '',
      genero: 0,
      generos: [
        {nome: '-- Selecione seu Gênero --'},
        {nome: 'Feminino'},
        {nome: 'Masculino'},
        {nome: 'Outros'},
      ],
      exibirGenero: '',
      escolaridade: 0,
      tpEscolaridade: [
        {nome: '-- Selecione sua Escolaridade --'},
        {nome: 'Fundamental'},
        {nome: 'Médio'},
        {nome: 'Graduação'},
        {nome: 'Pós-Graduação'},
        {nome: 'Doutorado/Mestrado'},
      ],
      exibirEscolaridade: '',
      nivelEscolaridade: 0,
      niveisEscolaridade:[
        {nome: '-- Selecione o Status da Escolaridade --'},
        {nome:'Incompleto'},
        {nome:'Cursando'},
        {nome:'Completo'}
      ],
      exibirNvlEscolaridade: '',
      valor: 0,
      exibirValor: '',
      status: false,
      exibirStatus: '',
    }

    this.conferir = this.conferir.bind(this);

  }
  
  conferir = () => {
    if ((this.state.nome === '') || (this.state.idade === '')) {
      alert('Preencha os campos')
    } else if ((this.state.genero === 0) || (this.state.escolaridade === 0) || (this.state.nivelEscolaridade === 0)) {
      
      alert('Selecione uma Opção')
      
    } else if (this.state.valor === 0) {

      alert('Informe um valor para sua conta')

    } else {
    this.setState({
      exibirNome: 'Nome: ' + this.state.nome
    })
    this.setState({
      exibirIdade: 'Idade: ' + this.state.idade + ' anos'
    })
    this.setState({
      exibirGenero:'Genero: ' + this.state.generos[this.state.genero].nome     
    })
    this.setState({
      exibirEscolaridade:'Escolaridade: ' + this.state.tpEscolaridade[this.state.escolaridade].nome
    })
    this.setState({
      exibirNvlEscolaridade:'Status: ' + this.state.niveisEscolaridade[this.state.nivelEscolaridade].nome
    })
    this.setState({
      exibirValor: 'Limite da conta: R$ ' + this.state.valor.toFixed(2)
    })
    this.setState({ 
      exibirStatus: 'Nacionalidade: ' + ((this.state.status) ? "Brasileiro" : "Estrangeiro")
    })
  }
  }

  render() {

    let generosItem = this.state.generos.map( (valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />
    })

    let tpEscolaridadeItem = this.state.tpEscolaridade.map( (valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />
    })

    let niveisEscolaridadeItens = this.state.niveisEscolaridade.map( (valor,chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />
    })

    return(

      // VIEW GERAL
      
      <View style={styles.container}>

         {/* VIEW HEADER */}


        <View style={styles.headerArea}>
          <StatusBar style="auto" />
          <Text style={styles.textHeader}>Formulário Bancario</Text>
        </View>
        <ScrollView>
          
          {/* VIEW INPUT NOME */}

          <View style={styles.form}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
            autoCapitalize='words'
            style={styles.input}
            placeholderTextColor={'#999'} 
            placeholder={'Digite seu nome...'}
            onChangeText = {(texto) => this.setState({nome: texto})}/>
          </View>

           {/* VIEW INPUT IDADE */}

          <View style={styles.form}>
            <Text style={styles.label}>Idade:</Text>
            <TextInput
            keyboardType='numeric'
            style={styles.input}
            placeholderTextColor={'#999'} 
            placeholder={'Digite sua idade...'}
            onChangeText = {(texto) => this.setState({idade: texto})}/>
          </View>

          {/* VIEW PICKER */}

          <View style={styles.pickerArea}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.genero}
              onValueChange={ (itemValue, itemIndex) => this.setState({genero: itemValue}) }
              >
              {generosItem}
            </Picker>

                      <Picker
              style={styles.picker}
              selectedValue={this.state.escolaridade}
              onValueChange={ (itemValue, itemIndex) => this.setState({escolaridade: itemValue}) }
              >
              {tpEscolaridadeItem}
            </Picker>

            <Picker
              style={styles.picker}
              selectedValue={this.state.niveisEscolaridade}
              onValueChange={ (itemValue,itemIndex) => this.setState({nivelEscolaridade: itemValue}) }
            >
              { niveisEscolaridadeItens}
            </Picker>
            
          </View>

          {/* VIEW SLIDER */}

          <View style={styles.slider}>
            <Text style={styles.sliderLabel}>Limite da Conta</Text>
            <Slider
            style={styles.sliderSpace}
            minimumValue={0}
            maximumValue={1000}
            minimumTrackTintColor='#0af'
            maximumTrackTintColor='#9af'
            thumbTintColor='#00f'
            step={10}
            onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado})}
            value={this.state.valor}
            />

            <Text style={styles.sliderText}>R$ {this.state.valor.toFixed(2)}</Text>
          </View>

          {/* VIEW SWITCH */}

          <View style={styles.switchArea}>
            <Switch
            trackColor={{ false: "#767577", true: "#0f0" }}
            thumbColor={(this.state.status)? "#f5dd4b" : "#999"}
            value={this.state.status}
            onValueChange={ (valorSwitch) => this.setState({ status: valorSwitch})}
            />

            <Text style={{textAlign: 'center', fontSize:25}}>
              {(this.state.status) ? "Brasileiro" : "Estrangeiro"}
            </Text>
          </View>

          {/* VIEW BOTÂO */}

          <View style={styles.areaBotao}>
            <Pressable onPress={this.conferir} style={styles.botao}>
              <Text style={styles.textBotao}>Confirmar</Text>
            </Pressable>
          </View>

          <View style={styles.areaResultado}>
            <Text style={styles.headerResultado}>Dados Informados</Text>
            <Text style={styles.textResultado}>{this.state.exibirNome}</Text>
            <Text style={styles.textResultado}>{this.state.exibirIdade}</Text>
            <Text style={styles.textResultado}>{this.state.exibirGenero}</Text>
            <Text style={styles.textResultado}>{this.state. exibirEscolaridade}</Text>
            <Text style={styles.textResultado}>{this.state.exibirNvlEscolaridade}</Text>
            <Text style={styles.textResultado}>{this.state.exibirValor}</Text>
            <Text style={styles.textResultado}>{this.state.exibirStatus}</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}

export default App;