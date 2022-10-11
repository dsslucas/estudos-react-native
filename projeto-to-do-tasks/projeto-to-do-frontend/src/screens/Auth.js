import React, { Component } from 'react'
import { ImageBackground, Text, StyleSheet, TouchableOpacity, SafeAreaView, Platform, Alert } from 'react-native'
import axios from 'axios'

// Imagem
import backgroundImage from '../../assets/imgs/login.jpg'

// Estilos padrão
import commonStyles from '../commonStyles'

// Componente
import AuthInput from '../components/AuthInput'
import { server, showError, showSuccess } from '../common'

// BACKEND

export default class Auth extends Component {
    // Estado
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        stageNew: false
    }

    // Checa se está fazendo signin ou signup
    signInOrSignUp = () => {
        if (this.state.stageNew) this.signUp()
        else this.signIn()
    }

    // Cadastrp de usuário
    signUp = async () => {
        try {
            await axios.post(`${server}/signup`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
            })

            showSuccess("Usuário cadastrado!")

            // Muda para a tela de login
            this.setState({ stageNew: false })
        } catch (e) {
            showError(e)
        }
    }

    // Login
    signIn = async () => {
        try {
            const res = await axios.post(`${server}/signin`, {
                email: this.state.email,
                password: this.state.password
            })

            // Token vindo do backend, para segurança
            axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`

            // Navega para Home
            this.props.navigation.navigate('Home')
        } catch (e) {
            showError(e)
        }
    }


    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={styles.title}>Tasks</Text>

                <SafeAreaView style={styles.formContainer}>
                    <Text style={styles.subTitle}>{this.state.stageNew ? 'Crie a sua conta' : 'Informe seu usuário e senha'}</Text>
                    {this.state.stageNew &&
                        <AuthInput
                            icon="user"
                            placeholder='Nome'
                            value={this.state.name}
                            style={styles.input}
                            onChangeText={(name) => this.setState({ name })}
                        />
                    }
                    <AuthInput
                        icon="at"
                        placeholder='E-mail'
                        value={this.state.email}
                        style={styles.input}
                        onChangeText={(email) => this.setState({ email })}
                    />
                    <AuthInput
                        icon="lock"
                        placeholder='Senha'
                        value={this.state.password}
                        style={styles.input}
                        onChangeText={(password) => this.setState({ password })}
                        secureTextEntry={true}
                    />
                    {this.state.stageNew &&
                        <AuthInput
                            icon="lock"
                            placeholder='Confirmar senha'
                            value={this.state.confirmPassword}
                            style={styles.input}
                            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                            secureTextEntry={true}
                        />
                    }

                    <TouchableOpacity onPress={this.signInOrSignUp}>
                        <SafeAreaView style={styles.button}>
                            <Text style={styles.buttonText}>{this.state.stageNew ? 'Registrar' : "Entrar"}</Text>
                        </SafeAreaView>
                    </TouchableOpacity>
                </SafeAreaView >

                <TouchableOpacity style={{ padding: 10 }} onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
                    <Text style={styles.buttonText}>{this.state.stageNew ? "Já possui conta?" : "Ainda não possui conta?"}</Text>
                </TouchableOpacity>
            </ImageBackground >
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10
    },
    subTitle: {
        fontFamily: commonStyles.fontFamily,
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 20,
        width: '90%',
        borderRadius: 10
    },
    input: {
        marginTop: 10,
        backgroundColor: '#fff',
        padding: Platform.OS === 'ios' ? 15 : 10
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: "#fff",
        fontSize: 20
    }
})