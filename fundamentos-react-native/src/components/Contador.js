import React from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import { Text, Button, SafeAreaView } from 'react-native'

// Estilo
import Style from './estilo'

export default (props) => {
    const [numero, setNumero] = useState(0)

    function inc() {
        setNumero(numero + 1)
    }

    function dec() {
        setNumero(numero - 1)
    }

    return (
        <>
            <Text style={Style.title}>Contador</Text>
            <SafeAreaView style={{ flexDirection: 'row', padding: 0}}>
                <Button title="-" onPress={dec} />
                <Text style={Style.txtGrande}>{numero}</Text>
                <Button title="+" onPress={inc} />
            </SafeAreaView>
        </>
    )
}