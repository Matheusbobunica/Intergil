import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Tabelas = () => {

  return (
    <View style={styles.container}>
        <TouchableOpacity>

        <View style={styles.square}><Text>Modalidades</Text></View>
        </TouchableOpacity>

        <TouchableOpacity  >
        <View style={styles.square}><Text>Confrontos</Text>  </View>
        </TouchableOpacity>
    
        <TouchableOpacity>
        <View style={styles.square}> <Text>Placar</Text> </View>
        </TouchableOpacity>
    
        <TouchableOpacity>
        <View style={styles.square}><Text>Casas</Text>  </View>
        </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 100,
    width: 400,
    height: 100,
    

  },
  square: {

    width: 150, // Define a largura máxima para ocupar 45% do contêiner
    height: 200,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 5,
    margin: 10,
    
  },
});

export default Tabelas;