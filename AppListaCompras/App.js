import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";
// Para React Native CLI
// import { openDatabase } from "react-native-sqlite-storage";
 
// Para Expo
 import * as SQLite from 'expo-sqlite';
 
// Para React Native CLI
// const db = openDatabase({
//   name: "rn_sqlite",
// });
 
// Para Expo
const db = SQLite.openDatabase("produtos.db");
 
const App = () => {
  const [produto, setProduto] = useState("");
  const [produtos, setProdutos] = useState([]);
 
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };
 
  const incluirProdutos = () => {
    if (!produto) {
      alert("Informe um produto");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO produtos (nome) VALUES (?)`,
        [produto],
        (sqlTxn, res) => {
          console.log(`${produto} produto adicionada com sucesso!`);
          getProdutos();
          setProduto("");
        },
        error => {
          console.log("Erro ao inserir um produto " + error.message);
        },
      );
    });
  };
 
  const getProdutos = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM produtos ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Produtos lidas com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }
 
            setProdutos(results);
          }
        },
        error => {
          console.log("Erro ao obter Produtos " + error.message);
        },
      );
    });
  };
 
  const renderProduto = ({ item }) => {
    return (
      <View style={{
        
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd",
      }}>
        <Text style={{ marginRight: 9 }}>{item.id}</Text>
        <Text>{item.nome}</Text>
      </View>
    );
  };
 
  useEffect(async () => {
    await createTables();
    await getProdutos();
  }, []);
 
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#222" />
      <Text style={styles.title}>Lista de compras</Text>
      <TextInput
        placeholder="Informe um produto"
        value={produto}
        onChangeText={setProduto}
        style={styles.text}
      />
 
      <TouchableOpacity 
           onPress={incluirProdutos} style={styles.button}
          >
            <Text style={styles.signup} >+</Text>
          </TouchableOpacity>

      <FlatList
        data={produtos}
        renderItem={renderProduto}
        key={t => t.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 80,
    alignItems: 'center'
  },
  title: {
    fontSize: 50,
    margin: 20
  },
  text: {
    fontSize: 25
  },
  button:{
      backgroundColor: 'rgb(173,216,230)',      
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '80%',
      padding: "5%",
      fontSize:  27,
      marginTop: -40,
      
  }

})
 
export default App;

 

