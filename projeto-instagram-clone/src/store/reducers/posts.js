import { ADD_POST, ADD_COMMENT } from "../actions/actionTypes";

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'rafailha12',
        email: 'rafalima12@gmail.com',
        image: require('../../../assets/imgs/fence.jpg'),
        comments: [{
            nickname: 'galerito',
            comment: "Rogério! Rogério! Rogééério!"
        }]
    }, {
        id: Math.random(),
        nickname: 'dss_lucas',
        email: 'lucasdasilvasou@gmail.com',
        image: require('../../../assets/imgs/eurotruco.png'),
        comments: [{
            nickname: 'jpvalento',
            comment: '113 é o que liga'
        }]
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload // Aqui gera um novo objeto
                })
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    // Adiciona o comentário em um post expecífico
                    if (post.id === action.payload.postId) {
                        // Caso tenha comentário
                        if (post.comments) {
                            post.comments = post.comments.concat(action.payload.comment)
                        }
                        else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        default:
            return state
    }
}

export default reducer