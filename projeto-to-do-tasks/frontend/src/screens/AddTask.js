import React, { Component } from "react";
import { Button, Modal, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

// Pega o horário nos telefones
import DateTimePicker from '@react-native-community/datetimepicker'

// Horário
import moment from 'moment'

// Estilos padrão
import commonStyles from "../commonStyles";

export default class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = this.getInitialState()
    }

    getInitialState = () => {
        return {
            desc: '',
            date: new Date(),
            showDatePicker: false
        }
    }

    // Salva a tarefa
    save = () => {
        const newTask = {
            desc: this.state.desc,
            date: this.state.date
        }

        // Caso esteja setado
        this.props.onSave && this.props.onSave(newTask)

        // Restaura o estado inicial do componente
        this.setState({ ...this.state })
    }

    // Roda o Date Time Picker conforme o sistema operacional
    getDatePicker = () => {
        let datePicker = <DateTimePicker
            value={this.state.date}
            onChange={(event, date) => this.setState({ date: date, showDatePicker: false })}
            mode="date"
        />

        // String de data
        const dateString = moment(this.state.date).format('dddd, D [de] MMMM [de] YYYY')

        if (Platform.OS === 'android') {
            // No Android, temos que colocar em outra estrutura
            datePicker = (
                <SafeAreaView>
                    <TouchableOpacity onPress={() => this.setState({ showDatePicker: true })}>
                        <Text style={styles.date}>{dateString}</Text>
                    </TouchableOpacity>

                    {this.state.showDatePicker && datePicker}
                </SafeAreaView>
            )
        }

        return datePicker
    }

    render() {
        return (
            <Modal
                transparent={true}
                visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType='slide'
                onShow={() => this.setState({ ...this.getInitialState() })}
            >
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <SafeAreaView style={styles.overlay}>

                    </SafeAreaView>
                </TouchableWithoutFeedback>

                <SafeAreaView style={styles.container}>
                    <Text style={styles.header}>Nova tarefa:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Informe a descrição..."
                        value={this.state.desc}
                        onChangeText={(e) => this.setState({ desc: e })}
                    />
                    {this.getDatePicker()}
                    <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.save}>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </SafeAreaView>

                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <SafeAreaView style={styles.overlay}>

                    </SafeAreaView>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.70)'
    },
    container: {
        //flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15
    },
    input: {
        fontFamily: commonStyles.fontFamily,
        height: 40,
        margin: 15,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#e3e3e3",
        borderRadius: 6
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: commonStyles.colors.today
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex=end'
    },

    // Texto para o Modal, no Android
    date: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 15,
        marginLeft: 15
    }
})