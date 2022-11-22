import React, { Component } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput, Image, Dimensions, Platform, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux';
import { addPost } from '../store/actions/posts'

import Header from '../components/Header'

class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    }

    pickLocalImage = async () => {
        let res = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(res);

        if (!res.cancelled) {
            this.setState({ image: res.uri });
        }

    }

    pickCameraImage = async () => {
        let res = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(res);

        if (!res.cancelled) {
            this.setState({ image: res.uri, base64: res.data });
        }
    }

    // Imagem gerada
    save = async () => {
        // Alert.alert('Imagem adicionada!', this.state.comment)
        console.warn("Entrei aqui")
        // Dispara o evento. Fica responsável por chamar o Action Creator, depois Reducers e alterar Store
        this.props.onAddPost({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email,
            image: this.state.image,
            comments: [{
                nickname: this.props.name,
                comment: this.state.comment
            }]
        })

        console.log(this.state.image)

        this.setState({ image: null, comment: '' })

        this.props.navigation.navigate("Feed")
    }

    render() {
        console.log(this.state.image)
        return (
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                enableAutomaticScroll={true}
                keyboardOpeningTime={0} >
                <ScrollView>
                    <Header />
                    <View style={styles.container}>
                        <Text style={styles.title}>Poste uma foto</Text>

                        <View style={styles.imageContainer}>
                            <Image source={{ uri: this.state.image }} style={styles.image} />
                        </View>

                        <TextInput
                            placeholder='commentario da foto?...'
                            style={styles.input} value={this.state.comment}
                            onChangeText={comment => this.setState({ comment })}>
                        </TextInput>

                        <View style={styles.choicesContainer}>
                            <Text style={styles.butttomText}>Escolha uma foto</Text>

                            <View style={styles.buttonsContainer}>
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    onPress={this.pickLocalImage}
                                >
                                    <Icon name='folder' size={30} color="#000" />
                                    <Text > arquivos</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    onPress={this.pickCameraImage}
                                >
                                    <Icon name='camera' size={30} color="#000" />
                                    <Text >camera</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    onPress={this.save}
                                >
                                    <Icon name='share' size={30} color="#000" />
                                    <Text >share</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View >

                </ScrollView >
            </KeyboardAwareScrollView >

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold',
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#000',
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center',
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286F4',
        borderRadius: 5,
    },
    choicesContainer: {
        flexDirection: 'column',
        alignContent: 'center',
        width: '90%',
        marginTop: 30,
        padding: 5,
        backgroundColor: '#4286F4',

    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
        padding: 10,
    },
    butttomText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
    }
})

// Estado Global p/ componente
const mapStateToProps = ({ user, posts }) => {
    return {
        email: user.email,
        name: user.name,
        loading: posts.isUploading
    }
}

// Mapeia as actions
const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)
