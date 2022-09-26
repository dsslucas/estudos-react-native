import React from 'react'
import { useState } from 'react'
import { Text, Button } from 'react-native'

// Estilo
import Style from '../estilo'

import Filho from './Filho'

export default (props) => {

    const [numero, setNumero] = useState(0)

    function exibirValor(numero){
        setNumero(numero)
    }

    return (
        <>
            <Text style={Style.title}>Comunicação Indireta</Text>
            <Text>Numero aleatório: {numero}</Text>
            <Filho min={1} max={60} funcao={exibirValor} />
        </>
    )
}