import React, { Component } from 'react'
import icon from '../../assets/imgs/icon.png'
import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'

class Header extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>Lambe Lambe</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 25,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#bbb',
        width: '100%'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,

        // Imagem inteira
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        //fontFamily: 'roboto',
        height: 30,
        fontSize: 28
    }
})

export default Header