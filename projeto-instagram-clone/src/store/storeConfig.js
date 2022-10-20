// Configuração do Redux
import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user'

// Junta todos os reducers
const reducers = combineReducers({
    user: userReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig