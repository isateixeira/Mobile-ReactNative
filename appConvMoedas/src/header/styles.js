import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff0',
        width: '100%',
        height: '20%',
        borderBottomWidth: 5,
    },
    titHeader:{
        fontSize: 35,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#111',
        textAlign: 'center',
    },
    subTitHeader:{
        fontSize: 25
    }

})

export { styles }