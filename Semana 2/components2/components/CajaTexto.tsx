import { View, Text, TextInput } from 'react-native'
import React from 'react'
import ButtonComponent from './ButtonComponent'
import Persona from './Persona'

export default function CajaTexto() {
    return (
        <View>
            <TextInput placeholder='Ingresar Nombere'></TextInput>
            <ButtonComponent nombre={'Ana'} apellido={'Perez'}></ButtonComponent>
            <Persona nombre='Ana' apellido='Perez'></Persona>

        </View>
    )
}