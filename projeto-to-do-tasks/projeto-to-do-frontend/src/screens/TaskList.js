// Lista das tarefas
import React, { Component } from 'react'
import { SafeAreaView, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native'

// Async Storage
//import asyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'

// Estilos padrão
import commonStyles from '../commonStyles'

// Imagem
import todayImage from '../../assets/imgs/today.jpg'
import tomorrowImage from '../../assets/imgs/tomorrow.jpg'
import weekImage from '../../assets/imgs/week.jpg'
import monthImage from '../../assets/imgs/month.jpg'

// Data
import moment from 'moment'
// Traduz o valor das datas para o português
import 'moment/locale/pt-br'

// Componentes
import Task from '../components/Task'
import AddTask from './AddTask'
import { server, showError } from '../common'
import Axios from 'axios'

export default class TaskList extends Component {
    state = {
        // Mostrar as tags concluídas ou não
        showDoneTasks: true,

        // Array visíveis. Caso esteja verdadeiro, mostrará apenas as tarefas concluídas, a depender do estado acima.
        visibleTasks: [],

        // Permite a abertura do modal para cadastro
        showAddTask: false,

        // Lista de tarefas
        tasks: [{}]
    }
    // Funciona semrpe quando um componente for montado/alterado. Optei por não usar Async Storage por falhas com o Expo
    // Restaura o estado da aplicação baseado aonde foi passado no filterTask
    componentDidMount = () => {
        this.filterTasks()
        // // Pega no Async Storage
        // const stateString = await AsyncStorage.getItem('tasksState')

        // // // Verifica o estado
        // const savedState = JSON.parse(stateString) || this.state

        // this.setState({
        //     showDoneTasks: savedState.showDoneTasks
        // }, this.filterTasks)
        this.loadTasks()
    }

    // Trabalha junto do Async Storage. Resolvi não usar por bugs com Expo. Mas aqui carrega as tasks
    loadTasks = async () => {
        try {
            const maxDate = moment()
                .add({ days: this.props.route.params.daysAhead })
                .format('YYYY-MM-DD 23:59:59')
            const res = await Axios.get(`${server}/tasks?date=${maxDate}`)
            this.setState({ tasks: res.data }, this.filterTasks)
        } catch (e) {
            showError(e)
        }
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

        // Async Storage, transforma um estado em string. Aqui vai carregar salvo
        // AsyncStorage.setItem('tasksState', JSON.stringify({
        //     showDoneTasks: this.state.showDoneTasks
        // }))
    }

    // Pega o ID da Task e modifica (aberta/fechada)
    toggleTask = async (taskId) => {
        // const tasks = [...this.state.tasks]

        // tasks.forEach(task => {
        //     if (task.id === taskId) {
        //         // Quando clica, ou vira nulo, ou uma data é definida
        //         task.doneAt = task.doneAt ? null : new Date()
        //     }
        // })

        // // Chama novamente uma callback, Necessário para atualizar a lista de itens filtrados
        // this.setState({ tasks }, this.filterTasks)

        try {
            await Axios.put(`${server}/tasks/${taskId}/toggle`)
            await this.loadTasks()
        } catch (e) {
            showError(e)
        }
    }

    // Adiciona a tarefa salva pelo modal na Task
    addTask = async (newTask) => {
        if (!newTask.desc || !newTask.desc.trim()) {
            Alert.alert("Dados Inválidos", "Descrição não informada!")
            return
        }

        // // Clona o estado
        // const tasks = [...this.state.tasks]

        // // Adiciona no array
        // tasks.push({
        //     id: Math.random(),
        //     desc: newTask.desc,
        //     estimateAt: newTask.date,
        //     doneAt: null
        // })

        // // Altera o estado e chama por callback
        // this.setState({ tasks, showAddTask: false }, this.filterTasks)

        try {
            await Axios.post(`${server}/tasks`, {
                desc: newTask.desc,
                estimateAt: newTask.date
            })
            // Some o modal e depois carrega as tasks
            this.setState({ showAddTask: false }, this.loadTasks)
        } catch (e) {
            showError(e)
        }
    }

    // Exclui uma task
    deleteTask = async (taskId) => {
        // // Faz a exclusão usando o Filter
        // const tasks = this.state.tasks.filter(task => task.id !== id)

        // // Altera o estado e realiza callback
        // this.setState({ tasks }, this.filterTasks)

        try {
            await Axios.delete(`${server}/tasks/${taskId}`)
            await this.loadTasks()
        } catch (e) {
            showError(e)
        }
    }

    // Renderiza a imagem de acordo com o dia
    getImage = () => {
        switch (this.props.route.params.daysAhead) {
            case 0: return todayImage
            case 1: return tomorrowImage
            case 7: return weekImage
            default: return monthImage
        }
    }

    // Muda a cor do botão de acordo com o dia
    getColor = () => {
        switch (this.props.route.params.daysAhead) {
            case 0: return commonStyles.colors.today
            case 1: return commonStyles.colors.tomorrow
            case 7: return commonStyles.colors.week
            default: return commonStyles.colors.month
        }
    }

    // Manda as datas para as tasks.
    getDays = () => {
        const initialDate = moment().locale('pt-br')

        // Dia atual
        const today = moment().locale('pt-br').format('dddd, D [de] MMMM [de] YYYY.')

        // Próximo dia
        const tomorrow = moment().locale('pt-br').add({days: this.props.route.params.daysAhead}).format('dddd, D [de] MMMM [de] YYYY.')

        // Manipulação para dias da semana
        const firstDayWeek = moment().startOf('week').format('D')
        const endDayWeek = moment().endOf('week').format('D')

        // Mês
        const firstDayOfMonth = moment().startOf("month").format('D')
        const lastDayOfMonth = moment().endOf("month").format('D')
        const endMonth = initialDate.endOf('month').format('MMMM')

        // Ano (apenas o número)
        const endYear = initialDate.endOf('year').format('YYYY')

        switch(this.props.route.params.daysAhead){
            case 0: return today
            case 1: return tomorrow
            case 7: return `De ${firstDayWeek} a ${endDayWeek} de ${endMonth} de ${endYear}.`
            default: return `De ${firstDayOfMonth} a ${lastDayOfMonth} de ${endMonth} de ${endYear}.`
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <AddTask
                    isVisible={this.state.showAddTask}
                    onCancel={() => this.setState({ showAddTask: false })}
                    onSave={this.addTask}
                />

                <ImageBackground source={this.getImage()} style={styles.background}>
                    <SafeAreaView style={styles.iconBar}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-left'
                                size={20} color={commonStyles.colors.secondary} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon
                                name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                                size={20} color={commonStyles.colors.secondary}
                            />
                        </TouchableOpacity>
                    </SafeAreaView>

                    <SafeAreaView style={styles.titleBar}>
                        <Text style={styles.title}>{this.props.route.params.title}</Text>
                        <Text style={styles.subtitle}>{this.getDays()}</Text>
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
                    style={[styles.addButton, { backgroundColor: this.getColor() }]}
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
        // justifyContent: 'flex-end',
        justifyContent: 'space-between',
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
        // backgroundColor: commonStyles.colors.today,
        alignItems: 'center',
        justifyContent: 'center'
    }
})