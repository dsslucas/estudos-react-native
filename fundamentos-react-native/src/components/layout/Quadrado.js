import React from 'react'
import { SafeAreaView, Text } from 'react-native'

export default (props) => {
    return (
        <SafeAreaView style={{height: 50, width: 50, backgroundColor: props.color || '#000'}}>

        </SafeAreaView>
    )
}