import React, { useState } from 'react';
import ListaComponent from './drop';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

const ConvertirComponent = () => {
  const [valor1, setValor1] = useState('');
  const [resultado, setResultado] = useState('');
  const [opcion, setOpcion] = useState('');

  const optionS = (option) => {
    setOpcion(option);
  };
  const conversor = (num1) => {
    if (opcion === 'KM - MILLAS') {
      setResultado(num1 * 0.621371);
    } else if (opcion === 'CELSIUS - FARENHEIT') {
      setResultado(num1 * 1.8 + 32);
    } else if (opcion === 'PESOS - DÓLARES') {
      setResultado(num1 * 0.058);
    } else if (opcion === 'METRO - PIES') {
      setResultado(num1 * 3.281);
    } else if (opcion === 'METRO - PULGADA') {
      setResultado(num1 * 39.37);
    }
  };

  const valores = () => {
    const num1 = parseFloat(valor1);

    if (!isNaN(num1)) {
      conversor(num1);
    } else {
      setResultado('Error: Ingresa números válidos');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          value={valor1}
          onChangeText={(text) => setValor1(text)}
        />
      </View>
      <Button title='EnterS' onPress={valores} />
      <ListaComponent valor={optionS} />
      <Text style={styles.resultadoText}>Resultado: {resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 40,
    ...Platform.select({
      ios: {
        borderRadius: 8,
        backgroundColor: '#f8f8f8',
      },
    }),
  },
  resultadoText: {
    marginTop: 20,
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
    }),
  },
});

export default ConvertirComponent;
