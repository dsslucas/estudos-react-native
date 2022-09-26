import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';

// Estilos
import Estilo from './components/estilo';

// Componentes
import Primeiro from './components/Primeiro';
import { Example1, Example2 } from './components/Multi';
import MinMax from './components/MinMax';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';
import PaiDireto from './components/direta/Pai'
import PaiIndireto from './components/indireta/Pai';
import ContadorV2 from './components/contador/ContadorV2';
import DiferencaIosAndroid from './components/DiferencaIosAndroid';
import CompControlado from './components/CompControlado';
import Quadrado from './components/layout/Quadrado';
import FlexboxV1 from './components/layout/FlexboxV1';
import FlexboxV2 from './components/layout/FlexboxV2';
import FlexboxV3 from './components/layout/FlexboxV3';
import FlexboxV4 from './components/layout/FlexboxV4';
import Mega from './components/classe/Mega';

export default function App() {
  return (
    <SafeAreaView style={Estilo.container}>
      {
        /*
          <Primeiro />
          <Example1 />
          <Example2 />

          <MinMax />
          <Titulo principal="Teste de Fragment" secundario="Acho que funcionou" />
          <Botao />
          <Contador inicial={100} />

          <PaiDireto />
          <PaiIndireto />

          <ContadorV2 />

          <DiferencaIosAndroid />
          <CompControlado />
          <FlexboxV1 />
          <FlexboxV2 />
          <FlexboxV3 />
          <FlexboxV4 />
        */
      }
      <StatusBar style="auto" />
      <Mega qtdNumeros={6}/>
    </SafeAreaView>
  );
}