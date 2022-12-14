import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://192.168.0.113:3000'

function showError(err) {
    if (err.response && err.response.data) {
        Alert.alert("Ops! Ocorreu um problema!", `Mensagem de erro: ${err.response.data}.`)
    }
    else {
        Alert.alert("Ops! Ocorreu um problema!", `Mensagem de erro: ${err}.`)
    }
}

function showSuccess(msg) {
    Alert.alert("Sucesso!", `Mensagem: ${msg}.`)
}

export { server, showError, showSuccess }