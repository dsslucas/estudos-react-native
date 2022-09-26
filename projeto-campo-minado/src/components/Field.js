import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import params from "../Params";
import Flag from "./Flag";
import Mine from "./Mine";

export default props => {
    // Destructuring
    const { mined, opened, nearMines, exploded, flagged } = props

    //Estilos
    const styleField = [styles.field]

    // Quando tiver aberto, adiciona no array um estilo sem ser o regular
    if (opened) styleField.push(styles.opened)

    // Checa se está explodida
    if (exploded) styleField.push(styles.exploded)

    // Se tiver marcado com bandeira. Neste caso, precisa ter regular para regras de background
    if (flagged) styleField.push(styles.flagged)

    // Estilo Regular (ou outros estilos). Só será aplicado quando nenhum outro estilo for aplicado
    if (!opened && !exploded) styleField.push(styles.regular)

    // Cálculo para saber quantas minas estão presentes. (indicativo de bombas 1, 2, 3, 4)
    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = "#2a28d7"
        if (nearMines == 2) color = "#2b520f"
        if (nearMines > 2 && nearMines < 6) color = "#f9060a"
        if (nearMines >= 6) color = "#f221a9"
    }

    return (
        <TouchableWithoutFeedback onPress={props.onOpen} onLongPress={props.onSelect}>
            <SafeAreaView style={styleField}>
                {/* Precisa não estar minado, estar aberto e ter minas próximas */}
                {!mined && opened && nearMines > 0 ?
                    <Text style={[styles.label, { color: color }]}>{nearMines}</Text> : false
                }

                {mined && opened ? <Mine /> : false}

                {/* Se estiver marcado com bandeira e estar fechado */}
                {flagged && !opened ? <Flag /> : false}
            </SafeAreaView>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular: {
        backgroundColor: "#999",
        borderLeftColor: "#ccc",
        borderTopColor: "#ccc",
        borderRightColor: "#333",
        borderBottomColor: "#333"
    },
    opened: {
        backgroundColor: "#999",
        borderColor: "#777",
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red'
    }
})