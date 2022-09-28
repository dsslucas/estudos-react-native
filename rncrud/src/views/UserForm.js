import React, { useContext, useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native'
import UsersContext from '../context/UsersContext'

export default props => {
    // Gerenciamento de estado, recebendo os parâmetros
    const [user, setUser] = useState(props.route.params ? props.route.params : {})

    const { dispatch } = useContext(UsersContext)

    return (
        <SafeAreaView style={style.form}>
            <Text>Nome</Text>
            <TextInput
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Digite seu nome"
                value={user.name}
                style={style.input}
            />
            <Text>E-mail</Text>
            <TextInput
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Digite seu e-mail"
                value={user.email}
                style={style.input}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="Digite seu URL do Avatar"
                value={user.avatarUrl}
                style={style.input}
            />
            <Button
                title='Salvar'
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user
                    })
                    props.navigation.goBack()
                }}
            />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 15
    }
})