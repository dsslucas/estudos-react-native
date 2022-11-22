import { ADD_POST, ADD_COMMENT } from "./actionTypes"
import axios from 'axios'

export const addPost = post => {
    // Redux Thunk
    return dispatch => {
        axios.post('/posts.json', {...post}
        .catch((erro) => console.log(erro))
        .then((resposta) => console.log(resposta.data)))
    }
    // return {
    //     type: ADD_POST,
    //     payload: post
    // }
}

export const addComment = payload => {
    return {
        type: ADD_COMMENT,
        payload: payload
    }
}