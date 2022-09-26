import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native'

export default props => {

    // Pega os estilos gerais, aplicando os outros condicionalmente
    const stylesButton = [styles.button]

    // Se for verdadeiro, adiciona junto ao StylesButton as propriedades do Button Double
    if (props.double) stylesButton.push(styles.buttonDouble)

    // Idem ao exemplo anterior
    if (props.triple) stylesButton.push(styles.buttonTriple)

    if (props.operation) stylesButton.push(styles.operationButton)

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        //Pega a dimensão do telefone e divide em quatro partes
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: "#f0f0f0",
        textAlign: 'center',
        borderWidth: 1,
        borderColor: "#888"
    },
    operationButton: {
        color: "#fff",
        backgroundColor: "#fa8231"
    },

    //Dois espaços
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },

    // Três espaços
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    },
})