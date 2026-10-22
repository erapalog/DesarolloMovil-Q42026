import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  let nombre: string = 'Juan';

  alert(nombre);

  let edad: number = 24;

  alert(edad);

  let isDeveloper: boolean = true;

  alert(isDeveloper);

  let hobbies: string[] = ['programar', 'leer', 'ver peliculas'];

  function saludar(nombre: string): string {
    // alert('Hola ' + nombre);
    return 'hola' + nombre
  }





  return (
    <View style={styles.container}>
      <Text>Primera aplicacion en React Native</Text>
      <StatusBar style="auto" />
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
