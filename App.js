import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ConvertirComponent from './componentes/principal';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Conversor de Unidades!</Text>
      <StatusBar style='auto' />
      <ConvertirComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
