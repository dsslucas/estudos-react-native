// Provê contexto para a lista de usuários
import React, { createContext, useReducer } from "react";

// Lista de usuários
import users from '../data/users'

const initialState = { users }

const UsersContext = createContext({})

// Reaproveitamento de código
const actions = {
    // Cria um usuário
    createUser(state, action) {
        const user = action.payload
        user.id = Math.random()
        return {
            ...state, users: [...state.users, user]
        }
    },

    // Edita o usuário
    updateUser(state, action) {
        const updated = action.payload
        return {
            ...state, users: state.users.map((u) => u.id === updated.id ? updated : u)
        }
    },

    // Deleta um usuário
    deleteUser(state, action) {
        const user = action.payload
        // EXCLUI da lista. Se for diferente, permanece na lista. Caso contrário, será excluído
        return {
            ...state,
            users: state.users.filter(u => u.id !== user.id)
        }
    }
}

export const UsersProvider = props => {

    // Função que representa o reducer
    function reducer(state, action) {
        const fn = actions[action.type]

        // Necessário retornar, SEMPRE, o estado. Novo ou o presente
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext