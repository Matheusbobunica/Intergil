import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';


const Profile = () => {
  const [message] = useState('Tela de perfil');

  return (
    <View style={styles.container}>
      
      <ImageBackground  
    source={require('../../assets/telalogin.png')} 
    style={styles.imageBackground} >
      <Text style={styles.text}>{message}</Text>
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
    textAlign: "justify",
    paddingHorizontal: 15,
  },
});

export default Profile;