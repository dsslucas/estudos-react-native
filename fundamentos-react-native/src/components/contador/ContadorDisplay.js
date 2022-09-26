import React from 'react'
import { Text } from 'react-native'
// Estilo
import Style from '../estilo'

export default (props) => {
    return (
        <Text style={Style.txtGrande}>{props.num}</Text>
    )
}