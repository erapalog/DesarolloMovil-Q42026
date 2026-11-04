import { View, Text, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { Plantilla } from './Plantilla'
import { Usuario } from '../modelos/Usuario'
import { ContextUsuario } from '../Contextos/ContextUsuario';

//props
//funcionalidad
//exportar

export default function ProviderUsuario(prop: Plantilla) {

    const [usuarioLista, setUsuarioLista] = useState<Usuario[]>([]);

    function agregarUsuario(usuario: Usuario) {
        setUsuarioLista([...usuarioLista, usuario]);
        Alert.alert('Creacion Usuaurio', 'Usuario Agregado')
    }

    return (
        <ContextUsuario.Provider value={{ usuarioLista, agregarUsuario }}>
            {prop.children}
        </ContextUsuario.Provider>
    )
}

export const useContextUsuario = () => {
    return useContext(ContextUsuario)
}