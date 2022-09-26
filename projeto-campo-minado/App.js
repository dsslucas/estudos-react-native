import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, Alert, TouchableWithoutFeedback } from 'react-native';
import params from './src/Params'
import { cloneBoard, createMinedBoard, flagsUsed, hadExplosion, invertFlag, openField, showMines, wonGame } from './src/Logica';
import MineField from './src/components/MineField';
import Header from './src/components/Header';
import LevelSelection from './src/screens/LevelSelection';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  // Calcula o número de minas 
  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    //Calcula a quantidade de minas que precisa ter de acordo com o nível de dificuldade
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  // Cria o estado inicial do componente
  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    // Retorna um objeto que cresce com o tempo
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false
    }
  }

  // Detecta se o campo foi aberto
  onOpenField = (row, column) => {
    // Cria um tabuleiro
    const board = cloneBoard(this.state.board)

    //Abra o board clonado
    openField(board, row, column)

    //Verifica se o usuário perdeu
    const lost = hadExplosion(board)

    // Verifica se o usuário ganhou (por campo pendente e outros)
    const won = wonGame(board)

    // Se perdeu, abre todas as minas
    if (lost) {
      showMines(board)
      Alert.alert("Perdeu!", "Tente, tente, tente outra vez!")
      console.warn("Perdi!")
    }

    if (won) {
      Alert.alert("Parabéns!", "Você venceu!")
      console.warn("Ganhei!")
    }

    // Muda o estado após o encerramento do jogo
    this.setState({ board, lost, won })
  }

  // Seleciona um campo para adicionar flag
  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)

    invertFlag(board, row, column)

    //Verifica se o usuário ganhou ou não
    const won = wonGame(board)

    if (won) {
      Alert.alert("Parabéns!", "Você venceu!")
    }

    // Muda o estado após o encerramento do jogo
    this.setState({ board, won })
  }

  // Seleção do nível de dificuldade
  onLevelSelected = level => {
    params.difficultLevel = level

    this.setState(this.createState())
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LevelSelection
          isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })}
        />
        <Header
          flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true })}
        />
        <SafeAreaView style={styles.board}>
          <MineField
            board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}
          />
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});