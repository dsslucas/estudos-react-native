import React from 'react'
import { Component } from 'react'
import { Button, SafeAreaView, Text, TextInput } from 'react-native'

import Estilo from '../estilo'
import MegaNumero from './MegaNumero'
import Numero from './MegaNumero'

export default class Mega extends Component {
    constructor(props) {
        super(props)

        // SEGUNDA FORMA
        this.state = {
            qtdNumeros: props.qtdNumeros,
            numeros: []
        }
    }

    /*
    PRIMEIRA FORMA
    state = {
        qtdNumeros: props.qtdNumeros
    }
    */

    //Gera um número que não esteja contido nos arrays
    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        //Gera um array com uma quantidade X de elementos. Equivalente ao push()
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        // Percorre o estado atual
        const nums = this.state.numeros

        // Transforma cada um dos elementos em um elemento JSX
        return nums.map(num => {
            return <MegaNumero num={num} />
        })
    }

    render() {
        return (<>
            <Text style={Estilo.title}>Gerador de Mega-sena {this.state.qtdNumeros}</Text>
            <TextInput
                style={{ borderBottomWidth: 1 }}
                keyboardType={'numeric'}
                placeholder='Quantidade de números'
                value={this.state.qtdNumeros}
                onChangeText={texto => this.setState({ qtdNumeros: +texto })}
            />
            <Button title="Gere um número" onPress={this.gerarNumeros} />
            <SafeAreaView style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 20,
                justifyContent: 'center'
            }}>
                {this.exibirNumeros()}
            </SafeAreaView>

        </>
        )
    }
}