import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import Modalidades from '../pages/routes/Modalidades';
import Esports from '../pages/modalidades/Esports';

import { Button, TextInput } from 'react-native-paper';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();


function Navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Esports" component={Esports} />
        <Stack.Screen name="Modalidades" component={Modalidades} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navegacao;