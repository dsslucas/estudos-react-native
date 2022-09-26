
import React from 'react'
import { Button, Text } from 'react-native'

import Style from '../estilo'

export default (props) => {
    return (
        <>
                <Button style={Style.button} title="-" onPress={props.dec}/>
                <Button style={Style.button} title="+" onPress={props.inc}/>
        </>

    )
}