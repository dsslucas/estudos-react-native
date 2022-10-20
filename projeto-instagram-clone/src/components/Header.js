import React, { Component } from 'react'
import icon from '../../assets/imgs/icon.png'
import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Gravatar } from 'react-native-gravatar'

class Header extends Component {
    render() {
        const name = this.props.name || 'Anonymous'

        const gravatar = this.props.email ?
            <Gravatar options={{ email: this.props.email, secure: true }}
                style={styles.avatar} />
            : null

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>Lambe Lambe</Text>
                </View>
                <View style={styles.userContainer}>
                    <Text style={styles.user}>{name}</Text>
                    {gravatar}
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
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        // fontFamily: 'shelter',
        height: 30,
        fontSize: 28
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user: {
        fontSize: 10,
        color: '#888',
    },
    avatar: {
        width: 30,
        height: 30,
        marginLeft: 10,
    }
})

// Vai mapear apenas os estados para este componente
const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name,
    }
}

export default connect(mapStateToProps)(Header)