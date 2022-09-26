import React from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

// Lista de usuários
import users from '../data/users'

export default props => {

    // Renderiza os usuários
    function getUserItem({ item: user }) {
        return (
            <ListItem
                onPress={() => props.navigation.navigate('UserForm')}
                bottomDivider
            >
                <Avatar title={user.name} source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <SafeAreaView>
            <FlatList
                data={users}
                keyExtractor={user => user.id.toString()}
                renderItem={getUserItem}
            />
        </SafeAreaView>
    )
}