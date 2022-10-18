import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'rafailha12',
            email: 'rafalima12@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'galerito',
                comment: "Rogério! Rogério! Rogééério!"
            }]
        }, {
            id: Math.random(),
            nickname: 'dss_lucas',
            email: 'lucasdasilvasou@gmail.com',
            image: require('../../assets/imgs/eurotruco.png'),
            comments: [{
                nickname: 'jpvalento',
                comment: '113 é o que liga'
            }]
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />

                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Post key={item.id} {...item} />}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }
})

export default Feed