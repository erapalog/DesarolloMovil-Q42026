import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavegacionComponents from './components/NavegacionComponents';
import NavegacionDrawerComponents from './components/NavegacionDrawerComponents';
import TareaProviders from './Providers/TareaProviders';

export default function App() {
  return (
    <>
      {/* <NavegacionComponents /> */}

      <TareaProviders>
        <NavegacionDrawerComponents />
      </TareaProviders>

    </>

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
