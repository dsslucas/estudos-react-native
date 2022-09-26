import React from 'react'
import { useState } from 'react'
import { SafeAreaView, Text } from 'react-native'
// Estilo
import Style from '../estilo'
import ContadorBotoes from './ContadorBotoes'
import ContadorDisplay from './ContadorDisplay'

export default (props) => {

    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <>
            <Text style={Style.title}>Contador</Text>
            <ContadorDisplay num={num} />
            <SafeAreaView style={{ flexDirection: 'row', padding: 0 }}>
                <ContadorBotoes inc={inc} dec={dec} />
            </SafeAreaView>

        </>
    )
}