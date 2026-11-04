import { View, Text, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useContextUsuario } from '../providers/ProviderUsuario'
import { Usuario } from '../modelos/Usuario';
import ListaUsuario from './ListaUsuario';

export default function Home() {

    const { usuarioLista, agregarUsuario } = useContextUsuario();

    const [nombre, setNombre] = useState('')
    const [estado, setEstado] = useState('')
    const [rol, setRol] = useState('')


    function agregar() {
        let usuario: Usuario = {
            id: ListaUsuario.length + 1,
            nombre: nombre,
            estado: estado,
            rol: rol

        }

        agregarUsuario(usuario)
    }

    useEffect(() => {
        console.log(usuarioLista)
    }, [usuarioLista])

    return (
        <View>
            <Text>Agregar Usuarios</Text>

            <TextInput placeholder='Nombre de usuario'
                value={nombre}
                onChangeText={setNombre}
            ></TextInput>

            <TextInput placeholder='Estado de usuario'
                value={estado}
                onChangeText={setEstado}
            ></TextInput>

            <TextInput placeholder='Rol de usuario'
                value={rol}
                onChangeText={setRol}
            ></TextInput>

            <Button title='Agregar Usuario' onPress={agregar}></Button>

        </View>
    )
}