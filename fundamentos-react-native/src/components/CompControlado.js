import React from 'react'
import { useState } from 'react'
import { Text, TextInput } from 'react-native'
// Estilo
import Style from './estilo'
export default (props) => {

    const [nome, setName] = useState('')

    return (
        <>
            <TextInput
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={(e) => setName(e)}
            />
            <Text>{nome}</Text>
        </>
    )
}