import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CajaTexto from './components/CajaTexto';
import ListaPersona from './components/ListaPersona';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aplicacion componentes!</Text>



      <CajaTexto></CajaTexto>
      <ListaPersona id={1} nombre='Luis' edad={23} apellido='Garcia'></ListaPersona>
      <ListaPersona id={2} nombre='Maria' edad={23} apellido='Montoya' fechaNacimient='2000-09-10'></ListaPersona>




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
