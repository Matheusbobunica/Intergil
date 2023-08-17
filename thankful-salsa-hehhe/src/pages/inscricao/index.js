import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, CheckBox } from 'react-native';
import Drop from './Drop';

const Inscricao = () => {

  const [isSelected, setSelection] = useState(false);

  return (<View style={styles.container}>
    <View style={styles.text}>
      <Text>INSCRIÇÃO</Text>
    </View>
    <TextInput style={styles.input} placeholder="Nome completo" />
    <TextInput style={styles.input} placeholder="Telefone (Aluno)" />
    <Drop />
    <Drop />
    <TextInput style={styles.input} placeholder="Nome completo (+18)" />
    <TextInput style={styles.input} placeholder="Telefone (+18)" />
    <TextInput style={styles.input} placeholder="CPF" />

    <TouchableOpacity>
      <Text style={styles.enviar}>Enviar</Text>
    </TouchableOpacity>

    <View style={styles.checkboxContainer}>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
      />
      <Text style={styles.label}> Termo de responsábilidade. </Text>
    </View>

  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 150,
  },
  text: {
    marginEnd: 100,
  },
  input: {
    height: 50,
    width: '86%',
    flex: 1,
    backgroundColor: '#CCC',
    paddingLeft: 10,
    borderRadius: 8,
    fontSize: 18,
    borderColor: '#E4E7EB',
    borderWidth: 1,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enviar: {
    marginLeft: 10,
    borderWidth: 10,
    borderColor: 'blue',
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 4,
  },
});

export default Inscricao;