import React, { Component } from 'react'
import { Dimensions, Image, SafeAreaView, StyleSheet } from 'react-native'
import AddComment from './AddComment'
import Author from './Author'
import Comments from './Comments'

class Post extends Component {
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
                <Author email={this.props.email} nickname={this.props.nickname} />
                <Comments comments={this.props.comments} />
                <AddComment />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        // Pega toda a largura da tela
        width: Dimensions.get('window').width,

        // Proporção de 3/4
        height: Dimensions.get('window').width * 3/4,
        resizeMode: 'contain'
    }
})

export default Post