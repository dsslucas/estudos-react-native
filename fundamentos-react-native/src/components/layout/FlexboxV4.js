import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Quadrado from './Quadrado'

export default (props) => {
    return (
        <SafeAreaView style={style.container}>
            <View style={style.V0}></View>
            <View style={style.V1}></View>
            <View style={style.V2}></View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V0: {
        backgroundColor: '#F77F00',
        height: 300
    },
    V1: {
        backgroundColor: '#198C9E',
        flex: 9
    },
    V2: {
        backgroundColor: "#16C7AC",
        flex: 4
    }
})