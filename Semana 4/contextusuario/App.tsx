import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navegacion from './componentes/Navegacion';
import ProviderUsuario from './providers/ProviderUsuario';

export default function App() {
  return (

    <ProviderUsuario>
      <Navegacion></Navegacion>
    </ProviderUsuario>

  );
}

