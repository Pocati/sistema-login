import { createContext, useEffect, useState, type ReactNode } from 'react'

interface User {
    email: string
    password?: string
}

interface AuthContextData {
    user: User | null
    signed: boolean
    signIn: (email: string, pass: string) => string | void
    signUp: (email: string, pass: string) => string | void
    signOut: () => void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const userToken = localStorage.getItem('token')
        const usersStorage = localStorage.getItem('users_db')

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (dbUser: User) => dbUser.email === JSON.parse(userToken).email
            )

            if (hasUser) setUser(hasUser[0])
        }
    }, [])

    const signIn = (email: string, pass: string) => {
        const usersStorage = JSON.parse(localStorage.getItem('users_db') || '[]')
        const hasUser = usersStorage?.filter((user: User) => user.email === email)

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === pass) {
                const token = Math.random().toString(36).substring(2)
                localStorage.setItem('token', JSON.stringify({ email, token }))
                setUser({ email, password: pass })
                return
            } else {
                return 'E-mail ou senha incorretos'
            }
        } else {
            return 'Usuário não cadastrado'
        }
    }

    const signUp = (email: string, pass: string) => {
        const usersStorage = JSON.parse(localStorage.getItem('users_db') || '[]')
        const hasUser = usersStorage?.filter((user: User) => user.email === email)

        if (hasUser?.length) {
            return 'Já tem uma conta com esse E-mail'
        }

        const newUser = [...usersStorage, { email, password: pass }]
        localStorage.setItem('users_db', JSON.stringify(newUser))
        return
    }

    const signOut = () => {
        setUser(null)
        localStorage.removeItem('token')
    }

    return (
        <AuthContext.Provider value={{ user, signed: !!user, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}