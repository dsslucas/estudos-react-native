import React from "react";
import {Text} from 'react-native'

export default () => {
    function ReturnResult() {
        const valor1 = Math.floor(Math.random() * 100 + 1)
        const valor2 = Math.floor(Math.random() * 100 + 1)

        if(valor1 < valor2) return <Text>O valor {valor1} é menor que {valor2}.</Text>
        else if(valor1 > valor2) return <Text>O valor {valor1} é maior que {valor2}.</Text>
    }

    return ReturnResult()
}