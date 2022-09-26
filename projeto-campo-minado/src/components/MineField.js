// Cria o campo minado
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Field from './Field'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field}
                key={c}
                onOpen={() => props.onOpenField(r, c)}
                onSelect={() => props.onSelectField(r, c)}
            />
        })
        // Array de views com o índice de linhas
        return <SafeAreaView key={r} style={{ flexDirection: 'row' }}>{columns}</SafeAreaView>
    })
    return <SafeAreaView style={styles.container}>{rows}</SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        //flexDirection: 'row',
        backgroundColor: '#eee'
    }
})