// Lista das tarefas
import React, { Component } from 'react'
import { SafeAreaView, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Platform, Alert } from 'react-native'

// Async Storage
//import asyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'

// Estilos padrão
import commonStyles from '../commonStyles'

// Imagem
import todayImage from '../../assets/imgs/today.jpg'

// Data
import moment from 'moment'
// Traduz o valor das datas para o português
import 'moment/locale/pt-br'

// Componentes
import Task from '../components/Task'
import AddTask from './AddTask'
// import AsyncStorage from '@react-native-community/async-storage'

export default class TaskList extends Component {
    state = {
        // Mostrar as tags concluídas ou não
        showDoneTasks: true,

        // Array visíveis. Caso esteja verdadeiro, mostrará apenas as tarefas concluídas, a depender do estado acima.
        visibleTasks: [],

        // Permite a abertura do modal para cadastro
        showAddTask: false,

        // Lista de tarefas
        tasks: [{
            id: Math.random(),
            desc: 'Arrumar o computador',
            estimateAt: new Date(),
            doneAt: new Date()
        }, {
            id: Math.random(),
            desc: 'Lavar o carro',
            estimateAt: new Date(),
            doneAt: null
        }, {
            id: Math.random(),
            desc: 'Treinar solo no violão',
            estimateAt: new Date('2022-01-01'),
            doneAt: new Date()
        }, {
            id: Math.random(),
            desc: 'Treinar o solo de "Doce Mistério" de Leandro & Leonardo',
            estimateAt: new Date('2018-03-08'),
            doneAt: null
        }, {
            id: Math.random(),
            desc: 'Revisar conteúdos de React Native',
            estimateAt: new Date('2018-08-07'),
            doneAt: null
        }, {
            id: Math.random(),
            desc: 'Lavar a casa',
            estimateAt: new Date('2015-05-25'),
            doneAt: new Date()
        }, {
            id: Math.random(),
            desc: 'Fazer almoço',
            estimateAt: new Date('2022-01-01'),
            doneAt: new Date()
        }, {
            id: Math.random(),
            desc: 'Consulta médica',
            estimateAt: new Date('2020-10-15'),
            doneAt: null
        }, {
            id: Math.random(),
            desc: 'Pagar a viagem para Salvador',
            estimateAt: new Date('2022-01-25'),
            doneAt: new Date()
        }, {
            id: Math.random(),
            desc: 'Dormir',
            estimateAt: new Date('2020-09-20'),
            doneAt: new Date()
        }, {
            id: Math.random(),
            desc: 'Comprar comida',
            estimateAt: new Date('2020-05-27'),
            doneAt: new Date()
        }]
    }

    // Funciona semrpe quando um componente for montado/alterado
    // Restaura o estado da aplicação baseado aonde foi passado no filterTask
    componentDidMount = () => {
        this.filterTasks()
        // // Pega no Async Storage
        // const stateString = await AsyncStorage.getItem('tasksState')

        // // Verifica o estado
        // const state = JSON.parse(stateString) || this.state

        // this.setState(state)
    }

    // Filtra as tarefas concluídas ou não
    toggleFilter = () => {
        // Seleciona entre true e false. No final, chama por callback
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    // Filtra as tarefas e exibe na tela
    filterTasks = () => {
        let visibleTasks = null
        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        }
        // Quando for falso
        else {
            const pending = task => task.doneAt === null

            // Filtra apenas as pendentes
            visibleTasks = this.state.tasks.filter(pending)
        }

        this.setState({ visibleTasks })

        // Async Storage, transforma um estado em string.
        // AsyncStorage.setItem('tasksState', JSON.stringify(this.state))
    }

    // Pega o ID da Task e modifica (aberta/fechada)
    toggleTask = taskId => {
        const tasks = [...this.state.tasks]

        tasks.forEach(task => {
            if (task.id === taskId) {
                // Quando clica, ou vira nulo, ou uma data é definida
                task.doneAt = task.doneAt ? null : new Date()
            }
        })

        // Chama novamente uma callback, Necessário para atualizar a lista de itens filtrados
        this.setState({ tasks }, this.filterTasks)
    }

    // Adiciona a tarefa salva pelo modal na Task
    addTask = (newTask) => {
        if (!newTask.desc || !newTask.desc.trim()) {
            Alert.alert("Dados Inválidos", "Descrição não informada!")
            return
        }

        // Clona o estado
        const tasks = [...this.state.tasks]

        // Adiciona no array
        tasks.push({
            id: Math.random(),
            desc: newTask.desc,
            estimateAt: newTask.date,
            doneAt: null
        })

        // Altera o estado e chama por callback
        this.setState({ tasks, showAddTask: false }, this.filterTasks)
    }

    // Exclui uma task
    deleteTask = id => {
        // Faz a exclusão usando o Filter
        const tasks = this.state.tasks.filter(task => task.id !== id)

        // Altera o estado e realiza callback
        this.setState({ tasks }, this.filterTasks)
    }

    render() {
        // O que vem do Moment para a data
        const today = moment().locale('pt-br').format('dddd, D [de] MMMM [de] YYYY')
        return (
            <SafeAreaView style={styles.container}>
                <AddTask
                    isVisible={this.state.showAddTask}
                    onCancel={() => this.setState({ showAddTask: false })}
                    onSave={this.addTask}
                />

                <ImageBackground source={todayImage} style={styles.background}>
                    <SafeAreaView style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon
                                name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                                size={20} color={commonStyles.colors.secondary}
                            />
                        </TouchableOpacity>
                    </SafeAreaView>

                    <SafeAreaView style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </SafeAreaView>
                </ImageBackground>

                <SafeAreaView style={styles.taskList}>
                    <FlatList
                        data={this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Task {...item} toggleTask={this.toggleTask} onDelete={this.deleteTask} />}
                    />
                </SafeAreaView>

                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => this.setState({ showAddTask: true })}
                    activeOpacity={0.7}
                >
                    <Icon name="plus" size={20} color={commonStyles.colors.secondary} />
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        // Ocupa 30% da tela
        flex: 3
    },
    taskList: {
        // Ocupa 70% da tela
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
        color: '#fff'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 50,
        color: commonStyles.colors.secondary,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 20
    },

    // Botão de filtragem
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
        marginTop: 40
    },

    // Botão de adicionar
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: commonStyles.colors.today,
        alignItems: 'center',
        justifyContent: 'center'
    }
})