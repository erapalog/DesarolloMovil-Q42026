import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

export default function ContadorComponent() {

    const [contador, setContador] = useState<number>(0);
    let contador2 = 0;

    function aumentatContador() {
        setContador(contador + 1)
        contador2 = contador2 + 1
        console.log(contador, contador2)
    }

    function restarContador() {
        setContador(contador - 1)
        contador2 = contador2 - 1

        console.log(contador, contador2)


    }




    return (
        <View>
            <Text>Trabajando con State </Text>
            <Text>Valor de Contador {contador} </Text>
            <Text>Valor de Contador 2 {contador2} </Text>

            <Button title='Sumar Contador' onPress={aumentatContador}></Button>
            <Button title='Restar contador' onPress={restarContador}></Button>
        </View>
    )
}