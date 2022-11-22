import React, { Component } from 'react'
import { Dimensions, Image, SafeAreaView, StyleSheet } from 'react-native'
import AddComment from './AddComment'
import Author from './Author'
import Comments from './Comments'
import { connect } from 'react-redux'

class Post extends Component {
    render() {
        const addComment = this.props.name ?
            <AddComment postId={this.props.id} /> : null

        return (
            <SafeAreaView style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
                <Author email={this.props.email} nickname={this.props.nickname} />
                <Comments comments={this.props.comments} />
                {addComment}
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
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})

const mapStateToProps = ({user}) => {
    return {
        name: user.name
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onAddComment: payload => dispatch(addComment(payload))
//     }
// }

export default connect(mapStateToProps)(Post)

//export default Post