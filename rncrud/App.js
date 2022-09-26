import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Necessário, pois o Expo tem o Input dentro do node_modules e o .gitignore volta para a configuração inicial
import Initial from './src/Initial'

export default function App() {
  return (
    <Initial />
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
