import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ListaComponent = ({ valor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const selectOption = (option) => {
    setSelectedOption(option);
    valor(option);
    setIsOpen(false);
  };
  const opciones = [
    'KM - MILLAS',
    'CELSIUS - FARENHEIT',
    'PESOS - DÓLARES',
    'METRO - PIES',
    'METRO - PULGADA',
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownHeader} onPress={toggleDropdown}>
        <Text style={styles.dropdownHeaderText}>
          {selectedOption ? selectedOption : 'Seleccionar opción'}
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownList}>
          {opciones.map((opcion, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownListItem}
              onPress={() => selectOption(opcion)}
            >
              <Text style={styles.dropdownListItemText}>{opcion}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    position: 'relative',
  },
  dropdownHeader: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 4,
  },
  dropdownHeaderText: {
    color: '#333',
    fontWeight: 'bold',
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginTop: 5,
  },
  dropdownListItem: {
    padding: 10,
  },
  dropdownListItemText: {
    color: '#333',
  },
});

export default ListaComponent;
