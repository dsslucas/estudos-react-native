// Cria um Board (tabuleiro)
const createBoard = (rows, columns) => {
    //Gera um array com um número de linhas e colunas (matriz)
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

// Espalha as minas dentro do tabuleiro de forma aleatória
const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length

    // Minas plantadas
    let minesPlanted = 0

    //Roda enquanto a quantidade de minas plantadas for menor do que a quantidade de minas que queremos ser plantadas
    while (minesPlanted < minesAmount) {
        // Base é necessária para o React Native não reclamar. Assim selecionamos a linha de forma aleatória
        const rowSel = parseInt(Math.random() * rows, 10)
        const columnSel = parseInt(Math.random() * columns, 10)

        // Se linha e coluna não estiver minado, aqui planta a bomba
        if (!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true
            minesPlanted++
        }
    }
}

// Pega o tabuleiro e as minas para criar um tabuleiro com as minas dentro
const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)

    // Retorna Board com o valor já alterado
    return board
}

// Clona o tabuleiro. Sempre que mexer no estado, gera novos estados
const cloneBoard = board => {
    // Gera um array com os dados clonados
    return board.map(rows => {
        return rows.map(field => {
            return { ...field }
        })
    })
}

// Vizinhos do tabuleiro, a partir da linha e coluna.
const getNeighbors = (board, row, column) => {
    // Array de elementos
    const neighbors = []

    // Linhas possíveis que pode ter vizinhos. Anterior, atual e posterior
    const rows = [row - 1, row, row + 1]

    // Idem
    const columns = [column - 1, column, column + 1]

    // Por ter 9 possibilidades, temos que excluir o próprio nó e os nós fora dos limites da matriz
    rows.forEach(r => {
        columns.forEach(c => {
            // Se é diferente, R é diferente de Row passado por referência, idem para a coluna
            const diferent = r !== row || c !== column

            // Validação para saber se a linha está válida. Não pode passar do tamanho do board e não pode ter índice negativo.
            const validRow = r >= 0 && r < board.length

            // Coluna válida.
            const validColumn = c >= 0 && c < board[0].length

            if (diferent && validRow && validColumn) {
                neighbors.push(board[r][c])
            }
        })
    })
    return neighbors
}

// Necessário para saber se a vizinhança está segura
const safeNeighborhood = (board, row, column) => {
    // Responsável por usar o Reduce para calcular se a vizinhança é segura ou não
    const safes = (result, neighbor) => result && !neighbor.mined

    // O resultado vai me dizer se está seguro ou não
    return getNeighbors(board, row, column).reduce(safes, true)
}

// Abre um campo conforme clique
const openField = (board, row, column) => {
    const field = board[row][column]

    // Se não está aberto
    if (!field.opened) {
        // Campo aberto
        field.opened = true

        // Se está minado, ao clique ele explode
        if (field.mined) {
            field.exploded = true
        }

        // Vizinhança segura
        else if (safeNeighborhood(board, row, column)) {
            getNeighbors(board, row, column)
                .forEach(n => openField(board, n.row, n.column))
        }

        // Para calcular quantas minas tem nos arredores PELO CLIQUE!
        else {
            // Pega os vizinhos
            const neighbors = getNeighbors(board, row, column)

            // Cálculo para saber se as zonas estão seguras, através do comprimento do array
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    }
}

// Percorre todos os campos para fazer uma lógica, por exemplo campos explodidos
const fields = board => [].concat(...board)

// Usado para descobrir se o jogo terminou ou não através do campo explodido
const hadExplosion = board => fields(board).filter(field => field.exploded).length > 0

// // Verifica os campos que estão com minas e que ainda não foram explodidos. 
const pendding = field => (field.mined && !field.flagged) || (!field.mined && !field.opened)

// Necessário para saber se o usuário ganhou o jogo ou não
const wonGame = board => fields(board).filter(pendding).length === 0

// Quando o usuário perder o jogo, exibe na tela a localização das minas restantes
const showMines = board => fields(board).filter(field => field.mined).forEach(field => field.opened = true)

// Clique longo, seleciona a bandeira. Inverte também
const invertFlag = (board, row, column) => {
    const field = board[row][column]
    field.flagged = !field.flagged
}

// Quantas flags já foram marcadas no jogo
const flagsUsed = board => fields(board)
    .filter(field => field.flagged).length

export {
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed
}