import { Text, SafeAreaView } from 'react-native';
import Initial from './src/Initial'
import React from 'react'

// NÃO ESTÁ SENDO USADO!

export default function App() {
  return (
    // <Initial />
    <>
      <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
        <Text>Oi</Text>
        <Text>Olá</Text>
      </SafeAreaView>
    </>
  );
}

