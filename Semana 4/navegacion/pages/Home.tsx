import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { useContextTarea } from '../Providers/TareaProviders';

export default function Home() {


    const { agregarTarea } = useContextTarea();

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [estado, setEstado] = useState('');



    function callAgregarTarea() {
        const tarea = {
            id: Date.now().toString(),
            titulo: titulo,
            descripcion: descripcion,
            estado: estado,
        }

        agregarTarea(tarea);
        setTitulo('');
        setDescripcion('');
        setEstado('');

        Alert.alert('Agregar Tarea', 'Tareas agregada')
    }




    return (
        <View>
            <Text>Agregar Tareas</Text>
            <TextInput placeholder='Ingrese el titulo de la tarea'
                value={titulo}
                onChangeText={setTitulo}
            />
            <TextInput placeholder='Ingrese la descripcion de la tarea'
                value={descripcion}
                onChangeText={setDescripcion}
            />
            <TextInput placeholder='Ingrese el estado de la tarea'
                value={estado}
                onChangeText={setEstado}
            />
            <Button title='Agregar Tarea' onPress={() => { callAgregarTarea() }} />

        </View>
    )
}