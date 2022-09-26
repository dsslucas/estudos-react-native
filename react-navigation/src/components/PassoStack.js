import React from 'react'
import { Button, SafeAreaView } from 'react-native'

export default props => (
    <SafeAreaView style={{ flex: 1 }}>
        <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {props.voltar
                ? <Button
                    title='Voltar'
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                />
                : false
            }
            {props.avancar
                ? <Button
                    title='Avançar'
                    onPress={() => {
                        props.navigation.navigate(props.avancar, props.avancarParams)
                    }}
                />
                : false
            }

            {/* {props.avancar
                ? <Button
                    title='Avançar'
                    onPress={() => {
                        props.navigation.push(props.avancar)
                    }}
                />
                : false */
            }
        </SafeAreaView>

        <SafeAreaView style={{ flex: 1 }}>
            {props.children}
        </SafeAreaView>
    </SafeAreaView>
)