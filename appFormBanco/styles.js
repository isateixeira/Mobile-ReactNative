import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    headerArea:{
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '15%',
      backgroundColor: '#7df'
    },
    textHeader: {
      fontSize: 35,
      color: '#000',
      fontWeight: 'bold',
    },
    container: {
      flex: 1,
      backgroundColor: '#eee',
    },
    form:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 15,
    },
    label:{
      fontSize: 20,
      textTransform: 'capitalize',
      color: '#111'
    },
    input:{
      borderBottomWidth: 1,
      width: 250,
      fontSize: 20,
    },
    pickerArea:{
      flexDirection: 'column',
      marginTop: 15,
    },
    picker:{
      margin: 15,
      padding: 15,
    },
    slider:{
      margin: 25,
      flexDirection: 'column',
    }, 
    sliderSpace: {
      marginTop: 25
    },
    sliderLabel: {
      fontSize: 20,
      textTransform: 'uppercase'
    },
    sliderText:{
      textAlign: 'center', 
      fontSize: 20, 
      position: 'relative', 
      left: 115,
      color: '#09f'
    },
    switchArea:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems:  'center',
    },
    areaBotao:{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 35,
    },
    botao:{
      backgroundColor: '#2af',
      width: 200,
      height: 50,
      borderRadius: 7,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    textBotao: {
      fontSize: 25,
      color: '#222',
      textTransform: 'uppercase',
      letterSpacing: 2,
      fontWeight: 'bold',
    },
    areaResultado:{
      margin: 25,
      justifyContent: 'space-around',
      backgroundColor: '#abc',
      padding: 17,
    },
    headerResultado:{
      fontSize: 25,
      color: '#222',
      textTransform: 'capitalize',
      textAlign: 'center',
      marginBottom: 10,
      fontWeight: 'bold',
      letterSpacing: 3,
    },
    textResultado:{
        fontSize: 20,
        marginTop: 10,
    },
  });
  

export {styles}