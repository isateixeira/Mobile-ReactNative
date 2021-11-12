import React, { Component } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import {styles} from '../conversor/styles'

import { Picker } from '@react-native-picker/picker'

export default class Conversor extends Component{
    constructor(props) {
        super(props);
        this.state = {
            valor: '',
            moedaA: 0,
            moedaB: 0,
            moedas:[
                {id: 1, nome: 'Dólar Americanos', cifra: ' US$', sigla: 'USD'},
                {id: 2, nome: 'Euro', cifra: '€', sigla: 'EUR'},
                {id: 3, nome: 'Real', cifra: 'R$', sigla: 'BRL'}
            ],
            vlrConvertido: 0
        }
        this.converter = this.converter.bind(this)
    }
    converter = () => {
        
        let valor = this.state.valor
        let vlrConvertido = this.state.vlrConvertido

        if (this.state.valor === '') {
            alert('Coloque um valor')

        } else if ((this.state.moedaA === this.state.moedaB) || (this.state.moedaB === this.state.moedaA)){
            alert('Selecione outra moeda')

        } else if ((this.state.moedas[this.state.moedaA].id === 1) && (this.state.moedas[this.state.moedaB].id ===2)){
            vlrConvertido =  valor / 1.1729
            this.setState({vlrConvertido: vlrConvertido});
            
        } else if ((this.state.moedas[this.state.moedaA].id === 1) && (this.state.moedas[this.state.moedaB].id ===3)){
            vlrConvertido =  valor * 5.2885
            this.setState({vlrConvertido: vlrConvertido});

        } else if ((this.state.moedas[this.state.moedaA].id === 2) && (this.state.moedas[this.state.moedaB].id ===1)){
            vlrConvertido =  valor * 1.1729
            this.setState({vlrConvertido: vlrConvertido});

        } else if ((this.state.moedas[this.state.moedaA].id === 2) && (this.state.moedas[this.state.moedaB].id === 3)){
            vlrConvertido =  valor * 6.2028
            this.setState({vlrConvertido: vlrConvertido});

        } else if ((this.state.moedas[this.state.moedaA].id === 3) && (this.state.moedas[this.state.moedaB].id === 1)){
            vlrConvertido =  valor /  5.2885
            this.setState({vlrConvertido: vlrConvertido});

        } else if ((this.state.moedas[this.state.moedaA].id === 3) && (this.state.moedas[this.state.moedaB].id === 2)){
            vlrConvertido =  valor /  6.2028
            this.setState({vlrConvertido: vlrConvertido});
        } 
    }

    render() {

        let moedasItem = this.state.moedas.map((v, k) =>{
            return <Picker.Item style={{fontSize:20 }} key={k} value={k} label={v.sigla}/>
        })

        return (
            <View style={styles.container}>
                <View style={styles.areaInput}>
                    <Text style={styles.label}>Valor: </Text>
                    <TextInput
                    keyboardType={'numeric'}
                    style={styles.input}
                    placeholder={'Digite um valor'}
                    onChangeText={(texto) => {this.setState({valor: texto})}}
                    />
                </View>
                <Text style={styles.info}>Use ponto para definir os centavos. EX: 1.50 </Text>
                <View style={styles.areaPicker}>
                    <Picker 
                    style={styles.picker}
                    selectedValue={this.state.moeda}
                    onValueChange={(itemValue, itemIndex) => this.setState({moedaA: itemValue})} 
                    >
                        {moedasItem}
                    </Picker>
             
                    <Picker 
                    style={styles.picker}
                    selectedValue={this.state.moeda}
                    onValueChange={(itemValue, itemIndex) => this.setState({moedaB: itemValue})} 
                    >
                        {moedasItem}
                    </Picker>
                </View>

                <View style={styles.areaBtn}>
                    <Pressable style={styles.btn} onPress={this.converter}>
                        <Text style={styles.textBtn}>Converter</Text>
                    </Pressable>
                </View>

                <Text style={styles.resultado}>{this.state.vlrConvertido.toFixed(2)}</Text>
                
            </View>
        )
    }
}