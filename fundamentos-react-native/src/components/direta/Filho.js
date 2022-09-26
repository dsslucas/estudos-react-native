import React from 'react'
import { Text } from 'react-native'

// Estilo
import Style from '../estilo'

export default (props) => {
    return (
        <>
            <Text style={Style.txtGrande}>{props.a}</Text>
            <Text style={Style.txtGrande}>{props.b}</Text>
        </>
    )
}