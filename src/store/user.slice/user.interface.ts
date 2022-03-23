type status = 'admin' | 'user'

export interface IUser {
    id: number
    login: string
    email: string
    password: string
    avatar?: string
    status: status
    token?: string
}