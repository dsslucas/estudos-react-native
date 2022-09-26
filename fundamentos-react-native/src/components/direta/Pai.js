import React from 'react'
import { Text } from 'react-native'

// Estilo
import Style from '../estilo'

import Filho from './Filho'

export default (props) => {

    let x = 11
    let y = 14
    return (
        <>
            <Text style={Style.title}>Comunicação Direta</Text>
            <Filho a={x} b={y} />
            <Filho a={x + 100} b={y + 100} />
        </>
    )
}