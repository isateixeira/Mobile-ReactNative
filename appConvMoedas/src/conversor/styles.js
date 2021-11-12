import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container:{
    marginTop: 30,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '80%',
},
areaInput:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
},
info:{
    fontSize: 12,
    marginBottom: 30,
},
input:{
    borderBottomWidth: 2,
    width: 130,
    padding: 5,
    fontSize: 20,
    textAlign: "center"
},
areaPicker:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 30,
},
label:{
    fontSize: 20,    
},
picker:{
    width: 100, 
    padding: 15,
    color: '#111',
    fontSize: 20,
}, 
areaBtn:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
},
btn:{
    width: 150,
    height: 50,
    backgroundColor: '#ff0',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
}, 
textBtn:{
    fontSize: 20,
    color: '#111',
    textTransform: 'uppercase',
}, 
resultado:{
    fontSize: 35,
}
})

export { styles }