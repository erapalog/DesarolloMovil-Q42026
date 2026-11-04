import { createContext } from "react";
import { Usuario } from "../modelos/Usuario";

export const ContextUsuario = createContext({
    usuarioLista: [] as Usuario[],
    agregarUsuario: (usuarios: Usuario) => { }
})