import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Quadrado from './Quadrado'

export default (props) => {
    return (
        <SafeAreaView style={style.container}>
            <Quadrado color="#afa" />
            <Quadrado color="#dda" />
            <Quadrado color="#abcd" />
            <Quadrado color="#00A38F" />
            <Quadrado color="#F19200" />
            <Quadrado color="#00D1F1" />
            <Quadrado />
        </SafeAreaView>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})