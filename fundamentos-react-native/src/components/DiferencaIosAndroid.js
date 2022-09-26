import React from 'react'
import { Text, Platform } from 'react-native'

// Estilo
import Style from './estilo'

export default (props) => {
    if(Platform.OS === 'android'){
        return <Text style={Style.txtGrande}>Android</Text>
    }
    else if(Platform.OS === 'ios'){
        <Text style={Style.txtGrande}>iOs</Text>
    }
    else{
        <Text style={Style.txtGrande}>Outro sistema operacional</Text>
    }

}