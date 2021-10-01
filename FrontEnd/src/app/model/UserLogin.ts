import { Postagem } from "./Postagem"

export class UserLogin {
    public idUsuario: number
    public usuario: string
    public email: string
    public senha: string
    public foto: string
    public tipoUsuario: string
    public token: string
    public postagem: Postagem
}