import { View, Text } from 'react-native'
import React from 'react'
import { useContextUsuario } from '../providers/ProviderUsuario'
import { Usuario } from '../modelos/Usuario'

export default function ListaUsuario() {

    const { usuarioLista } = useContextUsuario()
    return (
        <View>
            <Text>ListaUsuario</Text>

            {
                usuarioLista.map((usuario: Usuario) => (
                    <View key={usuario.id}>

                        <Text>Id Usuario {usuario.id}</Text>
                        <Text>NOmbre Usuario {usuario.nombre}</Text>
                        <Text>Estado Usuario {usuario.estado}</Text>
                        <Text>Rol Usuario {usuario.rol}</Text>

                    </View>

                ))



            }
        </View>
    )
}