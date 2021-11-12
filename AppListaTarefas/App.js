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
const db = SQLite.openDatabase("tarefas.db");
 
const App = () => {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
 
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
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
 
  const incluirTarefa = () => {
    if (!tarefa) {
      alert("Informe uma tarefa");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        error => {
          console.log("Erro ao inserir uma Tarefa " + error.message);
        },
      );
    });
  };
 
  const getTarefas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }
 
            setTarefas(results);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas " + error.message);
        },
      );
    });
  };
 
  const renderTarefa = ({ item }) => {
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
    await getTarefas();
  }, []);
 
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#222" />
      <Text style={styles.title}>Tarefas</Text>
      <TextInput
        placeholder="Informe uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
        style={styles.text}
      />
 
      <TouchableOpacity 
           onPress={incluirTarefa} style={styles.button}
          >
            <Text style={styles.signup} >+</Text>
          </TouchableOpacity>

      <FlatList
        data={tarefas}
        renderItem={renderTarefa}
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

 

