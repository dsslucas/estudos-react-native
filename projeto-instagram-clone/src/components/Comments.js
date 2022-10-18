import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

class Comments extends Component {
    render() {
        let view = null

        // Vai ter o JSX associado a variável. Vai receber uma lista de comentários e vai transformar em um array de elementos JSX
        if(this.props.comments){
            view = this.props.comments.map((item, index) => {
                return (
                    <SafeAreaView style={styles.commentContainer} key={index}>
                        <Text style={styles.nickname}>{item.nickname}: </Text>
                        <Text style={styles.comment}>{item.comment}</Text>
                    </SafeAreaView>
                )
            })
        }

        // Renderiza
        return (
            <SafeAreaView style={styles.container}>
                {view}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    nickname: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: "#444"
    },
    comment: {
        color: "#555"
    }
})

export default Comments