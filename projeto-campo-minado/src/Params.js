import { Dimensions } from "react-native"

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,

    // Cabeçalho (proporção do painel superior da tela)
    headerRatio: 0.15,

    // 10% dos campos estarão com minas. Altera conforme dificuldade
    difficultLevel: 0.1,

    // Calcula o número de blocos conforme a largura
    getColumnsAmount(){
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },

    //Calcula as linhas conforme a altura
    getRowsAmount(){
        const totalHeight = Dimensions.get('window').height

        //Pega a proporção total da tela e diminui pelo percentual do Header
        const boardHeight = totalHeight * (1 - this.headerRatio)

        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params