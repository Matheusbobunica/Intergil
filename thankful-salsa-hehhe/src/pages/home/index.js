import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeScreen = () => {
  const [message /*, setMessage*/] = useState('Home page');


  return (

    <View style={styles.container}>
      
      <ImageBackground  
    source={require('../../assets/telalogin.png')} 
    style={styles.imageBackground} >
      <Text style={styles.text}>{message}</Text>
      
        <View style={styles.content}>
          <TouchableOpacity  >
              <Text>Edital</Text>
            </TouchableOpacity>
          </View>

        <View style={styles.before}>

        </View>

          <View style={styles.content}>
          <Text>Desafios</Text>
        </View>
           
           <View style={styles.before}>

        </View>

        <View style={styles.content}>
          <Text>conteúdo</Text>
        </View>

        <View style={styles.before}>

        </View>

        <View style={styles.content}>
          <Text>conteúdo</Text>
        </View>
        
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
    marginTop: 30
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  content: {
    alignSelf: "center",
    flex: 1,
    width: "87%",
    height: 80,
    marginBottom: 20,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  before: {
    backgroundColor: "#fff",
    width: 280,
    height: 4,
    alignItems: "center",
    justifyContent: "center",
    bottom: 10,
  }
});

export default HomeScreen;