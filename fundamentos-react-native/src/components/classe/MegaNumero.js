import React from 'react'
import { SafeAreaView, Text } from 'react-native'
// Estilo
import Style from '../estilo'
export default (props) => {
    return (
        <SafeAreaView style={Style.conteudoNumero}>
            <Text style={Style.NumeroTexto}>
                {props.num}
            </Text>
        </SafeAreaView>
    )
}