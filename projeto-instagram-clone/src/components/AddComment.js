import React, { Component } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class AddComment extends Component {
    // Estado
    state = {
        comment: '',

        // Alterna entre edição e modo leitura. Ao clicar, habilita o editor de texto, caso contrário desativa.
        editMode: false
    }

    // Quando adiciona o comentário
    handleAddComment = () => {
        Alert.alert("Adicionado!", this.state.comment)
        this.setState({editMode: false})
    }

    render() {
        let commentArea = null

        if (this.state.editMode) {
            // Significa que está em modo de edição
            commentArea = (
                <View style={styles.container}>
                    <TextInput
                        placeholder='Pode comentar'
                        style={styles.input}
                        autoFocus={true}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}

                        // Botão de submissão
                        onSubmitEditing={this.handleAddComment}
                    />
                    <TouchableWithoutFeedback onPress={() => this.setState({ editMode: false })}>
                        <Icon name="times" size={15} color="#555" />
                    </TouchableWithoutFeedback>
                </View>
            )
        }
        else {
            commentArea = (
                <TouchableWithoutFeedback onPress={() => this.setState({ editMode: true })}>
                    <View style={styles.container}>
                        <Icon name="comment-o" size={25} color="#555" />
                        <Text style={styles.caption}>Adicione um comentário...</Text>
                    </View>
                </TouchableWithoutFeedback>
            )
        }

        return (
            <View style={{flex: 1}}>
                {commentArea}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#ccc'
    },
    input: {
        width: '90%'
    }
})

export default AddComment