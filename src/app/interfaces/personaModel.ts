import { Cuenta } from "./cuentaModel"

export interface Persona {

    id:number
    nombre:string
    apellido:string
    edad:number
    identificacion:string
    fecha:string
    cargo:string

    tipo:string
    cuentas:Cuenta[]

    
}
