import React from 'react'
import { Button, Text } from 'react-native'

// Estilo
import Style from '../estilo'

export default (props) => {
    function gerarNumero(min, max) {
        const fator = max - min + 1

        //Retorna para a função pai (comunicação indireta)
        props.funcao(parseInt(Math.random() * fator) + min)
    }

    return (
        <>
            <Button
                title="Executar"
                onPress={() => gerarNumero(props.min, props.max)}
            />
        </>
    )
}