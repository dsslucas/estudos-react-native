// Aqui mexe na Store

import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actions/actionTypes"

const initialState = {
    name: null,
    email: null
}

// Estado, caso não tenha entra o inicial
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                // Pega tudo do estado atual e replica dentro do objeto
                ...state, 
                name: action.payload.name,
                email: action.payload.email
            }
        case USER_LOGGED_OUT:
            return {
                ...state,
                name: null,
                email: null
            }
        default: return state
    }
}

export default reducer