import React from 'react'
import { Text, Button, SafeAreaView } from 'react-native'

// Estilo
import Style from './estilo'

export default () => {
    return (
        <SafeAreaView style={{ flexDirection: 'row', padding: 0}}>
            <Button title="Executar #01" onPress={() => console.warn("Pressionei o botão 01")} />
            <Button title="Executar #02" onPress={() => console.warn("Pressionei o botão 02")} />
            <Button title="Executar #03" onPress={() => console.warn("Pressionei o botão 03")} />
        </SafeAreaView>
    )
}