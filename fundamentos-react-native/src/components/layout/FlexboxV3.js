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
            <Quadrado color="red"/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        height: 350,
        width: '100%',
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})