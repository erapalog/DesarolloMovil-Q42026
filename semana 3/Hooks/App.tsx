import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContadorComponent from './Components/ContadorComponent';
import RegistroAsignaturas from './Components/RegistroAsignaturas';

export default function App() {

  useEffect(() => {

    console.log("Componente App ha sido cargado")

  }, [])


  return (
    <View style={styles.container}>
      <Text>Trabajando con Hooks</Text>
      <ContadorComponent></ContadorComponent>
      <RegistroAsignaturas></RegistroAsignaturas>
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
