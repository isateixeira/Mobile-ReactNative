import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {styles} from '../header/styles'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.titHeader}>Conversor de moedas</Text>
                <Text style={styles.subTitHeader}>Dolar, Euro e Real</Text>
            </View>
        )
    }
}