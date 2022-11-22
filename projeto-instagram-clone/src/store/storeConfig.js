// Configuração do Redux
import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user'
import postsReducer from './reducers/posts'

// Junta todos os reducers
const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig