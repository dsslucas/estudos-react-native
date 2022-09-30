import React, { Component } from "react";
import { Button, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

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
            date: new Date()
        }
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

                    <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
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
    }
})