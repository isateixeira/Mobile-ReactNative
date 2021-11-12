import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
 
class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.texto}>Vagas</Text>
        <ScrollView>

          
          <View style={styles.box}>
          
          <Text style={styles.title}>Desenvolvedor Backend </Text>
          <Text style={styles.text}>Salario: R$ 4000,00 </Text>
          <Text style={styles.text}>Descrição: Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Quisque luctus efficitur </Text>
          <Text style={styles.text}>Contato: (13) 974158888  </Text>
          </View>
          
          <View style={styles.box}>
          
          <Text style={styles.title}>Engenheiro de Dados </Text>
          <Text style={styles.text}>Salario: R$ 3750,00 </Text>
          <Text style={styles.text}>Descrição: Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Quisque luctus efficitur </Text>
          <Text style={styles.text}>Contato: (13) 974158888  </Text>
          </View>

          <View style={styles.box}>
          
          <Text style={styles.title}>Desenvolvedor Front </Text>
          <Text style={styles.text}>Salario: R$ 3500,00 </Text>
          <Text style={styles.text}>Descrição: Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Quisque luctus efficitur </Text>
          <Text style={styles.text}>Contato: (13) 974158888  </Text>
          </View>

          <View style={styles.box}>
          
          <Text style={styles.title}>Desenvolvedor Full-Stack </Text>
          <Text style={styles.text}>Salario: R$ 10000,00 </Text>
          <Text style={styles.text}>Descrição: Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Quisque luctus efficitur </Text>
          <Text style={styles.text}>Contato: (13) 974158888  </Text>
          </View>
          
          
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  title:{
    color: "blue",
    fontSize: 25,
    fontWeight: 'bold'
  },
  text:{
    fontSize: 25
  },

  box:{
    marginTop: 60,
    //backgroundColor: 'red',
    height: 300,
    width: 400,
    borderColor: 'black',
    borderWidth:5,
    margin: 5
  },
  texto:{
    fontSize: 35,
    marginTop: 150,
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold'
  }
})
 
export default App;
