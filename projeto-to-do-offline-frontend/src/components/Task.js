import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

// Arruma as datas
import moment from 'moment'
import 'moment/locale/pt-br'

// Estilos padrão
import commonStyles from '../commonStyles'

// Checa se a tarefa está concluída ou não
function getCheckView(doneAt) {
    if (doneAt != null) {
        return (
            <SafeAreaView style={styles.done}>
                <Icon name="check" size={15} color="#fff" />
            </SafeAreaView>
        )
    }

    else {
        return (
            <SafeAreaView style={styles.pending}>

            </SafeAreaView>
        )
    }
}

export default props => {
    // Se tiver concluído, exibe a tarefa com rabiscado. Caso contrário, envia nada
    const doneOrNotStyle = props.doneAt != null ? { textDecorationLine: 'line-through' } : {}

    // Data de criação da task
    const assignedDate = moment(props.estimateAt).locale('pt-br').format('D [de] MMMM [de] YYYY')

    // MELHORIA!!! Data que o To-do foi concluído. 
    const doneDate = moment(props.done).locale('pt-br').format('D [de] MMMM [de] YYYY')

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)}>
                <SafeAreaView style={styles.checkContainer}>
                    {getCheckView(props.doneAt)}
                </SafeAreaView>
            </TouchableWithoutFeedback>

            <SafeAreaView>
                <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                <Text style={[styles.date, doneOrNotStyle]}>Criado em {assignedDate}</Text>
                {props.doneAt != null ? (
                    <Text style={[styles.date, doneOrNotStyle]}>Concluído em {doneDate}</Text>
                ) : null}
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',

        //Espaçamento vertical, cima e baixo
        paddingVertical: 10
    },

    // Espaço para o botão de concluido/oposto
    checkContainer: {
        width: '20%',
        alignItems: 'center'
    },

    // Pendente
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },

    // Concluída
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        backgroundColor: '#4d7031',
        alignItems: 'center',
        justifyContent: 'center'
    },

    // Descrição da tarefa
    desc: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 16
    },

    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 12
    }
})